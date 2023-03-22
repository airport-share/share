import Link from 'next/link';
import { useRouter } from 'next/router';
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

const linkStyleActive =
  'block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700';
const linkStyle =
  'block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white';

function Nav() {
  const { pathname } = useRouter();
  return (
    <nav className="sticky top-0 left-0 z-20 w-full border-b border-gray-200 bg-white px-2 py-2.5 dark:border-gray-600 dark:bg-gray-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="https://t.me/go4sharing" className="flex items-center">
          <Icon />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            资源分享
          </span>
        </a>
        <div className="flex md:order-2">
          <a
            target={'_blank'}
            href="https://t.me/go2sharing"
            className="mr-3 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
          >
            加入分享群
          </a>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={
                    pathname === link.path ? linkStyleActive : linkStyle
                  }
                  aria-current="page"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
