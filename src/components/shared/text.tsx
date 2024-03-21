"use client";
import { IconMoon, IconSunHigh } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const ModeSwitcher = ({
  isBlue,
  isWhite,
}: {
  isBlue?: boolean;
  isWhite?: boolean;
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const handleThemeSwitch = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <button
      aria-label="dark mode switch"
      onClick={handleThemeSwitch}
      className={`p-2 sm:p-3 rounded-full  ${
        isBlue &&
        "text-primary border border-primary bg-transparent dark:bg-transparent !p-1.5 sm:!p-2 xxl:!p-3"
      } ${
        isWhite
          ? "bg-n0 dark:bg-bg4 border border-n30 dark:border-n500"
          : "bg-primary/5 dark:bg-bg3"
      }`}
    >
      {theme == "light" ? <IconMoon /> : <IconSunHigh />}
    </button>
  );
};
export default ModeSwitcher;
