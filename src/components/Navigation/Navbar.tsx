"use client";

import Link from "next/link";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { APP_TEXT } from "@/app/constants/appTexts";
import useTheme from "@/app/hooks/useTheme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const navbarItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Sobre Nosotros" },
  { href: "/producers", label: "Productores" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 flex w-full bg-white shadow-md dark:bg-boxdark">
      <div className="flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
        {/* Mobile Sidebar Button */}
        <div className="flex items-center gap-2 sm:gap-4 md:hidden">
          <button
            aria-controls="sidebar"
            className="block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 h-full w-full">
                <span className="block h-0.5 w-full bg-black dark:bg-white my-1"></span>
                <span className="block h-0.5 w-full bg-black dark:bg-white my-1"></span>
                <span className="block h-0.5 w-full bg-black dark:bg-white my-1"></span>
              </span>
            </span>
          </button>

          <Link href="/" className="text-primary font-semibold uppercase">
            {APP_TEXT.app_name}
          </Link>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:block">
          <div className="relative flex">
            <div className="flex">
              <Link
                href="/"
                className="text-primary font-semibold uppercase mx-2"
              >
                <div className="flex font-bold uppercase text-primary text-2xl text-center">
                  <BsFillRocketTakeoffFill size={20} />
                  <h1>{APP_TEXT.app_name}</h1>
                </div>
              </Link>
              <ul className="flex items-center">
                {navbarItems.map((item, index) => (
                  <li key={index} className="mx-2">
                    <Link
                      href={item.href}
                      className="text-gray-800 hover:text-primary dark:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
          >
            {theme === "dark" ? (
              <MdDarkMode className="text-primary" size={25} />
            ) : (
              <MdLightMode className="" size={25} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
