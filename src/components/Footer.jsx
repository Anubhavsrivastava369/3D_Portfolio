import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black-100 py-6 text-white text-center mt-10">
      <div className="container mx-auto px-4">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Anubhav Srivastava. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Built with React, Three.js, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
