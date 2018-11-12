import React, {Component} from 'react';

import {
	Anchor,
	Box, 
	Heading, 
	Grommet,
	ResponsiveContext,
	Collapsible,
	InfiniteScroll
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
		},
		focus: {
			border: {
				color: '#ff3300'
			}
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
			maxHeight: window.innerHeight
		}
	}
};

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

const items = Array(1000)
  .fill()
  .map((_, i) => `CSCI ${i}`);

class App extends Component {

	state = {
		showSidebar: false
	}
	render() {
		const {showSidebar} = this.state;
		return (
			<Grommet theme={theme} full>
				<ResponsiveContext.Consumer>
				{size => (
					<Box
						direction='column'
						align='stretch'
						justify='start'
					>
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
									direction='column'
									align='center'
									justify='start'
									height='85vh'
									width='large'
									overflow={{vertical: 'auto', horizontal: 'hidden'}}
									>
									<InfiniteScroll
										scrollableAncestor={this.boxy}
										items={items}
										step={20}
									>
										{item => (
											<Anchor 
												key={item} 
												size='xxlarge'
												margin={{
													'vertical': 'medium',
													'horizontal': 'medium'
												}}
											>
												{item}
											</Anchor>	
										)}
									</InfiniteScroll>
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
