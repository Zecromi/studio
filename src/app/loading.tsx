
"use client";

import { TypewriterText } from "@/components/typewriter-text";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(timer);
          return 95;
        }
        return prev + 5;
      });
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background text-primary grid-background">
      <div className="w-full max-w-md p-4">
        <TypewriterText text="> INITIALIZING SYSTEM..." delay={50} />
        <TypewriterText text="> LOADING INTERFACE..." delay={70} />
        <div className="mt-4 flex items-center gap-4 text-lg">
          <Progress value={progress} className="h-4 border border-primary/50 bg-primary/10 [&>div]:bg-primary" />
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
