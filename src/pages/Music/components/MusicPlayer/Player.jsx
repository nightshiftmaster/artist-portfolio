/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from "react";

const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions

  useEffect(() => {
    const handleUserInteractionAutoplay = () => {
      if (ref.current && activeSong) {
        ref.current
          .play()
          .catch((err) => console.error("Audio play error:", err));
      }
    };
    const handleUserInteraction = () => {
      if (isPlaying) {
        ref?.current
          ?.play()
          .catch((err) => console.error("Audio play error:", err));
      } else {
        ref?.current?.pause();
      }
    };

    // document.addEventListener("click", handleUserInteractionAutoplay, {
    //   once: true,
    // });

    document.addEventListener("click", handleUserInteraction, {
      once: true,
    });

    return () => {
      document.removeEventListener("click", handleUserInteractionAutoplay);
    };
  }, [activeSong, isPlaying]);

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);

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
