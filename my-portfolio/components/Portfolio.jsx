import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import heading from '../public/chromium.png';
import Avatar from '../public/avatar-pic.png';
import Arrow from '../public/Arrow-button.png';
import Icon from '../public/Name-tag.png';
import sun from '../public/sun1.png';
import clouds from '../public/cloud.png';
import Heart from '../public/heart.png';
import Link from 'next/link';
import flower from '../public/flower-mobile.png';
import { getPositionAvatar } from './helpers';
import { getPositionText } from './helpers';
import { getPositionTextsm } from './helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [weather, setWeather] = useState(null);
  const [centerX, setCenterX] = useState(null);
  const [centerY, setCenterY] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const textid1 = scrolled ? 'text-1-scrolled' : 'text-1';
  const textid2 = scrolled ? 'text-2-scrolled' : 'text-2';
  console.log(weather);

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
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrolled]);

  console.log(weather);

  useEffect(() => {
    async function fetchWeatherData() {
      const url =
        'https://weather-api138.p.rapidapi.com/weather?city_name=Fergana';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '6c78baec94mshd1b7b3194a5c63fp161193jsn54a71e144f1d',
          'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();

        setWeather(result.weather[0].main.toLowerCase());
      } catch (error) {
        console.error(error);
      }
    }
    fetchWeatherData();
  }, [weather]);

  const getWeatherIcon = (weather) => {
    switch (weather) {
      case 'sunny':
        return (
          <Image
            id="weather-icon"
            src={sun}
            alt="Sun Icon"
            width={200}
            height={200}
          />
        );
      case 'clouds':
        return <Image src={clouds} alt="Cloud Icon" width={250} height={220} />;
      case 'rainy':
        return <Image src={clouds} alt="Rain Icon" width={220} height={220} />;
      default:
        return <Image src={sun} alt="Sun Icon" width={220} height={220} />;
    }
  };

  return (
    <>
      {isMobile ? (
        <section
          id="mobile-home "
          className="w-full  flex flex-col h-screen justify-center items-between relative"
        >
          <div className="flex flex-col items-center justify-between"></div>

          <div className="mt-1">
            <Image src={Avatar} alt="avatar" width={600} height={450} />
          </div>
          <h1 className="text-2xl mt-7 text-purple text-center">
            {' '}
            Selam Ararsa
          </h1>
          <div className="">
            <h3 className="text-sm mt-4 text-blue-100 text-center">
              Full-stack developer
            </h3>
          </div>
          <motion.div className="absolute  bottom-0 right-[50%]">
            <Link href="/about">
              <svg className="arrows">
                <path
                  strokeLinecap="round"
                  className="a1"
                  d="M0 0 L20 22 L40 0"
                ></path>
              </svg>
            </Link>
          </motion.div>
        </section>
      ) : (
        <section className="w-full overflow-hidden flex flex-col h-screen justify-center items-center relative">
          {/* Sun icon */}
          {scrolled ? (
            <div
              id="weather-icon"
              className="absolute top-0 right-0  ease-in-out "
            >
              {weather && getWeatherIcon()}
            </div>
          ) : null}

          {/* name, h3, icons */}
          <motion.div
            id={textid1}
            initial="hidden"
            animate={
              scrolled
                ? {
                    scale: getPositionText(scrolled).scale,
                    x: '-35vw',
                    y: '-32vh',
                  }
                : { scale: 1 }
            }
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="flex items-center justify-center"
          >
            <motion.div
              animate={scrolled ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              {' '}
              <Image
                src={Heart}
                className="self-start mr-10 mb-7"
                alt="heart"
                width={130}
                height={100}
              />
            </motion.div>
            <Image src={heading} alt="heading" width={1100} height={181} />

            <motion.div
              className="mb-10"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: 3 }}
            >
              <Image
                src={Icon}
                alt="icon"
                className="mb-10"
                width={100}
                height={100}
              />
            </motion.div>
          </motion.div>
          <motion.div
            id={textid2}
            initial="hidden"
            animate={
              scrolled
                ? {
                    scale: getPositionTextsm(scrolled).scale,
                    x: '-40vw',
                    y: '-38vh',
                  }
                : { scale: 1 }
            }
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <h3 className="text-2xl text-blue-100 text-center">
              Full-stack developer
            </h3>
          </motion.div>
          <motion.div
            id="avatar-img"
            initial={{ x: '98%', y: '155%', scale: 1.3 }}
            animate={
              scrolled && !isMobile
                ? {
                    scale: getPositionAvatar(scrolled).scale,
                    x: '8%',
                    y: '18%',
                  }
                : { scale: 1.2 }
            }
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute p-2 rounded-lg md:ml-6 md:border-solid md:border-purple lg:mr-10"
          >
            <Image src={Avatar} alt="avatar" width={400} height={350} />
          </motion.div>
          {/* Arrow */}
          <motion.div
            initial="hidden"
            animate={
              scrolled ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 0 }
            }
            className="absolute  bottom-0 right-45"
          >
            <Link href="/about">
              <svg className="arrows">
                <path
                  strokeLinecap="round"
                  className="a1"
                  d="M0 0 L20 22 L40 0"
                ></path>
              </svg>
            </Link>
          </motion.div>
        </section>
      )}
    </>
  );
};
export default LandingPage;
