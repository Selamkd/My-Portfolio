import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import heading from '../public/portfolio.png';
import Avatar from '../public/avatar-pic.png';
import Arrow from '../public/Arrow-button.png';
import Icon from '../public/Name-tag.png';
import sun from '../public/sun.png';
import Heart from '../public/heart.png';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { motion } from 'framer-motion';
const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('wheel', handleScroll);
    console.log(scrolled);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [scrolled]);
  return (
    <section className="w-full flex flex-col h-screen justify-center items-center relative">
      {/* Sun icon */}
      {scrolled ? (
        <div className="absolute top-0 right-0">
          <Image src={sun} alt="sun-icon" width={150} height={150} />
        </div>
      ) : null}

      {/* name, h3, icons */}
      <motion.div
        initial="hidden"
        animate={scrolled ? { scale: 0.5, x: -370, y: -291 } : { scale: 1 }}
        className="flex items-center justify-center"
      >
        <motion.div animate={scrolled ? { opacity: 0 } : { opacity: 1 }}>
          {' '}
          <Image
            src={Heart}
            className="self-start mr-10"
            alt="heart"
            width={100}
            height={100}
          />
        </motion.div>

        <h1 className="text-9xl text-purple">Selam Ararsa</h1>
        <div className="mb-20">
          <Image src={Icon} alt="icon" width={100} height={100} />
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={scrolled ? { scale: 1, x: -365, y: -350 } : { scale: 1 }}
      >
        <h3 className="text-2xl text-blue-100">Full-stack developer</h3>
      </motion.div>
      <motion.div
        initial={{ x: 100, y: 340 }}
        animate={scrolled ? { scale: 1.3, x: -560, y: -150 } : { scale: 1 }}
        className="absolute bottom-5 right-0"
      >
        <Image src={Avatar} alt="avatar" width={400} height={350} />
      </motion.div>
      {/* Arrow */}
      <motion.div
        initial="hidden"
        animate={
          scrolled
            ? { scale: 2, x: -100, y: -50, opacity: 1 }
            : { scale: 1, opacity: 0 }
        }
        className="absolute  bottom-0 right-0"
      >
        {/* <FontAwesomeIcon id="landing-arrow" icon={faPaperPlane} /> */}
      </motion.div>
    </section>
  );
};
export default LandingPage;
