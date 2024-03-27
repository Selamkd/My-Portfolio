import Link from 'next/link';
import { TbMusicHeart } from 'react-icons/tb';
import { TbFileDownload } from 'react-icons/tb';
import { useState } from 'react';
import { ImCool } from 'react-icons/im';
import { SlSocialSpotify } from 'react-icons/sl';
import SpotifyModal from './SpotifyModal';
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
      {/* prompt to start the modal */}
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
      <SpotifyModal modal={modal} closeModal={closeModal} />
    </>
  );
};

export default Header;
