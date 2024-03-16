import { useState } from 'react';
import { SlSocialSpotify } from 'react-icons/sl';
import { ImCool } from 'react-icons/im';
import { BsEmojiHeartEyes } from 'react-icons/bs';
import PlaylistSelection from './PlaylistSelection.jsx';
const ModalContent = (props) => {
  const [clicked, setClicked] = useState(false);
  const [start, setStart] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  const handleStart = () => {
    setStart(true);
  };
  const handleRestart = () => {
    setStart(false);
  };
  return (
    <>
      <section>
        <div className="relative flex justify-center z-10 items-center">
          <div
            id="menu"
            className={`w-full h-full bg-gray-900 z-900 bg-opacity-80 top-0 fixed sticky-0 ${
              props.modal ? 'block' : 'hidden'
            }`}
          >
            {!start ? (
              <div className="2xl:container   2xl:mx-auto py-48 l px-4 md:px-28 flex justify-center  lg:py-28 items-center">
                <div className="w-96 lg:h-600  md:w-auto  bg-gray-800 relative flex flex-col  justify-center items-center  py-16 px-4 md:px-24 xl:py-24 xl:px-36">
                  <div role="banner ">
                    <SlSocialSpotify size={123} className="text-[#1DB954]" />
                  </div>
                  <div className="mt-12">
                    <h1
                      role="main"
                      className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800"
                    >
                      Care to get to know me?
                    </h1>
                  </div>
                  <div className="mt">
                    <p className="mt-6 sm:w-80 text-base dark:text-white leading-7 text-center text-gray-800">
                      Pick a mood and get a song recommendation from my
                      playlist!
                    </p>
                  </div>
                  <button
                    onClick={handleStart}
                    className="w-full dark:text-gray-800 dark:hover:bg-gray-100 dark:bg-white sm:w-auto mt-14 text-base leading-4 text-center text-white py-6 px-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-black"
                  >
                    Let's go!
                  </button>
                  <a
                    onClick={props.closeModal}
                    href="javascript:void(0)"
                    className="mt-6 dark:text-white dark:hover:border-white text-base leading-none focus:outline-none hover:border-gray-800 focus:border-gray-800 border-b border-transparent text-center text-gray-800"
                  >
                    Nope...get me out!
                  </a>
                  <button
                    onClick={props.closeModal}
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
            ) : (
              <PlaylistSelection
                restart={handleRestart}
                closeModal={props.closeModal}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ModalContent;
