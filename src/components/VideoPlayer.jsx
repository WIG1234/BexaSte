import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { FaPlay, FaPause, FaForward, FaBackward, FaTimes } from "react-icons/fa";

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const playerRef = useRef(null);

  const handlePlayPause = () => setPlaying(!playing);
  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    setProgress(newTime);
    playerRef.current.seekTo(newTime, "fraction");
  };

  const handleProgress = (state) => setProgress(state.played);
  const handleSkip = (seconds) => {
    const newTime = Math.min(Math.max(progress + seconds / 100, 0), 1);
    setProgress(newTime);
    playerRef.current.seekTo(newTime, "fraction");
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-black">
      <div className="absolute top-2 right-2 text-white cursor-pointer" onClick={() => console.log("Close player")}> <FaTimes size={20} /> </div>
      <ReactPlayer
        ref={playerRef}
        url="https://www.w3schools.com/html/mov_bbb.mp4"
        playing={playing}
        onProgress={handleProgress}
        width="100%"
        height="100%"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <button onClick={handlePlayPause} className="p-4 bg-black bg-opacity-50 rounded-full">
          {playing ? <FaPause size={30} /> : <FaPlay size={30} />}
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 flex items-center justify-between text-white">
        <FaBackward className="cursor-pointer" onClick={() => handleSkip(-10)} />
        <input type="range" min="0" max="1" step="0.01" value={progress} onChange={handleSeek} className="flex-grow mx-2" />
        <FaForward className="cursor-pointer" onClick={() => handleSkip(10)} />
      </div>
    </div>
  );
};

export default VideoPlayer;
