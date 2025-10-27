
"use client";

import { useState, useEffect } from "react";

type UseTypewriterProps = {
  text: string;
  delay?: number;
  startDelay?: number;
};

export function useTypewriter({ text, delay = 50, startDelay = 0 }: UseTypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsReady(true);
      setShowCursor(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!isReady || currentIndex >= text.length) {
      if(currentIndex >= text.length) {
        setShowCursor(false);
      }
      return;
    }

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, delay);

    return () => clearInterval(intervalId);
  }, [currentIndex, text, delay, isReady]);
  
  return { displayedText, showCursor };
}
