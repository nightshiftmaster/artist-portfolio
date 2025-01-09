import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "my-vlad-scroll";
import { gsap } from "gsap";
import { videoItems } from "../assets/constants";
import VideoCard from "../components/VideoCard";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Check if the device is not touch (desktop only)
    if (ScrollTrigger.isTouch !== 1) {
      ScrollSmoother.create({
        wrapper: ".wrapper",
        content: ".content",
        smooth: 1.5,
        effects: true,
      });

      // Hero section animation
      gsap.fromTo(
        ".hero-section",
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: ".hero-section",
            start: "center center",
            end: "1300",
            scrub: true,
          },
        }
      );

      // Left gallery animations
      const itemsLeft = gsap.utils.toArray(".gallery__left .gallery__item");
      itemsLeft.forEach((item) => {
        gsap.fromTo(
          item,
          { x: -150, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          }
        );
      });

      // Right gallery animations
      const itemsRight = gsap.utils.toArray(".gallery__right .gallery__item");
      itemsRight.forEach((item) => {
        gsap.fromTo(
          item,
          { x: 150, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          }
        );
      });
    }

    ScrollTrigger.normalizeScroll(true);

    // Mobile animations
    const allItems = gsap.utils.toArray(".gallery-mobile .gallery__item");
    allItems.forEach((item) => {
      gsap.fromTo(
        item,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    });

    // Refresh ScrollTrigger after all animations are defined
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="wrapper">
      <div className="content">
        <header className="hero-section fade-in">
          <img
            data-speed=".6"
            className="hero"
            src="./images/hero3.png"
            alt="main-image"
          />
          <div className="container fade-in">
            <div data-speed=".75" className="main-header">
              <h1 className="main-title">{t("headers.home_header")}</h1>
              <p className="main-slogan puff-in-center">
                {t("paragraphs.home_paragraph")}
              </p>
            </div>
          </div>
        </header>
        <div className="portfolo">
          <div className="container">
            <main className="gallery">
              <div data-speed=".9" className="gallery__left">
                {videoItems.slice(0, 4).map((item, i) => (
                  <VideoCard key={i} item={item} index={i} />
                ))}
              </div>
              <div data-speed="1.1" className="gallery__right">
                {videoItems.slice(4, 8).map((item, i) => (
                  <VideoCard key={i} item={item} index={i} />
                ))}
              </div>
            </main>
            <div className="gallery-mobile">
              {videoItems.map((item, i) => (
                <VideoCard key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
