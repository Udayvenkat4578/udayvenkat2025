import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import arrow from '../Assets/right-arrow.png'
import external from '../Assets/external.png';
import vitalflowlogo from '../Assets/vitalcover.png';
import artoslogo from '../Assets/artoslogo.png';
import purelypro from '../Assets/purelypro.png'
import Riddlepro from '../Assets/riddlepro.png'
import snappadpro from '../Assets/snappadpro.png'
import sppro from '../Assets/sppro.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Work = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const imageRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Apply VanillaTilt only on the image refs
    imageRefs.current.forEach((img) => {
      if (img && !img.vanillaTilt) {
        VanillaTilt.init(img, {
          max: 15,
          speed: 400,
          scale: 1.05,
        });
      }
    });
  }, []);

  const projects = [
        {
      id: 1,
      img: Riddlepro,
      title: 'We Design to Develop',
      description:
        "Got an idea? Let’s shape it, refine it, and turn it into brilliance.",
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
      id:3,
      img: vitalflowlogo,
      title: 'Vital Flow',
      description:
        'Vital Flow is a streamlined platform that facilitates timely connections between blood donors and recipients.',
      url: 'https://vitalflowtemp.netlify.app/',
      type: 'code',
      message:"🚧Pardon our dust — improvements in progress.",
    },

    {
      id: 4,
      img: snappadpro,
      title: 'snapp AD',
      description:
        "Your Brand. On the Big Screen. Seen by Millions.",
      url: 'https://snapp-ad.vercel.app/',
      type: 'code',
    },
        {
      id: 5,
      img: artoslogo,
      title: 'Artos Soft Drinks',
      description:
        'A vibrant blend of taste and refreshment for bold experiences.',
      url: 'https://artosdrinks.netlify.app/',
      type: 'code',
    },


    {
      id: 6,
      img: purelypro,
      title: 'Hyperlocal vendor delivery',
      description:
        'Fresh picks Trusted Sellers, Hyperfast Delivery for Hyperlocal Vendors. Daily!',
      url: 'https://purelypro.netlify.app/',
      type: 'code',
            message:"🚧This is Purely for design n basic MVP.",

    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="sm:p-3 p-2">
       <p
        className="mt-2 pb-3 text-[#5ce8cb] font-cyberpunk font-bold sm:text-[36px] text-[20px] cursor-default text-center"
        data-aos="zoom-in"
      >
        Some Of My Latest Work
      </p>
     

      <div className="grid sm:grid-cols-3 grid-cols-1 gap-9 px-3 sm:px-9 mt-7">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="grid-cols-1 place-items-center"
            data-aos="fade-up"
          >
            <div>
              {/* Tilt only on image */}
<img
  ref={(el) => (imageRefs.current[index] = el)}
  className="w-[85%] mx-auto mt-1 rounded-sm "
  src={project.img}
  alt={project.title}
/>              <div>
                <p className="text-lg font-semibold sm:mt-1 mt-1 pl-6 text-white font-cyberpunk pt-3">
                  {project.title}
                </p>
                <p className="text-[#c5d3f9] text-[11px] ml-3  pl-3 font-cyberpunk">
                  {project.description}
                </p>
                <div className="flex flex-row">
                  <p
                    className="text-xs ml-3 pl-3 mt-1 text-[#5ce8cb] cursor-pointer font-cyberpunk"
                    onClick={() => openModal(project)}
                  >
                    View Project
                  </p>
                  <img className="h-4 w-4 mt-1" src={external} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
<div className="flex justify-end items-center pr-9 pt-3">
  <p className="font-cyberpunk text-[#5CE8CB] mr-2 text-md">      <Link to='/work'>
Explore All </Link></p>
  <img src={arrow} className="h-5 w-5" alt="arrow" />
</div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-3"
          onClick={closeModal}
        >
          <div
            className="bg-gray-200 p-4 rounded-sm max-w-sm w-full mx-4 sm:mx-0 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 pb-4 pr-5 text-sm"
              onClick={closeModal}
            >
              close
            </button>
            <img
              className="scale-95 object-cover rounded mt-4 w-full"
              src={selectedProject.img}
              alt={selectedProject.title}
            />
            <h3 className="text-xl font-semibold mt-4 text-center">
              {selectedProject.title}
            </h3>
            <p className="text-gray-700 mt-2 text-center text-sm">
              {selectedProject.description}
            </p>
                            <p className='text-center font-semibold text-sm text-red-600'>{selectedProject.message}</p>
 
            <a
              className="bg-blue-500 mt-4 block text-center text-sm text-white px-2 py-1"
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Website
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
