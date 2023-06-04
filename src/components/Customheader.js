import { Header, Box, Anchor, Image, Text } from 'grommet';
import { Link } from 'react-router-dom';

function Customheader () {
	
	const linkStyle = {
		textDecoration: "none",
		color: "black",
	};

	return(
		<Header
			background="#ffffff"
			justify="start"
			pad={{horizontal:"small"}}
			sticky="scrollup"
			elevation="small"
		>
			<Box width="xsmall">
				<Image src="https://seeklogo.com/images/C/Cambodia-logo-F36225E55C-seeklogo.com.png"/>
			</Box>	
			<Box
				direction="row"
				justify="end"
				fill={true}
				pad="medium"
				gap="large"
			>
				<Link to="/" style={linkStyle}><Text>Accueil</Text></Link>	
				<Link to="/gallery" style={linkStyle}>Gallerie</Link>
				<Link to="/blog" style={linkStyle}>Blog</Link>
			</Box>
		</Header>

	
	)
}

export default Customheader;
