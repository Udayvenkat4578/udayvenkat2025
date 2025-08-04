import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { FaLocationDot} from 'react-icons/fa6';
import { BiSolidVideoRecording } from "react-icons/bi";
import { FaMicrophone } from "react-icons/fa";
import { IoCameraSharp } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaBatteryFull } from "react-icons/fa6";
import Enterlanding from '../components/Enterlanding';

const Enter = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showAccessModal, setShowAccessModal] = useState(false);
  const [stepCount, setStepCount] = useState(0);
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 640;

  const handleLeave = () => navigate('/');

  const handleEnter = () => {
    setShowWelcome(false);
    setTimeout(() => {
      setShowAccessModal(true);
      simulateAccessSteps();
    }, 600);
  };

  const simulateAccessSteps = () => {
    const stepsLength = isMobile ? 3 : 4;
    let i = 0;
    const interval = setInterval(() => {
      if (i < stepsLength) {
        setStepCount(i + 1);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowAccessModal(false), 1500);
      }
    }, 700);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-[#aab7d7] flex justify-center items-center p-4">

      {/* Welcome Modal */}
      {showWelcome && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-[#0f172a] border border-[#facc15] rounded-lg p-6 w-[90%] max-w-md text-center shadow-xl">
            <div className="flex flex-col items-center text-[#facc15]">
              <AlertCircle className="w-12 h-12 mb-2" />
              <h2 className="text-xl font-bold mb-2 font-cyberpunk">Wow... Brave Move 😵‍💫</h2>
              <p className="text-sm text-[#cbd5e1] mb-4">
                You just chose chaos — either you're insanely curious like me or an idiot (jk...im idiott too😈).
                <br />
                Anyway, welcome aboard. There are no rules here. Expect unpredictable nonsense.
                <br />
                Also, your data might be at risk (not really... or is it? 👀).
              </p>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={handleLeave}
                className="font-cyberpunk px-4 py-2 border border-[#f87171] text-[#f87171] rounded hover:bg-[#f87171] hover:text-[#0f172a] transition-all"
              >
                Leave Now
              </button>
              <button
                onClick={handleEnter}
                className="font-cyberpunk px-4 py-2 border border-[#5ce8cb] text-[#5ce8cb] rounded hover:bg-[#5ce8cb] hover:text-[#0f172a] transition-all"
              >
                Let's Go!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fake System Access Modal */}
      {showAccessModal && (
        <div
          className={`fixed z-50 ${
            isMobile
              ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              : 'top-6 left-6'
          } bg-white text-black border border-gray-300 rounded-xl shadow-xl w-[90%] sm:w-96 p-4`}
        >
          <p className="text-sm font-semibold text-gray-800 mb-1">
            <span className="text-blue-600 font-bold">www.udayvenkat.com</span> has accessed the following:
          </p>
          <div className=" p-3 rounded-md space-y-2 text-sm">
            {stepCount >= 1 && (
              <div className="flex items-center gap-2 bg-blue-100 my-2 py-2 text-sm px-2 rounded-md ">
                <CheckCircle className="text-green-600 w-4 h-4  " />
                <FaLocationDot className="w-5 h-5 opacity-50" />
                <span>IP Address Accessed</span>
              </div>
            )}
            {stepCount >= 2 && isMobile && (
              <div className="flex items-center gap-2 bg-blue-100 my-2 py-2 text-sm px-2 rounded-md">
                <CheckCircle className="text-green-600 w-4 h-4 " />
                <FaBatteryFull  className="w-5 h-5 opacity-50" />
                <span>Battery Health Scanned</span>
              </div>
            )}
            {stepCount >= 3 && isMobile && (
              <div className="flex items-center gap-2 bg-blue-100 my-2 py-2 text-sm px-2 rounded-md">
                <CheckCircle className="text-green-600 w-4 h-4 " />
                <FaLocationCrosshairs className="w-5 h-5 opacity-50" />
                <span>Location Tracked</span>
              </div>
            )}
            {stepCount >= 2 && (
              <div className="flex items-center gap-2 bg-blue-100 my-2 py-2 text-sm px-2 rounded-md">
                <CheckCircle className="text-green-600 w-4 h-4 " />
                <IoCameraSharp className="w-5 h-5 opacity-50" />
                <span>Camera Accessed</span>
              </div>
            )}
            {stepCount >= 3 && !isMobile && (
              <div className="flex items-center gap-2 bg-blue-100 my-2 py-2 text-sm px-2 rounded-md">
                <CheckCircle className="text-green-600 w-4 h-4 " />
                <FaMicrophone className="w-5 h-5 opacity-50" />
                <span>Microphone Accessed</span>
              </div>
            )}
            {stepCount >= 4 && !isMobile && (
              <div className="flex items-center gap-2 bg-blue-100 my-2 py-2 text-sm px-2 rounded-md">
                <CheckCircle className="text-green-600 w-4 h-4" />
                <BiSolidVideoRecording className="w-5 h-5 opacity-50" />
                <span>Screen Recording Started</span>
              </div>
              
            )}
                      </div>

 <div className="mt-2 text-center">
      <p className="text-xs text-red-600 font-semibold bg-red-200 border border-red-400 py-2  rounded-md">
        ⚠️ Your data has been accessed without consent!
      </p>
    </div>

        </div>
      )}

      

      {/* Final Enter Page */}
      {!showWelcome && !showAccessModal && (
        <div className="text-center">
          <Enterlanding/>
        </div>
        
      )}

    </div>
  );
};

export default Enter;
