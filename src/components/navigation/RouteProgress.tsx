"use client";

import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import { Suspense, useEffect, useRef } from "react";

function RouteProgressInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPath = useRef(pathname);

  // Configure NProgress once
  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      speed: 350,
      minimum: 0.15,
      trickleSpeed: 150,
      easing: "ease",
    });
  }, []);

  // Start progress on route change, finish when new route loads
  useEffect(() => {
    if (prevPath.current !== pathname) {
      NProgress.done();
      prevPath.current = pathname;
    }
    return () => {
      NProgress.start();
    };
  }, [pathname, searchParams]);

  return null;
}

export default function RouteProgress() {
  return (
    <Suspense fallback={null}>
      <RouteProgressInner />
    </Suspense>
  );
}
