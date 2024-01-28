import Bluewave from '../public/Bluewave.png';
import Pinkwave from '../public/pink-form.png';
import Cherry from '../public/cherry.png';
import Linkeden from '../public/Linkeden.png';
import Mail from '../public/Mail.png';
import Github from '../public/Github.png';
import Image from 'next/image';
import YellowArrow from '../public/yellow-arrow.png';
import Me from '../public/me.png';
const Intro = () => {
  return (
    <div className=" bg-gray-900 w-[100%] h-screen flex flex-col items-center">
      <div className="flex justify-between  w-full">
        <Image src={Bluewave} alt="avatar pic" width={80} height={60} />
        <Image src={Cherry} alt="avatar pic" width={120} height={100} />
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
        <h1>HELLO,</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in{' '}
        </p>
      </div>
      <div className="flex items-center justify-center px-3  gap-8 w-full">
        <Image src={Github} alt="avatar pic" width={40} height={30} />
        <Image src={Linkeden} alt="avatar pic" width={40} height={30} />
        <Image src={Mail} alt="avatar pic" width={40} height={30} />
      </div>
    </div>
  );
};
export default Intro;
