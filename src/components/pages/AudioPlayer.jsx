import React, { useState, useRef, useEffect } from "react";
import "../../Style/AudioPlayer.css";// For styling

const AudioPlayer = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", () => setDuration(audio.duration));
    };
  }, []);

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

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div
      className="audio-player"
      style={{ backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <audio ref={audioRef} src={audioSrc} />

      <div className="audio-info">        
        <div className="audio-time">
          <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="controls">
        <button onClick={handleBackward} className="control-btn">⏪</button>
        <button onClick={togglePlayPause} className="control-btn">
          {isPlaying ? "⏸" : "▶️"}
        </button>
        <button onClick={handleForward} className="control-btn">⏩</button>
      </div>

      <div className="volume-control">
        <label htmlFor="volume-slider">Volume:</label>
        <input
          id="volume-slider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;

/* Example usage in a parent component:
<AudioPlayer 
  audioSrc="path/to/your/audio/file.mp3" 
  title="Your Audio Title" 
  backgroundImage="path/to/your/image.jpg" 
/>
*/
