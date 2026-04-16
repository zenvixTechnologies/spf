"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Loader = dynamic(() => import("./Loader"));

export default function AppLoader({ children }) {
  const [done, setDone] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const loaderSeen = window.sessionStorage.getItem("spf-loader-seen");

    if (loaderSeen === "true") {
      return;
    }

    setShowLoader(true);
    setDone(false);
    window.sessionStorage.setItem("spf-loader-seen", "true");

    const doneTimer = window.setTimeout(() => {
      setDone(true);
    }, 1400);

    const hideTimer = window.setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => {
      window.clearTimeout(doneTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {showLoader ? <Loader done={done} /> : null}
      {children}
    </>
  );
}
