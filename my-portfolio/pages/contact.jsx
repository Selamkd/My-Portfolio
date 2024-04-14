import Form from '../components/ContactForm';
import Header from '../components/Header';
import Link from 'next/link';
import { MdKeyboardCommandKey } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { VscCode } from 'react-icons/vsc';
import { GrContact } from 'react-icons/gr';
export default function Contact() {
  return (
    <main className="flex flex-col h-screen">
      <div className="sticky top-0 sm:top-2 w-full ">
        <header className="top-0 text--small sm:top-4 rounded-none sm:rounded-full border-b sm:border dark:bg-blackish/30 border-gray-800/50 dark:border-gray-400/10 p-3 z-50 backdrop-blur-md w-full m-auto max-w-3xl flex justify-between items-center sticky">
          <nav className="w-full flex justify-around items-center">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-10 sm:hidden">
                {' '}
                <Link
                  className="text-gray-600 dark:text-gray-400 hover:text-purple"
                  href="/ "
                >
                  <MdKeyboardCommandKey />
                </Link>
                <Link
                  className="text-gray-600 dark:text-gray-400 hover:text-purple"
                  href="/about"
                >
                  <FontAwesomeIcon icon={faAddressCard} />
                </Link>
                <Link
                  className="text-gray-600 dark:text-gray-400 hover:text-purple"
                  href="/projects"
                >
                  <VscCode size={33} />
                </Link>
                <Link
                  className="text-gray-600 dark:text-gray-400 hover:text-purple"
                  href="/contact"
                >
                  <GrContact />
                </Link>
              </div>

              {/* Desktop navigation with text */}
              <div id="links" className="hidden items-center sm:flex">
                <Link
                  className="flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 dark:text-gray-400 font-medium px-3 py-2  w-fit"
                  href="/ "
                >
                  Home
                </Link>
                <Link
                  className="flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 dark:text-gray-400 font-medium px-3 py-2  w-fit"
                  href="/about"
                >
                  About Me
                </Link>
                <Link
                  className="flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 dark:text-gray-400 font-medium px-3 py-2  w-fit"
                  href="/projects"
                >
                  Projects
                </Link>
                <Link
                  className="flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 dark:text-gray-400 font-medium px-3 py-2  w-fit"
                  href="/contact"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <Form />
    </main>
  );
}
