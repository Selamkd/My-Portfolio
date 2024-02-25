import Link from 'next/link';
const Header = () => {
  return (
    <header class="top-0 text--small sm:top-4  rounded-none sm:rounded-full border-b sm:border dark:bg-blackish/30 border-gray-800/50 dark:border-gray-400/10 p-3 z-50 backdrop-blur-md w-full m-auto max-w-3xl flex justify-between items-center sticky">
      <nav class="w-full flex justify-around items-center">
        <div class="flex items-center space-x-8">
          <div id="links" class="  hidden items-center sm:flex">
            <Link
              class="flex  items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium px-3 py-2  w-fit"
              href="/about "
            >
              About me
            </Link>
            <Link
              class="flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium px-3 py-2  w-fit"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              class="flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium px-3 py-2  w-fit"
              href="/current"
            >
              Working on
            </Link>
            <Link
              class="flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium px-3 py-2  w-fit"
              href="/about"
            >
              Contact
            </Link>
            <Link
              class="flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium px-3 py-2  w-fit"
              href="/"
            >
              Home
            </Link>
          </div>
          <button
            class="circle-button inline-flex sm:hidden"
            aria-label="Menu Button"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R2r6l6:"
            data-state="closed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-600 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <button
            aria-label="Open quick search"
            class="circle-button sm:flex hidden plausible-event-name=Command+K"
            data-state="closed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5 text-gray-600 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
              ></path>
            </svg>
          </button>
          <button
            aria-label="Toggle light mode"
            type="button"
            class="circle-button"
            data-state="closed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-4 w-4 text-gray-600 dark:text-gray-300"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
