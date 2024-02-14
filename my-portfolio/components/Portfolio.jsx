import { useState, useEffect } from 'react';
import Image from 'next/image';
import heading from '../public/portfolio.png';
import Avatar from '../public/avatar-pic.png';
import Arrow from '../public/Arrow-button.png';
import Icon from '../public/Name-tag.png';
import { ReactComponent as Heart } from '../public/Heart.svg';
import Link from 'next/link';
import { motion } from 'framer-motion';
const Projects = () => {
  return (
    // <section className=" w-[100%] h-screen flex flex-col items-center ">
    //   <div className=" ml-5">
    //     <Image src={heading} alt="avatar pic" width={400} height={90} />
    //   </div>
    //   <div className="">
    //     <Image src={Avatar} alt="avatar pic" width={300} height={80} />
    //   </div>
    //   <div className="flex my-3  leading-6 text-white flex-col items-center justify-center">
    //     <h1 className="font-Amatic mb-2">SELAM ARARSA</h1>
    //     <h2>
    //       <span class="tapered2">Developer</span>
    //     </h2>
    //   </div>
    //   <Link
    //     href="/about"
    //     id="arrow-down"
    //     className="flex items-center justify-center mr-3 mt-auto"
    //   >
    //     <Image src={Arrow} alt="avatar pic" width={50} height={60} />
    //   </Link>
    // </section>
    <section className="w-[100%] flex flex-col h-screen justify-center items-center >">
      <motion.div
        whileTap={{
          x: -120,
          y: -171,
        }}
        className="flex items-center justify-center"
      >
        <h1 className="text-9xl text-purple">Selam Ararsa</h1>
        <div className="mb-20">
          <Image src={Icon} alt="icon" width={100} height={100} />
        </div>
      </motion.div>
      <h3 className="text-2xl text-blue-100">Full-stack developer</h3>
      {/* <motion.svg
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        width={300}
        height={80}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 80" // set the viewBox to the size of the heart
      > */}
      {/* <Heart /> */}
      {/* </motion.svg> */}
    </section>
  );
};
export default Projects;
