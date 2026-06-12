"use client";
import { useState } from "react";

export function Field({
  id,
  label,
  type = "text",
  textarea = false,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  const shared =
    "peer w-full bg-transparent pt-6 pb-2 text-base text-white outline-none placeholder-transparent resize-none";

  return (
    <div className="relative">
      {/* gradient border container */}
      <div
        className="relative rounded-xl transition-all duration-300"
        style={{
          background: focused
            ? "linear-gradient(135deg,#7C3AED,#06B6D4)"
            : "rgba(255,255,255,0.07)",
          padding: "1px",
        }}
      >
        <div className="rounded-xl bg-[#0F0F1A] px-4">
          {textarea ? (
            <textarea
              id={id}
              rows={5}
              value={value}
              placeholder={label}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChange={(e) => onChange(e.target.value)}
              className={shared}
            />
          ) : (
            <input
              id={id}
              type={type}
              value={value}
              placeholder={label}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChange={(e) => onChange(e.target.value)}
              className={shared}
            />
          )}

          {/* floating label */}
          <label
            htmlFor={id}
            className="pointer-events-none absolute left-4 transition-all duration-200"
            style={{
              top: lifted ? "8px" : textarea ? "18px" : "50%",
              transform: lifted || textarea ? "none" : "translateY(-50%)",
              fontSize: lifted ? "10px" : "14px",
              fontWeight: lifted ? 600 : 400,
              letterSpacing: lifted ? "0.1em" : "0",
              textTransform: lifted ? "uppercase" : "none",
              color: focused ? "#a78bfa" : lifted ? "#52525b" : "#52525b",
            }}
          >
            {label}
          </label>
        </div>
      </div>
    </div>
  );
}
