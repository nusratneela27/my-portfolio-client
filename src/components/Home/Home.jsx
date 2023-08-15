import React from 'react';
import img from '../../assets/girl.gif'
import Typed from 'typed.js';
import { Button } from '@material-tailwind/react';
import { useEffect } from 'react';
import AOS from 'aos';
import cv from "../../assets/resume.pdf"

const Home = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();

        return () => {
            AOS.refresh();
        };
    }, []);

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [' Frontend Developer.', ' React Developer.', ' MERN Stack Developer.',],
            typeSpeed: 90,
            loop: 3,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    // const handleDownload = () => {
    //     const url = '/src/assets/Resume of neela.pdf';
    //     const anchor = document.createElement("a");
    //     anchor.href = url;
    //     anchor.download = "resume.pdf";
    //     anchor.click();
    // }

    return (
        <div id='/' className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-16 md:px-40 pt-32 pb-12'>
            <div className='m-auto' data-aos="fade-down" data-aos-duration="3000" data-aos-anchor-placement="top-center">
                <img src={img} />
            </div>
            <div className='mt-20'>
                <h1 className='text-6xl font-bold text-blue-gray-800'>
                    <span ref={el}></span>
                </h1>

                {/* <div>
                    <a download href="https://drive.google.com/file/d/1GsU0Drg4orIk_h4CoOQNakyrnFGhSS_x/view?usp=drive_link">
                        <Button className='bg-purple-300 mt-14'>Resume</Button>
                    </a>
                </div> */}

                <div>
                    <a href={cv} download=''>
                        <Button className='bg-blue-gray-800  mt-14'>Download Resume</Button>
                    </a>
                </div>

                {/* <Button className='bg-purple-300 mt-14' onClick={handleDownload}>
                    Resumesss
                </Button> */}

            </div>
        </div>
    );
};

export default Home;