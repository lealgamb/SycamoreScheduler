import React, {Component} from 'react';
import {
	Box,
	RoutedButton,
	Heading,
	Image,
	Text
} from 'grommet';

class Landing extends Component {
	render ( ) {
		return (
			<Box
				flex
				direction='row'
				align='center'
				justify='center'
				gap='large'
			>
					<Box 
						height='small'
						width='small'
						margin={{
							top: 'large',
						}}
						animation={{
							type: 'slideRight',
							delay: 0,
							duration: 500,
							size: 'large'
						}}
						pad='small'
						background='main'
						style={{
							borderRadius: '20px'
						}}
					>
						<Image fit='contain' src='/sycamore-scheduler/leaf.png' />
					</Box>
					<Box
						direction='column'
						justify='center'
						align='center'

					>
						<Box 
							animation={{
								type: 'slideDown',
								delay: 0,
								duration: 500,
								size: 'large'
							}}
						>
							<Heading level='1' color='black'>Sycamore Scheduler</Heading>
						</Box>
						<Box
							direction='row'
							align='center'
							justify='center'
							animation={{
								type: 'slideUp',
								delay: 0,
								duration: 500,
								size: 'large'
							}}
						>
							<RoutedButton
								path='/Register'
								hoverIndicator
								label={<Text size='large' style={{fontFamily: 'Inconsolata'}}><strong>register</strong></Text>}
								margin={{
									right: 'medium'
								}}
							>
							</RoutedButton>
							<RoutedButton
								path='/SignIn'
								hoverIndicator
								label={<Text size='large' style={{fontFamily: 'Inconsolata'}}><strong>sign in</strong></Text>}
								margin={{
									right: 'medium'
								}}
							>
							</RoutedButton>
							<RoutedButton
								path='/Main'
								hoverIndicator
								label={<Text size='large' style={{fontFamily: 'Inconsolata'}}><strong>guest</strong></Text>}
							>
							</RoutedButton>
						</Box>
					</Box>
			</Box>
		);
	}
}

export default Landing;