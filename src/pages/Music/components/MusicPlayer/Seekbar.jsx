import styles from "./MusicPlayer.module.css";
import React from "react";
import { useEffect } from "react";

const Seekbar = ({ value, min, max, onInput, setSeekTime, isNewTrack}) => {
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;


  useEffect(() => {
    if (isNewTrack) {
      setSeekTime(0); 
    }
  }, [isNewTrack, setSeekTime]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1vh",
      }}
    >
      <p className={styles.seekBar_time} >
        {value === 0 ? "0:00" : getTime(value)}
      </p>
      <input
        type="range"
        step="any"
        value={value}
        style={{ width: "40vw" }}
        min={min}
        max={max}
        onInput={onInput}
        className={styles.seekBar_style}
      />
      <p className={styles.seekBar_time}>{max === 0 ? "0:00" : getTime(max)}</p>
    </div>
  );
};

export default Seekbar;
