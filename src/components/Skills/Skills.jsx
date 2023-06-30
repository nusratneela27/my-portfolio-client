import React from 'react';
import html5 from '../../assets/skills/html5-c2c893de.svg'
import css from '../../assets/skills/css3-8b31a8b3.svg'
import tailwind from '../../assets/skills/tailwind-css-f83a39de.svg'
import reactjs from '../../assets/skills/react-js-6b2531f8.svg'
import nodejs from '../../assets/skills/node-js-6a6d9a42.svg'
import expressjs from '../../assets/skills/express-js-1514c0ea.svg'
import mongodb from '../../assets/skills/mongodb-f2c61865.svg'
import javascript from '../../assets/skills/javascript-6e73ba73.svg'
import bootstap from '../../assets/skills/bootstap.jpeg'
import firebase from '../../assets/skills/firebase.png'
import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect } from 'react';
import AOS from 'aos';

const Skills = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();

        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <div id='skills' className='mb-20 mt-20'>
            <h1 className='text-3xl text-center mt-16 mb-6 font-bold text-purple-300'>My Skills</h1>

            <div className='grid grid-cols-2 lg:grid-cols-5 gap-10 px-16 md:px-40' data-aos="fade-up" data-aos-duration="3000" data-aos-anchor-placement="top-center">

                <div className='items-center rounded shadow-xl p-4'>
                    <img src={html5} title='html5' className='w-5 h-5 lg:w-[35px] lg:h-[35px] mb-3' />
                    <ProgressBar completed={80} />
                </div>
                <div className='items-center rounded shadow-xl p-4'>
                    <img src={css} title='CSS3' className='w-5 h-5 lg:w-[35px] lg:h-[35px] mb-3' />
                    <ProgressBar completed={70} />
                </div>
                <div className='items-center rounded shadow-xl p-4'>
                    <img src={tailwind} title='tailwind CSS' className='w-5 h-5 lg:w-[35px] lg:h-[35px] mb-3' />
                    <ProgressBar completed={65} />
                </div>
                <div className='items-center rounded shadow-xl p-4'>
                    <img src={bootstap} title='bootstap' className='w-5 h-5 lg:w-[35px] lg:h-[35px] mb-3' />
                    <ProgressBar completed={80} />
                </div>
                <div className='items-center rounded shadow-xl p-4'>
                    <img src={reactjs} title='ReactJs' className='w-5 h-5 lg:w-[35px] lg:h-[35px] mb-3' />
                    <ProgressBar completed={82} />
                </div>
                <div className='items-center rounded shadow-xl p-4'>
                    <img src={javascript} title='javascript' className='w-5 h-5 lg:w-[35px] lg:h-[35px] mb-3' />
                    <ProgressBar completed={68} />
                </div>
                <div className='items-center rounded shadow-xl p-4'>
                    <img src={nodejs} title='NodeJs' className='w-5 h-5 lg:w-[35px] lg:h-[35px] mb-3' />
                    <ProgressBar completed={50} />
                </div>
                <div className='items-center rounded shadow-xl p-4'>
                    <img src={expressjs} title='expressjs' className='w-5 h-5 lg:w-[35px] lg:h-[35px] mb-3' />
                    <ProgressBar completed={50} />
                </div>
                <div className='items-center rounded shadow-xl p-4'>
                    <img src={mongodb} title='mongoDB' className='w-5 h-5 lg:w-[35px] lg:h-[35px] mb-3' />
                    <ProgressBar completed={60} />
                </div>
                <div className='items-center rounded shadow-xl p-4'>
                    <img src={firebase} title='firebase' className='w-5 h-5 lg:w-[35px] lg:h-[35px] mb-3' />
                    <ProgressBar completed={70} />
                </div>
            </div>
        </div>
    );
};

export default Skills;