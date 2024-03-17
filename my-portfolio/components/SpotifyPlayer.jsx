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
    <div>
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
        <div class="flex justify-between items-center mt-1">
          <div class="text-grey-darker">
            <svg
              class="w-8 h-8"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z" />
            </svg>
          </div>
          <div class="text-grey-darker">
            <svg
              class="w-8 h-8"
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
              class="w-8 h-8"
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
              class="w-8 h-8 text-white hover:text-purple   "
              onClick={props.refresh}
            />

            <button
              onClick={() => {
                props.closeModal();
                props.restart();
              }}
              className="text-gray-800 dark:text-gray-400 absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              aria-label="close"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyPlayer;
