import { Box } from 'grommet';
import Tripcard from './Tripcard.js';

function Cardbox (props) {
	return (
		<Box
			background="#f5f5f5"
			pad="large"
		>
			<Box
				width="80vw"
				alignSelf="center"
			>
				<Box
					direction={props.direction}
					pad={{
						horizontal: "medium",
						vertical:"small"
					}}
					alignContent="center"
					justify="evenly"
					gap="medium"
				>
					<Tripcard
						city="Phnom-Penh"
						description="Jungle urbaine, capitale de 2 millions d'habitants"
						src="https://i.imgur.com/jVYMZ16.jpg"
					/>
					<Tripcard
						city="Koh-Rong"
						description="Iles paradisiaques du sud plus ou moins touristiques"
						src="https://i.imgur.com/LnNH03U.jpg"
					/>
				</Box>
				<Box
					direction={props.direction}
					pad={{
						horizontal: "medium",
						vertical:"small"
					}}
					alignContent="center"
					justify="evenly"
					gap="medium"
				>
					<Tripcard
						city="Kampot"
						description="Moyenne ville dans le sud du pays, producteur de poivre IGP"
						src="https://i.imgur.com/vexpflj.jpg"
					/>
					<Tripcard
						city="Ratanakiri"
						description="Moyenne ville dans le nord est du pays, spécialisée dans l'éco-tourisme"
						src="https://i.imgur.com/At6o3HC.jpg"
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default Cardbox;
