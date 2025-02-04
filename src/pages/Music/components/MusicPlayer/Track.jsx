import React from "react";
import styles from "./MusicPlayer.module.css";

const Track = ({ isPlaying, activeSong }) => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "-10px",
        flex: "1",
        gap: "2vh",
        justifyContent: "start",
        alignItems: "center",
      }}
      // className="flex-1 flex items-center justify-start"
    >
      <div
        className={`${styles.player_artwork} ${
          isPlaying ? styles.playing : styles.stopped
        }`}
      >
        <img
          src={activeSong.artwork}
          className={styles.active_song}
          alt="cover art"
        />
      </div>
      <div className={styles.player_title}>
        <h1 className={styles.song_artist}>{activeSong.artist}</h1>
        <p className="text-block__p">{activeSong.title}</p>
      </div>
    </div>
  );
};

export default Track;
