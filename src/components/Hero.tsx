import Companys from "./Companys";

const Hero = () => {
  return (
    <main className="md:flex items-center justify-between flex-row-reverse md:w-11/12 mx-auto relative sm:block sm:w-full">
      <div className="h-4/5 w-41">
        <div className="h-full md:bg-[url('src/assets/image-hero-desktop.png')] md:bg-center md:bg-cover bg-no-repeat sm:bg-[url('src/assets/image-hero-mobile.png')]"></div>
      </div>
      <div className="md:w-55 sm:w-full">
        <h1 className="flex flex-col mt-6 md:text-heading md:leading-none font-bold md:text-left sm:text-4xl sm:text-center">
          Make <span>remote work</span>
        </h1>
        <div className="md:my-10 sm:my-5">
          <p className="md:w-70 md:text-lg font-semibold text-medium-gray md:px-0 md:text-justify sm:px-8 sm:w-full sm:text-base sm:text-center">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
        </div>
        <button className="py-4 px-8 text-lg font-bold bg-almost-black text-almost-white border border-almost-black rounded-2xl hover:bg-almost-white hover:text-almost-black duration-300">
          Learn more
        </button>
        <div className="absolute bottom-0">
          <Companys />
        </div>
      </div>
    </main>
  );
};

export default Hero;
