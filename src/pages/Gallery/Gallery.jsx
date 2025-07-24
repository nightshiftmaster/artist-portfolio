import SwiperSlider from "./components/SwiperSlider";
import styles from "./Gallery.module.css";
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
    <div className={styles.photo_gallery}>
      {/* gallery mobile */}
      <div className={styles.foto_gallery_mobile}>
        <div className={styles.description_mobile}>
          <div className="logo tracking-in-expand">
            {t(`headers.gallery_header`)}
          </div>
          <p className="text-block__p fade-in">
            {t(`paragraphs.gallery_paragraph`)}
          </p>
        </div>

        {/* active foto mode mobile */}

        <div
          className={`${styles.active_foto} tilt-in-bottom-2 ${
            isOpen ? styles.opened : ""
          }`}
        >
          <swiper-container
            ref={swiperRef}
            style={{ width: "100%", height: "60vh" }}
            slides-per-view="1"
            navigation
            // loop
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
                  <div className={styles.slide_image_container}>
                    <img
                      onClick={() => setOpen(false)}
                      src={item}
                      alt="pic"
                      className={styles.active_image}
                    />
                    <IoIosClose
                      size="38"
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
        <div className={styles.custom_pagination}>
          {items.map((_, i) => {
            return (
              <button
                key={i}
                className={`${styles.pagination_bullet} ${
                  index === i ? styles.active : ""
                }`}
              ></button>
            );
          })}
        </div>
        <SwiperSlider
          index={index}
          setIndex={setIndex}
          mainClass={styles.slider_mobile}
          items={items}
          setOpen={setOpen}
          isOpen={isOpen}
        />
      </div>

      {/* gallery desktop */}
      <div className={styles.gallery_desktop}>
        <div
          className={`${styles.description} ${index > 0 ? styles.hidden : ""}`}
        >
          <div className="logo">{t(`headers.gallery_header`)}</div>
          <p style={{ marginTop: "2vh" }}>
            {t(`paragraphs.gallery_paragraph`)}
          </p>
        </div>
        <div className={styles.swiper_container}>
          <SwiperSlider
            setIndex={setIndex}
            index={index}
            mainClass={styles.slider_main}
            items={items}
            setOpen={setOpen}
          />
          <SwiperSlider
            setIndex={setIndex}
            mainClass={styles.slider_bg}
            index={index}
            items={items}
            setOpen={setOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
