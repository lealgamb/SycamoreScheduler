import React, {Component} from 'react';
import { css } from 'styled-components';

import {
	Anchor,
	Box, 
	Heading, 
	Grommet,
	ResponsiveContext,
	Collapsible,
	InfiniteScroll,
	Tabs,
	Tab
} from 'grommet';

const theme = {
	global: {
		colors: {
			main: '#ff3300'
		},
		font: {
			family: 'Source Sans Pro',
			size: '14px',
			height: '20px',
			color: '#ffffff'
		}
	},
	anchor: {
		color: '#ff3300',
		hover: {
			textDecoration: 'none'
		}
	},
	box: {
		extend: {
			whiteSpace: 'nowrap',
		}
	},
	tabs: {
		background: "light",
		header: {
		  background: "light-1",
		  extend: ({ theme }) => css`
			padding: ${theme.global.edgeSize.small};
			box-shadow: 0;
		  `
		},
		gap: "medium"
	}
};

const Contain = (props) => (
	<Box
		direction='column'
		align='stretch'
		justify='start'
		{...props}
	/>	
);

const Header = (props) => (
	<Box
		tag='header'
		direction='row'
		align='center'
		justify='between'
		background='main'
		width='auto'
		wrap={false}
		pad={
			{left: 'none',
			right: 'none',
			vertical: 'none'}
		}
		elevation='small'
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
	>
		{props.text}
	</Anchor>
);

const CourseBox = (props) => (
	<Box
		flex
		direction='column'
		align='center'
		justify='start'
		width='large'
		height='85vh'
		overflow={{vertical: 'auto', horizontal: 'hidden'}}
	>
		<InfiniteScroll
			items={props.list}
			step={20}
		>
			{item => (
				<Box
					margin={{
						'vertical': 'large',
						'horizontal': 'medium'
					}}
					key={item}
				>
					
					<Anchor  
						size='xxlarge'
					>
						{item}
					</Anchor>	
				</Box>
			)}
		</InfiniteScroll>
	</Box>
);

const majorClasses = Array(1000)
  .fill()
  .map((_, i) => `MAJ ${i}`);

const minorClasses = Array(1000)
  .fill()
  .map((_, i) => `MIN ${i}`);

class App extends Component {

	state = {
		showSidebar: true,
		courseTab: 0
	}
	render() {
		const {showSidebar, courseTab} = this.state;
		return (
			<Grommet theme={theme} full>
				<ResponsiveContext.Consumer>
				{size => (
					<Box fill>
						<Header>
							<Heading level='1' margin={{'left': 'large'}}>Sycamore Scheduler</Heading>
							<Box
								direction='row'
								align='center'
								justify='end'
							>
								<PageLink text='Classes' func={() => this.setState({showSidebar: !this.state.showSidebar})}></PageLink>
								<PageLink text='Course Plan'></PageLink>
								<PageLink text='Profile'></PageLink>
							</Box>
						</Header>
						<Box
							flex 
							direction='row' 
							align='start'
							justify='between'
						>
							<Collapsible
								direction='horizontal'
								open={showSidebar}
							>
								<Box
									flex
									direction='column'
									align='center'
									justify='end'
								>
								<Tabs
									activeIndex={courseTab}
									onActive={(i) => {this.setState({courseTab: i})}}
									justify='center'
								>
								<Tab 
									title='Major'
								>
									<CourseBox list={majorClasses}></CourseBox>
								</Tab>
								<Tab 
									title='Minor'
								>
									<CourseBox list={minorClasses}></CourseBox>
								</Tab>
								</Tabs>
								</Box>
							</Collapsible>
						</Box>
					</Box>
				)}
				</ResponsiveContext.Consumer>
			</Grommet>
		);
	}
}

export default App;
