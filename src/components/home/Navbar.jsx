"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed  top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/40">
        {/* NAV CONTAINER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/spf.png"
              alt="logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <div className="pt-1 leading-none">
              <span className="block text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-700/75">
                Since 1987
              </span>
              <h1 className="mt-1 font-['Manrope'] text-[0.95rem] sm:text-[1.18rem] md:text-[1.38rem] font-extrabold tracking-[-0.04em] text-[#0b1f3a]">
                <span className="text-[#0b1f3a]">Standard Pile</span>{" "}
                <span className="text-blue-700">Foundation</span>
              </h1>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 text-[14px] font-semibold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative transition-all duration-300 ${
                    isActive
                      ? "text-blue-700"
                      : "text-slate-600 hover:text-blue-900"
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-blue-700 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* BUTTON (desktop + tablet) */}
            <Link href={"/contact"} className="hidden sm:block bg-[#0b1f3a] text-white px-4 sm:px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition mt-2">
              Get a Quote
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button className="md:hidden text-gray-600 pt-2" onClick={() => setOpen(true)}>
              <Menu size={26} />
            </button>
          </div>
        </div>

        {/* ================= MOBILE DRAWER ================= */}
      
        {/* ================================================= */}
      </nav>

        <div
          className={`fixed inset-0 z-50 ${
            open ? "visible opacity-100" : "invisible opacity-0"
          } transition-opacity duration-300`}
        >
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* DRAWER */}
        
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-60 shadow-2xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
          <div className="p-6 flex flex-col h-full">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-8">
            <div className="leading-none">
              <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-blue-700/75">
                Since 1987
              </span>
              <h1 className="mt-1 font-['Manrope'] text-[1.05rem] font-extrabold tracking-[-0.04em] text-[#0b1f3a]">
                <span className="text-[#0b1f3a]">Standard Pile</span>{" "}
                <span className="text-blue-700">Foundation</span>
              </h1>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-600">
              <X size={24} />
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => {
             const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium ${
                    isActive ? "text-blue-700" : "text-slate-700"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* BUTTON BOTTOM */}
          <div className="mt-auto pt-6">
            <Link href={"/contact"}>
            <button className="w-full bg-[#0b1f3a] text-white py-3 rounded-md font-semibold">
              Get a Quote
            </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
