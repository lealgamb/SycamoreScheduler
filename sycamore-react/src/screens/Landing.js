import React, {Component} from 'react';
import {
	Box,
	Button,
	Heading
} from 'grommet';

class Landing extends Component {
	render ( ) {
		return (
			<Box
				flex
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
					<Heading level='1'>Welcome</Heading>
				</Box>
				<Box
					animation={{
						type: 'fadeIn',
						delay: 0,
						duration: 750,
						size: 'xlarge'
					}}
				>
					<Button
						href='/Main'
						hoverIndicator
						label='enter Sycamore Calendar ... '
					>
					</Button>
				</Box>
			</Box>
		);
	}
}

export default Landing;