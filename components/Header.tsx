import React from "react";

const Header = () => {
  return (
    <div className="">
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-violet-950 py-2 text-neutral-500 shadow-lg hover:text-neutral-700   lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="ml-2">
            <a
              className="text-3xl sm:m-10 font-sans font-bold text-neutral-900 dark:text-neutral-200 font-cursive"
              href="#"
            >
              Blogify
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
