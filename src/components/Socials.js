import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import img1 from '../Assets/behance.png'
import img2 from '../Assets/github.png'
import img3 from '../Assets/linkd.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

import external from '../Assets/external.png';

const socials = [
  {
    name: "Behance",
    image: img1, // replace with your horizontal images
    url: "https://www.behance.net/udayvenkat",
  },
  {
    name: "GitHub",
    image: img2,
    url: "https://github.com/Udayvenkat4578",
  },
  {
    name: "LinkedIn",
    image: img3,
    url: "https://www.linkedin.com/in/uday-venkat-07a177221/",
  },
];

const Socials = () => {
      useEffect(() => {
        AOS.init({ duration: 1000 });
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <div className="relative max-w-5xl mx-auto p-6">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-11" data-aos="zoom-in" data-duration="2000">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={social.image}
              alt={social.name}
              className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
            />
<div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <p className="text-[#5ce8cb] font-bold text-xl">
    Show {social.name} Profile
  </p>
  <img
    src={external} // adjust path if needed
    alt="external"
    className="w-5 h-5"
  />
</div>
          </a>
        ))}
      </div>

      {/* Show All link at bottom-right */}
      <div className="mt-4 text-right">
        <Link
          to="/follow"
          className="text-[#5ce8cb] hover:scale-105 font-semibold text-lg font-cyberpunk"
        >
          View more
        </Link>
      </div>
    </div>
  );
};

export default Socials;
