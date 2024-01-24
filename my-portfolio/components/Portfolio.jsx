import { useState, useEffect } from 'react';
import Image from 'next/image';
import heading from '../public/Portfolio.png';
const Portfolio = () => {
  return (
    <section className="bg-gray-900">
      <Image src={heading} alt="portfolio text" width={600} height={500} />
    </section>
  );
};
export default Portfolio;
