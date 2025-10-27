
"use client";

import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // This effect runs only on the client
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (theme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else if (theme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (prefersDark) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = (checked: boolean) => {
    if (checked) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Sun className={`h-5 w-5 ${isDarkMode ? 'text-muted-foreground' : 'text-primary'}`} />
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
        className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary"
      />
      <Moon className={`h-5 w-5 ${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
    </div>
  );
}
