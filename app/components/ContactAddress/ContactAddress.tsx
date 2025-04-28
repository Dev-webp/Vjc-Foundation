import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row p-8 bg-gray-50 gap-8 justify-center items-center">

      {/* Left side: Our Address */}
      <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-2xl shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-orange-600 flex flex-col justify-between h-60">
        <h2 className="text-3xl font-semibold mb-4 text-center">Our Address</h2>
        <p className="text-lg mb-6 text-center">
          123 Business St, Suite 456 <br />
          City, Country 78910
        </p>
        <div className="flex justify-center items-center text-xl space-x-4 mb-4">
          <FaMapMarkerAlt className="text-white animate-pulse" />
          <p>Visit us at our location</p>
        </div>
      </div>

      {/* Right side: Contact Us */}
      <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-gradient-to-r from-sky-400 to-sky-500 text-white rounded-2xl shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-sky-600 flex flex-col justify-between h-60">
        <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
        <div className="space-y-4">
          <div className="flex justify-center items-center text-lg space-x-3">
            <FaPhoneAlt className="text-white animate-pulse" />
            <p>+1 (234) 567-890</p>
          </div>
          <div className="flex justify-center items-center text-lg space-x-3">
            <FaEnvelope className="text-white animate-pulse" />
            <p>contact@company.com</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactSection;
