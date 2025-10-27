
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
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsReady(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!isReady || currentIndex >= text.length) {
      if(currentIndex >= text.length) {
         // Keep cursor blinking at the end
         const cursorBlinkTimer = setInterval(() => {
            setShowCursor(prev => !prev);
         }, 500);
         // set showCursor to true initially at the end
         setShowCursor(true);
         return () => clearInterval(cursorBlinkTimer);
      }
      return;
    }

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, delay);

    return () => clearInterval(intervalId);
  }, [currentIndex, text, delay, isReady]);

  // Use a different logic for cursor visibility during typing
  const isTyping = currentIndex < text.length && isReady;

  return { displayedText, showCursor: isTyping || showCursor };
}
