import styles from "../Home.module.css";
import { useTranslation } from "react-i18next";
import React, { useEffect, useRef } from "react";
import Player from "@vimeo/player";
import { playPause } from "../../../redux/features/playerSlice";
import { useDispatch, useSelector } from "react-redux";

const VideoCard = ({ item }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const iframeRef = useRef(null);
  const { isPlaying } = useSelector((state) => state.player);

  useEffect(() => {
    const player = new Player(iframeRef.current);
    if (isPlaying) {
      player.pause();
    }

    player.on("play", () => {
      dispatch(playPause(false));
    });

    return () => {
      player.off("play");
    };
  }, [isPlaying, dispatch]);

  return (
    <div className={styles.gallery__item}>
      <div className={styles.video_description}>
        <h2 className="text-block__h">{t(`headers.video.${item.id}`)}</h2>
        <p className="text-block__p">{t(`paragraphs.video.${item.id}`)}</p>
      </div>

      <div className={styles.video}>
        <iframe
          ref={iframeRef}
          title={item.name}
          src={item.url}
          className={styles.video_file}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        ></iframe>
      </div>
    </div>
  );
};
export default VideoCard;
