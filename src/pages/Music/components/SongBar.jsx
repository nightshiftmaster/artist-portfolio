import PlayPause from "./PlayPause";
import styles from "../Music.module.css";

const SongBar = ({
  song,
  data,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  const { artist, title, artwork } = song;
  return (
    <div
      className={`${styles.song_container} ${
        song === activeSong ? styles.active : ""
      }`}
    >
      <div className={styles.songbar_image_container}>
        <img
          className={styles.songbar_artwork}
          src={artwork}
          alt="song-artwork"
        />
      </div>
      <div className={styles.songbar_text_block}>
        <h1 className={`text-block__h ${styles.song_artist}`}>{artist}</h1>
        <p className={`text-block__p ${styles.song_title}`}>{title}</p>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={() => {
          console.log("play");
          handlePlayClick(song, i, data);
        }}
      />
    </div>
  );
};

export default SongBar;
