import Link from 'next/link';
import React from 'react';

import { Icon } from '@/components/Nav/icon';

const links = [
  {
    path: '/',
    title: '首页推荐',
  },
  {
    path: '/all',
    title: '机场大全',
  },
  {
    path: '/tutorials',
    title: '使用教程',
  },
  {
    path: '/apple',
    title: '苹果ID',
  },
];

function Nav() {
  return (
    <div className="navbar sticky top-0 z-10 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            {links.map((link) => (
              <li key={link.path}>
                <Link href={link.path} aria-current="page">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a href="https://t.me/go4sharing" className="flex items-center">
          <Icon />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            资源分享
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => (
            <li key={link.path}>
              <Link href={link.path} aria-current="page">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn" target={'_blank'} href="https://t.me/go2sharing">
          加入分享群
        </a>
      </div>
    </div>
  );
}

export default Nav;
