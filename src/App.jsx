import React from 'react'


import './App.css'
import { Navbar, HeroSection, AboutSection, SkillsSection, ProjectSection, EmailSection } from './components'


function App() {

  return (
    <div>
      <main className="flex min-h-screen flex-col bg-[rgb(18,18,18)]">
          <Navbar/>
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection/>
          <AboutSection/>
          <SkillsSection/>
          <ProjectSection/>
          <EmailSection/>
        </div>


      </main>
    </div>
  )
}

export default App
