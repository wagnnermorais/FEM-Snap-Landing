import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-8 text-mainSize text-medium-gray font-medium">
      <div className="flex items-center gap-12">
        <div>
          <img
            src="src/assets/logo.svg"
            alt="Snap logo"
            className="mt-2 cursor-pointer"
          />
        </div>
        <Navigation />
      </div>
      <div className="flex items-center gap-12">
        <button className="" type="button">
          Login
        </button>
        <button
          className="px-6 py-2 border-3 rounded-2xl border-medium-gray"
          type="button"
        >
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
