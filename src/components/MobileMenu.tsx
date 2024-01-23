import ButtonBox from "./ButtonBox";
import Navigation from "./Navigation";
import { MobileMenuProps } from "../types/MobileMenuProps";

const MobileMenu = ({ toggleMenu }: MobileMenuProps) => {
  return (
    <div className="flex flex-row-reverse w-full min-h-screen fixed top-0 left-0 bg-black bg-opacity-50 z-50">
      <div className="w-2/3 min-h-screen bg-white relative z-10 p-8">
        <div className="absolute top-4 right-4" onClick={toggleMenu}>
          <img src="src/assets/icon-close-menu.svg" alt="Close Menu Icon" />
        </div>
        <Navigation />
        <div className="md:flex items-center gap-12 sm:block">
          <ButtonBox />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
