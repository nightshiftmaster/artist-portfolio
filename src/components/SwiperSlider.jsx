import { Swiper } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import { Controller, Mousewheel, Parallax, Pagination } from "swiper/modules";

const SwiperSlider = ({ setIndex, mainClass, items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const swiperRef = useRef(null);
  useEffect(() => {
    const sliderBg = new Swiper(".slider_bg", {
      modules: [Parallax],
      centeredSlides: true,
      parallax: true,
      spaceBetween: 20,
      slidesPerView: 3.5,
    });
    const sliderMain = new Swiper(".slider_main", {
      modules: [Parallax, Mousewheel, Controller],
      freeMode: true,
      centeredSlides: true,
      parallax: true,
      // mousewheel: true,
      controller: { control: sliderBg },
      breakpoints: {
        0: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        680: {
          slidesPerView: 3.5,
          spaceBetween: 40,
        },
      },
    });

    const mobileMain = new Swiper(".slider_mobile", {
      modules: [Mousewheel, Controller, Pagination],
      pagination: {
        type: "progressbar",
      },
      freeMode: true,
      parallax: true,
      // mousewheel: true,
      controller: { control: sliderBg },
    });

    sliderMain.on("slideChange", function () {
      //   console.log(sliderMain.activeIndex);
      setActiveIndex(null);

      if (typeof setIndex === "undefined") {
        return;
      } else {
        setIndex(sliderMain.activeIndex);
      }
    });

    mobileMain.on("slideChange", function () {
      //   console.log(sliderMain.activeIndex);
      setActiveIndex(null);

      if (typeof setIndex === "undefined") {
        return;
      } else {
        setIndex(sliderMain.activeIndex);
      }
    });

    return () => {
      sliderMain.destroy();
    };
  }, [setIndex]);

  return (
    <>
      <div className={`swiper slider ${mainClass}`} ref={swiperRef}>
        <div className="swiper-wrapper slider__wrapper">
          {items.map((item, i) => {
            return (
              <div
                key={i}
                className={`swiper-slide slider__item ${
                  activeIndex === i ? "opened" : ""
                }`}
                onClick={() => {
                  setActiveIndex((prev) => {
                    if (prev === i) {
                      prev = null;
                      return prev;
                    } else {
                      prev = i;
                      return prev;
                    }
                  });
                }}
              >
                <div
                  className="slider__img"
                  data-swiper-parallax={i % 2 === 0 ? "20%" : "30%"}
                  style={{
                    backgroundImage: `url(${item})`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
};

export default SwiperSlider;
