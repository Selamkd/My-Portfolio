import Link from 'next/link';
import { TbMusicHeart } from 'react-icons/tb';
import { TbFileDownload } from 'react-icons/tb';
import { useState } from 'react';
import { ImCool } from 'react-icons/im';
import { SlSocialSpotify } from 'react-icons/sl';
const Header = () => {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <header className="top-0 text--small sm:top-4 rounded-none sm:rounded-full border-b sm:border dark:bg-blackish/30 border-gray-800/50 dark:border-gray-400/10 p-3 z-50 backdrop-blur-md w-full m-auto max-w-3xl flex justify-between items-center sticky">
        <nav className="w-full flex justify-around items-center">
          <div className="flex items-center space-x-8">
            <div id="links" class="  hidden items-center sm:flex">
              <Link
                class="flex  items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium px-3 py-2  w-fit"
                href="/ "
              >
                Home
              </Link>
              <Link
                class="flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium px-3 py-2  w-fit"
                href="/about"
              >
                About Me
              </Link>
              <Link
                class="flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium px-3 py-2  w-fit"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                class="flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium px-3 py-2  w-fit"
                href="/contact"
              >
                Contact Me
              </Link>
            </div>

            <TbMusicHeart
              onClick={showModal}
              className="h-4 w-4 text-gray-600 dark:text-gray-400 hover:text-purple"
            />
            <a href="/Selam Ararsa.pdf" download>
              <TbFileDownload className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-purple" />
            </a>
          </div>
        </nav>
      </header>
      <section>
        <div class="relative flex justify-center z-10 items-center">
          <div
            id="menu"
            className={`w-full h-full bg-gray-900 z-900 bg-opacity-80 top-0 fixed sticky-0 ${
              modal ? 'block' : 'hidden'
            }`}
          >
            <div class="2xl:container  2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
              <div class="w-96 md:w-auto dark:bg-gray-800 relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36">
                <div role="banner">
                  <SlSocialSpotify size={123} className="text-[#1DB954]" />
                </div>
                <div class="mt-12">
                  <h1
                    role="main"
                    class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800"
                  >
                    Care to get to know me?
                  </h1>
                </div>
                <div class="mt">
                  <p class="mt-6 sm:w-80 text-base dark:text-white leading-7 text-center text-gray-800">
                    Pick a mood and get a song recommendation from my playlist!
                  </p>
                </div>
                <button class="w-full dark:text-gray-800 dark:hover:bg-gray-100 dark:bg-white sm:w-auto mt-14 text-base leading-4 text-center text-white py-6 px-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-black">
                  I'm in....start!
                </button>
                <a
                  onClick={closeModal}
                  href="javascript:void(0)"
                  class="mt-6 dark:text-white dark:hover:border-white text-base leading-none focus:outline-none hover:border-gray-800 focus:border-gray-800 border-b border-transparent text-center text-gray-800"
                >
                  Nope.. get me out!
                </a>
                <button
                  onClick={closeModal}
                  class="text-gray-800 dark:text-gray-400 absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="currentColor"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
