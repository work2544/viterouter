import React from "react";
import { Link, Outlet } from "react-router";
import {
  FaHome,
  FaUser,
  FaInfo,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

const NAVIGATION_ITEMS = [
  { path: "/", icon: FaHome, label: "Home" },
  { path: "/about", icon: FaUser, label: "About" },
  { path: "/info", icon: FaInfo, label: "Info" },
];

const AUTH_ITEMS = [
  { path: "/log-in", icon: FaSignInAlt, label: "Log in" },
  { path: "/register", icon: FaUserPlus, label: "Register" },
];

const MainLayout = () => {
  return (
    <div className="container mx-auto flex min-h-screen p-4">
      <div className="flex w-full flex-row flex-wrap rounded-lg bg-cream shadow-lg">
        <aside className="flex w-full flex-col sm:w-1/3 md:w-1/6 border-r border-gray-200">
          <nav className="flex-1 p-4" aria-label="Main Navigation">
            <ul className="flex flex-col space-y-4">
              {NAVIGATION_ITEMS.map(({ path, icon: Icon, label }) => (
                <li
                  key={path}
                  className=" w-full rounded-md transition-colors duration-200"
                >
                  <Link
                    to={path}
                    className="group flex items-center px-4 py-2 hover:bg-dusty focus:bg-dusty focus:outline-none rounded-md"
                    aria-label={label}
                  >
                    <Icon
                      className="h-5 w-5 mr-3 fill-coral group-hover:fill-cream group-focus:fill-cream"
                      aria-hidden="true"
                    />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav
            className="border-t border-gray-200 p-4"
            aria-label="Auth Navigation"
          >
            <ul className="flex flex-col space-y-4">
              {AUTH_ITEMS.map(({ path, icon: Icon, label }) => (
                <li
                  key={path}
                  className="w-full rounded-md transition-colors duration-200"
                >
                  <Link
                    to={path}
                    className="group flex items-center px-4 py-2 hover:bg-dusty focus:bg-dusty focus:outline-none rounded-md"
                    aria-label={label}
                  >
                    <Icon
                      className="h-5 w-5 mr-3 fill-coral group-hover:fill-cream group-focus:fill-cream"
                      aria-hidden="true"
                    />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main
          role="main"
          className="w-full sm:w-2/3 md:w-5/6 p-6"
          aria-label="Main Content"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
