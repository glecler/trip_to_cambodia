import { Box, Text, Heading, Image } from 'grommet';
import Customheader from '../components/Customheader.js';


function Gallery () {
	
	function importAll(r) {
		return r.keys().map(r);
	}

	const images = Array(importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/)));
	const len = images[0].length;
	console.log(len, images);	
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
			<Box justify="center" alignContent="center" width="80vw" margin="medium" direction="row" alignSelf="center" wrap>
				{images[0].map((image) => (
					<Box alignContent="center" justify="center" width="25vw" margin="xsmall">
						<Image align="center" src={image}/>
					</Box>
					))}
			</Box>
		</Box>
	);
}

export default Gallery;
