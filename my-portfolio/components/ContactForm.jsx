import { useEffect } from 'react';
import Linkeden from '../public/Linkeden.png';
import Mail from '../public/Mail.png';
import Github from '../public/Github.png';
import Link from 'next/link';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import React, { useState, useRef } from 'react';
const ContactForm = () => {
  const [toggle, setToggle] = useState(false);
  let serviceId = 'portfolio-contact';
  let templateId = 'contact-form';
  let publicKey = 'Hg0H7DhSE_CK3X3_R';
  emailjs.init(publicKey);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, e.target, publicKey).then(
      (result) => {
        console.log('Email sent successfully:', result.text);
      },
      (error) => {
        console.error('Email sending failed:', error.text);
      }
    );
    e.target.reset();
  };
  return (
    <div class="container sm:border-solid mt-10 mx-auto md:px-6">
      <section class="mb-32">
        <div class="contact-container flex flex-wrap items-start mt-2 sm:mt-8 justify-start">
          <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            {toggle ? (
              <h2 class="contact-text text--big   text-neutral-300">
                Leave feedback
              </h2>
            ) : (
              <h2 class="contact-text  text--big  text-neutral-300">
                Contact Me
              </h2>
            )}
            {toggle ? (
              <p class="contact-p mb-6 text-neutral-500 dark:text-neutral-300">
                I am always looking to improve, so if you see anything on this
                site that needs improvement please feel free to send any
                feedback or just say hello ! Thank you. 🥰
              </p>
            ) : (
              <p class="contact-p mb-6 text-neutral-500 dark:text-neutral-300">
                {' '}
                I’d love to hear from you! Please use the form to contact me! If
                you’d like to tell me what you think of my projects and
                portfolio! You can toggle the form to leave feedback!
              </p>
            )}
            <div className=" contact-buttons flex items-center justify-start gap-10">
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

          <div class="mb-12 w-full items-center mt-1 sm:mt-7 shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <div class="w-full md:w-96 md:max-w-full mx-auto">
              <div class="p-6 border border-gray-300 sm:rounded-md">
                <h1 class="text--normal text-neutral-300"></h1>

                {!toggle ? (
                  <form onSubmit={handleSubmit}>
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
                        name="user_name"
                        onChange={handleChange}
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
                        name="user_email"
                        placeholder="Your Email"
                        onChange={handleChange}
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
                        name="message"
                        placeholder="Your Message"
                        onChange={handleChange}
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
                  <form onSubmit={handleSubmit}>
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
                        name="user_name"
                        onChange={handleChange}
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
                        name="message"
                        placeholder="Your Message"
                        onChange={handleChange}
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
