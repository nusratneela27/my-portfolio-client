import React from 'react';
import './About.css'
import pc from '../../assets/pc.gif'

const About = () => {
    return (
        <div id='about' className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-16 md:px-40 pt-20 pb-20 bg-purple-50'>
            <div className='m-auto'>
                <h1 className='text-3xl font-bold text-purple-300 mb-6'>About Me</h1>
                <p className='text-xl'>I am a passionate and creative Front-End Web Developer. I am familiar with a number of web development technologies, including HTML, CSS, JavaScript, React JS, Express JS, and MongoDB. I finished a few amazing full-stack projects. I'm ready to use my one year of MERN Stack experience.</p>
            </div>
            <div className='m-auto'>
                <img src={pc} className='pc' />
            </div>
        </div>
    );
};

export default About;