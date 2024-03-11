import Intro from './Intro';
import Header from './Header';

import { SlSocialSpotify } from 'react-icons/sl';
import SpotifyPlayer from './SpotifyPlayer';
import { useState } from 'react';
import { FaFaceSadCry } from 'react-icons/fa6';
import { TfiDrupal } from 'react-icons/tfi';
import Image from 'next/image';
export default function PlaylistSelection() {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleSelection = (mood) => {
    setSelectedMood(mood);
  };
  const handleRefresh = () => {
    setSelectedMood(null);
  };
  return (
    <section>
      <div className="relative flex justify-center z-10 items-center">
        <div
          id="menu"
          className={`w-full h-full bg-gray-900 z-900 bg-opacity-80 top-0 fixed sticky-0`}
        >
          <div className="2xl:container 2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
            <div className="w-96 md:w-auto dark:bg-gray-800 relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36">
              <div role="banner">
                <h1 className="text-3xl mb-6">Pick your current mood</h1>
              </div>
              <div className="flex justify-center items-center flex-wrap">
                {selectedMood ? (
                  <SpotifyPlayer mood={selectedMood} refresh={handleRefresh} />
                ) : (
                  <>
                    <div className="w-full md:w-1/2 p-2">
                      <span
                        onClick={() => handleSelection('upbeat')}
                        role="img"
                        aria-label="Upbeat"
                      >
                        <img
                          src="https://cdn3.emoji.gg/emojis/7532-tt-cool.png"
                          width="94px"
                          height="94px"
                          alt="tt_cool"
                        />
                      </span>
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                      <span
                        role="img"
                        aria-label="Afrobeat"
                        style={{ fontSize: '78px' }}
                      >
                        💃
                      </span>
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                      <span
                        role="img"
                        aria-label="Chill"
                        style={{ fontSize: '48px' }}
                      >
                        <img
                          onClick={() => handleSelection('chill')}
                          src=" https://cdn3.emoji.gg/emojis/5548-emoji-hearts.png"
                          width="94px"
                          height="94px"
                          alt="emoji_hearts"
                        />
                      </span>
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                      <span
                        role="img"
                        aria-label="Calm"
                        style={{ fontSize: '48px' }}
                      >
                        <img
                          onClick={() => handleSelection('calm')}
                          src="https://cdn3.emoji.gg/emojis/8812-tt-shy.png"
                          width="94px"
                          height="94px"
                          alt="tt_shy"
                        />
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
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
    </section>
  );
}
