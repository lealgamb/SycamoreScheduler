import React, {Component} from 'react';
import PropTypes from "prop-types";

import {
	Box, 
	Button,
	Heading,
	InfiniteScroll,
    Tabs, 
    Text,
	Tab
} from 'grommet';

import {
	FormSearch
} from 'grommet-icons';

const minorClasses = Array(2)
  .fill()
  .map((_, i) => {
	var id = Math.floor(Math.random() * (700 - 100 + 1) ) + 100
	return `MINR ${id}`;
  });

const Course = props => (
	<Box
		direction='column'
		align='center'
		justify='center'
		width='40%'
	>
		<Button 
			fill
			onClick={() => {props.clickFunc(props.id)}}
			label={<strong>{props.name}</strong>}
            hoverIndicator
			style={{
                background: 'white',
				padding: '30% 100% 30% 100%',
				radius: '4px',
				border: '3px solid main',
				fontSize: '30px'
			}}
		>
		</Button>
	</Box>
);

var i = 0; 
const CourseBox = props => (
	<InfiniteScroll items={props.list} step={20}>
	  {item => (
		<Box
		  align="center"
		  pad='small'
		  key={(i++).toString()}
		>
		  <Course clickFunc = {props.clickFunc} name={item} id={item}></Course>
		</Box>
	  )}
	</InfiniteScroll>
);

const RichTabTitle = ({label}) => (
    <Box direction="row" align="center" justify='center' margin="xsmall" pad='2%'>
      <Text size="xlarge">
        <strong>{label}</strong>
      </Text>
    </Box>
);
  
RichTabTitle.propTypes = {
	label: PropTypes.string.isRequired
};
  
  
class Classes extends Component {

	constructor(props) {
		super(props);
		this.state = {
			courseTab: 0
		}
		this.allClasses = props.classes;
	}
	render () {
		const {courseTab} = this.state;
		return (
			<Tabs
				activeIndex={courseTab}
				onActive={i => {
					this.setState({ courseTab: i });
				}}
			>
				<Tab
					title={<FormSearch size='large'></FormSearch>}
				>
					<Box
						direction='column'
						align='center'
						justify='start'
						pad='small'
						animation={{
							type: 'fadeIn',
							size: 'xlarge'
						}}
					>
						<Heading level='2'>search bar</Heading>
					</Box>
				</Tab>
                <Tab 
                    title={
                        <RichTabTitle
                      		label="Major"
                        />
                    }
                >
					<CourseBox clickFunc = {this.props.clickFunc} list={this.allClasses} />
				</Tab>
                <Tab 
                    title={
                        <RichTabTitle
                            label="Minor"
                        />
                    }
                >
					<CourseBox clickFunc = {this.props.clickFunc} list={minorClasses} />
				</Tab>
			</Tabs>
		);
	}
}

export default Classes;