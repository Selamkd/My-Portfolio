import Image from 'next/image';
import { Inter } from 'next/font/google';
import Avatar from '../public/portfolio.png';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <section className="flex flex-col items-center justify-center">
        <Image src={Avatar} alt="picture of me" width={200} height={200} />
      </section>
    </main>
  );
}
