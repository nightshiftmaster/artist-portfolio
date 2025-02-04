import PlayPause from "./PlayPause";
import styles from "../Music.module.css";

const SongCard = ({
  song,
  data,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <div
      className={`${styles.song_card} fade-in   ${
        activeSong === song ? styles.active : ""
      }`}
    >
      <div className={styles.song_image_container}>
        <img src={song.artwork} className={styles.song_artwork} alt="" />
        <div className={styles.play_pause_container}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={() => {
              handlePlayClick(song, i, data);
            }}
          />
        </div>
      </div>
      <div className={styles.song_text_container}>
        <h1 className={`${styles.song_artist}`}>{song.artist}</h1>

        <p className={`text-block__p ${styles.song_title}`}>{song.title}</p>
      </div>
    </div>
  );
};

export default SongCard;
