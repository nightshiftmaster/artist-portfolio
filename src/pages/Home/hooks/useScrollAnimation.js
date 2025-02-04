import styles from "../Home.module.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "my-vlad-scroll";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const useScrollAnimation = () => {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: ".wrapper",
      content: ".content",
    });
    if (ScrollTrigger.isTouch !== 1) {
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
      const itemsLeft = gsap.utils.toArray(`
        .${styles.gallery__left}
        .${styles.gallery__item}`);

      const itemsRight = gsap.utils.toArray(
        `.${styles.gallery__right} .${styles.gallery__item}`
      );

      itemsLeft.forEach((item) => {
        gsap.fromTo(
          item,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 4,

            scrollTrigger: { trigger: item, scrub: true },
          }
        );
        gsap.fromTo(
          item,
          { opacity: 4 },
          {
            opacity: 0.2,
            // start: "-150",
            // end: "-10",
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
            scrollTrigger: { trigger: item, scrub: true },
          }
        );
        gsap.fromTo(
          item,
          { opacity: 4 },
          {
            opacity: 0.2,
            scrollTrigger: {
              trigger: item,
              scrub: true,
            },
          }
        );
      });
    }
    const items = document.querySelectorAll(`.${styles.gallery__item}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            entry.target.classList.remove(styles.reverse);
          } else {
            // entry.target.classList.add(styles.reverse);
            // entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useScrollAnimation;
