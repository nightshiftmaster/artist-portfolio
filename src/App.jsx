import "./App.css";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "animate.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="wrapper">
      <div id="top"></div>
      <ScrollToTop />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
