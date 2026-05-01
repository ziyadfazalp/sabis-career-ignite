import React from 'react';
import { Brain, HeartHandshake, Users, GraduationCap } from 'lucide-react';

const services = [
  {
    title: 'Psychometric Assessments & De-briefing',
    description: 'Scientific tools to uncover true strengths and aptitudes.',
    icon: Brain,
    link: 'https://forms.gle/Qzq2NMbV8dj8vgPr9',
  },
  {
    title: 'One-on-One Career Counselling',
    description: 'Empathetic, personalized guidance for students and undergraduates.',
    icon: HeartHandshake,
    link: 'https://wa.me/919747405044?text=Hi%20Sabitha,%20I%20am%20interested%20in%20One-on-One%20Career%20Counselling',
  },
  {
    title: 'Parent-Teen Bridge Sessions',
    description: 'Bridging communication gaps during stressful career decisions.',
    icon: Users,
    link: 'https://wa.me/919747405044?text=Hi%20Sabitha,%20I%20am%20interested%20in%20the%20Parent-Teen%20Bridge%20Sessions',
  },
  {
    title: 'Workshops on Career & Exam Prep',
    description: 'Group sessions to build future readiness, motivation and learn modern study techniques.',
    icon: GraduationCap,
    link: 'https://wa.me/919747405044?text=Hi%20Sabitha,%20I%20am%20interested%20in%20attending%20a%20Career%20Workshop',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-6 tracking-tight">
            How We Build Your Confidence
          </h2>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
            Empathetic, expert-led services designed to untangle career confusion, uncover natural strengths, and build a clear path forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={index}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-stone-200 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-100 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4 leading-snug">
                  {service.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {service.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;