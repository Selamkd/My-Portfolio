import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { SiNextdotjs, SiPlaywright, SiJest } from 'react-icons/si';
import { RiSupabaseLine } from 'react-icons/ri';
import { FaCss3, FaHtml5 } from 'react-icons/fa';
import Icon from '../public/sparkle.png';

const TailwindIcon = () => (
  <svg
    className="w-8 h-8"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M11.8 5.7A4.8 4.8 0 0 0 7 10a3.4 3.4 0 0 1 2.7-1.7c1.7 0 3 2 3.8 2.6a5.7 5.7 0 0 0 5.4 1c2-.7 2.9-3 3.1-4-1 1.4-2.4 2.2-4.3 1.2-1.2-.6-2.1-3.4-6-3.3Zm-5 6.3A4.8 4.8 0 0 0 2 16.2a3.4 3.4 0 0 1 2.7-1.7c1.7 0 3 2 3.8 2.6a5.7 5.7 0 0 0 5.4.9c2-.7 3-2.9 3.1-4-1 1.4-2.4 2.3-4.2 1.3-1.3-.7-2.2-3.4-6-3.3Z" />
  </svg>
);

const ScrollArrow = ({ onClick }) => (
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
    onClick={onClick}
    style={{
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      cursor: 'pointer',
    }}
  >
    <svg className="arrows" style={{ position: 'static', margin: 0 }}>
      <path strokeLinecap="round" className="a1" d="M0 0 L20 22 L40 0" />
    </svg>
  </motion.div>
);


