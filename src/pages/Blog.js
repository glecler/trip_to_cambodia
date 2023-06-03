import { Box, Text, Heading } from 'grommet';
import Customheader from '../components/Customheader.js';


function Blog () {
	return(
		<Box>
			<Customheader/>
			<Box
				pad="large"
				width="60vw"
				justify="start"
				alignSelf="center"
			>
				<Heading
					level="2"
					pad="medium"
				>
					Blog
				</Heading>
				<Text>
					Articles et news
				</Text>
			</Box>
		</Box>
	);
}

export default Blog;
