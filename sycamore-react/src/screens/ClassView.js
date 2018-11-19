import React, {Component} from 'react';
import {
	Box, 
	RoutedButton,
	Heading,
	Paragraph,
	Text
} from 'grommet';

class ClassView extends Component {

	state = {
		classInfo: this.props.defaultInfo
	}

	componentWillReceiveProps(props) {
		this.setState({ classInfo: props.classInfo });
	}
	
	render ( ) {
		const classInfo = this.state.classInfo;
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
				<Box direction='column' align='start' justify='start'>
					<Heading level='1'>{classInfo.degreeName+' '+classInfo.classNumber}</Heading>
					<Heading level='2'>{classInfo.className}</Heading>
				</Box>
				<Box 
					style={{
						maxWidth: '20%'
					}}
				>
					<Paragraph>
						{classInfo.summary}
					</Paragraph>
				</Box>
				<RoutedButton
					path='/Home'
					hoverIndicator
					label='Reload this page ... '
					alignSelf='center'
					margin={{
						top:  '10%'
					}}
				>
				</RoutedButton>
			</Box>
		);
	}
}

export default ClassView;