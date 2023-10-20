import React from 'react';
import './Projects.css'
import toys from '../../assets/projects/toys.png'
import chefs from '../../assets/projects/chefs.png'
import jobs from '../../assets/projects/jobs.png'
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

                <div className='flex gap-10 lg:gap-20 items-center flex-col lg:flex-row lg:flex-row-reverse'>
                    <div className='flex-1 rounded-md lg:hidden'>
                        <img src={toys} alt="" className='w-[80vw] h-40 object-cover object-top hover:scale-110' />
                    </div>
                    <div className='flex-1 shadow-xl hidden lg:block image-desktop toys'>
                        {/* <img src={toys} alt="" /> */}
                    </div>
                    <div className='flex-1 space-y-5'>
                        <h2 className='text-2xl font-bold text-purple-300 text-center'>Toys Projects</h2>
                        <p className='text-center'> A MERN project. Users can choose any toy and add it to the dashboard. Only login users can add new toys, update the toy for the page and see all the bookings of toys.</p>
                        <div className='flex'>
                            <p className='font-bold'>Technologies: </p>
                            <p>React JS | React Router | React Bootstrap | React-Hook-From | Express</p>
                        </div>
                        <div className='flex justify-center gap-x-2 md:gap-x-5 social-links font-bold'>
                            <a href="https://github.com/nusratneela27/toys-client" target='_blank' className='flex items-center gap-x-2'>Client
                                <FaGithub />
                            </a>
                            <a href="https://github.com/nusratneela27/toys-server" target='_blank' className='flex items-center gap-x-2'>Server
                                <FaGithub />
                            </a>
                            <a href="https://toys-project-3b9a3.web.app/" target='_blank' className='flex items-center gap-x-2'>Live Site <FaRegArrowAltCircleRight />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='flex gap-10 lg:gap-20 items-center flex-col lg:flex-row '>
                    <div className='flex-1 rounded-md lg:hidden'>
                        <img src={chefs} alt="" className='w-[80vw] h-40 object-cover object-top hover:scale-110' />
                    </div>
                    <div className='flex-1 shadow-xl hidden lg:block image-desktop chef'>
                        {/* <img src={chefs} alt="" /> */}
                    </div>
                    <div className='flex-1 space-y-5'>
                        <h2 className='text-2xl font-bold text-purple-300 text-center'>Chef Hunter</h2>
                        <p className='text-center'>A front-end project where users can explore different recipes from Korean to add different recipes from an initial chef.</p>
                        <div className='flex'>
                            <p className='font-bold'>Technologies: </p>
                            <p>React JS | React Router | React Bootstrap</p>
                        </div>
                        <div className='flex justify-center gap-x-2 md:gap-x-5 social-links font-bold'>
                            <a href="https://github.com/nusratneela27/chefs-recipes-client" target='_blank' className='flex items-center gap-x-2'>Client
                                <FaGithub />
                            </a>
                            <a href="https://github.com/nusratneela27/chefs-recipe-server" target='_blank' className='flex items-center gap-x-2'>Server
                                <FaGithub />
                            </a>
                            <a href="https://chief-receipe.web.app/" target='_blank' className='flex items-center gap-x-2'>Live Site <FaRegArrowAltCircleRight />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='flex gap-10 lg:gap-20 items-center flex-col lg:flex-row lg:flex-row-reverse'>
                    <div className='flex-1 rounded-md lg:hidden'>
                        <img src={jobs} alt="" className='w-[80vw] h-40 object-cover object-top hover:scale-110' />
                    </div>
                    <div className='flex-1 shadow-xl hidden lg:block image-desktop languages'>
                        {/* <img src={jobs} alt="" /> */}
                    </div>
                    <div className='flex-1 space-y-5'>
                        <h2 className='text-2xl font-bold text-purple-300 text-center'>Learning Camp</h2>
                        <p className='text-center'>A MERN project. Users can pick any classes and add them to the dashboard. There is also an
                            admin, Instructor, and student dashboard..</p>
                        <div className='flex'>
                            <p className='font-bold'>Technologies: </p>
                            <p>React JS | React Router |  React-Hook-From | Tailwind | Express Js | Node Js</p>
                        </div>
                        <div className='flex justify-center gap-x-2 md:gap-x-5 social-links font-bold'>
                            <a href="https://github.com/nusratneela27/learning-client" target='_blank' className='flex items-center gap-x-2'>Client
                                <FaGithub />
                            </a>
                            <a href="https://github.com/nusratneela27/learning-server" target='_blank' className='flex items-center gap-x-2'>Server
                                <FaGithub />
                            </a>
                            <a href="https://learning-camp-7ae5f.web.app/" target='_blank' className='flex items-center gap-x-2'>Live Site <FaRegArrowAltCircleRight />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Projects;