import { Box, Text, Heading} from 'grommet';
import Customheader from '../components/Customheader.js';


function Gallery () {
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
					Gallerie
				</Heading>
				<Text> Petite sélection de photos prises au cours du séjour </Text>
			</Box>
		</Box>
	);
}

export default Gallery;
