import { Swiper } from "swiper";
import { useEffect, useRef, useState } from "react";
import { Controller, Mousewheel, Parallax, Pagination } from "swiper/modules";
import { IoIosClose } from "react-icons/io";

const SwiperSlider = ({ setIndex, mainClass, items, index }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [opened, setOpened] = useState(false);
  const [aciveUrl, setActiveUrl] = useState(null);
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
      modules: [Parallax, Mousewheel, Controller, Pagination],
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
          slidesPerView: 3.5,
          spaceBetween: 40,
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
      setOpened(false);

      if (typeof setIndex === "undefined") {
        return;
      } else {
        setIndex(mobileMain.activeIndex);
      }
    });

    return () => {
      sliderMain.destroy();
    };
  }, [setIndex]);

  return (
    <div className={`swiper slider ${mainClass}`} ref={swiperRef}>
      <div className={`active-foto tilt-in-bottom-2 ${opened ? "opened" : ""}`}>
        <div
          onClick={() => setOpened(false)}
          style={{
            position: "absolute",

            top: "15vh",
            right: "10vw",
          }}
        >
          <IoIosClose size="45" />
        </div>
        <img
          src={aciveUrl}
          alt="active-image"
          onClick={() => setOpened(false)}
          style={{
            width: "80%",
            height: "70%",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="custom-pagination">
        {items.map((_, i) => {
          return (
            <button
              key={i}
              className={`pagination-bullet ${index === i ? "active" : ""}`}
            ></button>
          );
        })}
      </div>

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
                setOpened(!opened);
                setActiveUrl(item);
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
