import React from "react";

const Track = ({ isPlaying, isActive, activeSong }) => {
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
      <div className={`player-artwork ${isPlaying ? "playing" : "stopped"}`}>
        <img src={activeSong.artwork} className="active-song" alt="cover art" />
      </div>
      <div className="player-title">
        <h className="text-block__h">{activeSong.artist}</h>
        <p className="text-block__p song-title">{activeSong.title}</p>
      </div>
    </div>
  );
};

export default Track;
