interface HeadingTitleProps {
  title: React.ReactNode;
  className?: string;
  lineWidthClassName?: string;
}

export default function HeadingTitle({
  title,
  className = "",
  lineWidthClassName = "",
}: HeadingTitleProps) {
  return (
    <h3
      className={`relative inline-block font-bold py-2 text-3xl md:text-5xl 2xl:text-6xl font-[Stack_Sans_Notch]  bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: "linear-gradient(90deg,#66FCF1, #45A29E)",
      }}
    >
      {title}

      {/* Main Underline */}
      <span
        className={`absolute left-0 -bottom-0 h-1  rounded-full ${lineWidthClassName}`}
        style={{
          background: "linear-gradient(90deg, #66FCF1 0%, #45A29E 100%)",
        }}
      />
    </h3>
  );
}
