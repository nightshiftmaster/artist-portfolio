import "./App.css";
import "animate.css";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact/Contact";
import Music from "./pages/Music/Music";
import About from "./pages/About/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MusicPlayer from "./pages/Music/components/MusicPlayer";
import ScrollDownIcon from "./components/ScrollDownIcon";

function App() {
  return (
    <div className="wrapper">
      <div id="top"></div>
      <ScrollToTop />
      <Navbar />
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
      </div>

      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
