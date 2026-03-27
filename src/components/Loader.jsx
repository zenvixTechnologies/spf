"use client";

import { motion } from "framer-motion";

export default function Loader({ done }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={
          done
            ? { scale: 0.4, x: -250, y: -250 } // move to navbar
            : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="flex items-center gap-3"
      >
        <img
          src="/spf.png"
          className="w-16 h-16 object-contain"
          alt="logo"
        />

        <h1 className="text-2xl font-bold text-[#0b1f3a]">
          Standard Pile Foundation
        </h1>
      </motion.div>
    </motion.div>
  );
}