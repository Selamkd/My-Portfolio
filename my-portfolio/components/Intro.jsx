import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Bluewave from '../public/Bluewave.png';
import Cherry from '../public/cherry.png';
import Github from '../public/Github.png';
import Me from '../public/IMG_6143.jpeg';
import heading from '../public/intro-heading.png';
import Linkeden from '../public/Linkeden.png';
import Mail from '../public/Mail.png';
import Pinkwave from '../public/pink-form.png';

const Intro = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 650);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const socialLinks = [
    { href: 'https://github.com/Selamkd', src: Github, alt: 'GitHub' },
    { href: 'https://www.linkedin.com/in/selam-ararsa-39937126b/', src: Linkeden, alt: 'LinkedIn' },
    { href: 'mailto:selamk23@gmail.com', src: Mail, alt: 'Email' },
  ];

  const ScrollArrow = () => (
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
    >
      <Link href="/projects">
        <svg className="arrows">
          <path strokeLinecap="round" className="a1" d="M0 0 L20 22 L40 0" />
        </svg>
      </Link>
    </motion.div>
  );

  const SocialLinks = ({ justify = 'justify-start' }) => (
    <div className={`flex items-center ${justify} gap-6`}>
      {socialLinks.map(({ href, src, alt }) => (
        <Link
          key={alt}
          href={href}
          target="_blank"
          className="opacity-70 hover:opacity-100 transition-opacity duration-200"
        >
          <Image src={src} alt={alt} width={36} height={36} />
        </Link>
      ))}
    </div>
  );

  const IntroText = () => (
    <p className="text--normal leading-relaxed mt-4 text-base">
      I'm Selam, a software developer with a genuine passion for technology and the craft of writing code.{' '}
      <span className="ex3">I love getting stuck into new things</span>{' '}
      — diving deep into a problem I've never seen before, figuring out how it works, and coming out the other side with something clean and considered.
      I care about clean code, not just because it's easier to maintain, but because I think it reflects how much you respect the work.
      I thrive in creative, collaborative spaces where ideas flow freely and everyone is invested in building something good together.
      Learning is a big part of why I love this field — there's always something new to explore, whether that's a new language, a framework, or just a different way of thinking about a problem.
      When I'm not coding, you'll usually find me with my nose in a book, losing a boss fight for the hundredth time, or thinking about my next project. 😂
    </p>
  );

  if (isMobile) {
    return (
      <div className="relative flex flex-col items-center min-h-screen px-6 pt-8 pb-16">
        
        <div className="absolute top-0 left-0 pointer-events-none">
          <Image src={Bluewave} alt="" width={55} height={55} />
        </div>
        <div className="absolute top-0 right-0 pointer-events-none">
          <Image src={Cherry} alt="" width={85} height={85} />
        </div>

     
        <div className="mt-14 mb-5">
          <Image
            src={Me}
            className="rounded-xl"
            alt="Selam"
            width={200}
            height={200}
          />
        </div>

       
        <SocialLinks justify="justify-center" />

  
        <div className="w-full mt-6">
          <IntroText />
        </div>

     
        <div className="mt-8">
          <ScrollArrow />
        </div>

      
        <div className="absolute bottom-0 right-0 pointer-events-none">
          <Image src={Pinkwave} alt="" width={55} height={55} />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center w-full min-h-screen px-6 md:px-12">
    
        <div className="absolute top-0 left-0 pointer-events-none">
          <Image src={Bluewave} alt="" width={130} height={130} />
        </div>
        <div className="absolute top-0 right-0 pointer-events-none">
          <Image src={Cherry} alt="" width={130} height={130} />
        </div>

     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <Image
            src={Me}
            className="rounded-2xl"
            alt="Selam"
            width={300}
            height={300}
          />
          <SocialLinks justify="justify-center" />
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col justify-center gap-4 md:pr-8"
        >
          <Image src={heading} alt="Hi, I'm Selam" width={220} height={60} />
          <IntroText />
          <div className="mt-4">
            <ScrollArrow />
          </div>
        </motion.div>
      </div>

      <div className="fixed bottom-0 right-0 pointer-events-none">
        <Image src={Pinkwave} alt="" width={200} height={200} />
      </div>
    </>
  );
};

export default Intro;