import React from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="bg-slate-800 shadow-md text-white sticky top-0 z-50">
      <div className="mycontainer flex justify-between items-center px-4 py-3">
        <div className="font-bold text-2xl">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border px-3 py-1 hover:bg-green-700 transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

          <a
            href="https://github.com/Shubham123-k"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-600 px-3 flex items-center gap-2 hover:bg-green-800 transition"
          >
            <img
              src="/icons/github.svg"
              alt="GitHub"
              className="invert w-8"
            />
            <span className="font-bold hidden md:block">GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;