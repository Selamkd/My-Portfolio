import React, { useState } from 'react';
import { MdSkipNext } from 'react-icons/md';
import { MdOutlineSkipPrevious } from 'react-icons/md';
import trackIds from '../db/playlist.json';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { CiPlay1 } from 'react-icons/ci';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import { MdOutlineRestartAlt } from 'react-icons/md';
import { useEffect } from 'react';
const SpotifyPlayer = (props) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [shuffledTrackIds, setShuffledTrackIds] = useState([]);
  const shuffleArray = (array) => {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;

      if (nextIndex >= filteredTracks.length) {
        const reshuffledTrackIds = shuffleArray(trackIds);
        setShuffledTrackIds(reshuffledTrackIds);
        return 0;
      }
      return nextIndex;
    });
  };

  const playPreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) => {
      const nextIndex =
        (prevIndex - 1 + filteredTracks.length) % filteredTracks.length;
      return nextIndex;
    });
  };

  useEffect(() => {
    const shuffledTrackIds = shuffleArray(trackIds);
    setShuffledTrackIds(shuffledTrackIds);
  }, []);

  const filteredTracks = shuffledTrackIds.filter(
    (track) => track.moodTag === props.mood
  );
  const currentTrack = filteredTracks[currentTrackIndex];
  const spotifyEmbedUrl = `https://open.spotify.com/embed/track/${currentTrack?.trackId}`;

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
