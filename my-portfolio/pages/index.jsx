import Image from 'next/image';
import { Roboto } from 'next/font/google';
import Portfolio from '../components/Portfolio';
import Header from '../components/Header';
export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <Portfolio />
    </main>
  );
}
