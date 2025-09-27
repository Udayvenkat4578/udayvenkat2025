import React from 'react'
import Herosec from '../components/Herosec'
import Mar from '../components/Mar'
import Skill1 from './Skill1'
import Navbar from './Navbar'
import Projects from '../components/Projects'
import MainContact from '../components/Maincontact'
import comic1 from '../Assets/comic1.png'
import About from '../components/About'
import Footer from '../components/Footer'
import Liketit from '../components/Liketit'
import Acrosstheweb from'../components/Acrosstheweb'
import Figma from '../components/Figma'

const Main = () => {
  return (
    <div className='"overflow-x-hidden'>
              <div className='fixed inset-0'>
                <img className="object-cover w-screen h-screen  opacity-10   " src={comic1} alt="background" />
                </div>

      <div className='relative z-10 '>

      <Navbar/>

      <Herosec/>
      <Mar/>
                  <About/>

            <Projects/>
            <Figma/>

      {/* <Followme/>
      <Skill1/>*/}
      <MainContact/> 
      <Liketit/>
            {/* <Acrosstheweb/> */}

      <Footer/>

      </div>
    </div>
  )
}

export default Main