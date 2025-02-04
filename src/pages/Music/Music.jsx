import styles from "./Music.module.css";
import { songs } from "../../assets/constants";
import SongBar from "./components/SongBar";
import SongCard from "./components/SongCard";
import { useDispatch, useSelector } from "react-redux";
import { playPause, setActiveSong } from "../../redux/features/playerSlice";
import { useTranslation } from "react-i18next";

const Music = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const handlePlayClick = (song, i, data) => {
    dispatch(setActiveSong({ song, i, data }));
    dispatch(playPause(true));
  };

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  return (
    <div className="music-page">
      <div className={styles.music_container}>
        <h1 className={`${styles.music_header} logo tracking-in-expand`}>
          {t(`headers.music_header`)}
        </h1>
        <div className={styles.songs_container_desktop}>
          {songs.map((song, i) => {
            return (
              <SongCard
                key={song.id}
                song={song}
                data={songs}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
              />
            );
          })}
        </div>
        <div className={styles.songs_container_bg}>
          {songs.map((song, i) => {
            return (
              <SongCard
                key={song.id}
                song={song}
                data={songs}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
              />
            );
          })}
        </div>

        <div className={styles.songs_container_mobile}>
          {songs.map((song, i) => {
            return (
              <SongBar
                key={song.id}
                song={song}
                data={songs}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Music;
