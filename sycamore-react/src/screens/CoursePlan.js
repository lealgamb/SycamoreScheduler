import React, {Component} from 'react';

import {
	Box, 
	Button,
	Heading,
	Table,
	TableBody,
	TableCell, 
	TableFooter,
	TableHeader,
	TableRow,
	Text
} from 'grommet';

const DATA = [
	{
		term: '2017-3',
		classes: [
			'CSCI 103',
			'CSCI 109',
			'WRIT 150',
			'CHEM 105a',
			'MATH 226'
		]
	},
	{
		term: '2018-1',
		classes: [
			'CSCI 104',
			'CSCI 170',
			'GESM 121',
			'CHEM 115b',
			'MATH 225'
		]
	},
	{
		term: '2018-3',
		classes: [
			'CSCI 201',
			'CSCI 270',
			'PSYC 100',
			'CHEM 322a'
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

class CoursePlan extends Component {
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
						top: 'xlarge',
						bottom: 'large'
					}}
				>
					Course Plan
				</Heading>
				<Box
					flex
					direction='row'
					align='start'
					justify='center'
					margin={{
						top: '0',
						bottom: 'large',
						left: 'large',
						right: 'large'
					}}
				>
					{DATA.map(item => (
						<Box
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
										<TableRow>
											<TableCell>
												<Text size='large'>
													{course}
												</Text>
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