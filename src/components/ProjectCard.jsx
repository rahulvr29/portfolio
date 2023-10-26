import React from 'react'


const ProjectCard = ({ imgUrl, title, description, gitUrl, demo}) => {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl  relative group"
      style={{background: `url(${imgUrl}) no-repeat`, backgroundSize: "cover"}}
      > 
      <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
      </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 ">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-[#ADB7BE]">{description}</p>
        <div className="flex justify-between px-5 py-2 mt-5">
        <a href={gitUrl} className='btn py-2 px-5 rounded bg-purple-600' target='_blank'>Github</a>
        <a href={demo} className='btn rounded bg-purple-600 py-2 px-5' target='_blank'>Demo</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard