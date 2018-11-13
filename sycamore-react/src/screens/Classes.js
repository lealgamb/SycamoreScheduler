import React, {Component} from 'react';
import PropTypes from "prop-types";
import {
	Anchor, 
	Box, 
    InfiniteScroll,
    Tabs, 
    Text,
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

const RichTabTitle = ({label}) => (
    <Box direction="row" align="center" gap="xsmall" margin="xsmall">
      <Text size="large">
        <strong>{label}</strong>
      </Text>
    </Box>
  );
  
  RichTabTitle.propTypes = {
    label: PropTypes.string.isRequired
  };
  
  
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
                <Tab 
                    title={
                        <RichTabTitle
                        label="Major"
                        />
                    }
                >
					<CourseBox list={majorClasses} />
				</Tab>
                <Tab 
                    title={
                        <RichTabTitle
                            label="Minor"
                        />
                    }
                >
					<CourseBox list={minorClasses} />
				</Tab>
			</Tabs>
		);
	}
}

export default Classes;