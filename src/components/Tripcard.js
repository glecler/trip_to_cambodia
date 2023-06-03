import { Box, Avatar, Paragraph, Text, Anchor, ResponsiveContext } from 'grommet';
import React from 'react';

function Tripcard (props) {
	
	const size = React.useContext(ResponsiveContext);
	var direction = 'row';
	var width = '40%';

	if (size == 'small') {
		direction = 'column';
		width = "90%"
	}

	return(
		<Box
			direction={direction}
			width={width}
			align="center"
			flex={false}
			gap="medium"
		>
			<Box
				pad="small"
				flex={false}
			>
				<Avatar
					size="xlarge"
					src={props.src}
				/>
			</Box>
			<Box
				fill={true}
				round
				pad="small"
				elevation="medium"
				alignSelf="center"
			>
				<Text size="xlarge">
					<Anchor href="#" label={props.city}/>
				</Text>
				<Paragraph>
					{ props.description }
				</Paragraph>
			</Box>
		</Box>
	);
}

export default Tripcard;
