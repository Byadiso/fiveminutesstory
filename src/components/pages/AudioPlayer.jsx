import React, { useState, useRef, useEffect } from "react";
import "../../Style/AudioPlayer.css"; // For styling
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';


const AudioPlayer = ({ audioFiles }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", () =>
        setDuration(audio.duration)
      );
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioFiles[currentTrackIndex].path;
      setCurrentTime(0); // Reset time to 0 whenever a new track is loaded

      // Auto-play the audio if it was already playing
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrackIndex, audioFiles, isPlaying]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleForward = () => {
    audioRef.current.currentTime += 10; // Skip forward 10 seconds
  };

  const handleBackward = () => {
    audioRef.current.currentTime -= 10; // Skip backward 10 seconds
  };

  const handleProgressBarChange = (event) => {
    const newTime = parseFloat(event.target.value);
    audioRef.current.currentTime = newTime;
  };

  const nextAudioHandler = () => {
    if (currentTrackIndex < audioFiles.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      setCurrentTrackIndex(0); // Loop back to the first track
    }
  };

  const previousAudioHandler = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    } else {
      setCurrentTrackIndex(audioFiles.length - 1); // Loop to the last track
    }
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={audioFiles[currentTrackIndex].path} />

      <div className="audio-info">
        <div className="audio-time">
          <p>
            <i>Now Playing: "{audioFiles[currentTrackIndex].name}"</i>
          </p>
        </div>
      </div>

      <div className="controls">
        <button onClick={previousAudioHandler} className="control-btn">
          <SkipPreviousIcon />
        </button>
        <button onClick={handleBackward} className="control-btn">
          <FastRewindIcon />
        </button>
        <button onClick={togglePlayPause} className="control-btn">
          {isPlaying ? <PauseCircleIcon /> : <PlayCircleIcon />}
        </button>
        <button onClick={handleForward} className="control-btn">
          <FastForwardIcon />
        </button>
        <button onClick={nextAudioHandler} className="control-btn">
          <SkipNextIcon />
        </button>
      </div>

      <div className="progress-bar-container">
        <span>{formatTime(currentTime)}</span>{" "}
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          step="0.1"
          onChange={handleProgressBarChange}
          className="progress-bar"
        />
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default AudioPlayer;

