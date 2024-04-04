import { SlSocialSpotify } from 'react-icons/sl';
// import SpotifyPlayer from '../components/SpotifyPlayer';
import { useState } from 'react';
import rainbow from '../public/rainbow.svg';
import inLove from '../public/InLove.svg';
import disco from '../public/disco.svg';
import sad from '../public/sad.svg';
import Image from 'next/image';

const SpotifyPlayer = ({ mood, onClose }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const trackIds = [
    { moodTag: 'upbeat', trackId: 'track_id_1' },
    { moodTag: 'dance', trackId: 'track_id_2' },
    { moodTag: 'chill', trackId: 'track_id_3' },
    { moodTag: 'calm', trackId: 'track_id_4' },
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledTrackIds = shuffleArray(trackIds);

  const filteredTracks = shuffledTrackIds.filter(
    (track) => track.moodTag === mood
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
    <div className="spotify-player">
      <iframe
        src={spotifyEmbedUrl}
        width="320"
        height="380"
        allowTransparency="true"
        allow="encrypted-media"
        className="spotify-container"
        autoPlay
      />
      <div className="controls">
        <button onClick={playPreviousTrack}>
          <svg
            className="w-8 h-8"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
          </svg>
        </button>
        <button onClick={playNextTrack}>
          <svg
            className="w-8 h-8"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
          </svg>
        </button>
      </div>
      <button className="close-button" onClick={onClose}>
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
  );
};

const PlaylistSelection = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleSelection = (mood) => {
    setSelectedMood(mood);
  };

  const handleRefresh = () => {
    setSelectedMood(null);
  };

  return (
    <section className="playlist-selection">
      <div className="menu">
        {!selectedMood ? <h1>Choose your current mood</h1> : null}
        <div className="moods">
          {selectedMood ? (
            <SpotifyPlayer mood={selectedMood} onClose={handleRefresh} />
          ) : (
            <>
              <div className="mood" onClick={() => handleSelection('upbeat')}>
                <Image src={rainbow} alt="Upbeat" width={350} height={350} />
              </div>
              <div className="mood" onClick={() => handleSelection('dance')}>
                <Image src={disco} alt="Dance" width={350} height={350} />
              </div>
              <div className="mood" onClick={() => handleSelection('chill')}>
                <Image src={inLove} alt="Chill" width={350} height={350} />
              </div>
              <div className="mood" onClick={() => handleSelection('calm')}>
                <Image src={sad} alt="Calm" width={350} height={350} />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlaylistSelection;
