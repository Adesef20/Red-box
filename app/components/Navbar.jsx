"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full text-white bg-gray-900 shadow-md">
      <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
        
        <Link
          href="/"
          className="text-3xl font-bold tracking-wide text-yellow-400"
        >
          MovieBox 🎬
        </Link>

    
        <ul className="items-center hidden gap-8 font-medium md:flex">
          <li>
            <Link href="/" className="font-sans text-2xl text-red-500 transition hover:text-yellow-400">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/Movies" className="font-sans text-2xl transition hover:text-yellow-400">
              TV-SERIES
            </Link>
          </li>
        </ul>

        
        <div className="items-center hidden md:flex">
          <input
            type="text"
            placeholder="Search Movies..."
            className="px-3 py-2 text-sm bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        
        <button
          className="text-2xl md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

    
      {open && (
        <ul className="px-6 py-4 space-y-4 font-medium text-white bg-gray-800 md:hidden">
          <li>
            <Link href="/" className="block transition hover:text-yellow-400">
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/Movies"
              className="block transition hover:text-yellow-400"
            >
              TV-SERIES
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
