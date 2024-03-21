"use client";
import React, { useEffect } from "react";

const Bootstrap = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default Bootstrap;
