"use client";

import Image from 'next/image';

interface Programme {
  title: string;
  description: string;
  color: string;
  image: string;
}

const programmes: Programme[] = [
  {
    title: "EDUCATION",
    description: "Education, nutrition and holistic development of children",
    color: "text-yellow-500",
    image: "/assets/education.png",
  },
  {
    title: "HEALTHCARE",
    description: "Taking healthcare services to doorsteps of hard to reach communities",
    color: "text-purple-500",
    image: "/assets/health.png",
  },
  {
    title: "WOMEN EMPOWERMENT",
    description: "Empowering adolescent girls & women through community engagement",
    color: "text-teal-500",
    image: "/assets/women.png",
  },
  {
    title: "LIVELIHOOD",
    description: "Skill training and placement support for underprivileged youth",
    color: "text-orange-400",
    image: "/assets/livelihood.png",
  },
  {
    title: "EMPOWERING GRASSROOTS",
    description: "Supporting grassroots level initiatives for better impact",
    color: "text-green-500",
    image: "/assets/grass.png",
  },
  {
    title: "DISASTER RESPONSE",
    description: "Providing immediate support during disasters",
    color: "text-red-400",
    image: "/assets/disasters.png",
  },
];

const OurProgrammes = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-4xl font-extrabold text-center mb-20">OUR PROGRAMMES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto px-8">
        {programmes.map((item, index) => (
          <div key={index} className="flex items-center space-x-6">
            <Image
              src={item.image}
              alt={item.title}
              width={96}  // Default width for smaller screens
              height={96} // Default height for smaller screens
              className="object-contain w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-50 lg:h-50" // Responsive width and height
            />
            <div>
              <h3 className={`text-2xl font-extrabold ${item.color} underline mb-2`}>
                {item.title}
              </h3>
              <p className="text-gray-700 mt-3 text-sm tracking-widest leading-loose" style={{ fontFamily: 'Roboto, sans-serif' }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProgrammes;
