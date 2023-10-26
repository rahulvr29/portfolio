import React from 'react'
import Dp from "../assets/pic2.jpg"
import { TypeAnimation } from 'react-type-animation';
import CV  from "../assets/vr_CareerProfile.pdf"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left">
              <h1 
              className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Hello, I'm {""}
                    <br />
                </span>
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Rahul VR',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Full Stack Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
              </h1>
              <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                A Web Developer & Front-End Enthusiast
              </p>
              <a href={CV} target="_blank" className="px-6 py-3 rounded-full mr-4 bg-purple-600  w-full sm:w-fit hover:bg-purple-900 text-white">
                Download CV
              </a>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className="col-span-5 place-self-center mt-4 lg:mt-0">
              <div className="rounded-full bg-[#181818] w-[400px] h-[400px] relative">
              <img className="w-64 h-64 object-contain absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src={Dp} alt="" />
              </div>
          </motion.div>
        </div>
    </section>
  )
}

export default HeroSection

