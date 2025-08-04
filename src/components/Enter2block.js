import React, { useState, useEffect } from 'react';
import ailogo from '../Assets/ailogo.png';

const cyberFont = "font-['Orbitron',sans-serif]";

const ToolGrid = ({ title, desc, onClick }) => (
  <div
    className="border border-[#00FFE0] rounded-xl p-6 shadow hover:shadow-xl bg-[#1a1a1a] cursor-pointer hover:bg-[#111] transition"
    onClick={onClick}
  >
    <h2 className={`text-xl font-semibold mb-2 text-[#00FFE0] ${cyberFont}`}>{title}</h2>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

const FeedbackModal = ({ onClose }) => {
  const [stars, setStars] = useState(0);

  return (
    <div className="fixed inset-0 bg-[#142444]/80 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg text-center space-y-4">
        <p className="text-lg font-semibold">Rate this creation 🙏</p>
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setStars(num)}
              className={`text-2xl ${stars >= num ? 'text-yellow-400' : 'text-gray-400'}`}
            >
              ★
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-700">Select 5 stars to enable submit 💫</p>
        <button
          className="px-4 py-2 rounded bg-green-600 text-white disabled:opacity-40"
          disabled={stars !== 5}
          onClick={onClose}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const AskAnythingAI = ({ close }) => {
  const [showEscapeModal, setShowEscapeModal] = useState(false);
  const [showMainLinkModal, setShowMainLinkModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [typingQuestion, setTypingQuestion] = useState('');

  const randomQuestions = [
    "What's the meaning of life?",
    'Can penguins drive buses?',
    'Is water dry?',
    'Can I time travel with a toaster?',
    'Do ants believe in capitalism?',
    'What if the moon is just a nightlight?'
  ];

  useEffect(() => {
    let index = 0;
    const typeEffect = () => {
      if (index >= randomQuestions.length) index = 0;
      const question = randomQuestions[index];
      let char = 0;
      const interval = setInterval(() => {
        setTypingQuestion(question.slice(0, char++));
        if (char > question.length) {
          clearInterval(interval);
          index++;
          setTimeout(typeEffect, 3000);
        }
      }, 80);
    };
    typeEffect();
  }, []);

  const generateResponse = () => {
    setResponse(randomQuestions[Math.floor(Math.random() * randomQuestions.length)]);
  };

  return (
    <>
      <div className="fixed inset-0 bg-[#142444]/80 flex justify-center items-center z-50" onClick={(e) => {
        if (e.target.classList.contains('fixed')) setShowEscapeModal(true);
      }}>
        <div className="bg-[#0f0f0f] text-white p-6 rounded-xl max-w-lg w-full text-center space-y-5 border border-[#00FFE0]">
          <h2 className={`text-2xl text-[#00FFE0] font-bold ${cyberFont}`}>Ask Anything AI</h2>
          <p className="text-gray-400">This AI doesn’t care about logic — it answers from the chaos realm 🌪️</p>
          <img src={ailogo} alt="Bot" className="mx-auto w-20 h-20" />
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask your question here..."
            className="w-full border border-[#00FFE0] rounded px-4 py-2 bg-black text-white" />
          <button onClick={generateResponse} className="bg-[#00FFE0] text-black px-4 py-2 rounded hover:bg-[#0ff]">
            Get Answer
          </button>
          {response && <p className="text-green-400 font-semibold">{response}</p>}
          <div className="flex justify-between mt-4 text-sm">
            <button onClick={() => setShowRatingModal(true)} className="text-gray-400 hover:text-white">Close</button>
            <button onClick={() => setShowMainLinkModal(true)} className="text-blue-400 hover:text-blue-200">Open website</button>
          </div>
        </div>
      </div>

      {showEscapeModal && (
        <div className="fixed inset-0 bg-[#142444]/80 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg text-center space-y-4">
            <p className="text-lg font-medium">I won’t let you close 😈</p>
            <p className="text-sm text-gray-500">You are meant to ask. Fulfill your destiny.</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setShowEscapeModal(false)}>
              Okay okay!
            </button>
          </div>
        </div>
      )}

      {showMainLinkModal && (
        <div className="fixed inset-0 bg-[#142444]/80 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg text-center">
            <p className="text-lg font-semibold">Why are you like this? 🕵️‍♂️</p>
            <p className="text-sm text-gray-500">What are you? FBI?</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setShowMainLinkModal(false)}>
              Just curious 😬
            </button>
          </div>
        </div>
      )}

      {showRatingModal && <FeedbackModal onClose={close} />}
    </>
  );
};

const ResumePrinter = ({ close }) => {
  const [form, setForm] = useState({ name: '', education: '', experience: '', skills: '', projects: '', certifications: '' });
  const [showEscapeModal, setShowEscapeModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      <div className="fixed inset-0 bg-[#142444]/80 flex justify-center items-center z-50" onClick={(e) => {
        if (e.target.classList.contains('fixed')) setShowEscapeModal(true);
      }}>
        <div className="bg-[#0f0f0f] border border-[#00FFE0] text-white p-6 rounded-xl w-full max-w-lg space-y-4">
          <h2 className={`text-2xl font-bold text-[#00FFE0] text-center ${cyberFont}`}>Resume Printer</h2>
          <h3>Enter in comma format our AI will detect</h3>
          {Object.keys(form).map((field) => (
            <input
              key={field}
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
              className="w-full border border-[#00FFE0] bg-black text-white px-4 py-2 rounded mb-2"
            />
          ))}
          <button onClick={() => alert("😅 We know you’re free but we’re out of ink. Try again never.")} className="bg-[#00FFE0] text-black px-4 py-2 rounded hover:bg-[#0ff] w-full">
            Generate Resume
          </button>
          <button onClick={() => setShowRatingModal(true)} className="text-sm text-gray-400 hover:text-white mt-2 w-full">Close</button>
        </div>
      </div>

      {showEscapeModal && (
        <div className="fixed inset-0 bg-[#142444]/80 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg text-center space-y-4">
            <p className="text-lg font-medium text-gray-500">No escaping. Complete the resume now 😈</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setShowEscapeModal(false)}>
              Ugh fine 😩
            </button>
          </div>
        </div>
      )}

      {showRatingModal && <FeedbackModal onClose={close} />}
    </>
  );
};

