"use client";

import RevealLoader from "@/features/Home/components/reveal-loader";
import { useEffect, useState } from "react";

export default function ExperienceLayoutWrapper({
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
      <div className="fixed inset-0 z-9998 flex items-center justify-center bg-black/50 backdrop-blur-md ">
        <RevealLoader
          text="Experience Talks!"
          staggerOrder="left-to-right"
          movementDirection="top-down"
        />
      </div>
    );

  return <>{children}</>;
}
