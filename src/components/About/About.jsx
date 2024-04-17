import React, { useEffect } from "react";
import "./About.css";
import pc from "../../assets/pc.gif";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div id="about" className="px-16 md:px-40 pt-20 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  border border-gray-400 rounded-2xl p-10">
        <div
          className="m-auto "
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="text-4xl font-light mb-6">About Me</h1>
          <div className="text-justify text-xl space-y-4">
            <p>
              I'm a talented and enthusiastic web developer. Many web
              development technologies, such as HTML, CSS, JavaScript, React JS,
              Express JS, and MongoDB, are familiar to me. I completed a few
              incredible full-stack initiatives. I'm prepared to put my year of
              web programming experience to use.
            </p>
            <p>
              Seeking chances to advance as a software engineer so I can produce
              higher caliber web applications and more. I'd be happy to work
              from home, but I'm also open to moving to a US or European
              country.
            </p>
          </div>
        </div>
        <div className="m-auto">
          <img src={pc} className="pc" />
        </div>
      </div>
    </div>
  );
};

export default About;
