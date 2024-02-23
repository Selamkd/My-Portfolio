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
const Intro = () => {
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
      <div className="md:px-3">
        <h1 className="font-bold text-purple text-2xl">HELLO,</h1>
        <p className="text-off-white px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>
        <Link
          href="/projects"
          className="flex items-center justify-end mt-auto"
        >
          <Image src={ArrowRight} alt="avatar pic" width={100} height={80} />
        </Link>
      </div>
    </div>
  );
};
export default Intro;
