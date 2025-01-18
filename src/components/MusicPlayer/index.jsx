import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

import {
  nextSong,
  prevSong,
  playPause,
} from "../../redux/features/playerSlice";
import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import Track from "./Track";
import VolumeBar from "./VolumeBar";

const MusicPlayer = () => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
    useSelector((state) => state.player);
  const [isOpen, setOpen] = useState(true);
  const [isCollapsed, setCollapsed] = useState(false);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSongs?.length) dispatch(playPause(true));
    if (isActive && isPlaying) {
      setOpen(true);
    }
  }, [currentIndex]);

  const handlePlayPause = () => {
    setOpen(true);
    if (!isActive) return;

    isPlaying ? dispatch(playPause(false)) : dispatch(playPause(true));
  };

  const handleNextSong = () => {
    dispatch(playPause(false));
    !shuffle
      ? dispatch(nextSong((currentIndex + 1) % currentSongs.length))
      : dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      return;
    }
    shuffle
      ? dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)))
      : dispatch(prevSong(currentIndex - 1));
  };

  return (
    <div
      className={`player ${isActive && isOpen ? "player-opened" : ""} ${
        isCollapsed ? "collapsed" : ""
      }`}
    >
      {isCollapsed ? (
        <MdKeyboardArrowUp
          size="35"
          style={{
            position: "absolute",
            top: "0",
            right: "30",
          }}
          onClick={() => setCollapsed(!isCollapsed)}
        />
      ) : (
        <MdKeyboardArrowDown
          size="35"
          style={{
            position: "absolute",
            top: "0",
            right: "30",
          }}
          onClick={() => setCollapsed(!isCollapsed)}
        />
      )}

      <IoIosClose
        size="35"
        onClick={() => {
          dispatch(playPause(false));
          setOpen(false);
        }}
        style={{
          position: "absolute",
          top: "0",
          right: "0",
        }}
      />
      <Track
        isPlaying={isPlaying}
        isActive={isActive}
        activeSong={activeSong}
      />
      <div className="player-control">
        <Controls
          isPlaying={isPlaying}
          isActive={isActive}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          currentIndex={currentIndex}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>
      <VolumeBar
        value={volume}
        min="0"
        max="1"
        onChange={(event) => setVolume(event.target.value)}
        setVolume={setVolume}
      />
    </div>
  );
};

export default MusicPlayer;
