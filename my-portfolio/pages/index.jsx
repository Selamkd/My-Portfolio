import Image from 'next/image';
import { Roboto } from 'next/font/google';
import Portfolio from '../components/Portfolio';
const roboto = Roboto({
  subsets: ['latin'],
  weights: [400, 700],
  display: 'swap',
});
export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Portfolio />
    </main>
  );
}
