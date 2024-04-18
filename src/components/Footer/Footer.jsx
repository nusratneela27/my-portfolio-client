import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import name from "../../assets/name.png";

const Footer = () => {
  return (
    <section className="px-16 md:px-40 py-10 flex justify-between items-center text-gray-800">
      <div className="flex gap-4">
        <img height={20} width={200} src={name} alt="" />
        <h1 className="text-sm border-s-2 ps-2">
          Copyright © 2024 - All right reserved
        </h1>
      </div>
      <p className="flex text-3xl gap-4">
        <a href="https://github.com/nusratneela27">
          <FaGithub></FaGithub>
        </a>
        <a href="www.linkedin.com/in/nusrat-jahan-neela">
          <FaLinkedin></FaLinkedin>
        </a>
      </p>
    </section>
  );
};

export default Footer;
