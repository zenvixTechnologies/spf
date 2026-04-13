
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- COUNTER ---------------- */
function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

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

/* ---------------- HERO ---------------- */
export default function Hero() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1600&q=80",
      title: "Pile Foundation",
      subtitle:
        "Advanced piling solutions using modern rigs & deep foundation systems",
    },
    {
      image:
        "/pilling.png",
      title: "Soil Investigation",
      subtitle:
        "Accurate soil testing & analysis for safe and stable construction",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80",
      title: "Pile Load Testing",
      subtitle:
        "Ensuring strength, safety and reliability with precise load testing",
    },
  ];

  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* BACKGROUND */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slides[index].image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          alt="hero"
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001e40]/95 via-[#001e40]/80 to-[#001e40]/30"></div>

      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3),transparent_60%)]"></div>

      {/* LIGHT SWEEP */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.05),transparent)] animate-pulse"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-white">

        {/* LEFT (FIXED HEIGHT → NO JUMP) */}
        <div className="space-y-6">

          {/* TEXT BLOCK FIXED HEIGHT */}
          <div className="flex min-h-[260px] max-w-[640px] flex-col justify-center md:min-h-[300px] md:max-w-[720px]">

            {/* TITLE */}
            <motion.h1
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-[10ch] text-[46px] font-bold leading-[1.08] tracking-tight bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent sm:max-w-[11ch] sm:text-[56px] md:max-w-[14ch] md:text-[74px]"
            >
              {slides[index].title}
            </motion.h1>

            {/* SUBTITLE */}
            <motion.p
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-4 max-w-[560px] text-[17px] leading-[1.65] text-blue-100 sm:text-[19px] md:text-[21px]"
            >
              {slides[index].subtitle}
            </motion.p>

          </div>

          {/* BUTTONS (STATIC → NO FLICKER) */}
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:scale-105 transition shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              Contact Us
            </Link>

            <Link
              href="/services"
              className="px-6 py-3 bg-white/10 border border-white/30 rounded-lg hover:bg-white/20 transition"
            >
              Explore Services
            </Link>
          </div>

        </div>

        {/* RIGHT STATS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="hidden md:block relative"
        >
          <div className="absolute -inset-6 bg-blue-400/10 rounded-full blur-3xl"></div>

          <div className="relative border-l-2 border-blue-300 pl-8 py-4 space-y-8">
            <div>
              <h2 className="text-4xl font-extrabold">
                <Counter end={4000} />
              </h2>
              <p className="text-xs uppercase tracking-widest text-blue-200">
                Projects Completed
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-extrabold">
                <Counter end={35} />
              </h2>
              <p className="text-xs uppercase tracking-widest text-blue-200">
                Years of Legacy
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* NAV BUTTONS */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur text-white"
      >
        ◀
      </button> */}

      {/* <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur text-white"
      >
        ▶
      </button> */}

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-white scale-125" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
