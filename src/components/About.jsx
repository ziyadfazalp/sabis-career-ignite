import React from 'react';
import { Download, Quote } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-[#fdfcf9] py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative lg:order-1">
          <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] bg-stone-200">
            <img
              src="/sabitha-photo.jpg"
              alt="Sabitha - Founder & Career Counsellor"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Subtle inner shadow for premium feel */}
            <div className="absolute inset-0 border border-black/5 rounded-[2rem] pointer-events-none"></div>
          </div>

          {/* Decorative blur elements behind the image */}
          <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 z-[-1]"></div>
          <div className="absolute -top-8 -right-8 w-56 h-56 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 z-[-1]"></div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-8 lg:order-2">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1.5 bg-stone-200/60 text-stone-800 text-xs md:text-sm font-bold tracking-widest rounded-full uppercase">
              The Trust Anchor
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight tracking-tight">
              Meet Sabitha,<br className="hidden md:block" /> Your Career Architect
            </h2>
          </div>

          <div className="space-y-5 text-lg text-stone-600 leading-relaxed">
            <p>With an M.Sc in Psychology and a CIGI Diploma in Career Guidance & Counselling—where she graduated as the <strong>First Rank holder</strong>—Sabitha has dedicated over 15 years to guiding more than <span className="font-semibold text-stone-900 bg-amber-100/50 px-1 rounded">3,500 adolescents</span>.</p>
            <p>Before establishing her private practice, she built a formidable foundation on the frontlines of education and state-led youth development. She served as a Senior Career Counsellor at CIGI for four years, and spent five years as a Skill Development Executive for ASAP Kerala at the renowned Nadakkavu Girls HSS. This is further backed by her hands-on experience as a Teacher and School Psychologist at prominent local institutions like Apex School, Hilltop Public School, and MES School.</p>
            <p>This unmatched, ground-level experience ensures her empathetic, science-backed approach isn't just theoretical. She deeply understands the real, day-to-day academic pressures and emotional communication gaps families face, empowering students to confidently step into their ideal future.</p>
          </div>

          {/* Testimonial Block */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100 relative mt-8">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-stone-100 rotate-180" />
            <blockquote className="space-y-4 relative z-10">
              <p className="text-stone-800 italic text-xl leading-relaxed">
                "I initially had not the slightest idea on what to take up and your session has really thrown light on my strengths."
              </p>
              <footer className="text-base font-semibold text-stone-500 uppercase tracking-wide flex items-center gap-3">
                <span className="w-8 h-[2px] bg-amber-200"></span>
                Parvathy, Std 10, Singapore
              </footer>
            </blockquote>
          </div>

          {/* Call to Action */}
          <div className="pt-6">
            <a
              href="/sabi-leaflet.pdf"
              download="Sabi_Career_Ignite_Profile.pdf"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-stone-300 text-stone-700 font-semibold text-lg rounded-2xl hover:bg-stone-900 hover:border-stone-900 hover:text-white transition-all duration-300 bg-white"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
              <span>Download One-Page Profile</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;