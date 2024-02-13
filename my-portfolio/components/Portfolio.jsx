import { useState, useEffect } from 'react';
import Image from 'next/image';
import heading from '../public/portfolio.png';
import Avatar from '../public/avatar-pic.png';
import Arrow from '../public/Arrow-button.png';
import Icon from '../public/Name-tag.png';
import Heart from '../public/heart.png';
import Link from 'next/link';
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
      <div className="flex items-center justify-center">
        <h1 className="text-9xl text-purple">Selam Ararsa</h1>
        <div className="mb-20">
          <Image src={Icon} alt="icon" width={100} height={100} />
        </div>
      </div>
      <h3 className="text-2xl text-blue-100">Full-stack developer</h3>

      <Image src={Heart} alt="avatar pic" width={300} height={80} />
    </section>
  );
};
export default Projects;
