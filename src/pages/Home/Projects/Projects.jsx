// =========================== Dynamic Data From DB ========================

import "./Projects.css";
import { FaGithub, FaRegArrowAltCircleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";
import { Button } from "@mui/material";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section id="projects" className="flex flex-col items-center m-10 md:m-20">
      <h1 className="text-4xl text-center font-light mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-800">
        {projectData.map((project) => (
          <div
            key={project._id}
            className="flex gap-10 lg:gap-20 items-center flex-col lg:flex-row border p-7 rounded-lg shadow-md"
          >
            <div className="flex-1 rounded-md">
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-[80vw] h-80 object-cover object-top hover:scale-110"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <div className="text-sm text-justify space-y-5">
                <p>{project.description}</p>
                <p>
                  <span className="font-bold">Technologies:</span>{" "}
                  {project.technologies}
                </p>
                <div className="flex gap-x-2 md:gap-x-5 social-links font-bold">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center gap-x-2 border p-1 rounded-sm"
                  >
                    GitHub
                    <FaGithub />
                  </a>
                  <a
                    href={project.liveSiteLink}
                    target="_blank"
                    className="flex items-center gap-x-2 border p-1 rounded-sm"
                  >
                    Live Site <FaRegArrowAltCircleRight />
                  </a>
                </div>
                <Button
                  onClick={() => handleOpen(project)}
                  variant="contained"
                  sx={{
                    mt: 2,
                    py: 1,
                    background: "linear-gradient(to right, #64b5f6, #ba68c8)",
                    color: "white",
                    "&:hover": {
                      background: "linear-gradient(to right, #ba68c8, #64b5f6)",
                      color: "white",
                    },
                  }}
                >
                  More Info
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal
        open={open}
        handleClose={handleClose}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;

// =========================== Dynamic Data ========================

// import "./Projects.css";
// import toys from "../../../assets/projects/project3.png";
// import home from "../../../assets/projects/project1.png";
// import languages from "../../../assets/projects/project2.png";
// import { FaGithub, FaRegArrowAltCircleRight } from "react-icons/fa";
// import AOS from "aos";
// import { useEffect, useState } from "react";
// import ProjectModal from "./ProjectModal";
// import { Button } from "@mui/material";

// const projectData = [
//   {
//     id: 1,
//     title: "Home To Go",
//     description:
//       "A MERN Stack project Where guests can pick any rooms added by the host and the host can add rooms with proper information description, location, and price.",
//     details:
//       "A MERN Stack project. It is used React JS, React Router, TailWind, React-Hook-From, Express Js, node Js, and Tanstack query Jwt token to ensure that only authorized users could access certain features. This project has three different dashboards with admin, host, and guest. Have customized dashboards with spinner and also mobile responsive. I utilized MongoDB as the database to store rooms which post, host information, user profiles set on the database as role guest or host, and payment system. Stripe payment method for room book. With Express.js on the backend, Created a RESTful API that facilitated smooth communication between the front end and the database.",
//     technologies:
//       "React JS, React Router, TailWind, Express Js, node Js, Tanstack query, JWT, Axios, Stripe",
//     githubLink: "https://github.com/nusratneela27/Home-Rent-Service",
//     liveSiteLink: "https://project-6bc24.web.app/",
//     imageSrc: home,
//     aosDelay: 300,
//     aosClass: "home",
//   },
//   {
//     id: 2,
//     title: "Learning Camp",
//     description:
//       "A MERN Stack project where Users can pick any classes and add them to the dashboard. They can pick multiple classes at a time. There is also an admin, Instructor, and student dashboard.",
//     details:
//       "A MERN Stack project. It is used React JS, React Router, TailWind, React-Hook-From, Express Js, node Js, and Tanstack query Jwt token to ensure that only authorized users could access certain features. This project has three different dashboards with admin, Instructor, and user. Have customized dashboards with spinner and also mobile responsive. I utilized MongoDB as the database to store class which post by instructor, class information, admin profiles set on the database as role instructor, and payment system. Stripe payment method for book classes. With Express.js on the backend, Created a RESTful API that facilitated smooth communication between the front end and the database.",
//     technologies:
//       "React JS, React Router, TailWind, React-Hook-From, Express Js, node Js, Tanstack query",
//     githubLink: "https://github.com/nusratneela27/Learning-camp",
//     liveSiteLink: "https://learning-camp-7ae5f.web.app/",
//     imageSrc: languages,
//     aosDelay: 500,
//     aosClass: "languages",
//   },
//   {
//     id: 3,
//     title: "Toys Projects",
//     description:
//       "A MERN project. Users can choose any toy and add it to the dashboard. Only login users can add new toys, update the toy for the page and see all the bookings of toys.",
//     details:
//       "A MERN Stack project. It is used React JS, React Router, TailWind, Express Js, node Js, and Jwt token to ensure that only authorized users could access certain features. This project has all toys data, update toy and add a toys. Have customized spinner and also mobile responsive. I utilized MongoDB as the database to store toys which post by users. With Express.js on the backend, Created a RESTful API that facilitated smooth communication between the front end and the database.",
//     technologies:
//       "React JS, React Router, React Bootstrap, React-Hook-From, Express Js, node Js",
//     githubLink: "https://github.com/nusratneela27/Toys-marketplace",
//     liveSiteLink: "https://toys-project-3b9a3.web.app/",
//     imageSrc: toys,
//     aosDelay: 700,
//     aosClass: "toys",
//   },
// ];

// const Projects = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState({});

//   useEffect(() => {
//     AOS.init();
//     AOS.refresh();

//     return () => {
//       AOS.refresh();
//     };
//   }, []);

//   const handleOpen = (project) => {
//     setSelectedProject(project);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <section id="projects" className="flex flex-col items-center m-10 md:m-20">
//       <h1 className="text-4xl text-center font-light mb-6">Projects</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-800">
//         {projectData.map((project) => (
//           <div
//             key={project.id}
//             data-aos="fade-zoom-in"
//             data-aos-easing="ease-in-back"
//             data-aos-delay={project.aosDelay}
//             data-aos-offset="0"
//             className="flex gap-10 lg:gap-20 items-center flex-col lg:flex-row border p-7 rounded-lg shadow-md"
//           >
//             <div className="flex-1 rounded-md lg:hidden">
//               <img
//                 src={project.imageSrc}
//                 alt={project.title}
//                 className="w-[80vw] h-60 object-cover object-top hover:scale-110"
//               />
//             </div>
//             <div
//               className={`flex-1 shadow hidden lg:block image-desktop ${project.aosClass}`}
//             ></div>
//             <div className="flex-1">
//               <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
//               <div className="text-sm text-justify space-y-5">
//                 <p>{project.description}</p>
//                 <p>
//                   <span className="font-bold">Technologies:</span>{" "}
//                   {project.technologies}
//                 </p>
//                 <div className="flex gap-x-2 md:gap-x-5 social-links font-bold">
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     className="flex items-center gap-x-2 border p-1 rounded-sm"
//                   >
//                     GitHub
//                     <FaGithub />
//                   </a>
//                   <a
//                     href={project.liveSiteLink}
//                     target="_blank"
//                     className="flex items-center gap-x-2 border p-1 rounded-sm"
//                   >
//                     Live Site <FaRegArrowAltCircleRight />
//                   </a>
//                 </div>
//                 <Button
//                   onClick={() => handleOpen(project)}
//                   variant="contained"
//                   sx={{
//                     mt: 2,
//                     py: 1,
//                     background: "linear-gradient(to right, #64b5f6, #ba68c8)",
//                     color: "white",
//                     "&:hover": {
//                       background: "linear-gradient(to right, #ba68c8, #64b5f6)",
//                       color: "white",
//                     },
//                   }}
//                 >
//                   More Info
//                 </Button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <ProjectModal
//         open={open}
//         handleClose={handleClose}
//         project={selectedProject}
//       />
//     </section>
//   );
// };

// export default Projects;

// =========================== Static Data =========================

// import "./Projects.css";
// import toys from "../../assets/projects/toys.png";
// import home from "../../assets/projects/home.png";
// import languages from "../../assets/projects/languages.png";
// import { FaGithub } from "react-icons/fa";
// import { FaRegArrowAltCircleRight } from "react-icons/fa";
// import AOS from "aos";
// import { useEffect } from "react";

// const Projects = () => {
//   useEffect(() => {
//     AOS.init();
//     AOS.refresh();

//     return () => {
//       AOS.refresh();
//     };
//   }, []);

//   return (
//     <section id="projects" className="flex flex-col items-center m-10 md:m-20">
//       <h1 className="text-4xl text-center font-light mb-6">Projects</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-800">
//         {/* Home to go  */}
//         <div
//           data-aos="fade-zoom-in"
//           data-aos-easing="ease-in-back"
//           data-aos-delay="300"
//           data-aos-offset="0"
//           className="flex gap-10 lg:gap-20 items-center flex-col lg:flex-row border p-7 rounded-lg shadow-md "
//         >
//           <div className="flex-1 rounded-md lg:hidden">
//             <img
//               src={home}
//               className="w-[80vw] h-60 object-cover object-top hover:scale-110"
//             />
//           </div>
//           <div className="flex-1 shadow hidden lg:block image-desktop home"></div>
//           <div className="flex-1">
//             <h2 className="text-2xl font-bold mb-2">Home To Go</h2>
//             <div className="text-sm text-justify space-y-5">
//               <p>
//                 A MERN Stack project Where guests can pick any rooms added by
//                 the host and the host can add rooms with proper information
//                 description, location, and price.
//               </p>
//               <p>
//                 <span className="font-bold">Technologies:</span> React JS, React
//                 Router, TailWind, Express Js, node Js, Tanstack query, JWT,
//                 Axios, Stripe
//               </p>
//               <div className="flex gap-x-2 md:gap-x-5 social-links font-bold">
//                 <a
//                   href="https://github.com/nusratneela27/Home-Rent-Service"
//                   target="_blank"
//                   className="flex items-center gap-x-2 border p-1 rounded-sm"
//                 >
//                   GitHub
//                   <FaGithub />
//                 </a>
//                 <a
//                   href="https://project-6bc24.web.app/"
//                   target="_blank"
//                   className="flex items-center gap-x-2 border p-1 rounded-sm"
//                 >
//                   Live Site <FaRegArrowAltCircleRight />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Learning Camp */}
//         <div
//           data-aos="fade-zoom-in"
//           data-aos-easing="ease-in-back"
//           data-aos-delay="500"
//           data-aos-offset="0"
//           className="flex gap-10 lg:gap-20 items-center flex-col lg:flex-row border p-7 rounded-lg shadow-md"
//         >
//           <div className="flex-1 rounded-md lg:hidden">
//             <img
//               src={languages}
//               className="w-[80vw] h-60 object-cover object-top hover:scale-110"
//             />
//           </div>
//           <div className="flex-1 shadow hidden lg:block image-desktop languages"></div>
//           <div className="flex-1">
//             <h2 className="text-2xl font-bold mb-2">Learning Camp</h2>
//             <div className="text-sm text-justify space-y-5">
//               <p>
//                 A MERN Stack project.where Users can pick any classes and add
//                 them to the dashboard.they can pick multiple class at a time
//                 There is also an admin, Instructor, and student dashboard.
//               </p>
//               <p>
//                 <span className="font-bold">Technologies: </span>
//                 React JS, React Router, TailWind, React-Hook-From, Express Js,
//                 node Js, Tanstack query
//               </p>
//               <div className="flex gap-x-2 md:gap-x-5 social-links font-bold">
//                 <a
//                   href="https://github.com/nusratneela27/Learning-camp"
//                   target="_blank"
//                   className="flex items-center gap-x-2 border p-1 rounded-sm"
//                 >
//                   GitHub
//                   <FaGithub />
//                 </a>
//                 <a
//                   href="https://learning-camp-7ae5f.web.app/"
//                   target="_blank"
//                   className="flex items-center gap-x-2 border p-1 rounded-sm"
//                 >
//                   Live Site <FaRegArrowAltCircleRight />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* toys */}
//         <div
//           data-aos="fade-zoom-in"
//           data-aos-easing="ease-in-back"
//           data-aos-delay="700"
//           data-aos-offset="0"
//           className="flex gap-10 lg:gap-20 items-center flex-col lg:flex-row border p-7 rounded-lg shadow-md"
//         >
//           <div className="flex-1 rounded-md lg:hidden">
//             <img
//               src={toys}
//               alt=""
//               className="w-[80vw] h-60 object-cover object-top hover:scale-110"
//             />
//           </div>
//           <div className="flex-1 shadow hidden lg:block image-desktop toys"></div>
//           <div className="flex-1">
//             <h2 className="text-2xl font-bold mb-2">Toys Projects</h2>
//             <div className="text-sm text-justify space-y-5">
//               <p>
//                 A MERN project. Users can choose any toy and add it to the
//                 dashboard. Only login users can add new toys, update the toy for
//                 the page and see all the bookings of toys.
//               </p>
//               <p>
//                 <span className="font-bold">Technologies: </span>
//                 React JS, React Router, React Bootstrap, React-Hook-From,
//                 Express Js, node Js
//               </p>
//               <div className="flex gap-x-2 md:gap-x-5 social-links font-bold">
//                 <a
//                   href="https://github.com/nusratneela27/Toys-marketplace"
//                   target="_blank"
//                   className="flex items-center gap-x-2 border p-1 rounded-sm"
//                 >
//                   GitHub
//                   <FaGithub />
//                 </a>
//                 <a
//                   href="https://toys-project-3b9a3.web.app/"
//                   target="_blank"
//                   className="flex items-center gap-x-2 border p-1 rounded-sm"
//                 >
//                   Live Site <FaRegArrowAltCircleRight />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
