import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { GrContact } from 'react-icons/gr';
import { MdKeyboardCommandKey } from 'react-icons/md';
import { TbMusicHeart } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';
import SpotifyModal from './SpotifyModal';

const navLinks = [
  { href: '/',         label: 'Home',       icon: <MdKeyboardCommandKey /> },
  { href: '/about',    label: 'About Me',   icon: <FontAwesomeIcon icon={faAddressCard} /> },
  { href: '/projects', label: 'Projects',   icon: <VscCode size={22} /> },
  { href: '/contact',  label: 'Contact Me', icon: <GrContact /> },
];

const Header = () => {
  const [modal, setModal] = useState(false);
  const { pathname } = useRouter();

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header className="top-0 sm:top-4 rounded-none sm:rounded-full border-b sm:border dark:bg-blackish/30 border-gray-800/50 dark:border-gray-400/10 p-3 z-50 backdrop-blur-md w-full m-auto max-w-3xl flex justify-between items-center sticky">
        <nav className="w-full flex justify-around items-center">
          <div className="flex items-center space-x-8">

            {/* Mobile: icon-only links */}
            <div className="flex items-center space-x-10 sm:hidden">
              {navLinks.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  aria-label={label}
                  className={`transition-colors ${
                    isActive(href)
                      ? 'text-purple'
                      : 'text-gray-600 dark:text-gray-400 hover:text-purple'
                  }`}
                >
                  {icon}
                </Link>
              ))}
            </div>

            {/* Desktop: text links */}
            <div className="hidden items-center sm:flex">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none font-medium px-3 py-2 w-fit ${
                    isActive(href)
                      ? 'text-purple bg-gray-100 dark:bg-white/5'
                      : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <TbMusicHeart
              onClick={() => setModal(true)}
              className="h-5 w-5 cursor-pointer text-gray-600 dark:text-gray-400 hover:text-purple"
            />
          </div>
        </nav>
      </header>
      <SpotifyModal modal={modal} closeModal={() => setModal(false)} />
    </>
  );
};

export default Header;