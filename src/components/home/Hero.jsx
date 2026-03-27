"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}+</span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-0">
      {/* Background */}
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxnTmNvAUWyEubnqZrlbS6di6xfcBpxaEl7z7or5_ah5j4z9hctrigqPsjQYdW9qI8VDd9FrhCjoFQ0LvZmfCIPhJh8fgrWfgjtYdoZrJKVHZrdySgS33Kra_CCU9Q6IYJyjwyDdWFBf8e5Gv2C7SUFnRuKHMBF97gxpCW1i1wD_cOtD024w09if4aYH4saD8adEJwWljKFMvovX8nq6c99gejg4lUez6HYcaVVAS8uWXAALA4_7W4zFU-Xkczv0bYTeEmRq1HJmp0"
        className="absolute inset-0 w-full h-full object-cover"
        alt="hero"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001e40]/95 via-[#001e40]/85 via-40% to-[#001e40]/20"></div>
      <div className="absolute inset-0 bg-[#001e40]/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-300"></span>
            <span className="text-xs uppercase tracking-widest text-blue-200 font-bold">
              ESTD 1987
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1]">
            Standard Pile <br /> Foundation
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-lg">
            Experts in Soil Investigation & Pile Foundation. 35+ Years of
            Experience in Strong Foundations.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={"/contact"}
              className="px-6 py-3 bg-white text-black rounded-lg font-semibold"
            >
              Contact Us
            </Link>

            <Link
              href={"/services"}
              className="px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* RIGHT STATS */}
        <div className="hidden md:block relative">
          <div className="absolute -inset-6 bg-blue-400/10 rounded-full blur-3xl"></div>

          <div className="relative border-l-2 border-blue-300 pl-8 py-4 space-y-8">
            <div>
              <h2 className="text-4xl font-extrabold text-white">
                <Counter end={4000} />
              </h2>
              <p className="text-xs uppercase tracking-widest text-blue-200">
                Projects Completed
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-extrabold text-white">
                <Counter end={35} />
              </h2>
              <p className="text-xs uppercase tracking-widest text-blue-200">
                Years of Legacy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
