"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const shareUrl = "https://www.standardpilefoundation.com";
  const [showShareActions, setShowShareActions] = useState(false);
  const [copyStatus, setCopyStatus] = useState("Copy Link");
  const shareMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        shareMenuRef.current &&
        !shareMenuRef.current.contains(event.target)
      ) {
        setShowShareActions(false);
      }
    }

    if (showShareActions) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showShareActions]);

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopyStatus("Copied");
      setTimeout(() => {
        setCopyStatus("Copy Link");
      }, 2000);
    } catch {
      setCopyStatus("Copy Failed");
      setTimeout(() => {
        setCopyStatus("Copy Link");
      }, 2000);
    }
  }

  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    shareUrl
  )}`;

  return (
    <footer id="contact" className="bg-[#f1f3f5] pt-16 pb-8 text-gray-500">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* LEFT */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-lg font-bold text-blue-900">
            Standard Pile Foundation
          </h2>

          <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
            Providing robust engineering foundations since 1987. Your trusted
            partner in soil investigation and deep foundation solutions.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-blue-900 text-lg">
                location_on
              </span>
              <span>St. George Shopping Complex, Edathua</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-blue-900 text-lg">
                phone
              </span>
              <span>0477 2212963 | +91-8281133639 | +91-9447597225</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-blue-900 text-lg">
                mail
              </span>
              <span className="flex flex-wrap items-center gap-1">
                <a
                  href="mailto:standardpile87@gmail.com"
                  className="hover:text-blue-900"
                >
                  standardpile87@gmail.com
                </a>
                <span>|</span>
                <a
                  href="mailto:rajupunnapra@yahoo.com"
                  className="hover:text-blue-900"
                >
                  rajupunnapra@yahoo.com
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-4">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-900">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-blue-900">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/services" className="hover:text-blue-900">
                Services
              </Link>
            </li>

            <li>
              <Link href="/projects" className="hover:text-blue-900">
                Projects
              </Link>
            </li>
             <li>
              <Link href="/contact" className="hover:text-blue-900">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-4">
            Legal
          </h4>

          <ul className="space-y-3 text-sm text-gray-500">
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-900">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-blue-900">
                Terms of Service
              </Link>
            </li>
            <li className="hover:text-blue-900 cursor-pointer">Site Map</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="h-px bg-gray-300 w-full"></div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © 1987 Standard Pile Foundation. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <div className="relative" ref={shareMenuRef}>
            <button
              type="button"
              aria-label="Share website"
              onClick={() => setShowShareActions((current) => !current)}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </button>

            {showShareActions ? (
              <div className="absolute bottom-12 right-0 min-w-[180px] rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 p-2">
                <a
                  href={whatsappShareUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-blue-900 transition"
                >
                  Share on WhatsApp
                  <span className="material-symbols-outlined text-base">
                    arrow_outward
                  </span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="w-full flex items-center justify-between rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-blue-900 transition cursor-pointer"
                >
                  {copyStatus}
                  <span className="material-symbols-outlined text-base">
                    content_copy
                  </span>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