const Projects = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(1);
  const [next, setNext] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const isTransitioning = useRef(false);
  const scrollCooldown = useRef(false);

  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 650);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const transitionSlides = useCallback((targetSlide) => {
    if (isMobile || isTransitioning.current) return;

    const preStartSlide = document.querySelector(
      `.slider__warpper .flex__container[data-slide='${targetSlide}']`
    );
    const activeSlide = document.querySelector('.flex--active');

    if (!preStartSlide || !activeSlide) return;

    isTransitioning.current = true;
    preStartSlide.classList.add('flex--preStart');
    activeSlide.classList.add('animate--end');

    setTimeout(() => {
      preStartSlide.classList.remove('animate--start', 'flex--preStart');
      preStartSlide.classList.add('flex--active');
      activeSlide.classList.add('animate--start');
      activeSlide.classList.remove('animate--end', 'flex--active');
      setCurrent(targetSlide);
      setNext(targetSlide);
      isTransitioning.current = false;
    }, 800);
  }, [isMobile]);


  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollCooldown.current || isTransitioning.current) return;
      if (e.deltaY <= 0) return;

      scrollCooldown.current = true;
      setTimeout(() => { scrollCooldown.current = false; }, 1000);

      setCurrent((prev) => {
        const nextSlide = prev + 1;
        if (nextSlide > projects.length) {
          router.push('/contact');
          return prev;
        }
        setNext(nextSlide);
        transitionSlides(nextSlide);
        return prev; // actual update happens inside transitionSlides timeout
      });
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [transitionSlides, router]);

  
  const handleSlideClick = (e, targetSlide) => {
    e.preventDefault();
    if (targetSlide === current || isTransitioning.current) return;
    transitionSlides(targetSlide);
  };

  const handleArrowClick = () => {
    const nextSlide = current + 1;
    if (nextSlide > projects.length) {
      router.push('/contact');
      return;
    }
    transitionSlides(nextSlide);
  };

  if (isMobile) return null;

  return (
    <div className="slider__warpper">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`flex__container ${project.theme} ${index === 0 ? 'flex--active' : 'animate--start'}`}
          data-slide={project.id}
        >
          <div className="flex__item flex__item--left">
            <div className="flex__content">
              <div className="flex items-center justify-start">
                <h1 className="text--big">{project.title}</h1>
                <Image
                  src={Icon}
                  className="ml-10 mb-10"
                  alt=""
                  width={60}
                  height={40}
                />
              </div>

              <p className="text--normal">{project.description}</p>

              <div className="mt-3">
                <Link href={project.live} target="_blank">
                  <button className="btn mr-2">Live</button>
                </Link>
                <Link href={project.repo} target="_blank">
                  <button className="btn">Repo</button>
                </Link>
              </div>

              {project.icons}
            </div>

            <ScrollArrow onClick={handleArrowClick} />
          </div>

          <div className="flex__item flex__item--right" />
        </div>
      ))}

 
      <div className="slider__navi">
        {projects.map((project) => (
          <a
            key={project.id}
            href="#"
            className={`slide-nav ${current === project.id ? 'active' : ''}`}
            onClick={(e) => handleSlideClick(e, project.id)}
          >
            {project.slug}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;

const projects = [
  {
    id: 1,
    slug: 'pikachu',
    title: 'Attract',
    theme: 'flex--pikachu',
    description: (
      <>
        Attract is a comprehensive well-being app created for the{' '}
        <Link
          className="underline hover:text-purple"
          href="https://m4kingspaces.org/the-making-good-prize/about-the-prize/"
          target="_blank"
        >
          Making Good Prize
        </Link>{' '}
        submission. The app provides{' '}
        <span className="ex3">daily affirmations</span> to help you start your
        day on a positive note,{' '}
        <span className="ex5">customizable breathing exercises,</span> and a{' '}
        <span className="ex4">journaling feature</span> with daily prompts to
        encourage self-reflection. Additionally, the app has an authentication
        feature to ensure the privacy of your journal entries.
      </>
    ),
    live: 'https://attract-xi.vercel.app/',
    repo: 'https://github.com/Selamkd/Attract',
    icons: (
      <div className="flex items-center justify-start ml-4 mt-5 gap-4">
        <FontAwesomeIcon icon={faJs} className="text-4xl" />
        <FontAwesomeIcon icon={faReact} className="text-4xl" />
        <TailwindIcon />
        <SiNextdotjs className="h-8 w-8" />
        <RiSupabaseLine className="h-8 w-8" />
      </div>
    ),
  },
  {
    id: 2,
    slug: 'piplup',
    title: 'Champselect',
    theme: 'flex--piplup',
    description: (
      <>
        ChampSelect is a web app created for League of Legends fans who want to
        find their next champion. The user answers a series of questions that
        define their play style, preferred region, and the role they wish to
        play. The app then suggests a champion based on the user's responses.
        The application{' '}
        <span className="ex4">utilises a custom REST API</span> to obtain
        champions data.
      </>
    ),
    live: 'https://lol-champ-select.vercel.app/',
    repo: 'https://github.com/Selamkd/LOL-Champ-select',
    icons: (
      <div className="flex items-center justify-start ml-4 mt-5 gap-4">
        <FontAwesomeIcon icon={faJs} className="text-4xl" />
        <FaCss3 className="h-8 w-8" />
        <FaHtml5 className="h-8 w-8" />
        <SiJest className="h-8 w-8" />
        <SiPlaywright className="h-10 w-10" />
      </div>
    ),
  },
  {
    id: 3,
    slug: 'blaziken',
    title: 'Hackafun',
    theme: 'flex--blaziken',
    description: (
      <>
        Hack-a-fun aims to support boot campers, graduates, and mentors to team
        up and work on a 4-week Hackathon project. Users can{' '}
        <span className="ex3">create a profile</span> and join monthly
        hackathons, <span className="ex4">participate in chat groups</span>, and{' '}
        <span>submit their projects</span> to get feedback from mentors. The
        main focus of the app is to{' '}
        <span className="ex5">
          promote teamwork rather than individual contributions.
        </span>{' '}
        This app was developed by myself and my teammates as our final project
        for SOC.
      </>
    ),
    live: 'https://hack-a-fun.vercel.app/',
    repo: 'https://github.com/Alex321111/Final-Project-SoC',
    icons: (
      <div className="flex items-center justify-start ml-4 mt-5 gap-4">
        <FontAwesomeIcon icon={faJs} className="text-4xl" />
        <FontAwesomeIcon icon={faReact} className="text-4xl" />
        <TailwindIcon />
        <SiNextdotjs className="h-8 w-8" />
        <RiSupabaseLine className="h-8 w-8" />
        <SiJest className="h-8 w-8" />
      </div>
    ),
  },
];