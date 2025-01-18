import { Swiper } from "swiper";
import { useEffect, useRef, useState } from "react";
import { Controller, Mousewheel, Parallax, Pagination } from "swiper/modules";

const SwiperSlider = ({ setIndex, mainClass, items, setOpen, isOpen }) => {
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
      modules: [Mousewheel, Controller, Pagination],
      freeMode: true,
      centeredSlides: true,
      parallax: true,
      controller: { control: sliderBg },
      breakpoints: {
        0: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        680: {
          slidesPerView: 4,
          spaceBetween: 55,
        },
      },
    });

    const mobileMain = new Swiper(".slider_mobile", {
      modules: [Mousewheel, Controller, Pagination],
      freeMode: true,
      parallax: true,
      centeredSlides: true,
      controller: { control: sliderBg },
    });

    sliderMain.on("slideChange", function () {
      setActiveIndex(null);

      if (typeof setIndex === "undefined") {
        return;
      } else {
        setIndex(sliderMain.activeIndex);
      }
    });

    mobileMain.on("slideChange", function () {
      setActiveIndex(null);
      setOpen(false);

      if (typeof setIndex === "undefined") {
        return;
      } else {
        setIndex(mobileMain.activeIndex);
      }
    });

    return () => {
      sliderMain.destroy();
    };
  }, [setIndex, setOpen]);

  return (
    <div className={`swiper slider ${mainClass}`} ref={swiperRef}>
      <div className="swiper-wrapper slider__wrapper">
        {items.map((item, i) => {
          return (
            <div
              key={i}
              className={`swiper-slide slider__item ${
                activeIndex === i && mainClass !== "slider_mobile"
                  ? "opened"
                  : ""
              }`}
              onClick={() => {
                setOpen(!isOpen);
                setIndex(i);
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
          // <div
          //   key={i}
          //   className={`swiper-slide slider__item ${
          //     activeIndex === i ? "opened" : ""
          //   }`}
          //   onClick={() => {
          //     setOpened(!opened);
          //     setActiveIndex((prev) => {
          //       if (prev === i) {
          //         prev = null;
          //         return prev;
          //       } else {
          //         prev = i;
          //         return prev;
          //       }
          //     });
          //   }}
          // >
          //   <div
          //     className="slider__img"
          //     data-swiper-parallax={i % 2 === 0 ? "20%" : "30%"}
          //     style={{
          //       backgroundImage: `url(${item})`,
          //     }}
          //   ></div>
          // </div>
        })}
      </div>
    </div>
  );
};

export default SwiperSlider;
