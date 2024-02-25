import { useState, useEffect } from 'react';
import Image from 'next/image';
import heading from '../public/mobile.png';
import Avatar from '../public/avatar-pic.png';
import Arrow from '../public/Arrow-button.png';
import Link from 'next/link';
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
  
      const preStartSlide = document.querySelector(`.slider__warpper .flex__container[data-slide='${next}']`);
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
  
   useEffect(() => {
      transitionSlides();
    }, [next]);

  return (
    <>
    <div className="slider__warpper">
      <div className="flex__container flex--pikachu flex--active" data-slide="1">
        <div className="flex__item flex__item--left">
          <div className="flex__content">
            <p className="text--sub">PROJECTS</p>
            <div className="flex items-center justify-center">
            <h1 className="text--big mr-20">Attract</h1>
            <motion.div className="" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: 3 }}>
  <Image src={Icon} alt="icon" className="" width={297} height={290} />
</motion.div>
              </div>
           
            <p className="text--normal">A mindfulness app with breathing exercise, affirmations and a journaling feature.</p>
            <div className="mt-3 ">
            <button  className="btn">Live</button>
            <button className="btn ">Repo</button>
            </div>
          </div>
          <p className="text__background">00</p>
        </div>
        <div className="flex__item flex__item--right"></div>
     
      </div>
      <div className="flex__container flex--piplup animate--start" data-slide="2">
        <div className="flex__item flex__item--left">
          <div className="flex__content">
            {/* <p className="text--sub">PROJECTS</p> */}
            <h1 className="text--big">ChampSelect</h1>
            <p className="text--normal">This project is a web app that uses a REST API to provide League of Legends fans with a distinctive quiz experience. Regardless of your level of experience as a summoner or where you are on the rift, this quiz will help you identify your ideal champion based on your preferences and playstyle.</p>
            <div className="mt-3 ">
            <button  className="btn">Live</button>
            <button className="btn ">Repo</button>
            </div>
          </div>
          <p className="text__background">02</p>
        </div>
        <div className="flex__item flex__item--right"></div>
  
      </div>
      <div className="flex__container flex--blaziken animate--start" data-slide="3">
        <div className="flex__item flex__item--left">
          <div className="flex__content">
            <p className="text--sub">Not sure</p>
            <h1 className="text--big">Hackafun</h1>
            <p className="text--normal">Blaziken is the Fire/Fighting-type Starter Pokémon of the Hoenn region, introduced in Generation III. Blaziken is a large, bipedal, humanoid bird-like Pokémon that resembles a rooster.</p>
            <div className="mt-3 ">
            <button  className="btn">Live</button>
            <button className="btn ">Repo</button>
            </div>
           
          </div>
          <p className="text__background">03</p>
        </div>
        <div className=""></div>
        {/* <Image className="pokemon__img" src={heading} alt="Piplup" /> */}
      </div>
    </div>
  
    {/* Navigation */}
    <div className="slider__navi">
      <a href="#" className={`slide-nav ${current === 1 ? 'active' : ''}`} onClick={(e) => handleSlideClick(e, 1)}>pikachu</a>
      <a href="#" className={`slide-nav ${current === 2 ? 'active' : ''}`} onClick={(e) => handleSlideClick(e, 2)}>piplup</a>
      <a href="#" className={`slide-nav ${current === 3 ? 'active' : ''}`} onClick={(e) => handleSlideClick(e, 3)}>blaziken</a>
      {/* <a href="#" className={`slide-nav ${current === 4 ? 'active' : ''}`} onClick={(e) => handleSlideClick(e, 4)}>dialga</a> */}
    </div>
  </>
   
  );
};

export default Projects;