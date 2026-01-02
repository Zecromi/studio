
"use client";

import Image from "next/image";
import { TypewriterText } from "@/components/typewriter-text";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/50 backdrop-blur-md">
      <div className="relative">
        <Image
          src="/CyberCat.png"
          alt="Cybernetic Cat Loading"
          width={120}
          height={120}
          className="animate-[pulse-glow_2s_ease-in-out_infinite] rounded-full"
          priority
        />
      </div>
      <div className="mt-4">
        <TypewriterText text="> CARGANDO PORTAFOLIO..." delay={75} />
      </div>
    </div>
  );
}
