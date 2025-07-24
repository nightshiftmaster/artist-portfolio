import styles from "./Home.module.css";
import { videoItems } from "../../assets/constants";
import VideoCard from "./components/VideoCard";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { getSmoother } from "./hooks/useScrollAnimation";
import { RxVideo } from "react-icons/rx";
import { MdOutlineMusicVideo } from "react-icons/md";

const Home = () => {
  const targetRef = useRef(null);
  const { t } = useTranslation();
  const smoother = getSmoother();
  useScrollAnimation();

  const scrollToElement = () => {
    if (targetRef?.current && smoother) {
      smoother.scrollTo(targetRef.current, true, "top");
    }
  };

  return (
    <div className="home">
      <div className={styles.home_container}>
        <header className="hero-section fade-in">
          <img
            data-speed=".6"
            className={styles.hero}
            src="./images/hero3.png"
            alt="main-image"
          />
          <div className={`${styles.container} fade-in`}>
            <div data-speed=".75" className={styles.main_header}>
              <h1 className={styles.main_title}>{t("headers.home_header")}</h1>
              <p className={`${styles.main_slogan} puff-in-center`}>
                {t("paragraphs.home_paragraph")}
              </p>
            </div>
          </div>
        </header>
        <div className={`${styles.hero_buttons} fade-in`}>
          <button className={styles.hero_button} onClick={scrollToElement}>
            <RxVideo size="20" color="white" />
            <h2>{t("buttons.watch_videos")}</h2>
          </button>
          <Link to="/music" className={styles.hero_button}>
            <MdOutlineMusicVideo size="19" color="white" />
            <h2>{t("buttons.listen_music")}</h2>
          </Link>
        </div>
        <div className="portfolio" ref={targetRef}>
          <div className={styles.container}>
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
    </div>
  );
};

export default Home;
