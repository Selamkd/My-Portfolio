import React, { useState } from 'react';
import { MdSkipNext } from 'react-icons/md';
import { MdOutlineSkipPrevious } from 'react-icons/md';
import trackIds from '../db/playlist.json';
import { RiArrowGoBackLine } from 'react-icons/ri';
const SpotifyPlayer = (props) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledTrackIds = shuffleArray(trackIds);

  const filteredTracks = shuffledTrackIds.filter(
    (track) => track.moodTag === props.mood
  );

  const playNextTrack = () => {
    const randomIndex = Math.floor(Math.random() * filteredTracks.length);
    setCurrentTrackIndex(randomIndex);
  };

  const playPreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? filteredTracks.length - 1 : prevIndex - 1
    );
  };

  const spotifyEmbedUrl = `https://open.spotify.com/embed/track/${filteredTracks[currentTrackIndex]?.trackId}`;

  return (
    <div className="fixed left-0 top-0  flex flex-col items-center justify-center pointer-events-auto mt-[8%]   w-full h-[60%] bg-gray-900 z-900  py-6 bg-opacity-80  sticky-0 ">
      <iframe
        src={spotifyEmbedUrl}
        width="320"
        height="380"
        allowTransparency="true"
        allow="encrypted-media"
        className="spotify-container mt-15 pt-0"
        autoPlay
      />
      <div>
        <div class="flex justify-center items-center p-3 mt-1">
          <div class="text-grey-darker">
            <svg
              class="w-8 h-8 pointer-events-auto"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={playPreviousTrack}
            >
              <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
            </svg>
          </div>

          <div class="text-grey-darker">
            <svg
              class="w-8 h-8 pointer-events-auto"
              fill="white  "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={playNextTrack}
            >
              <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
            </svg>
          </div>
          <div class="text-grey-darker">
            <RiArrowGoBackLine
              class="w-8 h-8 text-white hover:text-purple  ml-6  "
              onClick={props.refresh}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyPlayer;
