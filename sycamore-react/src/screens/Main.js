import React, {Component} from 'react';

import {
	Anchor,
	Box, 
	Button,
	Collapsible,
	Heading,
	ResponsiveContext
} from 'grommet';

import Classes from './Classes';
import CoursePlan from './CoursePlan';
import Profile from './Profile';
import ClassView from './ClassView';


const Header = (props) => (
	<Box
		flex={false}
		tag='header'
		direction='row'
		align='center'
		justify='between'
		background='main'
		wrap={false}
		pad='medium'
		margin='none'
		elevation='small'
		animation={{
			type: 'slideDown',
			delay: 0,
			duration: 500,
			size: 'xlarge'
		}}
		style={
			{zIndex: '100'}
		}
		{...props}
	/>
);

const PageLink = (props) => (
	<Anchor
		margin={
			{
				'right': 'large'
			}
		}
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
							<Anchor 
								margin={{'left': 'large'}}
								href='/'
								size='xxlarge'
								color='#ffffff'
							>
								Sycamore Scheduler
							</Anchor>
							<Box
								direction='row'
								align='center'
								justify='end'
							>
								<PageLink text='Classes' func={() => this.setState({showSidebar: !this.state.showSidebar})}></PageLink>
								<PageLink text='Course Plan' func={() => this.setState({display: 'coursePlan'})}></PageLink>
								<PageLink text='Profile' func={() => this.setState({display: 'profile'})}></PageLink>
							</Box>
						</Header> 
						<Box
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
										size: 'medium'
									}}
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
										href='/'
										hoverIndicator
										label='Go back to welcome screen ... '
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