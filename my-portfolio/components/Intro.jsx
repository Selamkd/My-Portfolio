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
    <div className=" w-[100%] h-screen flex flex-col items-center">
      <div className="flex justify-between  w-full">
        <Image src={Bluewave} alt="avatar pic" width={80} height={60} />
        <Image src={Cherry} alt="avatar pic" width={80} height={60} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={Me} alt="avatar pic" width={320} height={200} />
        <Image
          className="self-end"
          src={YellowArrow}
          alt="avatar pic"
          width={120}
          height={100}
        />
        <h1 className="bold text-purple text-2xl">HELLO,</h1>
        <p className="text-off-white px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in{' '}
        </p>
      </div>
      <div className="flex items-center justify-center px-3  gap-8 w-full">
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
      <Link
        href="/projects"
        className="flex items-center justify-end w-full mt-auto"
      >
        <Image src={ArrowRight} alt="avatar pic" width={100} height={80} />
      </Link>
    </div>
  );
};
export default Intro;
