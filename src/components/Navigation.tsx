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
    <div className="relative lg:m-0 sm:mt-20 sm:mb-6">
      <menu className="lg:flex lg:items-center gap-8 lg:gap-16 sm:block">
        <div>
          <li
            className="flex items-center gap-2 font-semibold ease-out duration-300 hover:text-almost-black relative lg:m-0 sm:mb-4"
            onClick={() => handleMenuDrop("features")}
          >
            <a href="#">Features</a>
            <img
              src={
                isFeaturesDropdownOpen
                  ? "/icon-arrow-up.svg"
                  : "/icon-arrow-down.svg"
              }
              alt="Arrow Icon"
              className="mt-0.5 cursor-pointer"
            />
          </li>
          <div>{isFeaturesDropdownOpen && <Features />}</div>
        </div>
        <div>
          <li
            className="flex items-center gap-2 font-semibold ease-out duration-300 hover:text-almost-black lg:m-0 sm:mb-4"
            onClick={() => handleMenuDrop("company")}
          >
            <a href="#">Company</a>
            <img
              src={
                isCompanyDropdownOpen
                  ? "/icon-arrow-up.svg"
                  : "/icon-arrow-down.svg"
              }
              alt="Arrow Icon"
              className="mt-0.5 cursor-pointer"
            />
          </li>
          <div>{isCompanyDropdownOpen && <Company />}</div>
        </div>
        <li className="font-semibold ease-out duration-300 hover:text-almost-black lg:m-0 sm:mb-4">
          <a href="#">Careers</a>
        </li>
        <li className="font-semibold ease-out duration-300 hover:text-almost-black lg:m-0 sm:mb-4">
          <a href="#">About</a>
        </li>
      </menu>
    </div>
  );
};

export default Navigation;
