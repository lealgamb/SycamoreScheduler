import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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
			color: 'black',
			background: 'inherit'
		},
	},
	button: {
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

const Content = () => (
	<Box fill>
		<Route exact path='/' component={Landing} />
		<Route path='/Main' component={Main} />
		<Route path='/SignIn' component={SignIn} />
		<Route path='/Register' component={Register} />
	</Box>
);


export default () => (
	<Router basename="/sycamore-scheduler">
		<Grommet theme={theme} full>
			<Fragment>
			<Content />
			</Fragment>
		</Grommet>
	</Router>
)