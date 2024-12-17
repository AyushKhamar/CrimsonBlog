import React from "react";
import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <div className="hidden md:flex items-center justify-center gap-8 rounded-3xl xl:rounded-full bg-white p-4 shadow-lg">
      <div className="flex-1 flex justify-between items-center flex-wrap">
        <Link
          to={"/posts"}
          className="bg-blue-800 px-4 py-2 rounded-full text-white "
        >
          All posts
        </Link>
        <Link
          to={"/posts?cat=web-design"}
          className="hover:bg-blue-200 px-4 py-2 rounded-full  "
        >
          Web Design
        </Link>
        <Link
          to={"/posts?cat=database"}
          className="hover:bg-blue-200 px-4 py-2 rounded-full  "
        >
          Database
        </Link>
        <Link
          to={"/posts?cat=search-engine"}
          className="hover:bg-blue-200 px-4 py-2 rounded-full  "
        >
          Search Engines
        </Link>
        <Link
          to={"/posts?cat=marketing"}
          className="hover:bg-blue-200 px-4 py-2 rounded-full  "
        >
          Marketing
        </Link>
        <Link
          to={"/posts?cat=development"}
          className="hover:bg-blue-200 px-4 py-2 rounded-full  "
        >
          Development
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>

      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        <input
          type="text"
          placeholder="search a post..."
          className="bg-transparent"
          //   onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default MainCategories;
