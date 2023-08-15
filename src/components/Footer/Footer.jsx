import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-blue-gray-900 px-16 md:px-40 py-10 flex justify-between'>
            <h1 className='text-xl font-bold text-white'>Copyright © 2023 - All right reserved by Nusrat Jaha Neela</h1>
            <p className='text-white text-3xl flex gap-4'>
                <a href="https://github.com/nusratneela27">
                    <FaGithub></FaGithub>
                </a>
                <a href="https://www.linkedin.com/in/nusrat-neela/">
                    <FaLinkedin></FaLinkedin>
                </a>
            </p>
        </div>
    );
};

export default Footer;