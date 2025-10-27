
"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  }

  if (!mounted) {
    // Render a placeholder or null on the server and during initial client render
    return <div className="flex items-center space-x-2 h-9 w-[100px]" />;
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun className={`h-5 w-5 ${!isDark ? 'text-primary' : 'text-foreground/50'}`} />
      <Switch
        id="theme-toggle"
        checked={isDark}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <Moon className={`h-5 w-5 ${isDark ? 'text-primary' : 'text-foreground/50'}`} />
    </div>
  )
}
