import React from "react";
import img from "../../assets/desktop.jpg";
import { Button } from "@material-tailwind/react";
import { useEffect } from "react";
import AOS from "aos";
import cv from "../../assets/resume.pdf";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div
      id="/"
      className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-10 pt-28 md:px-40 md:pt-44 pb-40"
    >
      <div
        className="m-auto"
        data-aos="fade-down"
        data-aos-duration="3000"
        data-aos-anchor-placement="top-center"
      >
        <img height={500} width={500} src={img} />
      </div>
      <div className="mt-20">
        <h1 className="text-sm mb-2 italic">{"Hello, My name"}</h1>
        <h1 className="text-3xl md:text-4xl font-semibold">
          Nusrat Jahan Neela
        </h1>
        <h2 className="text-xl italic mt-2">
          I design and build things for the web
        </h2>
        <p className="text-justify mt-4 md:pe-10">
          I'm a passionate web developer with a passion for JavaScript and a
          solid understanding of React.js. My goal is to make amazing user
          experiences. I use clear, effective code to make concepts come to
          life.
        </p>
        <div>
          <a href={cv} download="">
            <Button className="bg-cyan-500 bg-opacity-50 text-black  mt-14">
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
