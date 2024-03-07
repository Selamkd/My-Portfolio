import Intro from '../components/Intro';
import Header from '../components/Header';
import playlistCatagories from '../components/playlistCatagories';
import { ImCool } from 'react-icons/im';
import { BsEmojiHeartEyes } from 'react-icons/bs';
import { SlSocialSpotify } from 'react-icons/sl';
import SpotifyPlayer from '../components/SpotifyPlayer';
import { useState } from 'react';
import upBeat from '../public/moods-1.png';
import dance from '../public/moods-2.png';
import chill from '../public/moods-3.png';
import calm from '../public/moods-4.png';
import Image from 'next/image';
export default function About() {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleSelection = (mood) => {
    setSelectedMood(mood);
  };
  const handleRefresh = () => {
    setSelectedMood(null);
  };
  return (
    <section>
      <div className="relative flex justify-center z-10 items-center">
        <div
          id="menu"
          className={`w-full h-full bg-gray-900 z-900 bg-opacity-80 top-0 fixed sticky-0`}
        >
          <div className="2xl:container  2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
            <div className="w-96 md:w-auto dark:bg-gray-800 relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36">
              <div role="banner">
                {!selectedMood && <h1> Pick your current mood</h1>}
              </div>
              <div className="flex justify-center items-center flex-wrap">
                {!selectedMood && (
                  <>
                    <div className="w-full md:w-1/2 p-2">
                      <Image
                        src={upBeat}
                        onClick={() => handleSelection('upbeat')}
                        alt="mood-upbeat"
                        width={160}
                        height={120}
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                      <Image
                        src={dance}
                        onClick={() => handleSelection('dance')}
                        alt="mood-dance"
                        width={190}
                        height={150}
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                      <Image
                        src={chill}
                        onClick={() => handleSelection('chill')}
                        alt="mood-dance"
                        width={170}
                        height={130}
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                      <Image
                        src={calm}
                        onClick={() => handleSelection('calm')}
                        alt="mood-dance"
                        width={170}
                        height={130}
                      />
                    </div>
                  </>
                )}
                {selectedMood && (
                  <SpotifyPlayer mood={selectedMood} refresh={handleRefresh} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
