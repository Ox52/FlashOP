"use client";

import { useTheme } from "../components/theme-provider.tsx";
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  );
}