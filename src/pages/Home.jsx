import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "my-vlad-scroll";
import { gsap } from "gsap";
import { videoItems } from "../assets/constants";
import VideoCard from "../components/VideoCard";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const Home = () => {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: ".wrapper",
      content: ".content",
      smooth: 1.5,
      effects: true,
    });
    gsap.fromTo(
      ".hero-section",
      { opacity: 4 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".hero-section",
          start: " center",
          end: "1300",
          scrub: true,
        },
      }
    );
    const itemsLeft = gsap.utils.toArray(".gallery__left .gallery__item");

    const itemsRight = gsap.utils.toArray(".gallery__right .gallery__item");

    itemsLeft.forEach((item) => {
      gsap.fromTo(
        item,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 4,
          // start: "-850",
          // end: "-100",
          scrollTrigger: { trigger: item, scrub: true },
        }
      );
      gsap.fromTo(
        item,
        { opacity: 4 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: item,
            scrub: true,
          },
        }
      );
    });

    itemsRight.forEach((item) => {
      return gsap.fromTo(
        item,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 4,
          // start: "-850",
          // end: "-100",
          scrollTrigger: { trigger: item, scrub: true },
        }
      );
    });
  }, []);
  return (
    <div>
      <header className="hero-section">
        <img
          data-speed=".6"
          className="hero"
          src="./images/hero3.png"
          alt="main-image"
        />
        <div className="container fade-in">
          <div data-speed=".75" className="main-header">
            <h1 className="main-title">Vlad Violin</h1>
            <p className="main-slogan puff-in-center">Its all about music</p>
          </div>
        </div>
      </header>
      <div className="portfolo">
        <div className="container">
          <main className="gallery">
            <div data-speed=".9" className="gallery__left">
              {videoItems.slice(0, 3).map((item, i) => {
                return <VideoCard key={i} item={item} />;
              })}
            </div>
            <div data-speed="1.1" className="gallery__right">
              {videoItems.slice(3, 6).map((item, i) => {
                return <VideoCard key={i} item={item} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
