import styles from "./Home.module.css";
import { videoItems } from "../../assets/constants";
import VideoCard from "./components/VideoCard";
import { useTranslation } from "react-i18next";
import useScrollAnimation from "./hooks/useScrollAnimation";

const Home = () => {
  const { t } = useTranslation();
  useScrollAnimation();
  return (
    <div>
      <header className="hero-section fade-in">
        <img
          data-speed=".6"
          className="hero"
          src="./images/hero3.png"
          alt="main-image"
        />
        <div className="container fade-in">
          <div data-speed=".75" className="main-header">
            <h1 className="main-title">{t("headers.home_header")}</h1>
            <p className="main-slogan puff-in-center">
              {t("paragraphs.home_paragraph")}
            </p>
          </div>
        </div>
      </header>
      <div className="portfolo">
        <div className="container">
          <main className="gallery">
            <div data-speed=".9" className="gallery__left">
              {videoItems.slice(0, 4).map((item, i) => {
                return <VideoCard key={i} item={item} index={i} />;
              })}
            </div>
            <div data-speed="1.1" className="gallery__right">
              {videoItems.slice(4, 8).map((item, i) => {
                return <VideoCard key={i} item={item} index={i} />;
              })}
            </div>
          </main>
          <div className="gallery-mobile">
            {videoItems.map((item, i) => {
              return <VideoCard key={i} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
