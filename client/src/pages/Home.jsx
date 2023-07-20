import Hero from './Hero'
import About from './About'
import FullPage from './FullPage';
import Nav from "./Nav";
import WebgiViewer from "../components/WebgiViewer";
import CanvasModel from '../canvas';

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      {/* <FullPage /> */}
      <WebgiViewer />
      {/* <CanvasModel /> */}
    </>
  );
}

export default Home