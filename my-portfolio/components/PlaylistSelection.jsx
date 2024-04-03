import Intro from './Intro';
import Header from './Header';
import { SlSocialSpotify } from 'react-icons/sl';
import SpotifyPlayer from './SpotifyPlayer';
import { useState } from 'react';
import rainbow from '../public/rainbow.svg';
import inLove from '../public/InLove.svg';
import disco from '../public/disco.svg';
import sad from '../public/sad.svg';
import Image from 'next/image';
export default function PlaylistSelection(props) {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleSelection = (mood) => {
    setSelectedMood(mood);
  };
  const handleRefresh = () => {
    setSelectedMood(null);
  };
  return (
    <section>
      <div
        id="menu"
        className={`w-full h-screen bg-gray-900 z-900  py-6 bg-opacity-80 top-40 fixed sticky-0`}
      >
        <div role="banner mt-[20%]">
          {!selectedMood ? (
            <h1 className="text-3xl mb-6">Choose your current mood</h1>
          ) : null}
        </div>
        <div className="flex justify-center items-center mt-8 flex-wrap">
          {selectedMood ? (
            <SpotifyPlayer
              mood={selectedMood}
              closeModal={props.closeModal}
              refresh={handleRefresh}
              restart={handleRefresh}
            />
          ) : (
            <>
              <div className="flex w-full justify-around p-2 xl:mb-24">
                <span
                  onClick={() => handleSelection('upbeat')}
                  role="img"
                  aria-label="Upbeat"
                >
                  <Image
                    src={rainbow}
                    alt="Description"
                    width={350}
                    height={350}
                  />
                </span>
                <span
                  role="img"
                  aria-label="Afrobeat"
                  style={{ fontSize: '78px' }}
                  onClick={() => handleSelection('dance')}
                  className="hover:text-purple"
                >
                  <Image
                    src={disco}
                    alt="Description"
                    width={350}
                    height={350}
                  />
                </span>
              </div>

              <div className="w-full flex justify-around  p-2">
                <span
                  role="img"
                  aria-label="Chill"
                  onClick={() => handleSelection('chill')}
                >
                  <Image
                    src={inLove}
                    alt="Description"
                    width={350}
                    height={350}
                  />
                </span>
                <span
                  role="img"
                  aria-label="Calm"
                  style={{ fontSize: '48px' }}
                  onClick={() => handleSelection('calm')}
                >
                  <Image src={sad} alt="Description" width={350} height={350} />
                </span>
              </div>
            </>
          )}
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
    </section>
  );
}
