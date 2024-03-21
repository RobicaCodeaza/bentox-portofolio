"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const NextThemeProviderDark = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default NextThemeProviderDark;
