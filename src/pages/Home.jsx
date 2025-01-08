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
    if (!ScrollTrigger.isTouch) {
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

      const allItems = gsap.utils.toArray(".gallery-mobile .gallery__item");

      // allItems.forEach((item) => {
      //   gsap.fromTo(
      //     item,
      //     { x: -100, opacity: 0 },
      //     {
      //       x: 0,
      //       opacity: 4,
      //       duration: 2,
      //       ease: "power2.out",
      //       start: "top bottom",
      //       end: "top center",
      //       scrollTrigger: { trigger: item, scrub: true },
      //     }
      //   );
      //   gsap.fromTo(
      //     item,
      //     { opacity: 1 },
      //     {
      //       opacity: 0,

      //       ease: "power2.out",
      //       scrollTrigger: {
      //         trigger: item,
      //         start: "bottom center-=200",
      //         end: "bottom ",
      //         scrub: true,
      //       },
      //     }
      //   );
      // });

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
            opacity: 0.2,
            start: "-150",
            end: "-10",
            scrollTrigger: {
              trigger: item,
              scrub: true,
            },
          }
        );
      });

      itemsRight.forEach((item) => {
        gsap.fromTo(
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
        gsap.fromTo(
          item,
          { opacity: 4 },
          {
            opacity: 0.2,
            // start: "-850",
            // end: "-100",
            scrollTrigger: {
              trigger: item,
              scrub: true,
            },
          }
        );
      });
    }
  }, []);
  return (
    <div>
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
              {videoItems.slice(0, 4).map((item, i) => {
                return <VideoCard key={i} item={item} index={i} />;
              })}
            </div>
            <div data-speed="1.1" className="gallery__right">
              {videoItems.slice(4, 8).map((item, i) => {
                return <VideoCard key={i} item={item} index={i} />;
              })}
            </div>
          </main>
          <div className="gallery-mobile">
            {videoItems.map((item, i) => {
              return <VideoCard key={i} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
