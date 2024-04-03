import ProjectsPage from '../components/Projects';
import Link from 'next/link';
import { TbMusicHeart } from 'react-icons/tb';
import { TbFileDownload } from 'react-icons/tb';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Icon from '../public/sparkle.png';
import Image from 'next/image';
import SpotifyModal from '../components/SpotifyModal';
import { MdKeyboardCommandKey } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { VscCode } from 'react-icons/vsc';
import { GrContact } from 'react-icons/gr';

import { faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { SiNextdotjs } from 'react-icons/si';
import { RiSupabaseLine } from 'react-icons/ri';
import { SiPlaywright } from 'react-icons/si';
import { FaCss3 } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';

import { SiJest } from 'react-icons/si';
export default function Projects() {
  const [modal, setModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(1);
  const [next, setNext] = useState(1);
  const handleScroll = () => {
    let nextPage = current + 1;
    if (nextPage > 3) nextPage = 1;
    setNext(nextPage);
    if (current === 3) {
      location.href = '/contact';
    }
  };
  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    console.log(isMobile);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="w-screen h-screen m-1  ">
          <Header />
          {/* Image and social links */}
          <div className="flex items-center justify-center mt-20">
            <h1 className="   text-5xl mb-5  ">Attract</h1>
            <Image
              src={Icon}
              className="align-center  mb-5 ml-1"
              alt="arrow"
              width={30}
              height={20}
            />
          </div>
          <div className="flex items-center justify-center ml-4 mt-2">
            <FontAwesomeIcon icon={faJs} className="text-4xl mr-4 " />
            <FontAwesomeIcon icon={faReact} className="text-4xl mr-4 " />
            <svg
              class="w-10 h-10 text-4xl mr-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              id="tailwind-icon"
            >
              <path d="M11.8 5.7A4.8 4.8 0 0 0 7 10a3.4 3.4 0 0 1 2.7-1.7c1.7 0 3 2 3.8 2.6a5.7 5.7 0 0 0 5.4 1c2-.7 2.9-3 3.1-4-1 1.4-2.4 2.2-4.3 1.2-1.2-.6-2.1-3.4-6-3.3Zm-5 6.3A4.8 4.8 0 0 0 2 16.2a3.4 3.4 0 0 1 2.7-1.7c1.7 0 3 2 3.8 2.6a5.7 5.7 0 0 0 5.4.9c2-.7 3-2.9 3.1-4-1 1.4-2.4 2.3-4.2 1.3-1.3-.7-2.2-3.4-6-3.3Z" />
            </svg>
            <SiNextdotjs className="text-4xl mr-5 h-8 w-8" />
            <RiSupabaseLine className="text-4xl mr-5 h-8 w-8" />
          </div>

          <p className="text--normal">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos
            <span>
              {' '}
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
              qui dolorem ipsum quia dolor sit amet, consectetur
            </span>
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam.
          </p>
          <div className="mt-3 flex justify-around ">
            <button className="btn mr-2">Live</button>
            <button className="btn ">Repo</button>
          </div>
          <Link href="/projects">
            <svg className="arrows">
              <path
                strokeLinecap="round"
                className="a1"
                d="M0 0 L20 22 L40 0"
              ></path>
            </svg>
          </Link>
        </div>
      ) : (
        <>
          <main className="flex flex-col h-screen">
            <header className="top-0 absolute   text--small sm:top-4 rounded-none sm:rounded-full border-b sm:border dark:bg-blackish/30 border-gray-800/50 dark:border-gray-400/10 p-3 z-50 backdrop-blur-md w-full m-auto max-w-3xl flex justify-between items-center ">
              <nav className="w-full flex justify-around items-center">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-10 sm:hidden">
                    {' '}
                    <Link
                      className="text-gray-600 dark:text-gray-400 hover:text-purple"
                      href="/ "
                    >
                      <MdKeyboardCommandKey />
                    </Link>
                    <Link
                      className="text-gray-600 dark:text-gray-400 hover:text-purple"
                      href="/about"
                    >
                      <FontAwesomeIcon icon={faAddressCard} />
                    </Link>
                    <Link
                      className="text-gray-600 dark:text-gray-400 hover:text-purple"
                      href="/projects"
                    >
                      <VscCode size={23} />
                    </Link>
                    <Link
                      className="text-gray-600 dark:text-gray-400 hover:text-purple"
                      href="/contact"
                    >
                      <GrContact />
                    </Link>
                  </div>

                  <div id="links" className="hidden items-center sm:flex">
                    <Link
                      className="flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 dark:text-gray-400 font-medium px-3 py-2  w-fit"
                      href="/ "
                    >
                      Home
                    </Link>
                    <Link
                      className="flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 dark:text-gray-400 font-medium px-3 py-2  w-fit"
                      href="/about"
                    >
                      About Me
                    </Link>
                    <Link
                      className="flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 dark:text-gray-400 font-medium px-3 py-2  w-fit"
                      href="/projects"
                    >
                      Projects
                    </Link>
                    <Link
                      className="flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 dark:text-gray-400 font-medium px-3 py-2  w-fit"
                      href="/contact"
                    >
                      Contact Me
                    </Link>
                  </div>

                  <TbMusicHeart
                    onClick={showModal}
                    className="h-4 w-4 text-gray-600 dark:text-gray-400 hover:text-purple"
                  />
                </div>
              </nav>
            </header>
            <SpotifyModal modal={modal} closeModal={closeModal} />
          </main>
          <ProjectsPage />
        </>
      )}
    </>
  );
}
