import { useState, useEffect } from 'react';
import Image from 'next/image';
import heading from '../public/portfolio.png';
import Avatar from '../public/avatar-pic.png';
import Arrow from '../public/Arrow-button.png';
import Link from 'next/link';
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
            <p className="text--sub">Pokemon Gen I</p>
            <h1 className="text--big">Pikachu</h1>
            <p className="text--normal">Pikachu is an Electric-type Pokémon introduced in Generation I. Pikachu are small, chubby, and incredibly cute mouse-like Pokémon. They are almost completely covered by yellow fur.</p>
          </div>
          <p className="text__background">Pikachu</p>
        </div>
        <div className="flex__item flex__item--right"></div>
        <img className="pokemon__img" src="https://s4.postimg.org/fucnrdeq5/pikachu.png" alt="Pikachu" />
      </div>
      <div className="flex__container flex--piplup animate--start" data-slide="2">
        <div className="flex__item flex__item--left">
          <div className="flex__content">
            <p className="text--sub">Pokemon Gen IV</p>
            <h1 className="text--big">Piplup</h1>
            <p className="text--normal">Piplup is the Water-type Starter Pokémon of the Sinnoh region. It was introduced in Generation IV. Piplup has a strong sense of self-esteem. It seldom accepts food that people give because of its pride.</p>
          </div>
          <p className="text__background">Piplup</p>
        </div>
        <div className="flex__item flex__item--right"></div>
        <img className="pokemon__img" src="https://s4.postimg.org/sa9dl4825/pilup.png" alt="Piplup" />
      </div>
      <div className="flex__container flex--blaziken animate--start" data-slide="3">
        <div className="flex__item flex__item--left">
          <div className="flex__content">
            <p className="text--sub">Pokemon Gen III</p>
            <h1 className="text--big">Blaziken</h1>
            <p className="text--normal">Blaziken is the Fire/Fighting-type Starter Pokémon of the Hoenn region, introduced in Generation III. Blaziken is a large, bipedal, humanoid bird-like Pokémon that resembles a rooster.</p>
          </div>
          <p className="text__background">Blaziken</p>
        </div>
        <div className="flex__item flex__item--right"></div>
        <img className="pokemon__img" src="https://s4.postimg.org/6795hnlql/blaziken.png" alt="Blaziken" />
      </div>
      <div className="flex__container flex--dialga animate--start" data-slide="4">
        <div className="flex__item flex__item--left">
          <div className="flex__content">
            <p className="text--sub">Pokemon Gen IV</p>
            <h1 className="text--big">Dialga</h1>
            <p className="text--normal">Dialga is a Steel/Dragon-type Legendary Pokémon. Dialga is a sauropod-like Pokémon. It is mainly blue with some gray, metallic portions, such as its chest plate, which has a diamond in the center. It also has various, light blue lines all over its body.</p>
          </div>
          <p className="text__background">Dialga</p>
        </div>
        <div className="flex__item flex__item--right"></div>
        <img className="pokemon__img" src="https://s4.postimg.org/43yq9zlxp/dialga.png" alt="Dialga" />
      </div>
    </div>

    {/* Navigation */}
    <div className="slider__navi">
      <a href="#" className={`slide-nav ${current === 1 ? 'active' : ''}`} onClick={(e) => handleSlideClick(e, 1)}>pikachu</a>
      <a href="#" className={`slide-nav ${current === 2 ? 'active' : ''}`} onClick={(e) => handleSlideClick(e, 2)}>piplup</a>
      <a href="#" className={`slide-nav ${current === 3 ? 'active' : ''}`} onClick={(e) => handleSlideClick(e, 3)}>blaziken</a>
      <a href="#" className={`slide-nav ${current === 4 ? 'active' : ''}`} onClick={(e) => handleSlideClick(e, 4)}>dialga</a>
    </div>
  </>
   
  );
};

export default Projects;