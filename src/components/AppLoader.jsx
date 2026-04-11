"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

export default function AppLoader({ children }) {
  const pathname = usePathname();
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(false);

    const timer = window.setTimeout(() => {
      setDone(true);
    }, 1400);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <Loader done={done} />
      {children}
    </>
  );
}
