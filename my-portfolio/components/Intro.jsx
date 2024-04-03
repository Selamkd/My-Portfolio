import Bluewave from '../public/Bluewave.png';
import Pinkwave from '../public/pink-form.png';
import Cherry from '../public/cherry.png';
import Linkeden from '../public/Linkeden.png';
import Mail from '../public/Mail.png';
import Github from '../public/Github.png';
import Image from 'next/image';
import Me from '../public/IMG_1230.jpeg';
import Link from 'next/link';
import yellowArrow from '../public/pic-arrow.png';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Twinkle_Star } from 'next/font/google';
import heading from '../public/intro-heading.png';
const Intro = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
    console.log(scrolled);
    handleResize();
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrolled]);
  return (
    <>
      {isMobile ? (
        <div className="w-full  flex flex-col items-center h-screen">
          {/* Image and social links */}
          <div className="absolute flex justify-between top-0 w-[100%] ">
            <div className="absolute top-0 left-0">
              <Image src={Bluewave} alt="avatar pic" width={60} height={60} />
            </div>

            <div className="absolute top-0 right-0">
              <Image
                src={Cherry}
                className="justify-end "
                alt="avatar pic"
                width={100}
                height={90}
              />
            </div>
          </div>

          <div className="">
            <div className=""></div>
            <div className="mb-4 z-1 ">
              <Image
                src={Me}
                className="rounded-sm z-800 mt-8"
                alt="avatar pic"
                width={230}
                height={100}
              />
            </div>
            <div className="flex items-center justify-center gap-8">
              <Link href="https://github.com/Selamkd">
                <Image
                  src={Github}
                  alt="avatar pic"
                  width={40}
                  height={30}
                  target="_blank"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/selam-ararsa-39937126b/">
                <Image
                  src={Linkeden}
                  alt="avatar pic"
                  width={40}
                  height={30}
                  target="_blank"
                />
              </Link>
              <Link href="mailto:selamk23@gmail.com">
                <Image
                  src={Mail}
                  alt="avatar pic"
                  width={40}
                  height={30}
                  target="_blank"
                />
              </Link>
            </div>
          </div>
          {/* Text and Arrow */}
          <div className="md:px-3 w-[80%] mt-5 mb-7 ">
            <p className="text--normal mt-7 ">
              Hi, Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam.
            </p>

            {/* Arrow */}
          </div>
          <motion.div
            initial="hidden"
            animate={{ scale: 1, opacity: 1 }}
            className="absolute  bottom-0 right-[50%]"
          >
            <Link href="/projects">
              <svg className="arrows">
                <path
                  strokeLinecap="round"
                  className="a1"
                  d="M0 0 L20 22 L40 0"
                ></path>
              </svg>
            </Link>
          </motion.div>
          <div className="absolute bottom-0 right-0 flex justify-end  w-[100%]">
            <Image src={Pinkwave} alt="avatar pic" width={60} height={60} />
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:items-center w-full h-screen">
            {/* Image and social links */}
            <div className="absolute flex justify-between top-0 w-[100%] ">
              <div className="absolute top-0 left-0">
                <Image
                  src={Bluewave}
                  alt="avatar pic"
                  width={140}
                  height={130}
                />
              </div>

              <div className="absolute top-0 right-0">
                <Image
                  src={Cherry}
                  className="justify-end "
                  alt="avatar pic"
                  width={140}
                  height={130}
                />
              </div>
            </div>

            <div className="md:flex md:flex-col  md:items-center md:justify-center">
              <div className="flex justify-between  align-center w-full mb-4"></div>
              <div className="mb-4 z-1 ">
                <Image
                  src={Me}
                  className="rounded-lg z-100 ar"
                  alt="avatar pic"
                  width={320}
                  height={200}
                />
              </div>
              <div className="flex items-center justify-start gap-8 mb-20">
                <Link href="https://github.com/Selamkd " target="_blank">
                  <Image src={Github} alt="avatar pic" width={40} height={30} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/selam-ararsa-39937126b/"
                  target="_blank"
                >
                  <Image
                    src={Linkeden}
                    alt="avatar pic"
                    width={40}
                    height={30}
                  />
                </Link>
                <Link href="mailto:selamk23@gmail.com">
                  <Image src={Mail} alt="avatar pic" width={40} height={30} />
                </Link>
              </div>
            </div>
            {/* Text and Arrow */}
            <div className="md:px-3 w-[80%] ">
              <Image src={heading} alt="avatar pic" width={240} height={230} />
              <p className="text--normal ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam.
              </p>

              {/* Arrow */}
              <Link href="/projects">
                <svg className="arrows">
                  <path
                    strokeLinecap="round"
                    className="a1"
                    d="M0 0 L20 22 L40 0"
                  ></path>
                </svg>
              </Link>
            </div>

            <div className="absolute bottom-20 left-0 flex justify-center  w-[100%]">
              {/* <Image
                src={yellowArrow}
                alt="avatar pic"
                width={220}
                height={220}
              /> */}
            </div>
          </div>
          <div className="flex w-full justify-end fixed bottom-10">
            <Image src={Pinkwave} alt="avatar pic" width={220} height={210} />
          </div>
        </>
      )}
    </>
  );
};
export default Intro;
