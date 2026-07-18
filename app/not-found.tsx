import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative w-screen h-screen flex flex-col items-center justify-center gap-6 bg-[#070710] px-4">
      <div className="flex flex-col items-center text-center gap-4">
        <span className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-cyan-400">
          404
        </span>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Page not found
        </h1>
        <p className="max-w-md text-sm md:text-base text-zinc-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Link
        href="/"
        className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-200 active:scale-[0.98]"
      >
        Go home
      </Link>
    </main>
  );
}
