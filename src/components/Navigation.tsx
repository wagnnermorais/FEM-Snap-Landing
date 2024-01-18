import { useState } from "react";
import Features from "./Dropdown/Features";
import Company from "./Dropdown/Company";

const Navigation = () => {
  const [isFeaturesDropdownOpen, setFeaturesDropdownOpen] =
    useState<boolean>(false);
  const [isCompanyDropdownOpen, setCompanyDropdownOpen] =
    useState<boolean>(false);

  const handleMenuDrop = (dropdown: string) => {
    switch (dropdown) {
      case "features":
        setFeaturesDropdownOpen((prev) => !prev);
        break;
      case "company":
        setCompanyDropdownOpen((prev) => !prev);
        break;
      default:
        setFeaturesDropdownOpen(false);
        setCompanyDropdownOpen(false);
    }
  };

  return (
    <div className="relative sm:hidden md:block">
      <menu className="flex items-center gap-8 md:gap-16">
        <li
          className="flex items-center gap-2 font-semibold ease-out duration-300 hover:text-almost-black relative"
          onClick={() => handleMenuDrop("features")}
        >
          <a href="#">Features</a>
          <img
            src={
              isFeaturesDropdownOpen
                ? "src/assets/icon-arrow-up.svg"
                : "src/assets/icon-arrow-down.svg"
            }
            alt="Arrow Icon"
            className="mt-0.5 cursor-pointer"
          />
          {isFeaturesDropdownOpen && <Features />}
        </li>
        <li
          className="flex items-center gap-2 font-semibold ease-out duration-300 hover:text-almost-black"
          onClick={() => handleMenuDrop("company")}
        >
          <a href="#">Company</a>
          <img
            src={
              isCompanyDropdownOpen
                ? "src/assets/icon-arrow-up.svg"
                : "src/assets/icon-arrow-down.svg"
            }
            alt="Arrow Icon"
            className="mt-0.5 cursor-pointer"
          />
          {isCompanyDropdownOpen && <Company />}
        </li>
        <li className="font-semibold ease-out duration-300 hover:text-almost-black">
          <a href="#">Careers</a>
        </li>
        <li className="font-semibold ease-out duration-300 hover:text-almost-black">
          <a href="#">About</a>
        </li>
      </menu>
    </div>
  );
};

export default Navigation;
