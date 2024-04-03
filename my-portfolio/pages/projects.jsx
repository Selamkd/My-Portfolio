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
import underline from '../public/underline.png';
import { faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { SiNextdotjs } from 'react-icons/si';
import { RiSupabaseLine } from 'react-icons/ri';
import { SiPlaywright } from 'react-icons/si';
import { FaCss3 } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import underlineGreen from '../public/underline-green.png';
import underlineBlue from '../public/underline-blue.png';
import underlineBlue2 from '../public/underline-blue2.png';
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

          <div className="flex flex-col mt-4 ml-2 gap-3 items-start justify-start">
            <div>
              <div className=" flex justify-start mr-3">
                <h2 className="text-projects text-bold text-white  uppercase  ml-2 mt-2">
                  Attract
                </h2>
              </div>
              <Image
                src={underlineGreen}
                alt="icon"
                className=" mb-5 "
                width={140}
                height={30}
              />

              <p className="text--normal text-white">
                {' '}
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>

              <div className="mt-3 ml-6 gap-2 ">
                <button className="btn mr-3">Live</button>
                <button className="btn ">Repo</button>
              </div>
            </div>
            <div>
              <div className=" flex justify-start">
                <h2 className="text-projects text-bold text-white  uppercase  mt-2">
                  Hack-a-fun
                </h2>
              </div>
              <Image
                src={underlineBlue}
                alt="icon"
                className=" mb-1 mr-3 "
                width={180}
                height={30}
              />
              <p className="text--normal text-white">
                {' '}
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>

              <div className="mt-3 ml-6 gap-2 ">
                <button className="btn mr-3">Live</button>
                <button className="btn ">Repo</button>
              </div>
            </div>

            <div>
              <div className=" flex justify-start">
                <h2 className="text-projects text-bold text-white  uppercase  mt-2">
                  Champ Select
                </h2>
              </div>
              <Image
                src={underlineBlue2}
                alt="icon"
                className="mr-2 mb-2 "
                width={180}
                height={30}
              />
              <p className="text--normal text-white">
                {' '}
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>

              <div className="mt-3 ml-6 gap-2 ">
                <button className="btn mr-3">Live</button>
                <button className="btn ">Repo</button>
              </div>
            </div>
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
