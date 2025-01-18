import PlayPause from "./PlayPause";

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
      className={`song-card fade-in   ${activeSong === song ? "active" : ""}`}
    >
      <div className="song-image">
        <img
          src={song.artwork}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          alt=""
          srcset=""
        />
        <div style={{ position: "relative", top: "-16vh", left: "13vh" }}>
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
      </div>
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          flexDirection: "column",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <h1
          className="text-block__h song-artist"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {song.artist}
        </h1>

        <p className="text-block__p song-title">{song.title}</p>
      </div>
    </div>
  );
};

export default SongCard;
