import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/20 shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold text-white">TaxGPT</div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-white hover:text-red-600 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="how-it-works"
              smooth={true}
              duration={500}
              className="text-white hover:text-red-600 cursor-pointer"
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="text-white hover:text-red-600 cursor-pointer"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-white hover:text-red-600 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md">
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
