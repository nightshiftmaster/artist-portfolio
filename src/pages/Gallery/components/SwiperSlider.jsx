import { Swiper } from "swiper";
import styles from "../Gallery.module.css";
import { useEffect, useRef, useState } from "react";
import { Controller, Mousewheel, Parallax, Pagination } from "swiper/modules";

const SwiperSlider = ({
  setIndex,
  mainClass,
  items,
  setOpen,
  isOpen,
  index,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const swiperRef = useRef(null);
  useEffect(() => {
    const sliderBg = new Swiper(`.${styles.slider_bg}`, {
      modules: [Parallax],
      centeredSlides: true,
      spaceBetween: 20,
      slidesPerView: 3.5,
    });
    const sliderMain = new Swiper(`.${styles.slider_main}`, {
      modules: [Mousewheel, Controller, Pagination],
      // freeMode: true,
      centeredSlides: true,
      mousewheel: true,
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

    const mobileMain = new Swiper(`.${styles.slider_mobile}`, {
      modules: [Mousewheel, Controller, Pagination],
      freeMode: true,
      centeredSlides: true,
      controller: { control: sliderBg },
    });

    sliderMain.on("slideChange", function () {
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
  }, [setOpen, setIndex]);

  useEffect(() => {
    setActiveIndex(null);
  }, [index]);

  return (
    <div className={`${mainClass}`} ref={swiperRef}>
      <div className={`swiper-wrapper ${styles.slider__wrapper}`}>
        {items.map((item, i) => {
          return (
            <div
              key={i}
              className={`swiper-slide ${styles.slider__item} ${
                activeIndex === i && mainClass !== styles.slider_mobile
                  ? styles.opened
                  : ""
              }`}
              onClick={() => {
                if (mainClass === styles.slider_mobile) {
                  setIndex(i);
                }
                setOpen(!isOpen);

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
              <img
                className={styles.slider__element}
                src={item}
                alt="slider-element"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SwiperSlider;
