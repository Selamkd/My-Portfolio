import { useState, useEffect } from 'react';
import Linkeden from '../public/Linkeden.png';
import Mail from '../public/Mail.png';
import Github from '../public/Github.png';
import Link from 'next/link';
import Image from 'next/image';

const ContactForm = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div class="container sm:border-solid  mx-auto md:px-6">
      <section class="mb-32">
        <div class="flex flex-wrap items-start mt-8 justify-start">
          <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            {toggle ? (
              <h2 class="text--big md:text text-neutral-300">Leave feedback</h2>
            ) : (
              <h2 class="text--big text-neutral-300">Contact Me</h2>
            )}
            {toggle ? (
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, modi accusantium ipsum corporis quia asperiores
                dolorem nisi corrupti eveniet dolores ad maiores repellendus
                enim autem omnis fugiat perspiciatis? Ad, veritatis. Laudantium,
                modi accusantium ipsum corporis quia asperiores dolorem nisi
                corrupti eveniet dolores ad maiores repellendus enim
              </p>
            ) : (
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, modi accusantium ipsum corporis quia asperiores
                dolorem nisi corrupti eveniet dolores ad maiores repellendus
                enim autem omnis fugiat perspiciatis? Ad, veritatis. Laudantium,
                modi accusantium ipsum corporis quia asperiores dolorem nisi
                corrupti eveniet dolores ad maiores repellendus enim
              </p>
            )}
            <div className="flex items-center justify-start gap-10">
              <Link href="https://github.com/Selamkd" target="_blank">
                <Image src={Github} alt="avatar pic" width={40} height={30} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/selam-ararsa-39937126b/ "
                target="_blank"
              >
                <Image src={Linkeden} alt="avatar pic" width={40} height={30} />
              </Link>
              <Link href="mailto:selamk23@gmail.com">
                <Image src={Mail} alt="avatar pic" width={40} height={30} />
              </Link>
            </div>
          </div>

          <div class="mb-12 w-full items-center mt-7 shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <div class="w-full md:w-96 md:max-w-full mx-auto">
              <div class="p-6 border border-gray-300 sm:rounded-md">
                <h1 class="text--normal text-neutral-300"></h1>

                {!toggle ? (
                  <form>
                    <div class="flex items-center justify-end w-full mb-12">
                      <label
                        for="toogleA"
                        class="flex items-end cursor-pointer"
                      >
                        <div class="relative">
                          <input
                            onClick={handleToggle}
                            id="toogleA"
                            type="checkbox"
                            class="sr-only"
                          />

                          <div class="w-10 h-4 bg-gray-600 rounded-full shadow-inner"></div>

                          <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                        </div>
                      </label>
                    </div>
                    <div class="mb-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                      />
                    </div>
                    <div class="mb-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                      />
                    </div>
                    <div class="mb-6">
                      <input
                        type="text"
                        placeholder="Your Phone"
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                      />
                    </div>
                    <div class="mb-6">
                      <textarea
                        rows="6"
                        placeholder="Your Message"
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        class="
                        w-full
                        text-white
                        bg-primary
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                ) : (
                  <form>
                    <div class="flex items-center justify-end w-full mb-12">
                      <label
                        for="toogleA"
                        class="flex items-end cursor-pointer"
                      >
                        <div class="relative">
                          <input
                            onClick={handleToggle}
                            id="toogleA"
                            type="checkbox"
                            class="sr-only"
                          />

                          <div class="w-10 h-4 bg-gray-600 rounded-full shadow-inner"></div>

                          <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                        </div>
                      </label>
                    </div>
                    <div class="mb-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        class="
                      w-full
                      rounded
                      py-3
                      px-[14px]
                      text-body-color text-base
                      border border-[f0f0f0]
                      outline-none
                      focus-visible:shadow-none
                      focus:border-primary
                      "
                      />
                    </div>
                    <div class="mb-6">
                      <input
                        type="email"
                        placeholder="Your Email (Optional)"
                        class="
                      w-full
                      rounded
                      py-3
                      px-[14px]
                      text-body-color text-base
                      border border-[f0f0f0]
                      outline-none
                      focus-visible:shadow-none
                      focus:border-primary
                      "
                      />
                    </div>
                    <div class="mb-6">
                      <input
                        type="text"
                        placeholder="Your Phone(Optional)"
                        class="
                      w-full
                      rounded
                      py-3
                      px-[14px]
                      text-body-color text-base
                      border border-[f0f0f0]
                      outline-none
                      focus-visible:shadow-none
                      focus:border-primary
                      "
                      />
                    </div>
                    <div class="mb-6">
                      <textarea
                        rows="6"
                        placeholder="Your Message"
                        class="
                      w-full
                      rounded
                      py-3
                      px-[14px]
                      text-body-color text-base
                      border border-[f0f0f0]
                      resize-none
                      outline-none
                      focus-visible:shadow-none
                      focus:border-primary
                      "
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        class="
                      w-full
                      text-white
                      bg-primary
                      rounded
                      border border-primary
                      p-3
                      transition
                      hover:bg-opacity-90
                      "
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <Image
          className="absolute bottom-0 right-0"
          src={Spaceship}
          width={240}
          height={230}
        /> */}
      </section>
    </div>
  );
};
export default ContactForm;
