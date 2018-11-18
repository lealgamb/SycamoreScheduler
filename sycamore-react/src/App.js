import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, browserHistory} from 'react-router-dom';
import {
	Box,
	Grommet,
} from 'grommet';
import {css} from 'styled-components';

import Main from './screens/Main';
import Landing from './screens/Landing';
import SignIn from './screens/SignIn';
import Register from './screens/Register';

const theme = {
	global: {
		colors: {
			main: '#ff3300',
			darker: '#d21e32'
		},
		font: {
			family: 'Karla',
			color: '#ffffff'
		},
		hover: {
			background: 'inherit'
		},
	},
	button: {
		color: 'dark-1',
		border: {
			color: 'main'
		}
	},
	anchor: {
		color: '#ff3300',
		hover: {
			textDecoration: 'none'
		}
	},
	box: {
		extend: {
			whiteSpace: 'nowrap',
		}
	},
	tabs: {
		background: "light-2",
		header: {
		  background: "light-2",
		  extend: ({ theme }) => css`
			flex: 0 0;
			padding-top: ${theme.global.edgeSize.medium};
			padding-bottom: ${theme.global.edgeSize.medium};
			box-shadow: 0;
		  `
		},
        gap: "medium",
		extend: `
		div[role='tabpanel'] {
			overflow-y: auto;
			overflow-x: hidden;
			padding-bottom: 10%;
			font-family: 'Inconsolata';
		}
        `
	},
	tab: {
		active: {
		  background: 'main',
		  color: 'white',
		},
		color: 'main',
		background: "white",
		hover: {
		  background: "pink",
		  border: {
			side: 'all',
			color: 'main',
			size: 'small'
		  },
		  color: 'white'
		},
		border: undefined,
		margin: undefined,
		pad: {
		  bottom: undefined,
		  horizontal: "xsmall"
		},
		extend: ({ theme }) => css`
			border-radius: ${theme.global.control.border.radius};
		`
	  },
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			signedIn: false,
			userEmail: '',
		}
		this.onSignIn = (email) => {
			this.setState({
				signedIn: true,
				userEmail: email
			});
			setTimeout(() => {
				browserHistory.push('/Main')
			}, 1000);
		}
		this.onSignIn.bind(this);
	}
	render() {	
		const Content = () => (
			<Box fill>
				<Route exact path='/' component={Landing} />
				<Route path='/Guest' render={() => (<Main signedIn={this.state.signedIn} user={this.state.user}></Main>)} />
				<Route path='/Main' render={() => (<Main signedIn={this.state.signedIn} user={this.state.user}></Main>)} />
				<Route path='/SignIn' render={() => (<SignIn onSignIn={this.onSignIn}></SignIn>)} />
				<Route path='/Register' component={Register} />
			</Box>
		);
		return (
			<Router basename="/sycamore-scheduler">
				<Grommet theme={theme} full>
					<Fragment>
					<Content />
					</Fragment>
				</Grommet>
			</Router>
		);
	}
}

export default App;