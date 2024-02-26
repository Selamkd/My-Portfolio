import { useState, useEffect } from 'react';
import Image from 'next/image';
import Arrow from '../public/Arrow-button.png';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import Icon from '../public/sparkle.png';

const Projects = () => {
  const [current, setCurrent] = useState(1);
  const [next, setNext] = useState(1);

  const handleSlideClick = (e, nextSlide) => {
    e.preventDefault();
    setNext(nextSlide);
  };

  const transitionSlides = () => {
    if (current === next) return;

    const preStartSlide = document.querySelector(
      `.slider__warpper .flex__container[data-slide='${next}']`
    );
    const activeSlide = document.querySelector('.flex--active');

    preStartSlide.classList.add('flex--preStart');
    activeSlide.classList.add('animate--end');

    setTimeout(() => {
      preStartSlide.classList.remove('animate--start', 'flex--preStart');
      preStartSlide.classList.add('flex--active');
      activeSlide.classList.add('animate--start');
      activeSlide.classList.remove('animate--end', 'flex--active');
      setCurrent(next);
    }, 800);
  };

  const handleScroll = () => {
    let nextPage = current + 1;
    if (nextPage > 3) nextPage = 1;
    setNext(nextPage);
  };

  useEffect(() => {
    transitionSlides();

    // Listen to the scroll event
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove the scroll event listener when component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, [next]);

  return (
    <>
      <div className="slider__warpper">
        <div
          className="flex__container flex--pikachu flex--active"
          data-slide="1"
        >
          <div className="flex__item flex__item--left">
            <div className="flex__content">
              <p className="icons">
                <FontAwesomeIcon icon={faJs} size="xl" />
                <FontAwesomeIcon icon={faReact} size="xl" />
              </p>
              <div className="flex items-center justify-center">
                <h1 className="text--big mr-20">Attract</h1>
              </div>

              <p className="text--normal">
                This project is a web app that uses a REST API to provide League
                of Legends fans with a distinctive quiz experience. Regardless
                of your level of experience as a summoner or where you are on
                the rift, this quiz will help you identify your ideal champion
                based on your preferences and playstyle.
              </p>
              <div className="mt-3 ">
                <button className="btn">Live</button>
                <button className="btn ">Repo</button>
              </div>
            </div>
            <p className="text__background">00</p>
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
              {/* <p className="text--sub">PROJECTS</p> */}
              <h1 className="text--big">ChampSelect</h1>
              <p className="text--normal">
                This project is a web app that uses a REST API to provide League
                of Legends fans with a distinctive quiz experience. Regardless
                of your level of experience as a summoner or where you are on
                the rift, this quiz will help you identify your ideal champion
                based on your preferences and playstyle.
              </p>
              <div className="mt-3 ">
                <button className="btn">Live</button>
                <button className="btn ">Repo</button>
              </div>
            </div>
            <p className="text__background">02</p>
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
              <p className="text--sub">Not sure</p>
              <h1 className="text--big">Hackafun</h1>
              <p className="text--normal">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam.
              </p>
              <div className="mt-3 ">
                <button className="btn">Live</button>
                <button className="btn ">Repo</button>
              </div>
            </div>
            <p className="text__background">03</p>
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
      </div>

      {/* Navigation */}
      <div className="slider__navi">
        <a
          href="#"
          className={`slide-nav ${current === 1 ? 'active' : ''}`}
          onClick={(e) => handleSlideClick(e, 1)}
        >
          pikachu
        </a>
        <a
          href="#"
          className={`slide-nav ${current === 2 ? 'active' : ''}`}
          onClick={(e) => handleSlideClick(e, 2)}
        >
          piplup
        </a>
        <a
          href="#"
          className={`slide-nav ${current === 3 ? 'active' : ''}`}
          onClick={(e) => handleSlideClick(e, 3)}
        >
          blaziken
        </a>
        {/* <a href="#" className={`slide-nav ${current === 4 ? 'active' : ''}`} onClick={(e) => handleSlideClick(e, 4)}>dialga</a> */}
      </div>
    </>
  );
};

export default Projects;
