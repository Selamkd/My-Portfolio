import React, { useState } from 'react';
import { MdSkipNext } from 'react-icons/md';
import { MdOutlineSkipPrevious } from 'react-icons/md';
import trackIds from '../db/playlist.json';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { CiPlay1 } from 'react-icons/ci';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import { MdOutlineRestartAlt } from 'react-icons/md';
const SpotifyPlayer = (props) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [isPlaying, setIsPlaying] = useState(true);

  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex < filteredTracks.length ? nextIndex : 0;
    });
  };

  const playPreviousTrack = () => {
    setCurrentTrackIndex(
      (prevIndex) =>
        (prevIndex - 1 + shuffledTrackIds.length) % shuffledTrackIds.length
    );
  };

  const shuffledTrackIds = shuffleArray(trackIds);

  const filteredTracks = shuffledTrackIds.filter(
    (track) => track.moodTag === props.mood
  );

  const spotifyEmbedUrl = `https://open.spotify.com/embed/track/${filteredTracks[currentTrackIndex]?.trackId}`;

  return (
    <div className="spotify-player fixed left-0 top-0 flex flex-col items-center justify-center pointer-events-auto mt-[8%] w-full h-[60%] bg-gray-900 z-900 py-8 bg-opacity-80 sticky-0">
      <div className="bg-gray-800 bg-opacity-40 p-6 px-9 rounded-lg shadow-md w-120 relative">
        <iframe
          id="spotify-player"
          src={spotifyEmbedUrl}
          width="320"
          height="380"
          allowTransparency="true"
          allow="encrypted-media"
          className="spotify-container pt-0"
          autoPlay
        ></iframe>
        <div className="controls flex w-full gap-9 justify-center items-center">
          <button onClick={playPreviousTrack}>
            <GrPrevious
              className="text-white  hover:text-neonGreen"
              size={35}
            />
          </button>
          <button onClick={props.refresh}>
            <MdOutlineRestartAlt
              className="text-white  hover:text-neonGreen  "
              size={30}
            />
          </button>
          <button onClick={playNextTrack}>
            <GrNext className="text-white  hover:text-neonGreen  " size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpotifyPlayer;
