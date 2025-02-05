import "./App.css";
import "animate.css";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact/Contact";
import Music from "./pages/Music/Music";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MusicPlayer from "./pages/Music/components/MusicPlayer";
import ScrollDownIcon from "./components/ScrollDownIcon";

function App() {
  return (
    <div className="wrapper">
      <ScrollToTop />
      <Navbar />
      <ScrollDownIcon />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/music" element={<Music />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>

      <MusicPlayer />
    </div>
  );
}

export default App;
