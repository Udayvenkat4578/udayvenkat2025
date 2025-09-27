import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiBehance } from 'react-icons/si';
import timemachine from '../Assets/time-machine.png'

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-[#0a0a0a] text-[#c3d2f6] px-6 sm:px-16 pt-0  font-cyberpunk overflow-hidden">

      {/* SVG Wave Top Border */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,00 L0,0 Z"
            fill="#0a0a0a"
          />
        </svg>
      </div>

      {/* Floating Neon Glow */}
      <div className="absolute w-72 h-72 bg-[#5ce8cb]/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>

      {/* Footer Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-y-6 px-2">
        
        {/* Brand & Tagline */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-[#5ce8cb] ">Uday Venkat</h1>
          <p className="text-sm text-[#c3d2f6] mt-1">Designs that Speak. Code that thinks.</p>
          <p className="font-barcode text-lg text-[#5ce8cb] tracking-wider mt-2">*Designs that think. Code that speaks.*</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-5 text-sm md:text-base text-[#c3d2f6]">
          <li className="hover:text-[#5ce8cb] transition duration-200">
            <Link to="/work">Projects</Link>
          </li>
          <li className="hover:text-[#5ce8cb] transition duration-200">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="hover:text-[#5ce8cb] transition duration-200">
            <Link to="/follow">Follow</Link>
          </li>
          <li className="hover:text-[#5ce8cb] transition duration-200">
            <Link to="/Smallcontact">Contact</Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5 text-[#5ce8cb] text-xl">
          <a
            href="https://github.com/Udayvenkat4578"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/uday-venkat-07a177221/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.behance.net/udayvenkat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <SiBehance />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className='grid place-items-end sm:pt-0 pt-4'>
  <a
    href="https://udayvenkat.netlify.app" // ⬅️ your actual old portfolio link
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#5ce8cb] hover:underline hover:text-cyan-400 transition duration-200 flex items-center gap-2"
  >
    <img src={timemachine} alt="Time Machine" className="h-6 w-6" />
    <p className="text-xs font-cyberpunk">Portfolio Portal</p>
  </a>
          </div>
                  <div className="flex text-gray-400 flex-col justify-center py-2 border-t border-gray-500 mt-6">
          <p className="text-sm font-medium text-center">
            © {new Date().getFullYear()}  Uday Venkat. All rights reserved.
          </p>

          <p className="text-sm text-gray-400 px-3 text-center">
            <span className="font-semibold">Crafted by</span>{" "}
            <span className="font-sarina text-[#ff9966] z-50 ">
              <a href="https://www.udayvenkat.in">Uday Venkat</a>
            </span>
            <span className="px-2"> || </span>
            <span className="font-sarina text-[#00B7E6] z-50 ">
              <a href="https://designwithriddle.online/"> Riddle</a>
            </span>
          </p>
        </div>

    </footer>
  );
};

export default Footer;
