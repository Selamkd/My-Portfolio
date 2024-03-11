import Intro from '../components/Intro';
import Header from '../components/Header';
import playlistCatagories from '../components/playlistCatagories';
import { SlSocialSpotify } from 'react-icons/sl';
import SpotifyPlayer from '../components/SpotifyPlayer';
import { useState } from 'react';
import { FaFaceSadCry } from 'react-icons/fa6';
import { TfiDrupal } from 'react-icons/tfi';
import Image from 'next/image';
export default function About() {
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
          <div className="2xl:container  2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
            <div className="w-96 md:w-auto dark:bg-gray-800 relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36">
              <div role="banner">
                <h1>Pick your current mood</h1>
              </div>
              <div className="flex justify-center items-center flex-wrap">
                <div className="w-full md:w-1/2 p-2">
                  <button
                    className="text-gray-200 hover:text-purple"
                    onClick={() => handleSelection('upbeat')}
                  >
                    <span
                      role="img"
                      aria-label="Upbeat"
                      style={{ fontSize: '48px' }}
                    >
                      <img
                        src="https://cdn3.emoji.gg/emojis/7532-tt-cool.png"
                        width="74px"
                        height="74px"
                        alt="tt_cool"
                        onClick={() => handleSelection('upbeat')}
                      />
                    </span>
                  </button>
                </div>
                <div className="w-full md:w-1/2 p-2">
                  <button className="text-gray-200 hover:text-purple">
                    <span
                      role="img"
                      aria-label="Afrobeat"
                      style={{ fontSize: '58px' }}
                      onClick={() => handleSelection('dance')}
                    >
                      💃
                    </span>
                  </button>
                </div>
                <div className="w-full md:w-1/2 p-2">
                  <button className="text-gray-200 hover:text-purple">
                    <span
                      role="img"
                      aria-label="Chill"
                      style={{ fontSize: '48px' }}
                    >
                      {' '}
                      <img
                        onClick={() => handleSelection('chill')}
                        src="https://cdn3.emoji.gg/emojis/6694-blobflower.png"
                        width="74px"
                        height="74px"
                        alt="BlobFlower"
                      />
                    </span>
                  </button>
                </div>
                <div className="w-full md:w-1/2 p-2">
                  <button
                    className="text-gray-200 hover:text-purple"
                    onClick={() => handleSelection('calm')}
                  >
                    <span
                      role="img"
                      aria-label="Calm"
                      style={{ fontSize: '48px' }}
                      onClick={() => handleSelection('calm')}
                    >
                      <img
                        src="https://cdn3.emoji.gg/emojis/8812-tt-shy.png"
                        width="74px"
                        height="74px"
                        alt="tt_shy"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
