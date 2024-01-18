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
      <div className="md:block sm:hidden">
        <ButtonBox />
      </div>
      <div className="md:hidden sm:block" onClick={() => handleToggleMenu()}>
        <img
          src="src/assets/icon-menu.svg"
          alt="Mobile Menu"
          className="cursor-pointer"
        />
      </div>
      {openMenu && <MobileMenu toggleMenu={handleToggleMenu} />}
    </header>
  );
};

export default Header;
