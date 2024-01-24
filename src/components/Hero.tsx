import Companys from "./Companys";

const Hero = () => {
  return (
    <main className="md:flex items-center justify-between flex-row-reverse md:w-11/12 md:h-4/5 mx-auto relative sm:block sm:w-full sm:h-17/20">
      <div className="md:h-full sm:h-2/4 md:w-41 sm:w-full ">
        <div className="h-full w-full md:bg-[url('src/assets/image-hero-desktop.png')] bg-center bg-contain bg-no-repeat sm:bg-[url('src/assets/image-hero-mobile.png')]"></div>
      </div>
      <div className="md:w-55 sm:w-full">
        <h1 className="flex flex-col md:w-3/4 mt-6 md:text-heading md:leading-none font-bold md:text-left sm:text-4xl sm:text-center">
          Make remote work
        </h1>
        <div className="md:my-10 sm:my-5">
          <p className="md:w-70 md:text-lg font-semibold text-medium-gray md:px-0 md:text-justify sm:px-8 sm:w-full sm:text-base sm:text-center">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
        </div>
        <div className="md:block sm:flex sm:justify-center sm:mb-5">
          <button className="md:py-4 md:px-8 text-lg font-bold bg-almost-black text-almost-white border border-almost-black rounded-2xl hover:bg-almost-white hover:text-almost-black duration-300 sm:py-3 sm:px-6">
            Learn more
          </button>
        </div>
        <div className="md:absolute bottom-0 sm:mt-6 sm:px-4 sm:pb-8">
          <Companys />
        </div>
      </div>
    </main>
  );
};

export default Hero;
