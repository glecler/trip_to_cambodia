import './App.css';
import { Grommet } from 'grommet';
import Homepage from './pages/Homepage.js';
import Gallery from './pages/Gallery.js';
import Blog from './pages/Blog.js';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
		<Grommet
			theme={{
				global: { 
					font: {
						family: "Poppins"
					},
					colors: {
						background: "#ffffff",
						text: "black",
					}
				},
				button: {
					border: {
						color: "black"
						},
					},
					anchor: {
						color: "black"
					}
			}}>
		<Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />

      </Routes>
		</Grommet>
  );
}

export default App;
