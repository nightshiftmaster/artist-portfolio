import SwiperSlider from "../components/SwiperSlider";
import { useEffect, useState, useRef } from "react";
import { IoIosClose } from "react-icons/io";
import { useTranslation } from "react-i18next";

const files = require.context("/public/images/photos", false);

const items = files
  .keys()
  .map((fileName) => `/images/photos${fileName.slice(1)}`);

const Gallery = () => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  }, [index]);

  return (
    <div className="photo-gallery" style={{ overflow: isOpen ? "hidden" : "" }}>
      {/* gallery mobile */}
      <div className="foto-gallery-mobile">
        <div className="description-mobile">
          <div className="logo tracking-in-expand">
            {t(`headers.gallery_header`)}
          </div>
          <p className="text-block__p fade-in">
            {t(`paragraphs.gallery_paragraph`)}
          </p>
        </div>
        <div
          className={`active-foto tilt-in-bottom-2 ${isOpen ? "opened" : ""}`}
        >
          <swiper-container
            ref={swiperRef}
            style={{ width: "100%", height: "60vh" }}
            slides-per-view="1"
            navigation
            initial-slide={index}
            injectStyles={[
              `
                .swiper-button-next,
                .swiper-button-prev {
                  color: white;
                  padding: 5vw
            }`,
            ]}
          >
            {items.map((item, i) => {
              return (
                <swiper-slide
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: "100%",
                      width: "fit-content",
                    }}
                  >
                    <img
                      onClick={() => setOpen(false)}
                      src={item}
                      alt=""
                      style={{
                        borderRadius: "20px",
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        color: "white",
                        objectFit: "contain",
                      }}
                    />
                    <IoIosClose
                      size="35"
                      onClick={() => setOpen(false)}
                      style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                      }}
                    />
                  </div>
                </swiper-slide>
              );
            })}
          </swiper-container>
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
        <SwiperSlider
          index={index}
          setIndex={setIndex}
          mainClass="slider_mobile"
          items={items}
          setOpen={setOpen}
          isOpen={isOpen}
        />
        <SwiperSlider mainClass="slider_bg" items={items} />
      </div>

      {/* gallery desktop */}
      <div className="gallery-desktop">
        <div className={`description ${index > 0 ? "hidden" : ""}`}>
          <div className="logo">{t(`headers.gallery_header`)}</div>
          <p>{t(`paragraphs.gallery_paragraph`)}</p>
        </div>
        <div className="swiper-container">
          <SwiperSlider
            setIndex={setIndex}
            mainClass="slider_main"
            items={items}
            setOpen={setOpen}
          />
          <SwiperSlider mainClass="slider_bg" items={items} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
