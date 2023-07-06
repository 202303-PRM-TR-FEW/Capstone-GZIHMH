import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul className="flex flex-col items-start p-0 list-none">
        <li>
          <img src="/assets/icons/icon.png" className="w-12 h-20 mb-1" alt="Custom Icon" />
        </li>
        <li>
          <Link href="/" legacyBehavior>
            <a className="flex flex-col items-center mb-4 cursor-pointer group">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 stroke-current text-gray-500 group-hover:text-blue-500 transition-colors duration-300" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M10 12h4v4h-4z" />
              </svg>
              <span className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors duration-300">Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/search" legacyBehavior>
            <a className="flex flex-col items-center mb-4 cursor-pointer group">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 stroke-current text-gray-500 group-hover:text-blue-500 transition-colors duration-300" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
              <span className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors duration-300">Search</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/courses" legacyBehavior>
            <a className="flex flex-col items-center mb-4 cursor-pointer group">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 stroke-current text-gray-500 group-hover:text-blue-500 transition-colors duration-300" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 4v16l13 -8z" />
              </svg>
              <span className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors duration-300">Courses</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/saved" legacyBehavior>
            <a className="flex flex-col items-center mb-4 cursor-pointer group">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 stroke-current text-gray-500 group-hover:text-blue-500 transition-colors duration-300" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
              <span className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors duration-300">Saved</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/profile" legacyBehavior>
            <a className="flex flex-col items-center mb-4 cursor-pointer group">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 stroke-current text-gray-500 group-hover:text-blue-500 transition-colors duration-300" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
              </svg>
              <span className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors duration-300">Profile</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
