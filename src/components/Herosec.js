import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
         import SplitText from "./SplitText";
         

import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import arrow from '../Assets/expand-arrows.png';
import LinkedinLogo from '../Assets/linkedin1.png';
import githublogo from '../Assets/githublogo.png';
import behancelogo from '../Assets/behancelogo.png';
import mediumlogo from '../Assets/mediumlogo.png';
import { database, ref, runTransaction } from './firebase';
import eye from '../Assets/eye.png';
import emailjs from 'emailjs-com';

const Herosec = () => {
  const [visitorCount, setVisitorCount] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    AOS.init({ duration: 500 });

    const counterRef = ref(database, 'visitorCount');
    runTransaction(counterRef, (current) => current).then(({ snapshot }) => {
      setVisitorCount(snapshot.val());
    });

    const alreadyVisited = sessionStorage.getItem('popup_shown');
    if (!alreadyVisited) {
      setShowModal(true);
      sessionStorage.setItem('popup_shown', 'true');
    }

    if (!sessionStorage.getItem('visited')) {
      runTransaction(counterRef, (current) => (current || 0) + 1).then(({ snapshot }) => {
        sessionStorage.setItem('visited', 'true');
        setVisitorCount(snapshot.val());
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      'service_hn015xx',
      'template_u5jgt8g',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      'k9sAVSzScreKyw7Bv'
    )
      .then(() => {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setShowModal(false);
          setStatus('idle');
        }, 1500);
      })
      .catch(() => {
        alert('Something went wrong. Please try again.');
        setStatus('idle');
      });
  };
  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


  return (
    <div className="overflow-x-hidden sm:pb-3 pb-4 sm:pt-4 pt-2">

      <div className="grid grid-cols-1 cursor-default z-30">
        <div className="sm:ml-11 sm:pl-11 ml-4 mr-4 sm:mr-0 sm:pt-1 pt-0" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-out">



          <h1 className="">
            <SplitText
  text="Uday venkat."
  className="text-[45px] md:text-[96px] font-cyberpunk font-bold text-[#c3d2f6]"
  delay={140}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>
            
            
            
</h1>
          <span style={{ color: '#5ce8cb', fontWeight: 'bold', fontSize: '1.75em', font: 'cyberpunk' }}>
            <Typewriter
              words={[
                'I’m a Frontend Developer',
                'I’m a Ui/UX Designer',
                'I’m a ReactJS Developer',
                'I’m a MERN Stack Dev',
              ]}
              loop={170}
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={70}
              delaySpeed={700}
            />
          </span>

          <div className='grid md:grid-cols-2 grid-cols-1 gap-11'>
            <div>
              <p className='hidden sm:grid text-[13px] mt-1 text-[#c3d2f6] sm:mb-1 mb-1 font-cyberpunk'>
                I'm a Frontend and MERN developer with a background in UI/UX design. Focusing on creating top-notch
                web applications that not only look stunning but also deliver exceptional performance with better user Experience.
              </p>

              <p className="grid sm:hidden text-[13px] mt-1 text-[#c3d2f6] sm:mb-11 mb-2 font-cyberpunk">
                I'm a Frontend and MERN developer with a background in UI/UX design. Focusing on creating top-notch applications
              </p>

              <ul className="flex flex-row gap-x-5 pb-3">
                <li className="text-[17px] font-cyberpunk font-bold text-[#FDA50F] md:pt-3 pt-3">
                  <Link to="work">Work</Link>
                </li>
                <li className="text-[17px] font-cyberpunk font-bold text-[#FDA50F] md:pt-3 pt-3">
                  <Link to="/follow">Social</Link>
                </li>
                <li className="text-[17px] font-cyberpunk font-bold text-[#FDA50F] md:pt-3 pt-3">
                  <Link to="/skills">About Me</Link>
                </li>
              </ul>

              <ul className="flex flex-row gap-x-5">
                <li><a href='https://www.linkedin.com/in/uday-venkat-07a177221/'><img src={LinkedinLogo} className='h-6 w-6' /></a></li>
                <li><a href='https://github.com/Udayvenkat4578'><img src={githublogo} className='h-7 w-7' /></a></li>
                <li><a href='https://www.behance.net/udayvenkat'><img src={behancelogo} className='h-7 w-7' /></a></li>
                <li><a href='https://medium.com/@udayvenkat4578'><img src={mediumlogo} className='h-7 w-7' /></a></li>
              </ul>

              <div className="pt-2 text-[13px] font-cyberpunk text-[#5ce8cb]">
                <div className='flex flex-row items-center'>
                  <img src={eye} className='w-6 h-6' />
                  <p className='px-2 font-extra-bold'>
                    <span className='text-[#c3d2f6] text-xl'>{visitorCount !== null ? visitorCount : '...'} </span>
                    <span>visitors so far</span>
                  </p>
                </div>
              </div>
            </div>

            <div className='pt-1 text-right pr-3 md:pr-11 md:pt-11 md:pb-4 pb-4 md:mt-6 mt-0'>
              <div className="md:grid hidden justify-end">
                <Link to='/smallcontact'>
                  <h1 className="flex items-center text-[20px] font-semibold text-[#5ce8cb] font-cyberpunk transition-all duration-300 hover:scale-110">
                    Let's Talk
                    <span className="ml-2"><img className="w-4 h-4" src={arrow} alt="arrow" /></span>
                  </h1>
                </Link>
              </div>

              <h1 className="">            <SplitText
  text="Designer &"
  className="text-[48px] md:text-[54px] font-cyberpunk font-bold text-[#c3d2f6]"
  delay={140}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>
</h1>
              <h1 className=""><SplitText
  text="Developer"
  className="text-[48px] md:text-[54px] font-cyberpunk font-bold text-[#c3d2f6] md:pb-6 pb-0"
  delay={140}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/></h1>

              <div className='grid text-right md:hidden justify-end'>
                <Link to='/smallcontact'>
                  <h1 className="flex items-center text-[16px] font-semibold text-[#5ce8cb] font-cyberpunk">
                    Let's Talk
                    <span className="ml-2"><img className="w-4 h-4" src={arrow} alt="arrow" /></span>
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosec;
