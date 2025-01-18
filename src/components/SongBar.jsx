import PlayPause from "./PlayPause";

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
    <div className={`song-container ${song === activeSong ? "active" : ""}`}>
      <div
        style={{
          width: "100px",
          height: "100%",
          borderRadius: "10px",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10%",
          }}
          src={artwork}
          alt="song-artwork"
        />
      </div>
      <div
        className="song-text-block"
        style={{
          display: "flex",
          width: "60%",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 className="text-block__h song-artist">{artist}</h1>
        <p className="text-block__p song-title">{title}</p>
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
