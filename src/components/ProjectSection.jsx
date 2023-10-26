import React from 'react'
import ProjectCard from './ProjectCard'
import IMG1 from "../assets/image-project/AP.png"
import IMG2 from "../assets/image-project/CDA.png"
import IMG3 from "../assets/image-project/FB.png"
import IMG4 from "../assets/image-project/G.png"
import IMG5 from "../assets/image-project/LS.png"
import IMG6 from "../assets/image-project/PL.png"
import IMG7 from "../assets/image-project/SG.png"
import IMG8 from "../assets/image-project/SRF.png"


const projectsData = [
  {
    id: 1,
    title: "Loopstudios-landing-page",
    description:
      "Leverage React to create Loopstudios Landing Page, a visually engaging and responsive website that showcases captivating multimedia content. Seamlessly present your brand, products, or services with dynamic components and smooth navigation, leaving a lasting impression on visitors with its modern, immersive design.",
    image: IMG5,
    tags: [
      "React Js",
    ],
    category: "Frontend",
    github: "https://github.com/rahulvr29/loopstudios-landing-page",
    demo: "https://loopstudios-landing-page-rahulvr29.vercel.app/",
  },
  {
    id: 2,
    title: "Product-list",
    description:
      "Create a dynamic product list website with React and API integration. Displaying real-time product data, this user-friendly site allows seamless browsing, searching, and filtering. Empower users to explore and shop effortlessly, enhancing their online shopping experience.",
    image: IMG6,
    tags: ["Redux", "React", "API"],
    category: "Frontend",
    github: "https://github.com/rahulvr29/product-list-app-react",
    demo: "https://product-list-app-react.vercel.app/",
  },
  {
    id: 3,
    title: "Feedback app",
    description:
      "Build a robust feedback app with React and API integration to gather valuable user insights. Collect, manage, and analyze feedback in real-time, providing actionable data for improvements. This user-friendly application streamlines the feedback process, enhancing user engagement and facilitating continuous enhancement of products or services.",
    image: IMG3,
    tags: ["React js"],
    category: "Frontend",
    github: "https://github.com/rahulvr29/feedback-app-react",
    demo: "https://feedback-app-react-kts5rnytt-rahulvr29.vercel.app/",
  },
  {
    id: 4,
    title: "Country Details App",
    description:
      "Craft a Country Details app by combining React with API integration. Users can effortlessly explore comprehensive information about countries, from geography and demographics to culture and economy. This user-friendly app provides a rich, interactive experience, offering valuable insights into nations around the world.",
    image: IMG2,
    tags: ["React Js", "API"],
    category: "web app",
    github: "https://github.com/rahulvr29/country-details-reactjs",
    demo: "https://country-details-reactjs.vercel.app/",
  },
  {
    id: 5,
    title: "Form validation",
    description:
      "Create a Form Validation app with React and API integration for seamless data input. This application guides users through error-free form submission, offering real-time validation feedback. It ensures accurate data entry, improving user experience and data quality. Ideal for a wide range of web-based forms, from sign-up to surveys.",
    image: IMG8,
    tags: ["React Js", ],
    category: "web app",
    github: "https://github.com/rahulvr29/form-validation-react",
    demo: "https://form-validation-react-lac.vercel.app/",
  },
  {
    id: 6,
    title: "Snake Game",
    description:
      "Experience nostalgia with a classic Snake Game developed using HTML, CSS, and JavaScript. Control the snake as it grows while avoiding collisions with the walls and itself. With sleek design and responsive controls, this web-based game offers a delightful and challenging retro gaming experience right in your browser.",
    image: IMG7,
    tags: [ "Html", "Css", "Javascript"],
    category: "web app",
    github: "https://github.com/rahulvr29/Snake-Game",
    demo: "https://snake-game-rahulvr29.vercel.app/",
  },
  {
    id: 7,
    title: "Photoshop",
    description:
      "Design a user-friendly Photoshop clone with HTML and CSS. This web-based image editor offers a wide array of essential features, including layers, filters, text, and drawing tools. Users can manipulate and enhance images directly within their web browsers, providing a simplified yet powerful alternative to traditional photo editing software.",
    image: IMG1,
    tags: ["Html", "Css", "Javascript"],
    category: "web app",
    github: "https://github.com/rahulvr29/photoshop",
    demo: "https://photoshop-rahulvr29.vercel.app/",
  },
  {
    id: 8,
    title: "Githup Profile Finder",
    description:
      "Build a GitHub Profile Finder with HTML, CSS, JavaScript, and API integration. Users can search and view GitHub profiles, displaying user information and repositories. This interactive web app simplifies exploring the GitHub community and discovering contributors, enhancing the developer experience.",
    image: IMG4,
    tags: ["API", "Html", "Css", "Javascript",],
    category: "web app",
    github: "https://github.com/rahulvr29/Githup-Profile",
    demo: "https://githup-profile-rahulvr29.vercel.app/",
  },
  
]
const ProjectSection = () => {
  return (
    <div id='project'>
      <h2 className='text-2xl font-light text-white mb-8 opacity-50 mt-10'>My Project</h2>
      <h1 className='text-4xl font-bold text-white mb-4 leading-10'>See My Works Which Will Amaze You!</h1>
      <p className='text-2xl font-light text-white mb-8 opacity-40'>We develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.</p>
      

      <div className='grid md:grid-cols-2 gap-8 md:gap-12 h-full'  >{projectsData.map((project) => <ProjectCard 
      key={project.id} 
      title={project.title} 
      description={project.description} 
      imgUrl={project.image}
      // tags={project}
      gitUrl={project.github}
      demo={project.demo}
      />)}</div>
      <div>
        
      </div>
    </div>
    
  )
}

export default ProjectSection