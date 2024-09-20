"use client"
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

type Props = {
  children: React.ReactNode;
};

function SmoothScrolling({ children }: Props) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;