import Intro from '../components/Intro';
import Header from '../components/Header';
import playlistCatagories from '../components/playlistCatagories';
import { ImCool } from 'react-icons/im';
import { BsEmojiHeartEyes } from 'react-icons/bs';
import { SlSocialSpotify } from 'react-icons/sl';
import SpotifyPlayer from '../components/SpotifyPlayer';
export default function About() {
  return (
    <section>
      <div class="relative flex justify-center z-10 items-center">
        <div
          id="menu"
          className={`w-full h-full bg-gray-900 z-900 bg-opacity-80 top-0 fixed sticky-0 
       
         `}
        >
          <div class="2xl:container  2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
            <div class="w-96 md:w-auto dark:bg-gray-800 relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36">
              {' '}
              {/* <div role="banner">
                <h1> Pick your current mood</h1>
              </div>
              <div class="flex justify-center items-center flex-wrap">
                <div class="w-full md:w-1/2 p-4">
                  <ImCool class="w-full text-[#1DB95470]" size={123} />
                </div>
                <div class="w-full md:w-1/2 p-4">
                  <BsEmojiHeartEyes
                    class="w-full text-[#1DB95470]"
                    size={123}
                  />
                </div>
                <div class="w-full md:w-1/2 p-4">
                  <ImCool class="w-full text-[#1DB95470]" size={123} />
                </div>
                <div class="w-full md:w-1/2 p-4">
                  <BsEmojiHeartEyes
                    class="w-full text-[#1DB95470]"
                    size={123}
                  />
                </div> */}
              <SpotifyPlayer />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
