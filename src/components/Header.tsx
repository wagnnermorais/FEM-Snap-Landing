import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-8 px-2 text-mainSize text-medium-gray font-medium">
      <div className="flex items-center gap-12">
        <div>
          <img src={logo} alt="Snap logo" className="mt-2 cursor-pointer" />
        </div>
        <menu>
          <ul className="flex items-center gap-12">
            <li className="font-bold ease-out duration-300 hover:text-almost-black cursor-pointer">Features</li>
            <li className="font-bold ease-out duration-300 hover:text-almost-black cursor-pointer">Company</li>
            <li className="font-bold ease-out duration-300 hover:text-almost-black cursor-pointer">Careers</li>
            <li className="font-bold ease-out duration-300 hover:text-almost-black cursor-pointer">About</li>
          </ul>
        </menu>
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