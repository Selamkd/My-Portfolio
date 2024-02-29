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
              <div class="p-6 border border-gray-300 sm:rounded-md">
                <h1 class="text--big text-neutral-300">Form goes here</h1>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="absolute bottom-0 right-0"
          src={Spaceship}
          width={440}
          height={330}
        />
      </section>
    </div>
  );
};
export default ContactForm;
