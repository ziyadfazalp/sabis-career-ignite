import React, { useState } from 'react';
import { PlayCircle, X, ClipboardCheck, Video, Map } from 'lucide-react';
import ClarityApp from './ClarityApp';

const Hero = () => {
  const [isProcessOpen, setIsProcessOpen] = useState(false);

  return (
    <section className="bg-emerald-50 pt-4 pb-12 lg:pt-6 lg:pb-20 px-4 relative">
      <div className="max-w-7xl mx-auto -mb-8 lg:-mb-16 relative z-10">
        <img src="/sabi-logo.png" alt="Sabi's Career Ignite" className="h-32 md:h-48 lg:h-56 w-auto object-contain object-left -ml-4 lg:-ml-6" />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Column: Copy & Buttons */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Clarity. Confidence. Career.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Helping students and parents make confident choices through scientific assessments, empathetic counselling, and practical guidance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919747405044?text=Hi%20Sabitha,%20I%20visited%20your%20website%20and%20I%20would%20like%20to%20book%20a%20counselling%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors text-center shadow-md"
            >
              Chat with Sabitha
            </a>
            <a
              href="https://forms.gle/Qzq2NMbV8dj8vgPr9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-100 transition-colors text-center"
            >
              Register for Psychometric Assessment
            </a>
          </div>

          {/* New "How it Works" Trigger */}
          <div className="pt-2">
            <button
              onClick={() => setIsProcessOpen(true)}
              className="group flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors"
            >
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              See how our process works
            </button>
          </div>
        </div>

        {/* Right Column: The App */}
        <div className="w-full relative">
          <div className="text-center mb-6 lg:hidden">
            <h2 className="text-2xl font-bold text-gray-900">Career Clarity Diagnostic</h2>
            <p className="text-stone-600 mt-2">Find out if you are on the right path in under 2 minutes.</p>
          </div>
          <ClarityApp />
        </div>
      </div>

      {/* Process Modal Overlay */}
      {isProcessOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl relative max-h-[90vh] flex flex-col overflow-hidden">

            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur z-10 border-b border-stone-100 px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl md:text-2xl font-bold text-stone-900">The Career Ignite Process</h3>
              <button
                onClick={() => setIsProcessOpen(false)}
                className="p-2 bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-800 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body - Timeline (Grid Redesign) */}
            <div className="p-6 md:p-8 flex-1 overflow-y-auto">
              <div className="relative max-w-4xl mx-auto">

                {/* Desktop Center Line */}
                <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-stone-200 -translate-x-1/2 z-0"></div>
                {/* Mobile Left Line */}
                <div className="md:hidden absolute left-5 top-4 bottom-4 w-0.5 bg-stone-200 -translate-x-1/2 z-0"></div>

                {/* CSS Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-10 md:gap-x-16 relative z-10">

                  {/* Stage 1: Left Column, Spans 2 Rows vertically centered */}
                  <div className="relative flex items-center md:col-start-1 md:row-start-1 md:row-span-2">
                    {/* Icon */}
                    <div className="absolute left-0 md:left-auto md:-right-8 md:translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-teal-100 text-teal-600 shadow z-20">
                      <ClipboardCheck className="w-5 h-5" />
                    </div>
                    {/* Card */}
                    <div className="ml-16 md:ml-0 bg-white p-5 rounded-2xl border border-stone-100 shadow-sm w-full">
                      <div className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-1">Stage 1</div>
                      <h4 className="text-lg font-bold text-stone-900 mb-2">Profile & Assessment</h4>
                      <ul className="text-stone-600 space-y-2 text-sm leading-relaxed list-disc list-outside ml-4">
                        <li><span className="font-semibold text-stone-800">Registration:</span> Complete a brief form and share payment confirmation.</li>
                        <li><span className="font-semibold text-stone-800">Psychometric Test:</span> Take our scientific assessment to uncover natural strengths and aptitudes.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Stage 2: Right Column, Top Row */}
                  <div className="relative flex items-center md:col-start-2 md:row-start-1">
                    {/* Icon */}
                    <div className="absolute left-0 md:-left-8 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-amber-100 text-amber-600 shadow z-20">
                      <Video className="w-5 h-5" />
                    </div>
                    {/* Card */}
                    <div className="ml-16 md:ml-0 bg-white p-5 rounded-2xl border border-stone-100 shadow-sm w-full">
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">Stage 2</div>
                      <h4 className="text-lg font-bold text-stone-900 mb-2">Personalized Counseling</h4>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        We schedule an empathetic, one-on-one session (via Zoom/Meet) to interpret your results and discuss real-world career possibilities and actionable next steps.
                      </p>
                    </div>
                  </div>

                  {/* Stage 3: Right Column, Bottom Row */}
                  <div className="relative flex items-center md:col-start-2 md:row-start-2">
                    {/* Icon */}
                    <div className="absolute left-0 md:-left-8 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-100 text-emerald-600 shadow z-20">
                      <Map className="w-5 h-5" />
                    </div>
                    {/* Card */}
                    <div className="ml-16 md:ml-0 bg-white p-5 rounded-2xl border border-stone-100 shadow-sm w-full">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">Stage 3</div>
                      <h4 className="text-lg font-bold text-stone-900 mb-2">Roadmap & Follow-Up</h4>
                      <ul className="text-stone-600 space-y-2 text-sm leading-relaxed list-disc list-outside ml-4">
                        <li><span className="font-semibold text-stone-800">Custom Roadmap:</span> Receive your full psychometric report and personalized Education & Career Pathways plan via email.</li>
                        <li><span className="font-semibold text-stone-800">Check-in:</span> An optional follow-up within 1 month for final clarifications.</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="bg-stone-50 border-t border-stone-100 p-6 flex flex-col items-center text-center">
              <p className="text-sm text-stone-500 mb-4">Ready to find absolute clarity?</p>
              <a
                href="https://forms.gle/Qzq2NMbV8dj8vgPr9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-8 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors shadow-md"
              >
                Start Stage 1: Register Now
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Hero;