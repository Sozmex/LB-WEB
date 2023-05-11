import React from "react";
import { Link } from "gatsby";  // Change the import from react-scroll to gatsby

import Logo from "../images/Logo files/Logo SVG file-bettercrop.svg";
import Button from "./button";

const Header = () => {
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Insights", href: "#works" },
    { name: "People", href: "#services1" },
    { name: "Support", href: "#services1" },
  ];
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex py-5 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <a href="/" className="block">
              <img className="h-16 w-auto" src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="flex flex-row gap-6">
            <div className="md:flex hidden flex-row gap-4 items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to="/"
                  state={{ scrollTarget: item.href }}
                  className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Button label="CONTACT US" link="#" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
