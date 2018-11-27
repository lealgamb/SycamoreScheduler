import React, {Component} from 'react';

import {
	Box, 
	Heading,
	Table,
	TableBody,
	TableCell, 
	TableHeader,
	TableRow,
	Text,
	Button
} from 'grommet';

import {
	SubtractCircle
} from 'grommet-icons';

var DATA = [
	{
		term: '2017-3',
		classes: [
			
		]
	},
	{
		term: '2018-1',
		classes: [
			
		]
	},
	{
		term: '2018-3',
		classes: [
			
		]
	},
	{
		term: '2019-1',
		classes: [
			'CSCI 356',
			'EE 109',
			'BISC 220',
			'MATH 407'
		]
	}
]

var i = 0;

class CoursePlan extends Component {
    constructor(props) {
        super(props);
        var ws = new WebSocket('ws://localhost:8080/SycamoreScheduler/ss1');
        ws.onopen = e => {
            console.log('WebSocket Connected!', e);
        };
        ws.onmessage = e => {
            console.log('Received:', e);
        };
        ws.onclose = e => {
            console.log('Closed!', e);
        };
        ws.onerror = e => {
            console.log('Error:', e);
        };
        this.setState({
            socket: ws
        });
    }
	render ( ) {
		return (
			<Box
				flex
				direction='column'
				justify='start'
				align='center'
				animation={{
					type: 'fadeIn',
					delay: 50,
					duration: 750,
					size: 'large'
				}}
			>
				<Heading 
                    level='1'
					margin={{
                        top: 'large',
                        bottom: '0',
                        left: 'large'
					}}
				>
					Course Plan
				</Heading>
				<Box
					flex
					direction='row'
					align='start'
					justify='center'
				>
					{DATA.map(item => (
						<Box
							key={i++}
							flex
							margin='large'
						>
							<Table caption={item.term}>
								<TableHeader>
									<TableRow>
										<TableCell>
											<Heading level='3'>
												{item.term}
											</Heading>
										</TableCell>
									</TableRow>
								</TableHeader>
								<TableBody>
									{item.classes.map(course => (
										<TableRow key={i++}>
											<TableCell>
												<Box 
													direction='row'
													align='center'
													justify='between'
												>
													<Text size='large'>
														{course}
													</Text>
													<Button
														hoverIndicator
														icon={<SubtractCircle color='main'></SubtractCircle>}
													>
													</Button>
												</Box>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					))}
				</Box>
			</Box>
		);
	}
}

export default CoursePlan;