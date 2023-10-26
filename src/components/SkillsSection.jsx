import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';



const TAB_DATA =[
  {
    title:"Skills",
    id:"skills",
    content:(
      <ul className='flex flex-wrap gap-5 justify-center  '>
        <li>Html</li>
        <li>Css</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Tailwind Css</li>
        <li>Bootstraps</li>
        <li>Sass Css</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Firebase</li>
        <li>MangoDB</li>
      </ul>
    )
  },
  {
    title:"Tools",
    id:"tools",
    content:(
      <ul className='flex flex-wrap gap-5 justify-center  '>
        <li>VS Code</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Vercel</li>
        <li>NPM</li>
        <li>Photoshop</li>
      </ul>
    )
  }
]

const SkillsSection = () => {

  const [ tab, setTab ] = useState("skills");
  const [ ispending, startTransition] = useTransition();

  const handleTabChange = (id)=>{
    startTransition(()=>{
      setTab(id);
    });
  };

  return (
    <div id='skill' className="text-white">
      <h2 className='text-2xl font-light text-white mb-8 opacity-50'>My Skills</h2>
        <h1 className='text-4xl font-bold text-white mb-4 leading-10'>What My Programming Skills <br /> Included?</h1>
        <p
          className='text-2xl font-light text-white mb-8 opacity-40'>
          I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.</p>
          <div className="flex flex-row justify-center mt-8">
            <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange('tools')} active={tab === 'tools'}>Tools
            </TabButton>
          </div>
          <div className='mt-5'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
    </div>
  )
}

export default SkillsSection