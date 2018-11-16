import React, {Component} from 'react';
import {
	Box, 
	Button,
	Heading,
	Text
} from 'grommet';

class ClassView extends Component {
	render ( ) {
		return (
			<Box
				flex
				direction='column'
				justify='start'
				align='start'
				pad='5%'
				animation={{
					type: 'fadeIn',
					delay: 50,
					duration: 750,
					size: 'large'
				}}
			>
				<Heading level='1'>{this.props.id}</Heading>
				<Text size='large' margin={{bottom: 'large'}}>More details will go here</Text>
				<Button
					href='/Main'
					hoverIndicator
					label='Reload this page ... '
					alignSelf='center'
					margin={{
						top:  '10%'
					}}
				>
				</Button>
			</Box>
		);
	}
}

export default ClassView;