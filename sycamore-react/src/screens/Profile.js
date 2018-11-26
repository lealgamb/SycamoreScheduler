import React, {Component} from 'react';
import {
    Box, 
    Button,
	Heading,
    RoutedButton,
    FormField,
    TextInput,
    Text,
    Select
} from 'grommet';

import {
    LinkPrevious,
    Checkmark
} from 'grommet-icons'

const default_programs = require('./programs.json');

class Profile extends Component {
    constructor(props) {
		super(props);
		this.fNameRef = React.createRef();
		this.lNameRef = React.createRef();
		this.emailRef = React.createRef();
		this.passwordRef = React.createRef();
		this.focusSomething = function (obj) {
			obj.current.focus();
		}
        this.focusSomething.bind(this);
        this.state = {
            fName: this.props.info.fName,
            lName: this.props.info.lName,
            email: this.props.info.email,
            password: this.props.info.password,
            major1: this.props.info.major1,
            major2: this.props.info.major2,
            minor1: this.props.info.minor1,
            minor2: this.props.info.minor2,
            programs: default_programs
        }
	}

	render ( ) {
		return (
			<Box
				flex
				direction='column'
				justify='center'
				align='start'
				animation={{
					type: 'fadeIn',
					delay: 50,
					duration: 750,
					size: 'large'
				}}
			>
				<Heading level='1' alignSelf='center'>Profile</Heading>
                <Box
						flex
						width='100%'
						direction='row'
						align='center'
						justify='center'
						gap='large'
					>
						<FormField
						>
							<TextInput
								ref={this.fNameRef}
								id='fName'
								size='medium'
								focusIndicator
								value={this.state.fName}
								onChange={(event) => this.setState({fName: event.target.value})}
							>
							</TextInput>
						</FormField>
						<FormField
						>
							<TextInput
								ref={this.lNameRef}
								id='lName'
								size='medium'
								focusIndicator
								value={this.state.lName}
								onChange={(event) => this.setState({lName: event.target.value})}
							>
							</TextInput>
						</FormField>
					</Box>
					<Box
						flex
						width='100%'
						direction='row'
						align='center'
						justify='center'
						gap='large'
					>
						<FormField
						>
							<TextInput
								ref={this.emailRef}
								id='email'
								size='medium'
								focusIndicator
								value={this.state.email}
								onChange={(event) => this.setState({email: event.target.value})}
							>
							</TextInput>
						</FormField>
						<FormField
						>
							<TextInput
								ref={this.passwordRef}
								id='password'
								size='medium'
								type='password'
								focusIndicator
								value={this.state.password}
								onChange={(event) => this.setState({password: event.target.value})}
							>
							</TextInput>
						</FormField>
					</Box>
					<Box
						flex
						width='100%'
						direction='row'
						align='center'
						justify='center'
						gap='large'
					>
						<Select
							size='small'
							value={this.state.major1}
							options={this.state.programs}
							onChange={(option) => {this.setState({major1: option.value});}}
							onClose={() => this.setState({programs: default_programs})}
							onSearch={text => {
								const exp = new RegExp(text, "i");
								this.setState({programs: default_programs.filter(o => exp.test(o))});
							}}
						>

						</Select>
						<Select
							size='small'
							value={this.state.minor1}
							options={this.state.programs}
							onChange={(option) => {this.setState({minor1: option.value});}}
							onClose={() => this.setState({programs: default_programs})}
							onSearch={text => {
								const exp = new RegExp(text, "i");
								this.setState({programs: default_programs.filter(o => exp.test(o))});
							}}
						>

						</Select>
					</Box>
					{this.state.error && 
						<Box
							flex
							background='main'
							direction='column'
							align='center'
							justify='center'
							pad='medium'
							style={{
								borderRadius: '10px'
							}}
						>
							<Text color='white'>{this.state.errormsg}</Text>
						</Box>
					}
					{this.state.success &&
						<Box
							flex
							background='neutral-3'
							animation={{
								type: 'fadeIn',
								delay: 0,
								duration: 700,
								size: 'large'
							}}
							direction='column'
							align='center'
							justify='center'
							pad='small'
							style={{
								borderRadius: '10px'
							}}
						>
							<Text color='white'>Success!</Text>
						</Box>
					}
					<Box
						flex
						width='100%'
						direction='row'
						align='center'
						justify='center'
						gap='medium'
					>
						<Button
							hoverIndicator
							label={<Checkmark size='large' color='green'></Checkmark>}
							color='dark-2'
							onClick={(event) => {this.doRegister(event);}}
						>
						</Button>
					</Box>
			</Box>
		);
	}
}

export default Profile;