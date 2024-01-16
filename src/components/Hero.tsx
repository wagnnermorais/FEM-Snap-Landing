import Companys from "./Companys";

const Hero = () => {
  return (
    <main className="flex items-center justify-between flex-row-reverse w-4/5 m-auto relative">
      <div className="w-45">
        <div className="min-h-screen-4/5 w-full bg-[url('src/assets/image-hero-desktop.png')] bg-center bg-contain bg-no-repeat"></div>
      </div>
      <div className="w-55">
        <h1 className="flex flex-col mt-6 text-heading leading-none font-bold">
          Make <span>remote work</span>
        </h1>
        <div className="my-10">
          <p className="w-70 text-mainSize font-semibold text-medium-gray text-justify">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
        </div>
        <button className="py-4 px-8 text-mainSize font-semibold bg-almost-black text-almost-white rounded-2xl">
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
