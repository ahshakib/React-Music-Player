/* eslint-disable react/prop-types */
const TrackList = ({ tracks, onTrackChange }) => {
  return (
    <div className="track-list mt-6">
      {tracks.map((track) => (
        <div
          key={track.id}
          className="track-item p-4 bg-gray-700 hover:bg-gray-600 rounded-lg cursor-pointer"
          onClick={() => onTrackChange(track)}
        >
          {track.title}
        </div>
      ))}
    </div>
  );
};

export default TrackList;
