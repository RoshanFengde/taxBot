import React from "react";
import { FaDiscord, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact"
      className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo and Name */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">TaxGPT</h3>
          <p className="text-sm text-gray-400">Your Tax Assistant</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaDiscord size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Footer Bottom */}
      <div className="container mx-auto text-center py-2 text-sm text-gray-400">
        © {new Date().getFullYear()} TaxGPT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
