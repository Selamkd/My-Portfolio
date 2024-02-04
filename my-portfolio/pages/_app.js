import '@/styles/globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weights: [400, 700],
  display: 'swap',
});
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
