import React, {Component} from 'react';

import {
	Anchor,
    Box,
    Button, 
	Collapsible,
	Heading,
	ResponsiveContext,
	RoutedButton, 
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
		background='darker'
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

	constructor(props) {
		super(props);
		this.state = {
			showSidebar: true,
			display: 'none',
			whichClass: null,
			signedIn: props.signedIn,
			email: props.email,
			classes: null,
			classNames: null
		};
		let ok = false;
		this.loadClasses = function() { 
			fetch('/SycamoreScheduler/ClassesServlet', {
				method: 'GET'
			})
			.then((response) => {
				ok = response.ok;
				return response.json();
			})
			.then((json) => {
				if (ok) {
					console.log(json);
					let classNames = json.map((degClass) => {
						let thekey = Object.keys(degClass)[0];
						return (degClass[thekey].degreeName + ' ' + degClass[thekey].classNumber);
					});
					this.setState({
						classes: json,
						classNames: classNames
					}, () => {
						console.log('ClassesServlet returned status 200');
						console.log('Classes stored in this.state.classes');
						console.log('Class names:\n');
						console.log(this.state.classNames);	
					});
				} else {
					console.log('ClassesServlet did not return status 200.');
					console.log(JSON.stringify(json));
				}
			});
		}.bind(this);
		this.loadClasses();
	}

	displayClass = (id) => {
		var allclasses = this.state.classes;
		for (var i = 0; i < allclasses.length; i++) {
			let key = Object.keys(allclasses[i])[0];
			if (key === id) {
				console.log("Display " + key);
				this.setState({display: 'class', whichClass: allclasses[i][key]});
			}
		}
	};

	render() {
		const {showSidebar, display, email} = this.state;
		const doAjax = () => {
            console.log("Testing GET /ProfileServlet ...");
            fetch("/SycamoreScheduler/ProfileServlet?profileEmail=sajeevsa@usc.edu", {
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
								{this.state.signedIn && <PageLink margin={{right: 'large'}} text='Course Plan' func={() => this.setState({display: 'coursePlan'})}></PageLink>}
								{this.state.signedIn && <PageLink text='Profile' func={() => this.setState({display: 'profile'})}></PageLink>}
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
							{this.state.classNames !== null && 
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
										<Classes classes={this.state.classNames} fullInfo = {this.state.classes} clickFunc={this.displayClass}></Classes>
									</Box>
								</Collapsible>
							}
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
									{this.state.signedIn === true && <Heading level='1'>{email}</Heading>}
									<Button
                                        hoverIndicator
                                        onClick={() => this.setState({signedIn: false})}
                                        label='Signout'
									>
									</Button>
								</Box>
							}
							{display==='class' && this.state.whichClass !== null &&
								<ClassView defaultInfo={this.state.whichClass} classInfo={this.state.whichClass}></ClassView>
							}
						</Box>
					</Box>
				)}
				</ResponsiveContext.Consumer>
		);
	}
}

export default Main;