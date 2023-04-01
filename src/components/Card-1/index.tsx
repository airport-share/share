import React from 'react';

import type { Airport } from '@/constant';

function Card1({ name, group, url, avatar }: Airport) {
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white pt-4 shadow hover:bg-slate-100 dark:border-gray-700 dark:bg-gray-800 md:w-80">
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 h-24 w-24 rounded-full shadow-lg"
          src={avatar}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>

        <div className="mt-4 flex space-x-3 md:mt-6">
          <a href={url} target="_blank" className="btn-primary btn-active btn">
            立即注册
          </a>

          <a
            href={group}
            target="_blank"
            className="btn-outline btn-secondary btn"
          >
            官方群
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card1;
