import { useState, useEffect } from 'react';
import Image from 'next/image';
import heading from '../public/Portfolio.png';
import Avatar from '../public/avatar-pic.png';
import Arrow from '../public/Arrow-button.png';

const Portfolio = () => {
  return (
    <section className="bg-gray-900 w-[100%] h-screen flex flex-col items-center ">
      <div className=" ml-5">
        <Image src={heading} alt="avatar pic" width={400} height={90} />
      </div>
      <div className="">
        <Image src={Avatar} alt="avatar pic" width={300} height={80} />
      </div>
      <div className="flex my-3  leading-6 text-white flex-col items-center justify-center">
        <h1 className="font-Amatic mb-2">SELAM ARARSA</h1>
        <h2>
          <span class="tapered2">Developer</span>
        </h2>
      </div>
      <button
        id="arrow-down"
        className="flex items-center justify-center mr-3 mt-auto"
      >
        <Image src={Arrow} alt="avatar pic" width={50} height={60} />
      </button>
    </section>
  );
};
export default Portfolio;