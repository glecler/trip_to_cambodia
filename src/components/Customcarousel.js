import { Carousel, Box, Image } from 'grommet';

function Customcarousel () {
 return(
	<Box
		background="#ffffe4"
		height="60vh"
		overflow="hidden"
		alignSelf='center'
	 >
		<Carousel
			fill
			alignSelf="center"
			play={2000}
			wrap={true}
		>
			<Image fit="cover" src="https://i.imgur.com/LnNH03U.jpg" />
			<Image fit="cover" src="https://i.imgur.com/At6o3HC.jpg" />
			<Image fit="cover" src="https://i.imgur.com/jVYMZ16.jpg" />
		</Carousel>
	</Box>
 );
}

export default Customcarousel;
