import React, { useEffect } from 'react';
import html from '../Assets/htmlicon.png';
import css from '../Assets/cssicon.png';
import javasc from '../Assets/jsicon.png';
import tail from '../Assets/tailwindicon.png';
import reac from '../Assets/reacticon.png';
import node from '../Assets/nodeicon.png';
import exp from '../Assets/expressicon.png';
import fire from '../Assets/firebaseicon.png';
import red from '../Assets/reduxixon.png';
import mon from '../Assets/mongodbicon.png';
import git from '../Assets/giticon.png';
import next from '../Assets/nexticon.png';
import figma from '../Assets/figmaicon.png';
import java from '../Assets/javaicon.png';
import adobe from '../Assets/adobexd.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'JavaScript', icon: javasc },
  { name: 'TailwindCSS', icon: tail },
  { name: 'Reactjs', icon: reac },
  { name: 'Expressjs', icon: exp },
  { name: 'Nodejs', icon: node },
  { name: 'Firebase', icon: fire },
  { name: 'MongoDB', icon: mon },
  { name: 'Git', icon: git },
  { name: 'Redux', icon: red },
  { name: 'Java', icon: java },
  { name: 'Nextjs', icon: next },
  { name: 'Figma', icon: figma },
  { name: 'AdobeXD', icon: adobe },

];

const Skill1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=''>
      <div className=" px-9">
    <p className=" pt-7 cursor-default  text-[#5ce8cb] font-bold md:text-[24px] text-[24px] pb-6 text-center font-cyberpunk " data-aos="zoom-in">
          Skill Matrix
        </p>
      </div>
      <div className='grid sm:grid-cols-5 grid-cols-3 lg:px-11 lg:ml-5 lg:pr-7 lg:mr-5 md:px-11 mg:mx-11 px-1 ml-6 pr-0 mr-6 sm:gap-5 gap-2 sm:pb-3 pb-2'>
        {skills.map((skill, index) => (
          <div key={index} className='grid sm:grid-cols-2 grid-cols-1 border-2 border-[#aab7d7]' >
            <div>
              <img className='h-18 w-18 p-2 rounded-full scale-90' src={skill.icon} alt={skill.name} />
            </div>
            <div className='sm:pt-10 pt-2 text-[#aab7d7] font-semibold text-center'>
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill1;
