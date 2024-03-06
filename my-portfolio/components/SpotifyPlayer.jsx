import React, { useState } from 'react';
import { MdSkipNext } from 'react-icons/md';
import { MdOutlineSkipPrevious } from 'react-icons/md';
const SpotifyPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const trackIds = [
    '7aqfrAY2p9BUSiupwk3svU',
    '0Em4eY10PGyiBlmjWxcav3',
    '5M3KOe4FGUidvRDUbFFdFk',
    '5WoaF1B5XIEnWfmb5NZikf',
    '1YIy56OJyVpuzoTQYiqkpg',
    '7DfFc7a6Rwfi3YQMRbDMau',
  ];

  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % trackIds.length);
  };

  const playPreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? trackIds.length - 1 : prevIndex - 1
    );
  };

  const spotifyEmbedUrl = `https://open.spotify.com/embed/track/${trackIds[currentTrackIndex]}`;

  return (
    <div>
      <iframe
        src={spotifyEmbedUrl}
        width="300"
        height="380"
        allowTransparency="true"
        allow="encrypted-media"
        className="spotify-container"
        autoPlay
      />
      <div>
        {/* <MdSkipNext  onClick={playPreviousTrack} />
        <MdOutlineSkipPrevious onClick={playNextTrack} /> */}
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
            <svg
              class="w-8 h-8 hover:text-purple"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyPlayer;
