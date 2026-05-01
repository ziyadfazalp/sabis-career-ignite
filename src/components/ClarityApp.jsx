import React, { useState, useRef, useEffect } from 'react';

const ClarityApp = () => {
  const [step, setStep] = useState('roleSelection'); // roleSelection, quiz, leadCapture, results
  const [role, setRole] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [formData, setFormData] = useState({ name: '', whatsapp: '' });

  // Ref for auto-scrolling
  const appTopRef = useRef(null);

  // Auto-scroll to top of the app when the step changes
  useEffect(() => {
    if (appTopRef.current) {
      appTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [step]);

  const studentQuestions = [
    {
      question: "When you think about choosing your college degree or career, how do you feel?",
      options: [
        { text: "Excited and focused on a clear goal.", points: 3 },
        { text: "A bit overwhelmed, but hopeful I’ll figure it out.", points: 2 },
        { text: "Completely blank, anxious, and stressed.", points: 1 }
      ]
    },
    {
      question: "Are you sure whether your strengths and personality actually match your chosen career path?",
      options: [
        { text: "Yes, I clearly know my strengths and what I'm good at.", points: 3 },
        { text: "I have some hobbies, but I'm unsure how they translate to a real career.", points: 2 },
        { text: "Honestly, I feel a bit mediocre at everything right now.", points: 1 }
      ]
    },
    {
      question: "Do you often Google careers but end up feeling more confused than clear?",
      options: [
        { text: "I find exact, actionable steps for the path I already want.", points: 3 },
        { text: "I narrow it down to 2–3 options, but don’t know how to choose the right one for me.", points: 2 },
        { text: "I end up feeling far more confused and lost than before I started Googling.", points: 1 }
      ]
    },
    {
      question: "How much are your career choices being influenced by friends, family, or current trends (like AI, MBBS, CA)?",
      options: [
        { text: "Very little. I am choosing based purely on my own aptitude.", points: 3 },
        { text: "A fair amount. I'm trying to balance my interests with what is considered 'safe'.", points: 2 },
        { text: "A lot. I'm mostly following the crowd because I don't know what else to do.", points: 1 }
      ]
    },
    {
      question: "How often do you worry, “What if I realize later that I chose the wrong career?”",
      options: [
        { text: "Rarely. I feel confident in my direction.", points: 3 },
        { text: "Sometimes. I mostly worry about whether my choice will have 'scope' in the future.", points: 2 },
        { text: "All the time. The fear of making the wrong choice paralyzes my decision-making.", points: 1 }
      ]
    },
    {
      question: "Have you ever taken a scientific psychometric assessment to understand your true aptitude?",
      options: [
        { text: "Yes, and I had an expert debrief the results with me.", points: 3 },
        { text: "I took a free, generic one online once, but it didn't give me real clarity.", points: 2 },
        { text: "No, I am purely guessing my strengths right now.", points: 1 }
      ]
    }
  ];

  const parentQuestions = [
    {
      question: "When discussing career options or college streams with your teen, how do the conversations usually go?",
      options: [
        { text: "Calm, collaborative, and we are generally on the same page.", points: 3 },
        { text: "We tend to put it off, saying 'we will figure it out after exams.'", points: 2 },
        { text: "It often leads to stress, arguments, or them shutting down.", points: 1 }
      ]
    },
    {
      question: "How are you currently evaluating your child's future career potential?",
      options: [
        { text: "By actively exploring their unique natural aptitudes and personality.", points: 3 },
        { text: "Mostly based on my knowledge and information.", points: 2 },
        { text: "Almost entirely relying on their school marks and grades.", points: 1 }
      ]
    },
    {
      question: "With so many new, unconventional career options emerging today, how confident do you feel guiding them?",
      options: [
        { text: "Very confident; I stay highly updated on new industries.", points: 3 },
        { text: "A bit overwhelmed; it’s difficult to know which new careers are reliable.", points: 2 },
        { text: "Completely lost; the landscape has changed too much since I was a student.", points: 1 }
      ]
    },
    {
      question: "Do you ever worry, 'What if my child invests years into a degree, only to realize it was the wrong choice?'",
      options: [
        { text: "Rarely. We have a solid, data-backed plan.", points: 3 },
        { text: "Sometimes. I mostly worry about whether their choice will have future 'scope.'", points: 2 },
        { text: "All the time. The fear of them making a costly mistake is highly stressful.", points: 1 }
      ]
    },
    {
      question: "When it comes to understanding their own strengths, how does your teen currently seem?",
      options: [
        { text: "Highly self-aware and focused on what they do best.", points: 3 },
        { text: "They have some hobbies, but lack a clear professional direction.", points: 2 },
        { text: "Confused, anxious, or feeling like they are 'mediocre' at everything.", points: 1 }
      ]
    },
    {
      question: "Have you ever used a scientific psychometric assessment to objectively uncover your child's true potential?",
      options: [
        { text: "Yes, and we had an expert counsellor debrief the results.", points: 3 },
        { text: "We tried a free online test once, but didn't get actionable clarity.", points: 2 },
        { text: "No, we have not explored this yet and are essentially just guessing.", points: 1 }
      ]
    }
  ];

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    setStep('quiz');
  };

  const handleAnswer = (points) => {
    setScore(score + points);
    const questions = role === 'Student' ? studentQuestions : parentQuestions;

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep('leadCapture');
    }
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setStep('results');
  };

  const resetQuiz = () => {
    setStep('roleSelection');
    setRole(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setFormData({ name: '', whatsapp: '' });
  };

  const renderResult = () => {
    let headline, body, ctaText, ctaLink;

    const whatsappLink = "https://wa.me/919747405044?text=Hi%20Sabitha,%20I%20just%20took%20the%20Alignment%20Quiz%20on%20your%20website%20and%20would%20like%20to%20discuss%20the%20results";
    const googleFormLink = "https://forms.gle/Qzq2NMbV8dj8vgPr9";

    if (score >= 15) {
      headline = role === 'Student' ? "You have some clarity, but expert input can sharpen your decisions." : "High Alignment";
      body = role === 'Student'
        ? "You have a solid understanding of your strengths, which is fantastic. However, the world of careers is evolving rapidly. A professional debrief can validate your choices, ensure you aren't missing hidden opportunities, and help you build a bulletproof roadmap."
        : "You and your teen are on a great path, but an expert debrief can bulletproof your plan.";
      if (role === 'Parent') {
        ctaText = "Chat with Sabitha";
        ctaLink = whatsappLink;
      } else {
        ctaText = "Chat with Sabitha for a Deep Dive";
        ctaLink = whatsappLink;
      }
    } else if (score >= 10) {
      headline = role === 'Student' ? "You are at risk of confusion—guided planning is recommended." : "Moderate Friction";
      body = role === 'Student'
        ? "You are stuck in the 'middle ground.' You have some interests, but you are overwhelmed by options and external pressures. Googling will only cause more anxiety. It's time to stop guessing and let scientific data reveal the right path for you."
        : "You are at risk of confusion. Scientific data is needed to replace guesswork and ease the tension.";
      if (role === 'Parent') {
        ctaText = "Chat with Sabitha";
        ctaLink = whatsappLink;
      } else {
        ctaText = "Register for Psychometric Assessment";
        ctaLink = googleFormLink;
      }
    } else {
      headline = role === 'Student' ? "You need structured career guidance immediately." : "Critical Disconnect";
      body = role === 'Student'
        ? "It is completely okay to feel lost, anxious, or mediocre—most students do at this stage! But making a decision based on fear or trends will lead to regret. You need a safe space to map your strengths with an expert who understands you."
        : "Your family needs structured guidance to bridge the communication gap and prevent a wrong turn.";
      ctaText = "Chat with Sabitha";
      ctaLink = whatsappLink;
    }

    return (
      <div className="text-center space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">{headline}</h3>
        <p className="text-gray-600">{body}</p>
        <div className="pt-4">
          <a href={ctaLink} className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition w-full shadow-lg">
            {ctaText}
          </a>
        </div>
        <button onClick={resetQuiz} className="text-sm text-gray-500 hover:text-gray-800 underline mt-4">
          Retake Quiz
        </button>
      </div>
    );
  };

  const currentQuestions = role === 'Student' ? studentQuestions : parentQuestions;

  return (
    <div ref={appTopRef} className="bg-white shadow-xl rounded-2xl p-6 md:p-10 w-full max-w-lg mx-auto border border-gray-100">

      {step === 'roleSelection' && (
        <div className="text-center space-y-8">
          <div className="hidden lg:block space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">Career Clarity Diagnostic</h2>
            <p className="text-gray-600">Find out if you are on the right path in under 2 minutes.</p>
          </div>
          <p className="text-lg font-medium text-gray-800">Who is taking this quiz?</p>
          <div className="grid grid-cols-1 gap-4">
            <button onClick={() => handleRoleSelection('Student')} className="py-4 border-2 border-emerald-100 rounded-xl hover:bg-emerald-50 hover:border-emerald-500 font-semibold text-emerald-800 transition">
              I am a Student
            </button>
            <button onClick={() => handleRoleSelection('Parent')} className="py-4 border-2 border-emerald-100 rounded-xl hover:bg-emerald-50 hover:border-emerald-500 font-semibold text-emerald-800 transition">
              I am a Parent
            </button>
          </div>
        </div>
      )}

      {step === 'quiz' && currentQuestions && (
        <div className="space-y-6">
          <div className="flex justify-between text-sm text-gray-500 font-medium">
            <span>Question {currentQuestionIndex + 1} of 6</span>
            <span className="text-emerald-600">{role} Path</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div className="bg-emerald-500 h-2 rounded-full transition-all duration-300" style={{ width: `${((currentQuestionIndex + 1) / 6) * 100}%` }}></div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-8">
            {currentQuestions[currentQuestionIndex].question}
          </h3>
          <div className="space-y-3">
            {currentQuestions[currentQuestionIndex].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.points)}
                className="w-full text-left p-4 border border-gray-200 rounded-xl hover:bg-emerald-50 hover:border-emerald-400 transition"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 'leadCapture' && (
        <div className="space-y-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900">Your custom clarity score is ready!</h3>
          <p className="text-gray-600">Where should we send your results?</p>
          <form onSubmit={handleLeadSubmit} className="space-y-4 pt-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="WhatsApp Number"
              required
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
            <button type="submit" className="w-full py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition">
              See My Results
            </button>
          </form>
        </div>
      )}

      {step === 'results' && renderResult()}

    </div>
  );
};

export default ClarityApp;