import "./App.css";
import "animate.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Music from "./pages/Music";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MusicPlayer from "./components/MusicPlayer";
import ScrollDownIcon from "./components/ScrollDownIcon";

function App() {
  return (
    <div className="wrapper">
      <div id="top"></div>
      <Navbar />
      <ScrollToTop />
      <ScrollDownIcon />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/music" element={<Music />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div id="bottom"></div>
        <Footer />
      </div>

      <MusicPlayer />
    </div>
  );
}

export default App;
