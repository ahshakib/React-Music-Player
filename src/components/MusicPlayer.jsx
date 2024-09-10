/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const MusicPlayer = ({ currentTrack }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    audioRef.current.volume = volume;
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying, currentTrack, volume]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div className="player bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
      <h2 className="text-2xl mb-4">{currentTrack.title}</h2>
      <audio ref={audioRef} src={currentTrack.src}></audio>

      <div className="controls flex items-center space-x-4">
        <button
          onClick={handlePlayPause}
          className="bg-green-500 p-3 rounded-lg hover:bg-green-400"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <div className="volume-control">
          <label>Volume</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
