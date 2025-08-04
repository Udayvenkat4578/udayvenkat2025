import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import axios from 'axios';
import Enter2block from './Enter2block'
import Marquee from "react-fast-marquee";

const Enterlanding = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [firstEntry, setFirstEntry] = useState(null);
  const [secondEntry, setSecondEntry] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [showSearching, setShowSearching] = useState(false);
  const [finalMessage, setFinalMessage] = useState('');

  const firebaseURL = 'https://portfolio-cede9-default-rtdb.firebaseio.com/crazydata.json';

  const handleVerify = async () => {
    setShowSearching(true);
    setFinalMessage('');
    setShowWarning(false);

    setTimeout(async () => {
      setShowSearching(false);
      const entry = { name, gender };

      if (!firstEntry) {
        setFirstEntry(entry);
        setShowWarning(true);

        await axios.post(firebaseURL, {
          type: 'First Entry',
          data: entry,
          time: new Date().toISOString()
        });

      } else {
        setSecondEntry(entry);

        await axios.post(firebaseURL, {
          type: 'Second Entry',
          firstEntry,
          secondEntry: entry,
          changed: JSON.stringify(firstEntry) !== JSON.stringify(entry),
          time: new Date().toISOString()
        });

        if (
          firstEntry.name.toLowerCase() === name.toLowerCase() &&
          firstEntry.gender === gender
        ) {
          setFinalMessage("✨ You're consistent! Welcome to the circus 🎪");
        } else {
          setFinalMessage(`😤 Seriously?\nBruh you changed the info.\nBut okay we trust you, welcome ${name} 🫣`);
        }
      }
    }, 2000);
  };

  return (
    <div>
<Marquee
  speed={50}
  gradient={false}
  className=" py-2"
>
  <span className="text-[#facc15] font-cyberpunk text-sm sm:text-base tracking-wide animate-pulse px-4">
    ⚠️ This section of the portfolio is currently under development. My brain melted halfway through. Please stand by. ⚡
  </span>
</Marquee>    <div className=" p-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-[#aab7d7] font-cyberpunk relative overflow-hidden ">
        <div className='min-h-screen '>
           <div className=" absolute w-72 h-72 bg-[#5ce8cb]/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse "></div>

      <div className="text-center max-w-2xl mx-auto mt-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#5ce8cb] animate-pulse drop-shadow-xl">
          Welcome to the Enterverse 🚀
        </h1>
        <p className="text-[#cbd5e1] mt-3 sm:text-lg leading-relaxed">
          You made it. This is where all professionalism ends and dumb creativity begins.
          <br /> Get ready to laugh, groan, and maybe cry 🤡
        </p>

        {/* Form Section */}
        <div className="mt-10">
          <p className="text-lg font-semibold text-white">Let us know about you 🕵️</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-5">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="px-4 py-2 rounded-md bg-[#1e293b] border border-[#5ce8cb] text-white w-60 text-center font-bold"
            />

            {/* Gender buttons */}
            <div className="flex gap-2">
              {['boy', 'girl', 'alien'].map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`px-4 py-2 rounded-md text-sm font-bold ${
                    gender === g
                      ? 'bg-[#5ce8cb] text-[#0f172a]'
                      : 'bg-[#1e293b] text-white border border-[#5ce8cb]'
                  } transition-all`}
                >
                  {g === 'boy' ? 'Boy 🧑' : g === 'girl' ? 'Girl 👧' : 'Alien 👽'}
                </button>
              ))}
            </div>

            {/* Verify Button */}
            <button
              onClick={handleVerify}
              disabled={!name.trim() || !gender}
              className={`px-4 py-2 rounded-md font-semibold transition-all duration-200 shadow-lg ${
                !name.trim() || !gender
                  ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                  : 'bg-[#5ce8cb] text-[#0f172a] hover:scale-105'
              }`}
            >
              🧠 Verify
            </button>
          </div>
        </div>

        {/* Searching message */}
        {showSearching && (
          <p className="text-yellow-300 mt-6 text-lg animate-pulse font-mono">
            🔍 Searching and comparing the data accessed from your device...
          </p>
        )}

        {/* Warning for mismatch */}
        {showWarning && (
          <div className="mt-10 bg-[#7f1d1d] text-white px-6 py-4 rounded-lg shadow-lg border border-red-500 animate-fade-in-down">
            <div className="flex items-center justify-center gap-2 mb-2">
              <AlertCircle className="w-6 h-6 animate-bounce" />
              <p className="text-xl font-bold">Data Mismatch Detected 😨</p>
            </div>
            <p>
              Sorry {name}, but what you typed doesn't match what our secret agents
              retrieved from your device 🕵️‍♀️. Wanna re-enter it honestly? 🤔
            </p>
          </div>
        )}

        {/* Final result message */}
        {finalMessage && (
          <div className="mt-10 bg-[#1e293b] border border-[#5ce8cb] text-[#5ce8cb] px-6 py-4 rounded-lg shadow-xl animate-fade-in-up">
            <p className="text-lg whitespace-pre-wrap">{finalMessage}</p>
          </div>
        )}
      </div>
      </div>
      <Enter2block/>
    </div>
    </div>
  );
};

export default Enterlanding;
