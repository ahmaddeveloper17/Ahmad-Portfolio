"use client";

import { useEffect, useState } from "react";
import RevealLoader from "../../Home/components/reveal-loader";

export default function PortfolioLayoutWrapper({
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
      <div className="fixed inset-0 z-50 flex items-center justify-center ">
        <RevealLoader
          text="Portfolio!"
          staggerOrder="left-to-right"
          movementDirection="top-down"
        />
      </div>
    );

  return <>{children}</>;
}
