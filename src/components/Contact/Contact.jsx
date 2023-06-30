import React, { useRef } from 'react';
import img from '../../assets/Email.gif'
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
import AOS from 'aos';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_kuzj538',
            'template_bhogqnp',
            form.current,
            'LxJqS-XXxqgol8RKC'
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    useEffect(() => {
        AOS.init();
        AOS.refresh();

        return () => {
            AOS.refresh();
        };
    }, []);
    return (
        <div id='contact'>
            <h1 className='text-3xl text-center mt-32 font-bold text-purple-300'>Contact with Me</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-16 md:px-40 pt-16 pb-12'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1000"
                    data-aos-easing="ease-in-sine">
                    <form ref={form} onSubmit={sendEmail} className=' flex flex-col gap-8'>
                        <label className="flex flex-col">
                            <span className='font-bold mb-4'>Your name</span>
                            <input type="text" name="from_name" placeholder="Enter your name" className="bg-purple-50 py-4 px-6 placeholder-black rounded-lg outline-none border-none font-medium" />
                        </label>
                        <label className="flex flex-col">
                            <span className='font-bold mb-4'>Your Email</span>
                            <input type="email" name="from_email" placeholder="Enter your Email" className="bg-purple-50 py-4 px-6 placeholder-black rounded-lg outline-none border-none font-medium" />
                        </label>
                        <label className="flex flex-col">
                            <span className='font-bold mb-4'>Your Message</span>
                            <textarea name="message" id="" cols="30" rows="7" placeholder="Enter your message" className="bg-purple-50 py-4 px-6 placeholder-black rounded-lg outline-none border-none font-medium"></textarea>
                        </label>

                        <input type="submit" value="Send" className="bg-purple-500 text-white py-4 px-6 rounded-lg outline-none border-none font-medium" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;