import { Box, Image, Main, Heading, Paragraph, ResponsiveContext } from 'grommet';
import Homecover from '../components/Homecover';
import Cardbox from '../components/Cardbox.js';
import Customheader from '../components/Customheader.js';
import Customcarousel from '../components/Customcarousel.js';
import React from 'react';

function Homepage () {
	const size = React.useContext(ResponsiveContext);
	var direction = 'row';
	var width = '60vh';

	if (size == 'small') {
		direction = 'column';
		width = '80vh';
	}

	return(
		<Box pad={{bottom:"large"}}>
			<Customheader/>
			<Homecover/>
			<Box direction={direction}>
				<Box
					width={width}
					alignSelf="center"
					pad="large"
				>
					<Heading pad="xlarge">
						Suivez mes aventures!
					</Heading>
					<Paragraph>
						La rubrique "blog" contient des articles dans lesquels je donne de mes nouvelles. Vous pouvez également regarder les différentes photos prises au cours du séjour dans la rubrique "gallerie". Petit aperçu?
					</Paragraph>
				</Box>
				<Box>
					<Image src="https://i.imgur.com/bcVpIAi.png"/>
				</Box>
			</Box>
			<Customcarousel/>
			<Box direction={direction} justify="center" gap="medium" pad="medium">
				<Box width={width} alignSelf="center">
					<Image
						fit="contain"
						src="https://i.imgur.com/ueT6BPe.png"
					/>
				</Box>
				<Box
					width="80vh"
					justify="start"
					alignSelf="center"
					pad="large"
				>
					<Heading pad="xlarge">
						L'itinéraire
					</Heading>
					<Paragraph fill>
						Le voyage commence à Phnom-Penh, capitale du Cambodge. Après quelques jours passés à esquiver les scooters et à se balader dans les nombreux marchés de la ville, nous sommes partis sur les îles de Koh Rong Sanleum et Koh Rong à l'écart de la civilisation. Le voyage continue à Kampot, ville moyenne bien plus agréable à vivre que la capitale. Après un bref détour par Phnom-Penh pour rallonger nos visas, nous partons nous isoler dans le nord est du pays, moins touristique et plus "vert". C'est d'ici, au milieu des montagnes et de la jungle, que je développe ce blog. Enjoy!
					</Paragraph>
				</Box>
			</Box>
			<Cardbox direction={direction}/>
		</Box>
	);
}

export default Homepage;
