import { useState, useEffect } from 'react';
import Linkeden from '../public/Linkeden.png';
import Mail from '../public/Mail.png';
import Github from '../public/Github.png';
import Link from 'next/link';
import Image from 'next/image';
import Spaceship from '../public/spaceship.png';
const ContactForm = () => {
  return (
    <div class="container my-24  mx-auto md:px-6">
      <section class="mb-32">
        <div class="flex flex-wrap">
          <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <h2 class="text--big text-neutral-300">Contact Me</h2>
            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, modi accusantium ipsum corporis quia asperiores
              dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
              autem omnis fugiat perspiciatis? Ad, veritatis. Laudantium, modi
              accusantium ipsum corporis quia asperiores dolorem nisi corrupti
              eveniet dolores ad maiores repellendus enim
            </p>
            <div className="flex items-center justify-start gap-8">
              <Link href="https://github.com/Selamkd">
                <Image src={Github} alt="avatar pic" width={40} height={30} />
              </Link>
              <Link href="https://www.linkedin.com/in/selam-ararsa-39937126b/">
                <Image src={Linkeden} alt="avatar pic" width={40} height={30} />
              </Link>
              <Link href="https://www.linkedin.com/in/selam-ararsa-39937126b/">
                <Image src={Mail} alt="avatar pic" width={40} height={30} />
              </Link>
            </div>
          </div>
          <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <div class="w-full md:w-96 md:max-w-full mx-auto">
              <div className="love flex justify-end mb-10">
                <input id="switch" type="checkbox" />
                <label class="love-heart" for="switch">
                  <i class="left"></i>
                  <i class="right"></i>
                  <i class="bottom"></i>
                  <div class="round"></div>
                </label>
              </div>
              <div class="p-6 border border-gray-300 sm:rounded-md">
                <h1 class="text--normal text-neutral-300">Form goes here</h1>

                <form>
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
              </div>
            </div>
          </div>
        </div>
        <Image
          className="absolute bottom-0 right-0"
          src={Spaceship}
          width={240}
          height={230}
        />
      </section>
    </div>
  );
};
export default ContactForm;
