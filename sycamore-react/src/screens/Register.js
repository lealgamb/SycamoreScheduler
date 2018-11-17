import React, {Component} from 'react';
import {
	Box, 
	Button,
	FormField,
	Heading,
	RoutedButton,
	Select,
	Text,
	TextInput
} from 'grommet';

import {
	Checkmark,
	LinkPrevious
} from 'grommet-icons';

const default_programs = require('./programs.json');

class Register extends Component {
	state = {
		email: '',
		password: '',
		fName: '',
		lName: '',
		major1: '',
		major2: '',
		minor1: '',
		minor2: '',
		programs: default_programs
	}

	doRegister = (event) => {
		let bodystr = '';
		let i = 0;
		Object.keys(this.state).map((key) => {
			if (i !== 0 && key !== 'programs') {
				bodystr += '&';
			}
			i++;
			if (key !== 'programs') {
				bodystr += key;
				bodystr += '=';
				bodystr += this.state[key];
			}
			return 0;
		});
		console.log(bodystr);
		fetch('/sycamore-scheduler/RegisterServlet', {
			method: 'POST',
			headers: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			body: bodystr
		})
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			console.log(JSON.stringify(json));
		});
	};

	handleChange = (element, event) => {
		if (element === 'email') {
			this.setState({email: event.target.value});
			console.log(this.state.email);
		} else if (element === 'password') {
			this.setState({password: event.target.value});
			console.log(this.state.password);
		}
	}
	render ( ) {
		return (
			<Box
				flex
				direction='column'
				justify='center'
				align='center'
			>
				<Box
					height='50%'
					width='30%'
					direction='column'
					align='center'
					justify='center'
					pad={{
						vertical: 'large',
						horizontal: 'xlarge'

					}}
					border={{
						side: 'all',
						color: 'main',
						size: 'medium'
					}}
					animation={{
						type: 'fadeIn',
						delay: 0,
						duration: 500,
						size: 'large'
					}}
					style={{
						borderRadius: '20px'
					}}
				>	
					<Box
						fill
						direction='column'
						align='start'
						justify='between'
					>
						<Box
							flex
							width='100%'
							align='center'
							justify='center'
						>
							<Heading 
								level='1'
								margin='0'
							>
								Register
							</Heading>
						</Box>
						<Box
							flex
							width='100%'
							direction='row'
							align='center'
							justify='between'
							gap='large'
						>
							<FormField
							>
								<TextInput
									id='fname'
									size='medium'
									focusIndicator
									placeholder={<Text size='large'>first name</Text>}
									value={this.state.fname}
									onChange={(event) => {this.setState({fname: event.target.value});}}
								>
								</TextInput>
							</FormField>
							<FormField
							>
								<TextInput
									id='lname'
									size='medium'
									focusIndicator
									placeholder={<Text size='large'>last name</Text>}
									value={this.state.lname}
									onChange={(event) => {this.setState({lname: event.target.value});}}
								>
								</TextInput>
							</FormField>
						</Box>
						<Box
							flex
							width='100%'
							direction='row'
							align='center'
							justify='between'
							gap='large'
						>
							<FormField
							>
								<TextInput
									id='email'
									size='medium'
									focusIndicator
									placeholder={<Text size='large'>email</Text>}
									value={this.state.email}
									onChange={(event) => {this.setState({email: event.target.value});}}
								>
								</TextInput>
							</FormField>
							<FormField
							>
								<TextInput
									id='password'
									size='medium'
									type='password'
									focusIndicator
									placeholder={<Text size='large'>password</Text>}
									value={this.state.password}
									onChange={(event) => {this.setState({password: event.target.value});}}
								>
								</TextInput>
							</FormField>
						</Box>
						<Box
							flex
							width='100%'
							direction='row'
							align='center'
							justify='between'
							gap='large'
						>
							<Select
								size='small'
								placeholder={<Text size='large'>major</Text>}
								value={this.state.major1}
								options={this.state.programs}
								onChange={(option) => {this.setState({major1: option.value});}}
								onClose={() => this.setState({ programs: default_programs })}
								onSearch={text => {
									const exp = new RegExp(text, "i");
									this.setState({
									programs: default_programs.filter(o => exp.test(o))
									});
								}}
							>

							</Select>
							<Select
								size='small'
								placeholder={<Text size='large'>minor</Text>}
								value={this.state.minor1}
								options={this.state.programs}
								onChange={(option) => {this.setState({minor1: option.value});}}
								onClose={() => this.setState({ programs: default_programs })}
								onSearch={text => {
									const exp = new RegExp(text, "i");
									this.setState({
									programs: default_programs.filter(o => exp.test(o))
									});
								}}
							>

							</Select>
						</Box>
						<Box
							flex
							width='100%'
							direction='row'
							align='center'
							justify='center'
							gap='medium'
							margin={{
								top: 'small'
							}}
						>
							<RoutedButton
								path='/'
								hoverIndicator
								color='dark-2'
								label={<LinkPrevious color='main' size='large'></LinkPrevious>}
							>
							</RoutedButton>
							<Button
								hoverIndicator
								label={<Checkmark size='large' color='green'></Checkmark>}
								color='dark-2'
								onClick={(event) => {this.doRegister(event);}}
							>
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		);
	}
}

export default Register;