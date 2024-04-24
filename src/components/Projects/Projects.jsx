import "./Projects.css";
import toys from "../../assets/projects/toys.png";
import home from "../../assets/projects/home.png";
import languages from "../../assets/projects/languages.png";
import { FaGithub } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import AOS from "aos";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section id="projects" className="flex flex-col items-center m-10 md:m-20">
      <h1 className="text-4xl text-center font-light mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-800">
        {/* Home to go  */}
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="flex gap-10 lg:gap-20 items-center flex-col lg:flex-row border p-7 rounded-lg shadow-md "
        >
          <div className="flex-1 rounded-md lg:hidden">
            <img
              src={home}
              className="w-[80vw] h-60 object-cover object-top hover:scale-110"
            />
          </div>
          <div className="flex-1 shadow hidden lg:block image-desktop home"></div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Home To Go</h2>
            <div className="text-sm text-justify space-y-5">
              <p>
                A MERN Stack project Where guests can pick any rooms added by
                the host and the host can add rooms with proper information
                description, location, and price.
              </p>
              <p>
                <span className="font-bold">Technologies:</span> React JS, React
                Router, TailWind, Express Js, node Js, Tanstack query, JWT,
                Axios, Stripe
              </p>
              <div className="flex gap-x-2 md:gap-x-5 social-links font-bold">
                <a
                  href="https://github.com/nusratneela27/Home-Rent-Service"
                  target="_blank"
                  className="flex items-center gap-x-2 border p-1 rounded-sm"
                >
                  GitHub
                  <FaGithub />
                </a>
                <a
                  href="https://project-6bc24.web.app/"
                  target="_blank"
                  className="flex items-center gap-x-2 border p-1 rounded-sm"
                >
                  Live Site <FaRegArrowAltCircleRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Camp */}
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          className="flex gap-10 lg:gap-20 items-center flex-col lg:flex-row border p-7 rounded-lg shadow-md"
        >
          <div className="flex-1 rounded-md lg:hidden">
            <img
              src={languages}
              className="w-[80vw] h-60 object-cover object-top hover:scale-110"
            />
          </div>
          <div className="flex-1 shadow hidden lg:block image-desktop languages"></div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Learning Camp</h2>
            <div className="text-sm text-justify space-y-5">
              <p>
                A MERN Stack project.where Users can pick any classes and add
                them to the dashboard.they can pick multiple class at a time
                There is also an admin, Instructor, and student dashboard.
              </p>
              <p>
                <span className="font-bold">Technologies: </span>
                React JS, React Router, TailWind, React-Hook-From, Express Js,
                node Js, Tanstack query
              </p>
              <div className="flex gap-x-2 md:gap-x-5 social-links font-bold">
                <a
                  href="https://github.com/nusratneela27/Learning-camp"
                  target="_blank"
                  className="flex items-center gap-x-2 border p-1 rounded-sm"
                >
                  GitHub
                  <FaGithub />
                </a>
                <a
                  href="https://learning-camp-7ae5f.web.app/"
                  target="_blank"
                  className="flex items-center gap-x-2 border p-1 rounded-sm"
                >
                  Live Site <FaRegArrowAltCircleRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* toys */}
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="700"
          data-aos-offset="0"
          className="flex gap-10 lg:gap-20 items-center flex-col lg:flex-row border p-7 rounded-lg shadow-md"
        >
          <div className="flex-1 rounded-md lg:hidden">
            <img
              src={toys}
              alt=""
              className="w-[80vw] h-60 object-cover object-top hover:scale-110"
            />
          </div>
          <div className="flex-1 shadow hidden lg:block image-desktop toys"></div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Toys Projects</h2>
            <div className="text-sm text-justify space-y-5">
              <p>
                A MERN project. Users can choose any toy and add it to the
                dashboard. Only login users can add new toys, update the toy for
                the page and see all the bookings of toys.
              </p>
              <p>
                <span className="font-bold">Technologies: </span>
                React JS, React Router, React Bootstrap, React-Hook-From,
                Express Js, node Js
              </p>
              <div className="flex gap-x-2 md:gap-x-5 social-links font-bold">
                <a
                  href="https://github.com/nusratneela27/Toys-marketplace"
                  target="_blank"
                  className="flex items-center gap-x-2 border p-1 rounded-sm"
                >
                  GitHub
                  <FaGithub />
                </a>
                <a
                  href="https://toys-project-3b9a3.web.app/"
                  target="_blank"
                  className="flex items-center gap-x-2 border p-1 rounded-sm"
                >
                  Live Site <FaRegArrowAltCircleRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
