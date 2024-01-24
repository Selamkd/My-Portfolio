import { useState, useEffect } from 'react';
import Image from 'next/image';
import heading from '../public/Portfolio.png';
import Avatar from '../public/avatar-pic.png';
const Portfolio = () => {
  return (
    <section className="bg-gray-900 w-[100%] h-screen flex flex-col items-center border border-yellow border-solid">
      <div className=" ml-5">
        <Image src={heading} alt="portfolio text" width={400} height={80} />
      </div>
      <div className="">
        <Image src={Avatar} alt="avatar pic" width={300} height={80} />
      </div>
      <div className="flex text-white flex-col items-center justify-center">
        <h1 className="font-Montserrat">Selam Ararsa</h1>
        <h2>Developer</h2>
      </div>
    </section>
  );
};
export default Portfolio;
