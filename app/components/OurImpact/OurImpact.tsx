"use client";

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const OurImpact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const impactData = [
    { end: 20, label: 'LAC', desc: 'children and their families impacted every year' },
    { end: 2000, label: 'VILLAGES', desc: 'and slums reached across the country' },
    { end: 400, label: 'PROJECTS', desc: 'focused on education, healthcare, and women empowerment' },
    { end: 27, label: 'STATES', desc: 'are reached including the remotest areas' },
  ];

  return (
    <section ref={ref} className="bg-[#faf6f0] py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">OUR IMPACT</h2>
      <div className="grid grid-cols-1  md:grid-cols-4 gap-8 text-center px-8 max-w-7xl mx-auto">
        {impactData.map((item, index) => (
          <div key={index}>
            <h3 className="text-6xl font-bold text-orange-500 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              {inView && <CountUp end={item.end} suffix="+" duration={2} />}
            </h3>
            <p className="text-sky-600 font-semibold text-lg tracking-wider"style={{ fontFamily: 'Roboto, sans-serif' }} >{item.label}</p>
            <p className="text-gray-700 mt-2 text-sm mb-8">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurImpact;
