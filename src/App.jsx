import { useState } from "react";
import MusicPlayer from "./components/MusicPlayer";
import TrackList from "./components/TrackList";

function App() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  const handleTrackChange = (track) => {
    setCurrentTrack(track);
  };

  const handleFilesUpload = (event) => {
    const files = event.target.files;
    const newTracks = Array.from(files).map((file, index) => ({
      id: index,
      title: file.name,
      src: URL.createObjectURL(file),
    }));
    setTracks([...tracks, ...newTracks]);
  };

  return (
    <div className="app bg-gray-900 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl mb-8">React Music Player</h1>

      <div className="mb-4">
        <input
          type="file"
          accept="audio/*"
          multiple
          onChange={handleFilesUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
        />
      </div>

      {currentTrack && <MusicPlayer currentTrack={currentTrack} />}

      {tracks.length > 0 && (
        <TrackList tracks={tracks} onTrackChange={handleTrackChange} />
      )}
    </div>
  );
}

export default App;
