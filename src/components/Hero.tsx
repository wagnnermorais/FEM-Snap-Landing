const Hero = () => {
  return (
    <main className="flex items-center justify-between bg-blue-300">
      <div className="min-h-screen-3/4 w-full">
        <div className="w-full min-h-full bg-[url('../assets/image-hero-desktop.png')] bg-cover bg-center bg-no-repeat"></div>
      </div>
      <div>
        <h1>Make remote work</h1>
        <p>Get your team in sync, no matter your location.</p>
        <p>
          Streamline processes, create team rituals, and watch productivity
          soar.
        </p>
        <button>Learn more</button>
      </div>
    </main>
  );
};

export default Hero;
