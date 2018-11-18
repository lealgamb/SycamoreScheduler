import React, {Component} from 'react';
import {
	Box, 
	Heading,
	RoutedButton
} from 'grommet';

class Profile extends Component {
	render ( ) {
		return (
			<Box
				flex
				direction='column'
				justify='center'
				align='center'
				animation={{
					type: 'fadeIn',
					delay: 50,
					duration: 750,
					size: 'large'
				}}
			>
				<Heading level='1'>Profile</Heading>
				<RoutedButton
					path='/'
					hoverIndicator
					label='Go back to welcome page ... '
				>
				</RoutedButton>
			</Box>
		);
	}
}

export default Profile;