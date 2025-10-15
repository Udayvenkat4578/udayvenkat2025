import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import external from '../Assets/external.png';
import comic2 from '../Assets/comic2.png';
import Navbar from "../Gcomponents/Navbar";
import purelypro from '../Assets/purelypro.png';
import Seo from './Seo';

// Updated image imports
import vitalflowNew from '../Assets/vitalcover.png';
import portfolioNew from '../Assets/portfoliologo.png';
import artoslogo from '../Assets/artoslogo.png';
import cryptolink from '../Assets/pro5.png';
import snaptrackr from '../Assets/pro4.png';
import vitalflowOld from '../Assets/pro2.png';
import amazon from '../Assets/pro1.png';
import eve from '../Assets/pro7.png';
import dev from '../Assets/dev.png';
import Footer from './Footer';
import Riddlepro from '../Assets/riddlepro.png'
import snappadpro from '../Assets/snappadpro.png'
import sppro from '../Assets/sppro.png'


const Work = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
          id: 1,
      img: Riddlepro,
      title: 'We Design to Develop',
      description:
        "Got an idea? Let’s shape it, refine it, and turn it into brilliance together.",
      url: 'https://designwithriddle.online/',
      type: 'code',
    },
    {
      id: 2,
      img: sppro,
      title: 'sptelugintiruchulu',
      description:"Eats, Treats,Pickles & Sweets All Your Cravings in One Place.",
      url: 'https://sptelugintiruchulu.netlify.app/',
      type: 'code',
    },
    {
      id: 3,
      img: snappadpro,
      title: 'snapp AD',
      description:
        "Your Brand. On the Big Screen. Seen by Millions.",
      url: 'https://snapp-ad.vercel.app/',
      type: 'code',
    },

    {
      id: 4,
      img: vitalflowNew,
      title: 'Vital Flow',
      description: 'Vital Flow is a streamlined platform that facilitates timely connections between blood donors and recipients.',
      url: 'https://vital-flow.netlify.app/',
      type: 'code',
    },
    {
      id: 5,
      img: portfolioNew,
      title: 'Personal Portfolio',
      description: 'A showcase of creativity and innovation in web development and design.',
      url: 'https://udayvenkat.in/',
      type: 'code',
    },
    {
      id: 6,
      img: artoslogo,
      title: 'Artos Soft Drinks',
      description: 'A vibrant blend of taste and refreshment for bold experiences.',
      url: 'https://artosdrinks.netlify.app/',
      type: 'code',
    },
        {
      id: 7,
      img: purelypro,
      title: 'Hyperlocal vendor delivery',
      description: 'Fresh picks Trusted Sellers, Hyperfast Delivery for Hyperlocal Vendors. Daily!',
      url: 'https://purelypro.netlify.app/',
      type: 'code',
    },

    {
      id: 8,
      img: cryptolink,
      title: 'CryptoLink',
      description: 'CryptoLink - Your Gateway to Crypto Knowledge and Real-Time Prices. Explore market trends, prices, and crypto info.',
      url: 'https://cryptolink.netlify.app/',
      type: 'code',
    },
    {
      id: 9,
      img: snaptrackr,
      title: 'SnapTrackr',
      description: 'Explore 2M+ images with a user-friendly search interface. Find stunning visuals for any creative need.',
      url: 'https://snaptracker.netlify.app/',
      type: 'code',
    },
    {
      id: 10,
      img: vitalflowOld,
      title: 'Vital Flow (Old)',
      description: 'An earlier iteration of the Vital Flow platform focused on blood donor-recipient connectivity.',
      url: 'https://vital-flow.netlify.app/',
      type: 'code',
    },
    {
      id: 11,
      img: amazon,
      title: 'Amazon Clone (Redux)',
      description: 'Explore an Amazon-style shopping clone with cart management, item tracking, and Redux integration.',
      url: 'https://amazon-com-in.netlify.app/',
      type: 'code',
    },
    {
      id: 12,
      img: eve,
      title: 'Eve Healthcare',
      description: 'Smart Clinics platform letting users connect with top medical professionals and schedule visits easily.',
      url: 'https://www.behance.net/gallery/182143137/Eve-Healthcare',
      type: 'Design',
    },
    {
      id: 13,
      img: dev,
      title: "Tomorrow's Creations",
      description: "Stay tuned for what's next! Explore my upcoming website projects, where innovation meets design.",
      url: '#',
      type: 'code',
    },
  ];


  return (
    <div>
        <Seo
        title="Work "
        description="Explore the portfolio of Uday Venkat – showcasing web development projects, design prototypes, and creative work."
        url="https://udayvenkat.in/work"
        image="https://udayvenkat.in/preview-work.png" // optional: unique preview image for Work page
      />
      {/* Background */}
      <div className='fixed inset-0'>
        <img className="object-cover w-screen h-screen opacity-10" src={comic2} alt="background" />
      </div>

      {/* Navbar */}
      <div className='z-10 relative'>
        <Navbar />
      </div>

      {/* Content */}
      <div className='sm:p-3 p-2 pt-8 pb-11'>
<div className="text-center mb-8" data-aos="zoom-in">
  <h2 className="text-[#5ce8cb] font-cyberpunk text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
    Projects
  </h2>
  <p className="mt-4 text-sm sm:text-base md:text-[16px] text-[#c3d2f6] max-w-2xl mx-auto px-4 font-light font-cyberpunk">
    A curated collection of my best work—from design prototypes to production-ready web apps. Each project reflects a journey of creativity, development, and problem-solving.
  </p>
</div>

        <div className='grid sm:grid-cols-3 grid-cols-1 gap-9 px-3 sm:px-9 mt-7'>
{projects.map((project, index) => (
  <React.Fragment key={index}>
    {/* Show heading after 3rd project */}
    {index === 7 && (
      <div className="col-span-full text-center mt-4 mb-2" data-aos="fade-up">
        <h3 className="text-[#9acbff] text-xl sm:text-2xl font-semibold font-cyberpunk tracking-wide pb-2">
          Where it all began
        </h3>
        <p className="text-[#c5d3f9] md:text-sm text-xs font-light font-cyberpunk">Below are College Projects That Still Make Me Smile 😄 not perfect but Nostalgic Builds from B.Tech Days </p>
      </div>
    )}

    <div className='grid-cols-1 place-items-center' data-aos="fade-up">
      <div className='relative'>
        <div className='absolute z-10 top-2 left-2 bg-blue-500 text-white text-xs rounded-br-lg px-2 py-1'>
          #{index + 1}
        </div>
        <div className='absolute z-10 top-2 right-2 bg-green-500 text-white text-xs rounded-bl-lg px-2 py-1'>
          {project.type}
        </div>
        <img className='scale-95 mt-1 rounded-sm' src={project.img} alt={project.title} />
        <div>
          <p className='text-lg font-semibold sm:mt-1 mt-1 pl-3 text-white'>{project.title}</p>
          <p className='text-[#c5d3f9] text-[11px] ml-3'>{project.description}</p>
          <div className='flex flex-row'>
            <p className='text-xs ml-3 mt-1 text-[#5ce8cb] cursor-pointer'>
              <a href={project.url}>View Project</a>
            </p>
            <img className='h-4 w-4 mt-1' src={external} alt='external link' />
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
))}
        </div>
      </div>
<Footer/>
    </div>
  );
};

export default Work;
