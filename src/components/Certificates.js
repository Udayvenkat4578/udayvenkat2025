import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Seo from './Seo';
import external from '../Assets/external.png';
import certi1 from '../Assets/uxc.png'
import certi2 from '../Assets/reactc.png'
import certi3 from '../Assets/ccnac.png'
import certi4 from '../Assets/digi.png'

const Certifications = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  const certifications = [
    {
      id: 1,
      img: certi1,
      name: 'Google UX Design ',
      platform: 'Coursera / Google',
      url: 'https://www.coursera.org/account/accomplishments/specialization/GCXGZ86TR2FT',
    },
    {
      id: 2,
      img: certi2,
      name: 'React Basics',
      platform: 'Coursera / Meta',
      url: 'https://www.coursera.org/account/accomplishments/verify/S3REXUZWUPKQ',
    },
    {
      id: 3,
      img: certi3,
      name: 'Intro To Networks',
      platform: 'Cisco',
      url: 'https://www.credly.com/badges/661f89da-b3da-41d2-8d85-25684d493f06',
    },
        {
      id: 4,
      img: certi4,
      name: 'Digital Marketing',
      platform: 'Google',
    },

  ];

  return (
    <div>
      <Seo
        title="Certifications"
        description="Explore Uday Venkat’s professional certifications in UI/UX design, front-end development, and more."
        url="https://udayvenkat.in/certifications"
        image="https://udayvenkat.in/preview-certifications.png"
      />

      {/* Background */}
      {/* Content */}
      <div className="sm:p-3 p-2 pt-8 pb-11">
        <div className="text-center mb-8" data-aos="zoom-in">
          <p
            className="mt-2 pb-1 text-[#5ce8cb] font-cyberpunk font-bold sm:text-[36px] text-[20px] cursor-default text-center"
            data-aos="zoom-in"
          >
            Credentials That Count
          </p>
          <p className="text-sm sm:text-base md:text-sm text-[#c3d2f6] max-w-2xl mx-auto px-4 font-light font-cyberpunk">
            Verified certifications that showcase my expertise in design and development — from platforms like Google, Meta, and Coursera.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-9 px-3 sm:px-9 mt-7">
          {certifications.map((cert, index) => (
            <div key={index} className="grid-cols-1 place-items-center" data-aos="fade-up">
              <div className="relative bg-[#12121a]/60 rounded-xl p-2 pb-4 border border-[#303344] hover:scale-[1.02] transition-all duration-300">
                {/* Badge number */}
                <div className="absolute z-10 top-2 left-2 bg-blue-500 rounded-md text-white text-xs px-2 py-1">
                  #{index + 1}
                </div>

                {/* Certificate image */}
                <img
                  className="sm:w-full sm:h-44 h-60  w-80 sm:object-cover onject-contain mt-1 rounded-md bg-white/10 backdrop-blur-sm"
                  src={cert.img}
                  alt={cert.name}
                />

                {/* Text details */}
                <div className="text-center mt-3">
                  <p className="text-lg font-semibold text-white font-cyberpunk">
                    {cert.name}
                  </p>
                  <p className="text-[#9acbff] text-sm font-light mt-1 font-cyberpunk">
                    {cert.platform}
                  </p>
                </div>

                {/* View Certificate button */}
                <div className="flex justify-center mt-4">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#5ce8cb]  text-[#12121a] text-xs font-semibold px-4 py-1 rounded-md hover:bg-[#3fb8a6] transition-all flex items-center gap-1"
                  cursor="pointer"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Certifications;
