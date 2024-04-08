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
                <Image
                  src={Icon}
                  alt="icon"
                  className="  "
                  width={40}
                  height={20}
                />
                <h2 className="text--small text-bold   uppercase  ml-3 mt-2">
                  Attract
                </h2>
              </div>
              <Image
                src={underlineGreen}
                alt="icon"
                className=" ml-9  "
                width={140}
                height={30}
              />

              <p className="text--normal text-white p-3">
                {' '}
                Attract is a comprehensive well-being app that was created for
                the{' '}
                <Link
                  className=" underline hover:text-purple"
                  href="https://m4kingspaces.org/the-making-good-prize/about-the-prize/#:~:text=Entries%20for%20the%20Making%20Good,the%20results%20around%20May%202024.&text=Judges%20will%20assess%20entries%20using,design%20that%20is%20clearly%20presented"
                  target="_blank"
                >
                  Making Good Prize{' '}
                </Link>{' '}
                submission. The app provides{' '}
                <span className="ex3">daily affirmations</span> to help you
                start your day on a positive note,{' '}
                <span className="ex5">customizable breathing exercises,</span>{' '}
                and a <span className="ex4">journaling feature</span> with daily
                prompts to encourage self-reflection. Additionally, the app has
                an authentication feature to ensure the privacy of your journal
                entries.
              </p>
              <div className="mt-3 ml-6 gap-2 ">
                <Link href="https://attract-xi.vercel.app/">
                  <button className="btn mr-3">Live</button>
                </Link>
                <Link href="https://github.com/Selamkd/Attract">
                  {' '}
                  <button className="btn ">Repo</button>
                </Link>
              </div>
            </div>
            <div>
              <div className=" flex justify-start">
                <Image
                  src={Icon}
                  alt="icon"
                  className="  "
                  width={40}
                  height={20}
                />
                <h2 className="text--small text-bold text-white ml-3  uppercase  mt-2">
                  Hack-a-fun
                </h2>
              </div>
              <Image
                src={underlineBlue}
                alt="icon"
                className=" mb-1 ml-9 "
                width={180}
                height={30}
              />
              <p className="text--normal text-white">
                {' '}
                Hack-a-fun aims to support boot campers, graduates, and mentors
                to team up and work on a 4-week Hackathon project. Users can
                create a profile and join monthly hackathons, participate in
                chat groups, and submit their projects to get feedback from
                mentors. The main focus of the app is to
                <span className="ex4">
                  {' '}
                  promote teamwork rather than individual contributions.
                </span>{' '}
                This app was developed by myself and my teammates as our final
                project for SOC.
              </p>

              <div className="mt-3 ml-6 gap-2 ">
                <Link href="https://hack-a-fun.vercel.app/">
                  <button className="btn mr-3">Live</button>
                </Link>
                <Link href="https://github.com/Alex321111/Final-Project-SoC">
                  <button className="btn ">Repo</button>
                </Link>
              </div>
            </div>

            <div>
              <div className=" flex justify-start">
                <Image
                  src={Icon}
                  alt="icon"
                  className="  "
                  width={40}
                  height={20}
                />
                <h2 className="text--small text-bold text-white  uppercase ml-3  mt-2">
                  Champ Select
                </h2>
              </div>
              <Image
                src={underlineBlue2}
                alt="icon"
                className="ml-14 mb-2 "
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
                <Link href="https://lol-champ-select.vercel.app/">
                  <button className="btn mr-3">Live</button>
                </Link>
                <Link href="https://github.com/Selamkd/LOL-Champ-select">
                  <button className="btn ">Repo</button>
                </Link>
              </div>
            </div>
          </div>
          <Link href="/contact">
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
