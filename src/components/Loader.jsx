"use client";

import { motion } from "framer-motion";

export default function Loader({ done }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-[visibility] duration-300 ${
        done ? "pointer-events-none" : ""
      }`}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={
          done
            ? { scale: 0.88, opacity: 0, y: -18 }
            : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="flex items-center gap-4"
      >
        <img
          src="/spf.png"
          loading="lazy"
          className="h-16 w-16 object-contain sm:h-20 sm:w-20"
          alt="logo"
        />

        <div className="space-y-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
            Since 1987
          </p>
          <h1 className="text-xl font-bold text-[#0b1f3a] sm:text-3xl">
            Standard Pile Foundation
          </h1>
        </div>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: done ? 1 : 0.72 }}
        transition={{ duration: done ? 0.6 : 1.4, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 h-1 origin-left bg-[#0b1f3a]"
        style={{ width: "100%" }}
      />
      <motion.div
        initial={{ opacity: 0.35 }}
        animate={{ opacity: done ? 0 : [0.2, 0.45, 0.2] }}
        transition={{
          duration: 1.8,
          repeat: done ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,120,194,0.18),_transparent_45%)]"
      />
    </motion.div>
  );
}
