import type { FC } from "react";
import WaveSVG from "../wave";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-slate-900 text-white">
      <WaveSVG />
      <h1 className="absolute z-10 text-center text-8xl font-semibold">
        Rhys Oliver
      </h1>
      <div className="flex flex-row gap-4">
        <BackgroundName text="Rhys Oliver" direction="up" />
        <BackgroundName text="Rhys Oliver" direction="down" />
        <BackgroundName text="Rhys Oliver" direction="up" />
      </div>
    </div>
  );
};

interface BackgroundNameProps {
  text: string;
  count?: number;
  direction?: "down" | "up";
}

const BackgroundName: FC<BackgroundNameProps> = ({
  text,
  count = 10,
  direction = "down",
}) => {
  const headings = new Array(count).fill(text);
  const animations = {
    down: "animate-scrollYDown",
    up: "animate-scrollYUp",
  };
  return (
    <div className="flex flex-col">
      {headings.map((heading, index) => (
        <span
          key={index}
          className={`text-9xl font-semibold mix-blend-overlay leading-[0.75] ${animations[direction]} whitespace-nowrap `}
        >
          {text}
        </span>
      ))}
    </div>
  );
};

export default Hero;
