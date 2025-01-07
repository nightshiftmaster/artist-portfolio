import SwiperSlider from "../components/SwiperSlider";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const files = require.context("/public/images/photos", false);

const items = files
  .keys()
  .map((fileName) => `/images/photos${fileName.slice(1)}`);

const Gallery = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  return (
    <div className="photo-gallery">
      <div className="gallery-mobile">
        <div className="description-mobile">
          <div className="logo tracking-in-expand">
            {t(`headers.gallery_header`)}
          </div>
          <p className="text-block__p fade-in">
            {t(`paragraphs.gallery_paragraph`)}
          </p>
        </div>

        <SwiperSlider
          setIndex={setIndex}
          mainClass="slider_mobile"
          items={items}
        />
        <SwiperSlider mainClass="slider_bg" items={items} />
      </div>
      <div className="gallery-desktop">
        <div className={`description ${index > 0 ? "hidden" : "fade-in"}`}>
          <div className="logo">{t(`headers.gallery_header`)}</div>
          <p>{t(`paragraphs.gallery_paragraph`)}</p>
        </div>
        <div className="swiper-container">
          <SwiperSlider
            setIndex={setIndex}
            mainClass="slider_main"
            items={items}
          />
          <SwiperSlider mainClass="slider_bg" items={items} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
