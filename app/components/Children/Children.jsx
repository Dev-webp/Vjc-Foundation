const HeroSection = () => {
  return (
    <section className="flex flex-col mt-10  lg:flex-row items-center justify-center bg-[#faf6f0]">
      <div className="w-full lg:w-1/2">
        <img
          src="/assets/children.jpg"
          alt="Children"
          className="w-full h-full px-3 object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 p-3  lg:p-16 text-[#333]">
        <p
          className="text-sm text-orange-500 pt-10 uppercase font-semibold mb-2 tracking-widest"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Welcome to Lovecare Non-Profit Charity
        </p>
        <h1 className="text-4xl md:text-5xl pt-3 font-semibold mb-6 font-handwritten">
          Do You Care Our Children?
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition duration-300 transform hover:scale-105 hover:translate-y-[-2px] hover:shadow-lg">
          <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-110">
            Be A Volunteer
          </span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
