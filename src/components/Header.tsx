import { useState } from "react";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import ButtonBox from "./ButtonBox";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between text-lg text-medium-gray font-medium md:px-0 sm:px-4">
      <div className="flex items-center gap-12">
        <div>
          <img
            src="src/assets/logo.svg"
            alt="Snap logo"
            className="mt-2 py-8 cursor-pointer"
          />
        </div>
        <div className="lg:block sm:hidden">
          <Navigation />
        </div>
      </div>
      <div className="lg:block sm:hidden">
        <ButtonBox />
      </div>
      <div className="lg:hidden">
        <MobileMenu toggleMenu={handleToggleMenu} isMenuOpen={openMenu} />
      </div>
      <div className="lg:hidden sm:block" onClick={() => handleToggleMenu()}>
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
