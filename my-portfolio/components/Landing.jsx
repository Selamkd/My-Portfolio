import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Avatar from '../public/avatar-pic.png';
import heading from '../public/chromium.png';
import clouds from '../public/cloud.png';
import Heart from '../public/heart.png';
import Icon from '../public/Name-tag.png';
import underlineBlue from '../public/underline-blue2.png';
import { getPositionAvatar, getPositionText, getPositionTextsm } from './helpers';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [weather, setWeather] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollCooldown = useRef(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (scrollCooldown.current) return;
      scrollCooldown.current = true;
      setTimeout(() => { scrollCooldown.current = false; }, 300);
      setScrolled(e.deltaY > 0);
    };

    const handleResize = () => setIsMobile(window.innerWidth <= 650);

    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {

    async function fetchWeatherData() {
      try {
        const response = await fetch(
          'https://weather-api138.p.rapidapi.com/weather?city_name=Sheffield',
          {
            headers: {
              'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
              'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com',
            },
          }
        );
        const result = await response.json();
        setWeather(result?.weather?.[0]?.main?.toLowerCase());
      } catch (error) {
        console.error('Weather fetch failed:', error);
      }
    }
    fetchWeatherData();
  }, []); 

  const getWeatherIcon = () => (
    <Image src={clouds} alt={weather ?? 'weather'} width={220} height={220} />
  );

  if (isMobile) {
    return (
      <section className="w-full h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="flex flex-col items-center gap-4 px-6">
          <Image src={Avatar} alt="Selam Ararsa" width={280} height={280} />

          <h1 className="text-2xl text-purple text-center font-semibold">
            Selam Ararsa
          </h1>

          <div className="flex flex-col items-center gap-1">
            <h3 className="text-sm text-blue-100 text-center">
              Software developer
            </h3>
            <Image src={underlineBlue} alt="" width={160} height={20} />
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link href="/about">
            <svg className="arrows">
              <path strokeLinecap="round" className="a1" d="M0 0 L20 22 L40 0" />
            </svg>
          </Link>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="w-full overflow-hidden flex flex-col h-screen justify-center items-center relative">

      <AnimatePresence>
        {scrolled && weather && (
          <motion.div
            key="weather"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute top-4 right-4"
          >
            {getWeatherIcon()}
          </motion.div>
        )}
      </AnimatePresence>

 
      <motion.div
        initial={{ scale: 1 }}
        animate={
          scrolled
            ? { scale: getPositionText(true).scale, x: '-35vw', y: '-32vh' }
            : { scale: 1, x: 0, y: 0 }
        }
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="flex items-center justify-center"
      >
        <motion.div
          animate={{ opacity: scrolled ? 0 : 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={Heart}
            className="self-start mr-10 mb-7"
            alt=""
            width={130}
            height={100}
          />
        </motion.div>

        <Image src={heading} alt="Selam Ararsa" width={1100} height={181} />

        <motion.div
          className="mb-10"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: 3 }}
        >
          <Image src={Icon} alt="" className="mb-10" width={100} height={100} />
        </motion.div>
      </motion.div>

     
      <motion.div
        initial={{ scale: 1 }}
        animate={
          scrolled
            ? { scale: getPositionTextsm(true).scale, x: '-40vw', y: '-38vh' }
            : { scale: 1, x: 0, y: 0 }
        }
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <h3 className="text-2xl text-blue-100 text-center">
          Software developer
        </h3>
      </motion.div>

   
      <motion.div
        id="avatar-img"
        initial={{ x: '98%', y: '135%', scale: 1.6 }}
        animate={
          scrolled
            ? { scale: getPositionAvatar(true).scale, x: '8%', y: '18%' }
            : { scale: 1.2 }
        }
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="absolute p-2 rounded-lg md:ml-6 md:border-solid md:border-purple lg:mr-10"
      >
        <Image src={Avatar} alt="Selam" width={400} height={350} />
      </motion.div>

      {/* Scroll arrow — visible after scroll */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="arrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            >
              <Link href="/about">
                <svg className="arrows">
                  <path strokeLinecap="round" className="a1" d="M0 0 L20 22 L40 0" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LandingPage;