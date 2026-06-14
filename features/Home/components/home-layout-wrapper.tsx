"use client";

import { useEffect, useState } from "react";
import RevealLoader from "./reveal-loader";

export default function HomeLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div className="fixed inset-0 z-9998 flex items-center justify-center bg-black/50 backdrop-blur-md">
        <RevealLoader
          text="Ready To Explore?"
          staggerOrder="left-to-right"
          movementDirection="top-down"
        />
      </div>
    );

  return <>{children}</>;
}
