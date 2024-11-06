import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="/" className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white ">
          Home
        </a>
        <a href="/projects" className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white ">
          Projects
        </a>
        <a href="/about" className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white ">
          About
        </a>
        <a href="/contact" className="px-4 py-1.5 rounded-full bg-white text-gray-900 text-sm font-semibold hover:bg-white/70 hover:text-gray-900 ">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
