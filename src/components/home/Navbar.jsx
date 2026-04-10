"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const aboutLinks = [
    {
      name: "Our Story",
      href: "/about#about-story",
      description: "Legacy, people, and company background",
    },
    {
      name: "What We Do",
      href: "/about#about-capabilities",
      description: "Services, methods, and technical capabilities",
    },
  ];

  const isAboutActive = pathname === "/about";

  return (
    <>
      <nav className="fixed  top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/40">
        {/* NAV CONTAINER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3"
            aria-label="Go to home page"
          >
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
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 text-[14px] font-semibold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.name === "About") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setAboutOpen(true)}
                    onMouseLeave={() => setAboutOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`relative inline-flex items-center gap-1 transition-all duration-300 ${
                        isAboutActive
                          ? "text-blue-700"
                          : "text-slate-600 hover:text-blue-900"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          aboutOpen ? "rotate-180" : ""
                        }`}
                      />

                      {isAboutActive && (
                        <span className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-blue-700"></span>
                      )}
                    </Link>

                    <div
                      className={`absolute left-1/2 top-full z-50 mt-4 w-[300px] -translate-x-1/2 rounded-[22px] border border-slate-200 bg-white p-3 shadow-[0_24px_60px_rgba(15,23,42,0.14)] transition-all duration-200 ${
                        aboutOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-2 opacity-0"
                      }`}
                    >
                      {aboutLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-[18px] px-4 py-3 transition hover:bg-[#f4f7fb]"
                        >
                          <p className="text-sm font-bold text-[#0b1f3a]">
                            {item.name}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

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

              if (link.name === "About") {
                return (
                  <div key={link.name}>
                    <button
                      type="button"
                      onClick={() => setMobileAboutOpen((prev) => !prev)}
                      className={`flex w-full items-center justify-between text-left text-lg font-medium ${
                        isAboutActive ? "text-blue-700" : "text-slate-700"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
                          mobileAboutOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden rounded-[20px] bg-[#f4f7fb] transition-all duration-300 ${
                        mobileAboutOpen
                          ? "mt-4 max-h-60 p-3 opacity-100"
                          : "mt-0 max-h-0 px-3 opacity-0"
                      }`}
                    >
                      {aboutLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => {
                            setMobileAboutOpen(false);
                            setOpen(false);
                          }}
                          className="block rounded-[16px] px-4 py-3 transition hover:bg-white"
                        >
                          <p className="text-sm font-bold text-[#0b1f3a]">
                            {item.name}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

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
