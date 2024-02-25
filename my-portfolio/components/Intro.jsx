import Bluewave from '../public/Bluewave.png';
import Pinkwave from '../public/pink-form.png';
import Cherry from '../public/cherry.png';
import Linkeden from '../public/Linkeden.png';
import Mail from '../public/Mail.png';
import Github from '../public/Github.png';
import Image from 'next/image';
import YellowArrow from '../public/yellow-arrow.png';
import ArrowRight from '../public/Arrow-right.png';
import Me from '../public/me.png';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const Intro = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:items-center w-full h-screen">
      {/* Image and social links */}
     
      <div className="md:flex md:flex-col md:items-center md:justify-center">
        <div className="flex justify-between w-full mb-4"></div>
        <div className="mb-4">
          <Image src={Me} alt="avatar pic" width={320} height={200} />
        </div>
        <div className="flex items-center justify-center gap-8">
          <Link href="https://github.com/Selamkd">
            <Image src={Github} alt="avatar pic" width={40} height={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/selam-ararsa-39937126b/">
            <Image src={Linkeden} alt="avatar pic" width={40} height={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/selam-ararsa-39937126b/">
            <Image src={Mail} alt="avatar pic" width={40} height={30} />
          </Link>
        </div>
      </div>
      {/* Text and Arrow */}
      <div  className="md:px-3 w-[80%] ">
        <h1  id="greet" className=" text-purple font- CooperHewitt text-5xl text-center mb-5">Hello 👋🏾</h1>
        <p className="text-light-4 text-3xl e px-2 font-CooperHewitt">
        A recent graduate of the School of Code bootcamp, I am a highly motivated and creative individual with a knack for problem-solving. I’m now looking for the first step in my career as a Software Developer. I am seeking a role where I have the opportunity to work hard, learn and put my great communication skills to the test.
        </p>
        <div class="carousel">
  <div class="logos"></div>
  <div class="mask"></div>
</div>

<div class="carousel">
  <div class="logos"></div>
  <div class="mask"></div>
</div>
        {/* Arrow */}
        <motion.div
      
      animate={{ scale: 1, opacity: 1 }}
      className="flex justify-center items-center"
   
    >
      <Link href="/projects
      ">
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
    
    </div>
  );
};
export default Intro;
