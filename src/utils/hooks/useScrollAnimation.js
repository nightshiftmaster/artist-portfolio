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
    const items = document.querySelectorAll(".gallery__item");

    // Функция для отслеживания видимости элементов
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Когда элемент появляется на экране, анимация начинается (движение в центр)
            entry.target.classList.add("visible");
            entry.target.classList.remove("reverse");
          } else {
            // Когда элемент выходит с экрана, анимация в обратном направлении (движение влево)
            entry.target.classList.add("reverse");
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useScrollAnimation;
