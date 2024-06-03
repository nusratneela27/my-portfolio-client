import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import AOS from "aos";
import toast, { Toaster } from "react-hot-toast";
import { CiMail } from "react-icons/ci";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Button, TextField } from "@mui/material";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kuzj538",
        "template_bhogqnp",
        form.current,
        "LxJqS-XXxqgol8RKC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        toast.success("Email send"),
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col w-full justify-center items-center m-auto pt-20 text-gray-800"
    >
      <h1 className="text-4xl text-center font-light mb-6">Contact</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:space-x-6 space-y-6 lg:space-y-0 w-full max-w-7xl p-8 sm:p-12 rounded-3xl shadow-lg overflow-hidden bg-brown-50">
        <div className="space-y-20">
          <div>
            <h1 className="text-4xl font-light mb-2">Get In Touch</h1>
            <p>
              Would you like to communicate with me? If so, please send me a
              note. I like hearing from you!
            </p>
          </div>
          <div className="space-y-3 text-xl">
            <div className="flex gap-2 items-center">
              <FaPhone /> +880 019 XXX XXXX
            </div>
            <div className="flex gap-2 items-center">
              <CiMail /> nusratneela27@gmail.com
            </div>
            <div className="flex gap-2 items-center">
              <FaMapMarkerAlt /> Dhaka, Bangladesh
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" flex flex-col gap-5 rounded-3xl p-10 bg-white bg-opacity-30 shadow-lg"
          >
            <TextField
              id="name"
              label="Name"
              type="name"
              autoComplete="name"
              fullWidth
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
                width: "100%",
              }}
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              autoComplete="email"
              fullWidth
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
                width: "100%",
              }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              defaultValue="Message"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
                width: "100%",
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                py: 1.5,
                background: "linear-gradient(to right, #bcaaa4, #6d4c41)",
                color: "white",
                "&:hover": {
                  background: "linear-gradient(to right, #6d4c41, #bcaaa4)",
                  color: "white",
                },
              }}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
