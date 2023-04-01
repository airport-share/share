import React from 'react';

function Footer() {
  return (
    <footer className="  z-20 w-full bg-white p-4  dark:border-gray-600 dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2023
        <a
          href="https://t.me/go4sharing"
          target="_blank"
          className="hover:underline"
        >
          go4sharing™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://t.me/go2sharing"
            target="_blank"
            className="hover:underline"
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
