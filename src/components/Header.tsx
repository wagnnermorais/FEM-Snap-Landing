import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-8 text-lg text-medium-gray font-medium md:px-0 sm:px-4">
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
      <div className="md:flex items-center gap-12 sm:hidden">
        <button className="hover:text-almost-black duration-300" type="button">
          Login
        </button>
        <button
          className="px-6 py-2 border-2 rounded-2xl border-medium-gray hover:border-almost-black hover:text-almost-black duration-300"
          type="button"
        >
          Register
        </button>
      </div>
      <div className="md:hidden sm:block">
        <img
          src="src/assets/icon-menu.svg"
          alt="Mobile Menu"
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
