import React, {Component} from 'react';
import {
	Box, 
	Button,
	Heading
} from 'grommet';

class CoursePlan extends Component {
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
				<Heading level='1'>Course Plan</Heading>
				<Button
					href='/Main'
					hoverIndicator
					label='Reload this page ... '
				>
				</Button>
			</Box>
		);
	}
}

export default CoursePlan;