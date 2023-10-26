import React from 'react'
import aboutImg from "../assets/about-img.png"

const AboutSection = () => {
  return (
    <section id='about' className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <img src={aboutImg} width={500} height={500} />
        <div>
            <h1 className="text-4xl font-bold text-white mb-4 text-center">About Me</h1>
            <p 
                className="text-base lg:text-lg">Hello there! I'm a 22-year-old guy with a love for web development with a passion for creating interactive and responsive web applications. I have knowledge with JavaScript, React, Redux, Node.js, Express, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
            </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection