import "./App.css";
import "animate.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Vlad Violin Show" />
        <meta property="og:description" content="All My Music In One Place" />
        <meta property="og:image" content="../public/images/6.jpg" />
        <meta property="og:url" content="https://www.yoursite.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="wrapper">
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
    </>
  );
}

export default App;
