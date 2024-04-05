import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { SiNextdotjs } from 'react-icons/si';
import { RiSupabaseLine } from 'react-icons/ri';
import { SiPlaywright } from 'react-icons/si';
import { FaCss3 } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import Icon from '../public/sparkle.png';
import { SiJest } from 'react-icons/si';
const Projects = () => {
  const [current, setCurrent] = useState(1);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [next, setNext] = useState(1);

  const handleSlideClick = (e, nextSlide) => {
    e.preventDefault();
    setNext(nextSlide);
  };

  const transitionSlides = () => {
    if (!isMobile) {
      if (current === next) return;

      const preStartSlide = document.querySelector(
        `.slider__warpper .flex__container[data-slide='${next}']`
      );
      const activeSlide = document.querySelector('.flex--active');

      if (!preStartSlide || !activeSlide) return;

      preStartSlide.classList.add('flex--preStart');
      activeSlide.classList.add('animate--end');

      setTimeout(() => {
        preStartSlide.classList.remove('animate--start', 'flex--preStart');
        preStartSlide.classList.add('flex--active');
        activeSlide.classList.add('animate--start');
        activeSlide.classList.remove('animate--end', 'flex--active');
        setCurrent(next);
      }, 800);
    }
  };

  const handleScroll = () => {
    let nextPage = current + 1;
    if (nextPage > 3) nextPage = 1;
    setNext(nextPage);
    if (current === 3) {
      location.href = '/contact';
    }
  };

  useEffect(() => {
    transitionSlides();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [next]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
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
      {!isMobile && (
        <div className="slider__warpper">
          <div
            className="flex__container flex--pikachu flex--active"
            data-slide="1"
          >
            <div className="flex__item flex__item--left">
              <div className="flex__content">
                <div className="flex items-center justify-start">
                  <h1 className="text--big ">Attract</h1>
                  <Image
                    src={Icon}
                    className="align-center ml-10 mb-10"
                    alt="arrow"
                    width={60}
                    height={40}
                  />
                </div>

                <p className="text--normal">
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
                  and a <span className="ex4">journaling feature</span> with
                  daily prompts to encourage self-reflection. Additionally, the
                  app has an authentication feature to ensure the privacy of
                  your journal entries.
                </p>
                <div className="mt-3 ">
                  <button className="btn mr-2">Live</button>
                  <button className="btn ">Repo</button>
                </div>
                <div className="flex items-center justify-start ml-4 mt-5">
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
              </div>
              {/* <p className="text__background">00</p> */}
              <motion.div
                animate={{ scale: 1, opacity: 1 }}
                id="arrow-container"
                className="flex justify-center  items-center"
                onClick={handleScroll}
              >
                <Link
                  href="
      "
                >
                  <svg class="arrows">
                    <path
                      stroke-linecap="round"
                      class="a1"
                      d="M0 0 L20 22 L40 0"
                    ></path>
                  </svg>
                </Link>
              </motion.div>
            </div>
            <div className="flex__item flex__item--right"></div>
          </div>
          <div
            className="flex__container flex--piplup animate--start"
            data-slide="2"
          >
            <div className="flex__item flex__item--left">
              <div className="flex__content">
                <div className="flex items-center justify-start">
                  <h1 className="text--big ">Champselect</h1>
                  <Image
                    src={Icon}
                    className="align-center ml-10 mb-10"
                    alt="arrow"
                    width={60}
                    height={40}
                  />
                </div>
                <p className="text--normal">
                  ChampSelect is a web app created for League of Legends fans
                  who want to find their next champion.The user answers a series
                  of questions that define their play style, preferred region,
                  and the role they wish to play. The app then suggests a
                  champion based on the user's responses. The application{' '}
                  <span className="ex4">utilises a custom REST API</span> to
                  obtain champions data.
                </p>
                <div className="mt-3 ">
                  <button className="btn mr-2">Live</button>
                  <button className="btn ">Repo</button>
                </div>
                <div className="flex items-center justify-start ml-4 mt-5">
                  <FontAwesomeIcon icon={faJs} className="text-4xl mr-4 " />
                  <FaCss3 className="text-4xl mr-5 h-8 w-8" />
                  <FaHtml5 className="text-4xl mr-5 h-8 w-8" />
                  <SiJest className="text-4xl mr-5 h-8 w-8" />
                  <SiPlaywright className="text-4xl mr-5 h-10 w-10" />
                </div>
              </div>

              <motion.div
                animate={{ scale: 1, opacity: 1 }}
                id="arrow-container"
                className="flex justify-center  items-center"
                onClick={handleScroll}
              >
                <Link
                  href="/projects
      "
                >
                  <svg class="arrows">
                    <path
                      stroke-linecap="round"
                      class="a1"
                      d="M0 0 L20 22 L40 0"
                    ></path>
                  </svg>
                </Link>
              </motion.div>
            </div>
            <div className="flex__item flex__item--right"></div>
          </div>
          <div
            className="flex__container flex--blaziken animate--start"
            data-slide="3"
          >
            <div className="flex__item flex__item--left">
              <div className="flex__content">
                <div className="flex items-center justify-start">
                  <h1 className="text--big ">Hackafun</h1>
                  <Image
                    src={Icon}
                    className="align-center ml-8 mb-10"
                    alt="arrow"
                    width={60}
                    height={40}
                  />
                </div>
                <p className="text--normal ">
                  Hack-a-fun aims to support boot campers, graduates, and
                  mentors to team up and work on a 4-week Hackathon project.
                  Users can <span className="ex3">create a profile </span>and
                  join monthly hackathons,
                  <span className="ex4">participate in chat groups </span>, and{' '}
                  <span>submit their projects</span> to get feedback from
                  mentors. The main focus of the app is to
                  <span className="ex5">
                    {' '}
                    promote teamwork rather than individual contributions.
                  </span>{' '}
                  This app was developed by myself and my teammates as our final
                  project for SOC.
                </p>
                <div className="mt-3 ">
                  <button className="btn mr-2">Live</button>
                  <button className="btn ">Repo</button>
                </div>
                <div className="flex items-center justify-start ml-4 mt-5">
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
                  <SiJest className="text-4xl mr-5 h-8 w-8" />
                </div>
              </div>

              <motion.div
                animate={{ scale: 1, opacity: 1 }}
                id="arrow-container"
                className="flex justify-center  items-center"
                onClick={handleScroll}
              >
                <Link
                  href="/projects
      "
                >
                  <svg class="arrows">
                    <path
                      stroke-linecap="round"
                      class="a1"
                      d="M0 0 L20 22 L40 0"
                    ></path>
                  </svg>
                </Link>
              </motion.div>
            </div>
            <div className="flex__item flex__item--right"></div>
          </div>
          {/* Additional slider content */}
          <div className="slider__navi">
            <a
              href="#"
              className={`slide-nav ${current === 1 ? 'active' : ''}`}
              onClick={(e) => handleSlideClick(e, 1)}
            >
              pikachu
            </a>
            {/* Other slider navigation links */}
          </div>
        </div>
      )}
    </>
  );
};
export default Projects;
