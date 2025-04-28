import React from 'react';
import Image from 'next/image';

interface AchievingGoalsSectionProps {
  images?: string[]; // Array of image URLs passed as props
}

const AchievingGoalsSection: React.FC<AchievingGoalsSectionProps> = ({ images }) => {
  const defaultImages = [
    '/assets/Achieve/health1.png',
    '/assets/Achieve/gender2.png',
    '/assets/Achieve/quality3.png',
    '/assets/Achieve/decent4.png',
    '/assets/Achieve/reduced5.png',
    '/assets/Achieve/partner6.png',
  ];

  // Use passed images or default images
  const imagesToDisplay = images || defaultImages;

  return (
    <section className="text-center py-12 px-4 relative overflow-hidden">
      {/* Background Image with Orange Shade */}
      <div className="absolute inset-0 bg-cover bg-fixed bg-center" 
           style={{ backgroundImage: 'url(/assets/causes.png)' }}>
        <div className="absolute inset-0 bg-orange-500/50"></div>
      </div>
      
      <div className="relative z-10">
        {/* Highlight the content */}
        <div className="mb-8 bg-opacity-70 bg-black/40 py-4 px-6 rounded-md inline-block">
          <h2 className="text-3xl font-bold text-white">TOWARDS ACHIEVING</h2>
          <p className="text-gray-200 mt-4 tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
            SUSTAINABLE DEVELOPMENT GOALS
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 p-10 lg:grid-cols-6 gap-10 lg:px-16 xl:px-32">
          {imagesToDisplay.map((src, index) => (
         <div 
         key={index}
         className="w-full h-full overflow-hidden transform transition-all duration-700 ease-in-out hover:scale-110 hover:-translate-y-2 hover:brightness-110 rounded-lg"
       >
       

              <Image
                src={src}
                alt={`Goal ${index + 1}`}
                width={100} // Image width
                height={100} // Image height
                className="object-cover w-full h-full transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievingGoalsSection;
