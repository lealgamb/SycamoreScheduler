import React, {Component} from 'react';
import {
	Box, 
	Button,
	FormField,
	Heading,
	Text,
	TextInput,
	RoutedButton
} from 'grommet';

import {
	Checkmark,
	LinkPrevious
} from 'grommet-icons';

class SignIn extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
		this.emailRef = React.createRef();
		this.passwordRef = React.createRef();
		this.focusSomething = function (obj) {
			obj.current.focus();
		}
		this.focusSomething.bind(this);
	}
	
	doLogin = (event) => {
		let error = false;
		if (this.state.email === '') {
			console.log("MISSING EMAIL IN SIGNIN");
			this.setState({missingEmail: true});
			error = true;
		} 
		if (this.state.password === '') {
			console.log("MISSING PASSWORD IN SIGNIN");
			this.setState({missingPassword: true});
			error = true;
		} 
		console.log("ERROR:\t" + error);
		if (!error) {
			fetch('/sycamore-scheduler/LoginServlet', {
				method: 'POST',
				body: {
					email: this.state.email,
					password: this.state.password
				}
			})
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				console.log(JSON.stringify(json));
			});
		}
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
					direction='column'
					align='center'
					justify='start'
					pad='xlarge'
					gap='large'
					border={{
						side: 'all',
						color: 'main',
						size: 'medium'
					}}
					style={{
						borderRadius: '20px'
					}}
					animation={{
						type: 'fadeIn',
						delay: 0,
						duration: 500,
						size: 'large'
					}}
				>	
					<Heading 
						level='1'
						margin='0'
					>
						Sign In
					</Heading>
					<FormField
					>
						<TextInput
							id='email'
							ref={this.emailRef}
							size='medium'
							focusIndicator
							placeholder={<Box onClick={() => {this.focusSomething(this.emailRef)}} direction='row' align='center' justify='between' gap='small'><Text style={{fontFamily: 'Inconsolata'}} size='large'>email</Text><Text style={{fontFamily: 'Inconsolata'}} size='large' color='main'>*</Text></Box>}
							value={this.state.email}
							onChange={(event) => {this.handleChange('email', event);}}
						>
						</TextInput>
					</FormField>
					<FormField
					>
						<TextInput
							id='password'
							ref={this.passwordRef}
							size='medium'
							type='password'
							focusIndicator
							placeholder={<Box onClick={() => {this.focusSomething(this.passwordRef)}} direction='row' align='center' justify='between' gap='small'><Text style={{fontFamily: 'Inconsolata'}} size='large'>password</Text><Text style={{fontFamily: 'Inconsolata'}} size='large' color='main'>*</Text></Box>}
							value={this.state.password}
							onChange={(event) => {this.handleChange('password', event)}}
						>
						</TextInput>
					</FormField>
					<Box
						direction='row'
						align='center'
						justify='center'
						gap='medium'
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
							onClick={(event) => {this.doLogin(event);}}
						>
						</Button>
					</Box>
				</Box>
			</Box>
		);
	}
}

export default SignIn;