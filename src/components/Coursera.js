import React from 'react';
import 'aos/dist/aos.css';
import credly from '../Assets/credly.png'
import coursera from '../Assets/courseralogo.png'
import external from '../Assets/external.png';

const CertificationsSection = () => {
  return (
    <div className="sm:p-6 space-y-12 ">

      {/* 2-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-11 items-center place-items-center sm:px-11 px-8">
        
        {/* Left column - Coursera */}
        <div
          className="flex flex-row justify-center items-center text-center md:text-left space-y-4"
          data-aos="fade-right"
        >
          <img
            src={coursera}
            alt="Coursera"
            className="w-24 h-auto mb-4 pt-7"
          />
          <div className='flex flex-col px-3'>
          <h2 className="text-[#5ce8cb] font-cyberpunk text-xl sm:text-2xl font-bold">
            Coursera Certs
          </h2>
          <p className="text-[#c3d2f6] text-xs sm:text-md max-w-md">
            Verified professional certificates earned from Coursera that showcase expertise.
          </p>
<a
  href="https://www.coursera.org/learner/udayvenkat4578"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-1 text-sm text-[#5ce8cb] hover:underline w-fit pl-1 text-center md:text-left"
>
  <span>View Dashboard</span>
  <img src={external} alt="external link" className="w-4 h-4 inline-block" />
</a>
          </div>
        </div>

        {/* Right column - Credly */}
        <div
          className="flex flex-row items-center justify-center text-center md:text-left space-y-4"
          data-aos="fade-left"
        >
          <img
            src={credly}
            alt="Credly"
            className="w-24 h-auto mb-4 rounded-full pt-7"
          />
                    <div className='flex flex-col px-3'>

          <h2 className="text-[#5ce8cb] font-cyberpunk text-xl sm:text-2xl font-bold">
            Credly Credentials
          </h2>
          <p className="text-[#c3d2f6] text-xs sm:text-md max-w-md">
            Digital badges from Credly highlighting verified achievements and certifications.
          </p>
<a
  href="https://www.credly.com/users/udayvenkat"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-1 text-sm text-[#5ce8cb] hover:underline w-fit pl-1 text-center md:text-left"
>
  <span>View Dashboard</span>
  <img src={external} alt="external link" className="w-4 h-4 inline-block" />
</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;
