import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(d: string) {
  if (d === "Present") return "Present";
  const [y, m] = d.split("-");
  return new Date(Number(y), Number(m) - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function getDuration(start: string, end: string) {
  const s = new Date(start);
  const e = end === "Present" ? new Date() : new Date(end);
  const mo =
    (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  const y = Math.floor(mo / 12);
  const m = mo % 12;
  return [y && `${y}y`, m && `${m}mo`].filter(Boolean).join(" ");
}
