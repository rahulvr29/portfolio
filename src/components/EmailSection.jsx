import React, { useState, useRef  } from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import emailjs from 'emailjs-com';
import { motion } from "framer-motion"


const EmailSection = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9a2hr7i', 'template_7oe3q5o', form.current, '2x7AbinaAJJZnbrZl')
      e.target.reset()
  }

  return (

    <section id='contact' className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">

      <div>
      <h5 className="text-xl font-bold text-white my-2"> Let`&apos;s Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
              {''}
              I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-6">
          <a href="https://github.com/rahulvr29" target='_blank' className="w-7 font-semibold text-4xl text-white "><AiFillGithub/></a>
          <a href="" target='_blank' className=" font-semibold text-4xl text-blue-700 "><AiFillLinkedin/></a>
        </div> 
      </div>
      <div>
        {/* {emailSubmitted ? ( */}
          {/* <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p> */}
        {/* ):( */}
          <motion.form
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className="flex flex-col gap-4" ref={form}  onSubmit={sendEmail}>
          <div className='mb-6'>
            <label htmlFor="text" type="text" className="text-white block mb-2 text-sm font-medium">
              Your Name
            </label>
            <input 
              name="name"
              type="text"
              id="name"
              required
              placeholder="Enter your Name"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" />
            </div>
            <div className='mb-6'>
            <label htmlFor="email" type="email" className="text-white block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input 
              name="email"
              type="email"
              id="email"
              required
              placeholder="Enter your mail id"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </motion.form>
        </div>
    </section>
  )
}

export default EmailSection