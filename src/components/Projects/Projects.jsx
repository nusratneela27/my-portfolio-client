import React from 'react';
import './Projects.css'
import toys from '../../assets/projects/toys.png'
import home from '../../assets/projects/home.png'
import chefs from '../../assets/projects/chefs.png'
import languages from '../../assets/projects/languages.png'
import { FaGithub } from 'react-icons/fa';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
// import Wave from 'react-wavify';

const Projects = () => {

    return (
        <div id='projects'>
            {/* <Wave fill='#f79902'
                paused={false}
                options={{
                    height: 20,
                    amplitude: 20,
                    speed: 0.15,
                    points: 3
                }}
            /> */}

            <h1 className='text-3xl text-center font-bold text-purple-300 mt-40'>My Projects</h1>
            <div className='w-[80%] md:w-[60%] mx-auto flex items-center justify-center flex-col space-y-10 md:space-y-20 my-10 md:my-20'>

                {/* Home to go  */}
                <div className='flex gap-10 lg:gap-20 items-center flex-col lg:flex-row lg:flex-row-reverse'>
                    <div className='flex-1 rounded-md lg:hidden'>
                        <img src={home} alt="" className='w-[80vw] h-40 object-cover object-top hover:scale-110' />
                    </div>
                    <div className='flex-1 shadow-xl hidden lg:block image-desktop home'>
                    </div>
                    <div className='flex-1 space-y-5'>
                        <h2 className='text-2xl font-bold text-purple-300 text-center'>Home To Go</h2>
                        <p className='text-center'> A MERN Stack project Where guests can pick any rooms added by the host and the host can add rooms with proper information description, location, and price.</p>
                        <div className='flex'>
                            <p className='font-bold'>Technologies: </p>
                            <p> React JS, React Router, TailWind, Express Js, node Js, Tanstack query, JWT, Axios, Stripe</p>
                        </div>
                        <div className='flex justify-center gap-x-2 md:gap-x-5 social-links font-bold'>
                            <a href="https://github.com/nusratneela27/Home-Rent-Service" target='_blank' className='flex items-center gap-x-2'>GitHub
                                <FaGithub />
                            </a>
                            <a href="https://project-6bc24.web.app/" target='_blank' className='flex items-center gap-x-2'>Live Site <FaRegArrowAltCircleRight />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Learning Camp */}
                <div className='flex gap-10 lg:gap-20 items-center flex-col lg:flex-row'>
                    <div className='flex-1 rounded-md lg:hidden'>
                        <img src={languages} alt="" className='w-[80vw] h-40 object-cover object-top hover:scale-110' />
                    </div>
                    <div className='flex-1 shadow-xl hidden lg:block image-desktop languages'>

                    </div>
                    <div className='flex-1 space-y-5'>
                        <h2 className='text-2xl font-bold text-purple-300 text-center'>Learning Camp</h2>
                        <p className='text-center'>A MERN project. Users can pick any classes and add them to the dashboard. There is also an
                            admin, Instructor, and student dashboard.</p>
                        <div className='flex'>
                            <p className='font-bold'>Technologies: </p>
                            <p> React JS, React Router, TailWind, React-Hook-From, Express Js, node Js, Tanstack query</p>
                        </div>
                        <div className='flex justify-center gap-x-2 md:gap-x-5 social-links font-bold'>
                            <a href="https://github.com/nusratneela27/Learning-camp" target='_blank' className='flex items-center gap-x-2'>GitHub
                                <FaGithub />
                            </a>
                            <a href="https://learning-camp-7ae5f.web.app/" target='_blank' className='flex items-center gap-x-2'>Live Site <FaRegArrowAltCircleRight />
                            </a>
                        </div>
                    </div>
                </div>

                {/* toys */}
                <div className='flex gap-10 lg:gap-20 items-center flex-col lg:flex-row lg:flex-row-reverse'>
                    <div className='flex-1 rounded-md lg:hidden'>
                        <img src={toys} alt="" className='w-[80vw] h-40 object-cover object-top hover:scale-110' />
                    </div>
                    <div className='flex-1 shadow-xl hidden lg:block image-desktop toys'>
                    </div>
                    <div className='flex-1 space-y-5'>
                        <h2 className='text-2xl font-bold text-purple-300 text-center'>Toys Projects</h2>
                        <p className='text-center'> A MERN project. Users can choose any toy and add it to the dashboard. Only login users can add new toys, update the toy for the page and see all the bookings of toys.</p>
                        <div className='flex'>
                            <p className='font-bold'>Technologies: </p>
                            <p>React JS, React Router, React Bootstrap, React-Hook-From, Express Js, node Js</p>
                        </div>
                        <div className='flex justify-center gap-x-2 md:gap-x-5 social-links font-bold'>
                            <a href="https://github.com/nusratneela27/Toys-marketplace" target='_blank' className='flex items-center gap-x-2'>GitHub
                                <FaGithub />
                            </a>
                            <a href="https://toys-project-3b9a3.web.app/" target='_blank' className='flex items-center gap-x-2'>Live Site <FaRegArrowAltCircleRight />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Projects;