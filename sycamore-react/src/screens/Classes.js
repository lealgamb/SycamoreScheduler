import React, {Component} from 'react';
import {
	Anchor, 
	Box, 
	InfiniteScroll,
	Tabs, 
	Tab
} from 'grommet';

const majorClasses = Array(50)
  .fill()
  .map((_, i) => `MAJ ${i}`);

const minorClasses = Array(20)
  .fill()
  .map((_, i) => `MIN ${i}`);

const CourseBox = props => (
	<InfiniteScroll items={props.list} step={20}>
	  {item => (
		<Box
		  align="center"
		  pad={{
			top: 'large'
		  }}
		  key={item}
		>
		  <Anchor size="xxlarge">{item}</Anchor>
		</Box>
	  )}
	</InfiniteScroll>
);
  
class Classes extends Component {
	state = {
		courseTab: 0
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
				<Tab title="Major">
					<CourseBox list={majorClasses} />
				</Tab>
				<Tab title="Minor">
					<CourseBox list={minorClasses} />
				</Tab>
			</Tabs>
		);
	}
}

export default Classes;