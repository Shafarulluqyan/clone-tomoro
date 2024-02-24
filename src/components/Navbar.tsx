import React, { useState } from "react";
import { Barlow } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const barlow300 = Barlow({ subsets: ["latin"], weight: "300" });
const barlow700 = Barlow({ subsets: ["latin"], weight: "700" });

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  return (
    <nav
      className="solid top-0 left-0 right-0 flex items-center justify-between border-b bg-white px-16"
      style={{ height: "100px" }}
    >
      {/* Logo */}
      <Link href={"/"}>
        <img
          src="https://www.tomoro-coffee.com/img/icon7.2a9d4c28.png"
          alt="logo-tomoro"
          width="120"
          className="ml-8"
        />
      </Link>

      {/* Navigation Links */}
      <ul
        className="flex space-x-16"
        style={{ fontFamily: barlow300.style.fontFamily }}
      >
        {/* Menu */}
        <Link
          href={"/menu"}
          className={`font-barlow text-lg ${
            router.pathname === "/menu"
              ? "text-[#FF6A39]"
              : "hover:text-[#FF6A39] active:text-[#FF6A39]"
          }`}
        >
          Menu
        </Link>

        {/* About */}
        <Link
          href={"/about"}
          className={`font-barlow text-lg ${
            router.pathname === "/about"
              ? "text-[#FF6A39] font-bold"
              : "active:text-[#FF6A39]"
          }`}
        >
          About
        </Link>
        {/* Download */}
        <Link
          href={"/download"}
          className={`font-barlow text-lg ${
            router.pathname === "/download"
              ? "text-[#FF6A39]"
              : "hover:text-[#FF6A39] active:text-[#FF6A39]"
          }`}
        >
          Download App
        </Link>
        {/* Terms */}
        <li className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="font-barlow text-lg hover:text-[#FF6A39]"
          >
            Terms and Conditions
          </button>
          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute bg-white border border-gray-200 shadow-lg rounded-md mt-2 py-2 w-48">
              <ul>
                <li>
                  <Link href="/terms">
                    <h1 className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Terms of Services
                    </h1>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy">
                    <h1 className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Privacy Policy
                    </h1>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>

      {/* Language Selector */}
      <div>
        <h1
          className="font-barlow-bold text-lg font-thin mr-16"
          style={{ fontFamily: barlow300.style.fontFamily }}
        >
          English
        </h1>
      </div>
    </nav>
  );
}
