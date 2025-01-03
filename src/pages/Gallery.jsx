import SwiperSlider from "../components/SwiperSlider";
import { useState } from "react";

const files = require.context("/public/images/photos", false);

const items = files
  .keys()
  .map((fileName) => `/images/photos${fileName.slice(1)}`);

const Gallery = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="photo-gallery">
      <div className="gallery-mobile">
        <div className="description-mobile">
          <div className="logo tracking-in-expand">Music in my soul</div>
          <p className="text-block__p fade-in">
            The true beauty of music lies in its boundless diversity, the
            enchanting magic of sounds, the delicate balance of style and
            timbre. It is an art of crafting emotions, weaving melodies, and
            delivering this masterpiece to the listener—inviting them to immerse
            themselves and savor the final creation.
          </p>
        </div>
        <div>
          <SwiperSlider
            setIndex={setIndex}
            mainClass="slider_mobile"
            items={items}
          />
          <SwiperSlider mainClass="slider_bg" items={items} />
        </div>
      </div>
      <div className="gallery-desktop">
        <div className={`description ${index > 0 ? "hidden" : "fade-in"}`}>
          <div className="logo">Music in my soul</div>
          <p>
            The true beauty of music lies in its boundless diversity, the
            enchanting magic of sounds, the delicate balance of style and
            timbre. It is an art of crafting emotions, weaving melodies, and
            delivering this masterpiece to the listener—inviting them to immerse
            themselves and savor the final creation.
          </p>
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
