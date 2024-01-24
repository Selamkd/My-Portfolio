import Image from 'next/image';
import { Inter } from 'next/font/google';
import Portfolio from '../components/Portfolio';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Portfolio />
    </main>
  );
}
