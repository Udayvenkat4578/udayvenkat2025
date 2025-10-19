import React,{useEffect} from 'react'
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
import Seo from '../components/Seo'
import Certificates from '../components/Certificates'
import Coursera from '../components/Coursera'
import Socials from '../components/Socials'

const Main = () => {

  useEffect(() => {
    console.log("This website is designed and developed by Uday Venkat contact me @ 6281608599 ");
  }, []);
  return (
    <div className='overflow-x-hidden'>
      <div>
<Seo
  title="Uday Venkat || Portfolio"
  description="Discover the portfolio of Uday Venkat – showcasing projects, design, and web development skills."
  url="https://udayvenkat.in/"
  image="https://udayvenkat.in/preview.png"  
/>

      </div>
              <div className='fixed inset-0'>
                <img className="object-cover w-screen h-screen  opacity-10   " src={comic1} alt="background" />
                </div>

      <div className='relative z-10 '>

      <Navbar/>

      <Herosec/>
      <Mar/>
                  <About/>
                  <Socials/>
<Certificates/>
<Coursera/>
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