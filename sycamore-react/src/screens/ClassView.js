import React, {Component} from 'react';
import {
	Box, 
	Button,
	Heading,
	Layer,
	Image,
	Paragraph,
	Meter,
	Stack,
	Text
} from 'grommet';

import {
	Add
} from 'grommet-icons';

class ClassView extends Component {

	state = {
		classInfo: this.props.defaultInfo,
		open: false,
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
                style={{
                    overflow: 'auto'
                }}
			>
				<Box 
					direction='row'
					align='center'
					gap='large'
				>
				<Heading level='1'>{classInfo.degreeName+' '+classInfo.classNumber}</Heading>
				{this.props.isSignedIn && 
					<Button 
						primary
						color='main'
						label={<Add size='medium' color='white'></Add>} 
						pad='large'
						onClick={() => {
							this.setState({
								open: true
							})
						}}
					>
					</Button>
				}
				</Box>
				<Heading level='2'>{classInfo.className}</Heading>
				<Text size='large'>{classInfo.units} units</Text>
				<Paragraph>
					{classInfo.summary}
				</Paragraph>
				{classInfo.instructorName && 
				<Heading level='1'>Instructors</Heading>
				}
				{classInfo.instructorName ? 
					<Heading level='2'>&bull; {classInfo.instructorName}</Heading> : 
					<Heading level='2'>No instructors found</Heading>
				}
				{classInfo.rmpID !== 0 &&  
					<Box 
						direction='row'
						align='center'
						justify='between'
						gap='medium'
						margin={{top: 'medium'}}
					>
						<Box align="start">
							<Stack anchor="center">
								<Meter
								type="circle"
								background="light-2"
								values={[{
									value: 70,
									color: 'main',
									highlight: true,
								}]}
								size="xsmall"
								thickness="small"
								/>
								<Box direction="row" align="center" pad={{ bottom: "xsmall" }}>
								<Text size="xlarge" weight="bold">
									3.5
								</Text>
								<Text size="small">/5</Text>
								</Box>
							</Stack>
						</Box>
						<Image style={{height: '100px'}} src='/SycamoreScheduler/rmp.png' />
					</Box>
				}
				{this.state.open && (
					<Layer
						position="center"
						modal
						onClickOutside={() => {
							this.setState({
								open: false,
							});
						}}
						onEsc={() => {
							this.setState({
								open: false,
							});
						}}
					>
						<Box pad="medium" gap="small" width="medium">
						<Heading level={3} margin="none">
							Confirm
						</Heading>
						<Text>Add {classInfo.degreeName+' '+classInfo.classNumber} to course plan</Text>
						<Box
							tag="footer"
							gap="small"
							direction="row"
							align="center"
							justify="end"
							pad={{ top: "medium", bottom: "small" }}
						>
							<Button 
								label="Cancel" 
								onClick={() => {
									this.setState({
										open: false,
									});
								}} 
								color="dark-6"
							/>
							<Button
								label={
									<Text color="white">
									<strong>Add</strong>
									</Text>
								}
								onClick={() => {
									console.log("Adding");
									this.setState({
										open: false,
									})
								}}
								primary
								color="main"
							/>
						</Box>
						</Box>
					</Layer>
					)}
			</Box>
		);
	}
}

export default ClassView;