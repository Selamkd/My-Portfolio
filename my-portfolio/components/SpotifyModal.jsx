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
        <div className="relative flex justify-center z-10 items-start">
          <div
            id="menu"
            className={`w-full h-full bg-gray-900 z-900 bg-opacity-80 top-0 fixed sticky-0 ${
              props.modal ? 'block' : 'hidden'
            }`}
          >
            {!start ? (
              <div className="2xl:container   2xl:mx-auto py-48 l px-4 md:px-28 flex justify-center  lg:py-28 items-center">
                <div className="w-96 lg:h-500  md:w-auto  bg-gray-800 relative flex flex-col  justify-center items-center  py-16 px-4 md:px-24 xl:py-24 xl:px-36">
                  <div role="banner ">
                    <SlSocialSpotify size={123} className="text-[#1DB954]" />
                  </div>
                  <div className="mt-12">
                    <h1
                      role="main"
                      className="text-3xl   dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800"
                    >
                      <span className="text-purple">Care</span>{' '}
                      <span className="text-red">to</span>{' '}
                      <span className="text-yellow-200">get</span>{' '}
                      <span className="text-blue-300">to</span>{' '}
                      <span className="text-green-300">know</span>{' '}
                      <span className="text-pink-400">me?</span>
                    </h1>
                  </div>
                  <div className="mt-5">
                    <p className=" sm:w-100  text--small text-gray-400 leading-6 text-center">
                      Pick a mood and get a song recommendation from my
                      playlist!
                    </p>
                  </div>
                  <button
                    onClick={handleStart}
                    id="modal-btn"
                    className="btn  mt-10 "
                  >
                    {' '}
                    Let's go!
                  </button>
                  <a
                    onClick={props.closeModal}
                    className="mt-6 dark:text-white text-base leading-none focus:outline-none hover:border-purple focus:border-purple border-b border-transparent text-center text-gray-800"
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
