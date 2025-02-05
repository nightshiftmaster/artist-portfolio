/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from "react";

const Player = ({
  activeSong,
  isPlaying,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions


  if (ref.current) {
    if (isPlaying) {
      ref.current
        .play()
        .catch((err) => console.error("Audio play error:", err)); 
    } else {
      ref?.current?.pause();
    }
  }

  useEffect(() => {
    if (ref.current && activeSong) {
      ref.current
        .play()
        .catch((err) => console.error("Audio play error:", err)); 
    }
  }, [activeSong]);



  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime, activeSong]);

  return (
    <audio
      src={activeSong?.audio}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
