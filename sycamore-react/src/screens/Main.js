import React, {Component} from 'react';

import {
	Anchor,
    Box,
    Button, 
	Collapsible,
	Heading,
	ResponsiveContext,
	RoutedButton
} from 'grommet';

import Classes from './Classes';
import CoursePlan from './CoursePlan';
import Profile from './Profile';
import ClassView from './ClassView';


const Header = (props) => (
	<Box
		flex
		direction='row'
		align='center'
		justify='between'
		background='main'
		pad='large'
		animation={{
			type: 'slideDown',
			delay: 0,
			duration: 500,
			size: 'xlarge'
		}}
		style={{
			zIndex: '100',
		}}
		{...props}
	/>
);

const PageLink = (props) => (
	<Anchor
		onClick={props.func}
		color='light'
		size='xxlarge'
		{... props}
	>
		{props.text}
	</Anchor>
);



class Main extends Component {
	state = {
		showSidebar: true,
		display: 'none',
		whichClass: 'none'
	};

	displayClass = (id) => {
		this.setState({display: 'class', whichClass: id});
	};

	render() {
		const {showSidebar, display, whichClass} = this.state;
		const doAjax = () => {
            console.log("Testing GET /ProfileServlet ...");
            fetch("/sycamore-scheduler/ProfileServlet?profileEmail=sajeevsa@usc.edu", {
                method: 'GET'
			})
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                var name = json['full_name'];
                var major = json['major_1'];
                console.log("NAME:\t" + name + "\nMAJOR:\t" + major);
            });
            console.log("Testing POST /RegisterServlet ...");
            fetch("/sycamore-scheduler/RegisterServlet", {
                method: 'POST',
                body: {
                    email: 'sajeevsa@usc.edu',
                    fName: 'sajeev',
                    lName: 'saluja',
                    password: 'password',
                    major1: 'csci'
                }
			})
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log(json);
                console.log("Testing accessing JSON");
                console.log(typeof json);
            });
        }; 
		return (
				<ResponsiveContext.Consumer>
				{size => (
					<Box 
						flex
						direction='column'
						align='stretch'
						justify='start'
					>
						<Header>
							<RoutedButton
								plain
								path='/'
							>
								<Heading
									level='1'
									color='white'
								>
									Sycamore Scheduler
								</Heading>
							</RoutedButton>
							<Box
								direction='row'
								align='center'
								justify='end'
							>
								<PageLink margin={{right: 'large'}} text='Classes' func={() => this.setState({showSidebar: !this.state.showSidebar})}></PageLink>
								<PageLink margin={{right: 'large'}} text='Course Plan' func={() => this.setState({display: 'coursePlan'})}></PageLink>
								<PageLink text='Profile' func={() => this.setState({display: 'profile'})}></PageLink>
							</Box>
						</Header> 
						<Box
							fill
							direction='row'
							justify='start'
							align='stretch'
							animation={{
								type: 'fadeIn',
								delay: 500,
								duration: 500,
								size: 'large'
							}}
						>
							<Collapsible
								direction='horizontal'
								open={showSidebar}
							>
								<Box 
									width='medium'
									animation={{
										type: 'slideRight',
										delay: 500,
										duration: 500,
										size: 'large'
									}}
									style={{
										minHeight: '100%'
									}}
									background='light-2'
								>
									<Classes clickFunc={this.displayClass}></Classes>
								</Box>
							</Collapsible>
							{display==='coursePlan' && <CoursePlan></CoursePlan>}
							{display==='profile' && <Profile></Profile>}
							{display==='none' && 
								<Box
									flex
									direction='column'
									justify='center'
									align='center'
									animation={{
										type: 'fadeIn',
										delay: 500,
										duration: 500,
										size: 'large'
									}}
								>
									<Heading level='1'>Click on a class to view details</Heading>
									<Button
                                        hoverIndicator
                                        onClick={() => {doAjax()}}
                                        label='Do some AJAX'
									>
									</Button>
								</Box>
							}
							{display==='class' && 
								<ClassView id={whichClass}></ClassView>
							}
						</Box>
					</Box>
				)}
				</ResponsiveContext.Consumer>
		);
	}
}

export default Main;