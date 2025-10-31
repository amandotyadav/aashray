import { MoveRight } from "lucide-react";
import React from "react";

const Navbar2 = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full shadow-lg fixed z-50">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 text-2xl font-bold flex items-center gap-3">
            <div className="w-16 aspect-square bg-linear-to-br from-orange-400 to-orange-600 shadow-lg rounded-2xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart w-10 h-10 text-white fill-white"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>

            <div>
              <h1 className="text-4xl font-bold text-gray-900 leading-none!">
                AASHRAY
              </h1>
              <p class="text-sm text-gray-600 mt-1">
                Your Community, Your Home
              </p>
            </div>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a className="font-medium text-lg">About Us</a>
              </li>
              <li>
                <a className="font-medium text-lg">Our Work</a>
              </li>
              <li>
                <a className="font-medium text-lg">Contact Us</a>
              </li>
              <li>
                <button className="btn btn-lg font-medium text-lg ml-3 flex items-center gap-2 rounded-full">
                  Be A Volunteer
                  <MoveRight className="animate-pulse" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side z-200">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4 items-center">
          {/* Sidebar content here */}
          <li>
            <a className="text-4xl font-medium">About Us</a>
          </li>
          <li>
            <a className="text-4xl font-medium">Our Work</a>
          </li>
          <li>
            <a className="text-4xl font-medium">Contact Us</a>
          </li>
          <li>
            <button className="btn btn-lg font-semibold text-3xl ml-3 flex items-center gap-2 mt-5 rounded-full">
              Be A Volunteer
              <MoveRight className="animate-pulse" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
