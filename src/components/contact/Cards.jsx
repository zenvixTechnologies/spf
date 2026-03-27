"use client";

import { motion } from "framer-motion";

export default function ContactInfo() {
  const items = [
    {
      title: "Office Location",
      content: (
        <>
          2nd Floor, St. George Shopping Complex,<br />
          Edathua, Alleppey District,<br />
          Kerala - 689573
        </>
      ),
      icon: "location_on",
    },
    {
      title: "Call Us",
      content: (
        <>
          0477 2212963 <br />
          +91-8281133639 <br />
          +91-9447597225
        </>
      ),
      icon: "call",
    },
    {
      title: "Email Inquiries",
      content: (
        <>
          standardpile87@gmail.com <br />
          rajupunnapra@yahoo.com
        </>
      ),
      icon: "mail",
    },
  ];

  return (
    <motion.div
      className="lg:col-span-4 space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5 }}
          className="bg-white p-7 rounded-xl border border-[#e5e7eb] border-l-[3px] border-l-[#4a78c2] shadow-sm hover:shadow-md transition-all duration-300"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-5">

            {/* Icon */}
            <div className="w-11 h-11 rounded-lg bg-[#e8f0fe] flex items-center justify-center transition group-hover:bg-[#0b1f3a]">
              <span className="material-symbols-outlined text-[#0b1f3a] text-[20px]">
                {item.icon}
              </span>
            </div>

            {/* Title */}
            <h4 className="text-[15px] font-semibold text-[#0b1f3a]">
              {item.title}
            </h4>
          </div>

          {/* Content */}
          <p className="text-[14px] text-[#6b7280] leading-relaxed">
            {item.content}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}