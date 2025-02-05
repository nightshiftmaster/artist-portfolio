import React from "react";
import styles from "./MusicPlayer.module.css";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsFillPauseFill,
  BsFillPlayFill,
} from "react-icons/bs";

const Controls = ({
  isPlaying,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => {
  return (
    <div className={styles.player_buttons}>
      {currentSongs?.length && (
        <MdSkipPrevious
         
          color="#FFF"
          className={styles.control_icon}
          onClick={handlePrevSong}
        />
      )}
      {isPlaying ? (
        <BsFillPauseFill
        
          color="#FFF"
          onClick={handlePlayPause}
          className={styles.control_icon}
        />
      ) : (
        <BsFillPlayFill
       
          color="#FFF"
          onClick={handlePlayPause}
          className={styles.control_icon}
        />
      )}
      {currentSongs?.length && (
        <MdSkipNext
          
          color="#FFF"
          className={styles.control_icon}
          onClick={handleNextSong}
        />
      )}
    </div>
  );
};

export default Controls;
