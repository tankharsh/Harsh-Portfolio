import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import SkillSet from './components/SkillSet'
import Education from './components/Education'
import Projects from './components/Projects'
import Slice0 from './assets/Slice0.png'
import set2 from './assets/set2.png'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className='h-full w-full bg-[#3D4190]'>
			
        <Navbar />
        <Home />
      </div>

      {/* about us  */}
      <About />

      <SkillSet />

      <Education />
      <div className='bg-[#3D4190] h-auto bg-cover'>
        <Projects />
      </div>

      <Footer />
     
    </>
  )
}

export default App