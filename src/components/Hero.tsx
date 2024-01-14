import Companys from "./Companys";

const Hero = () => {
  return (
    <main className="flex items-center justify-between flex-row-reverse">
      <div className="min-h-screen-3/4 w-2/4 bg-[url('src/assets/image-hero-desktop.png')] bg-center bg-cover bg-no-repeat"></div>
      <div className="w-2/4">
        <h1 className="flex flex-col text-7xl font-bold">
          Make <span>remote work</span>
        </h1>
        <p>Get your team in sync, no matter your location.</p>
        <p>
          Streamline processes, create team rituals, and watch productivity
          soar.
        </p>
        <button>Learn more</button>
        <div className="companys">
          <Companys />
        </div>
      </div>
    </main>
  );
};

export default Hero;
