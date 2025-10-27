
"use client";

import { useTypewriter } from "@/hooks/use-typewriter";

type TypewriterTextProps = {
  text: string;
  delay?: number;
  startDelay?: number;
  className?: string;
};

export function TypewriterText({ text, delay = 50, startDelay = 0, className }: TypewriterTextProps) {
  const { displayedText, showCursor } = useTypewriter({ text, delay, startDelay });

  return (
    <span className={className}>
      {displayedText}
      {showCursor && <span className="ml-1 inline-block h-[1em] w-[0.5em] translate-y-1 blinking-cursor" />}
    </span>
  );
}
