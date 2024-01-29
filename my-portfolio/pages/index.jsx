import Image from 'next/image';
import { Inter } from 'next/font/google';
import Portfolio from '../components/Portfolio';
import Intro from '../components/Intro';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Portfolio />
    </main>
  );
}
