import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DecryptedText from './DecryptedText'; // make sure path is correct

const About = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleResumeClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.open(
        'https://drive.google.com/file/d/1ahpQ7zzl5h8tDszVdW493j9-RTf5-FFK/view?usp=sharing',
        '_blank'
      );
      setLoading(false);
    }, 800);
  };

  const skills = [
    'HTML5', 'CSS', 'TailwindCSS', 'Express.js', 'JavaScript', 'Git', 'Responsive Design',
    'User Experience Design', 'AWS', 'React.js', 'Next.js', 'Node.js', 'Github', 'MongoDB',
    'SQL', 'User Interface Design', 'Figma', 'Micro Animations', 'UX Research', 'Prototyping',
    'Firebase', 'Adobe XD'
  ];

  return (
    <div className="pb-11">
      <p
        className="mt-4 mb-1 text-[#5ce8cb] font-cyberpunk font-bold md:text-[36px] text-[24px] cursor-default text-center"
        data-aos="zoom-in"
      >
        Know About Me
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 px-11">
        {/* Left Section - Intro */}
        <div
          className="pt-4 font-cyberpunk text-[#c3d2f6] text-sm"
          data-aos="fade-up"
        >
          <h2 className="text-xl font-bold text-white font-cyberpunk mb-3 pt-6">
            Introduction
          </h2>

          <p>
            I’m a frontend developer and UI/UX Designer focused on building fast, responsive, and accessible interfaces.
            With a strong eye for design and performance, I bring ideas to life through clean code and user-first thinking.
            Fast, intuitive, and reliable — that’s how I build.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <h1 className="text-sm font-cyberpunk text-[#5ce8cb]">#Frontend Developer</h1>
            <h1 className="text-sm font-cyberpunk text-[#5ce8cb]">#UI/UX Designer</h1>
            <h1 className="text-sm font-cyberpunk text-[#5ce8cb]">#Full Stack Developer</h1>
          </div>

          <div className="pt-4">
            <button
              onClick={handleResumeClick}
              className="px-4 py-2 bg-[#5ce8cb] text-gray-700 rounded-md font-cyberpunk text-sm hover:scale-105 transition-transform duration-200"
            >
              {loading ? 'Just a sec...' : 'Resume'}
            </button>
          </div>
        </div>

        {/* Right Section - Skills */}
        <div data-aos="fade-up">
          <h2 className="text-lg font-bold text-[#c3d2f6] font-cyberpunk mb-3 pt-6">
            My Skills
          </h2>
          <div className="flex flex-wrap gap-3 font-cyberpunk text-[14px] cursor-pointer">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 rounded-sm text-gray-600 hover:bg-[#5ce8cb] hover:text-white transition-colors duration-200"
              >
                <DecryptedText
                  text={skill}
                  speed={100}
                  sequential={true}
                  revealDirection="start"
                  animateOn="view"   // 🔥 triggers when scrolled into view
                  className="text-gray-600"
                  encryptedClassName="text-[#5ce8cb]" // scrambled chars color
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
