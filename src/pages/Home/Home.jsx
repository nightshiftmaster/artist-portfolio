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
          className={styles.hero}
          src="./images/hero3.png"
          alt="main-image"
        />
        <div className="container fade-in">
          <div data-speed=".75" className={styles.main_header}>
            <h1 className={styles.main_title}>{t("headers.home_header")}</h1>
            <p className={`${styles.main_slogan} puff-in-center`}>
              {t("paragraphs.home_paragraph")}
            </p>
          </div>
        </div>
      </header>
      <div className="portfolo">
        <div className="container">
          <main className={styles.gallery}>
            <div data-speed=".9" className={styles.gallery__left}>
              {videoItems.slice(0, 4).map((item, i) => {
                return <VideoCard key={i} item={item} index={i} />;
              })}
            </div>
            <div data-speed="1.1" className={styles.gallery__right}>
              {videoItems.slice(4, 8).map((item, i) => {
                return <VideoCard key={i} item={item} index={i} />;
              })}
            </div>
          </main>
          <div className={styles.gallery_mobile}>
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
