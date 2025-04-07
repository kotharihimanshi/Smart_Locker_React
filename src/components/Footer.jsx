import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
       
        <div>
          <h2 className="text-2xl font-bold text-purple-400">SmartLocker</h2>
          <p className="mt-2 text-gray-400">
            Secure. Smart. Seamless. Your belongings, our responsibility.
          </p>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-3 text-purple-300">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-purple-300">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-5 text-gray-300 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-5">
        &copy; {new Date().getFullYear()} SmartLocker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
