import Companys from "./Companys";

const Hero = () => {
  return (
    <main className="flex items-center justify-between">
      <div className="min-h-screen-3/4 w-full">
        {/* bg image div */}
        <div className=""></div>
      </div>
      <div>
        <h1>Make remote work</h1>
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
