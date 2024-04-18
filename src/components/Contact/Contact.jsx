import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import AOS from "aos";
import toast, { Toaster } from "react-hot-toast";
import { CiMail } from "react-icons/ci";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kuzj538",
        "template_bhogqnp",
        form.current,
        "LxJqS-XXxqgol8RKC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        toast.success("Email send"),
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col w-full justify-center items-center m-auto pt-20 text-gray-800"
    >
      <h1 className="text-4xl text-center font-light mb-6">Contact</h1>
      <div className="flex flex-col lg:flex-row items-center lg:space-x-6 space-y-6 lg:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg overflow-hidden bg-brown-50">
        <div className="space-y-20">
          <div>
            <h1 className="text-4xl font-light mb-2">Get In Touch</h1>
            <p>
              Would you like to communicate with me? If so, please send me a
              note. I like hearing from you!
            </p>
          </div>
          <div className="space-y-3 text-xl">
            <div className="flex gap-2 items-center">
              <FaPhone /> +880 019 XXX XXXX
            </div>
            <div className="flex gap-2 items-center">
              <CiMail /> nusratneela27@gmail.com
            </div>
            <div className="flex gap-2 items-center">
              <FaMapMarkerAlt /> Dhaka, Bangladesh
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" flex flex-col gap-8 rounded-lg p-10 bg-black bg-opacity-20 shadow-lg"
          >
            <label className="flex flex-col">
              <span className="font-bold mb-2">Your name</span>
              <input
                type="text"
                name="user_name"
                placeholder="name"
                className="bg-transparent py-2 px-4 placeholder-black border-b border-black border-block rounded-lg font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-bold mb-2">Your Email</span>
              <input
                type="email"
                name="user_email"
                placeholder="email"
                className="bg-transparent py-2 px-4 placeholder-black border-b border-black border-block rounded-lg font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-bold mb-2">Your Message</span>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="7"
                placeholder="message"
                className="bg-transparent py-2 px-4 placeholder-black border-b border-black border-block rounded-lg font-medium"
              ></textarea>
            </label>
            <input
              type="submit"
              value="Send"
              className="bg-blue-gray-900 text-white py-2 px-4 cursor-pointer rounded-lg outline-none border-none font-medium"
            />
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