const Enter2block = () => {
  const [activeTool, setActiveTool] = useState(null);

  return (
    <div className="p-6  text-white min-h-screen">
      <h1 className={`text-3xl text-center mb-8 text-[#00FFE0] ${cyberFont}`}>
        Hii guys 👋 Explore My Tools that are meant for you
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <ToolGrid title="Ask Anything AI" desc="Chaotic answers. Logic not found." onClick={() => setActiveTool('ask')} />
        <ToolGrid title="Smart Resume Printer" desc="Fails with style.🖨️🫠" onClick={() => setActiveTool('resume')} />
        <ToolGrid title="Live Project Demo" desc="Banana spoon tutorial 🎥"
          onClick={() => window.open('https://www.youtube.com/watch?v=P8svUCSuMS4&ab_channel=InsiderTech', '_blank')} />
        <ToolGrid title="Cover Letter Optimizer" desc="I am strong1, strong2, pls hire 🥺"
          onClick={() => alert('Dear employer, I am strength1, strength2, strength3. Hire me pls 🥺')} />
        <ToolGrid title="Skill Rank Analyzer" desc="Eating Maggi under pressure 🍜🔥"
          onClick={() => alert('Your top skill: Eating Maggi under pressure 🍜🔥')} />
        <ToolGrid title="ML Skill Estimator" desc="13.7 bananas/hour 🧠"
          onClick={() => alert('Estimated skill: 13.7 bananas/hour')} />
      </div>

      {activeTool === 'ask' && <AskAnythingAI close={() => setActiveTool(null)} />}
      {activeTool === 'resume' && <ResumePrinter close={() => setActiveTool(null)} />}
    </div>
  );
};

export default Enter2block;
