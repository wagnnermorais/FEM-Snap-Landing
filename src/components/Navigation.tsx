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
    <div className="relative sm:mt-12 sm:mb-6">
      <menu className="flex items-center gap-8 md:gap-16 sm:block">
        <li
          className="flex items-center gap-2 font-semibold ease-out duration-300 hover:text-almost-black md:relative sm:mb-4"
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
        </li>
        {isFeaturesDropdownOpen && <Features />}
        <li
          className="flex items-center gap-2 font-semibold ease-out duration-300 hover:text-almost-black sm:mb-4"
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
        </li>
        {isCompanyDropdownOpen && <Company />}
        <li className="font-semibold ease-out duration-300 hover:text-almost-black sm:mb-4">
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
