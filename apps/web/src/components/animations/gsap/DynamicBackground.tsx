// components/animation/gsap/DynamicBackground.tsx
"use client";
import { useEffect, useRef } from "react";
import Lottie from "react-lottie-player";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DynamicBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // GSAP Scroll-triggered motion
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: -200,
      scale: 1.2,
      opacity: 0.8,
      ease: "power2.inOut",
    });

    // Random blink or drift effect for subtle organic motion
    gsap.to(containerRef.current, {
      rotation: 10,
      repeat: -1,
      yoyo: true,
      duration: 12,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 flex items-center justify-center bg-black overflow-hidden"
    >
      <Lottie
        ref={lottieRef}
        loop
        play
        speed={1}
        animationData={require("@/assets/lotties/rolling-dots.json")}
        style={{ width: "100%", height: "100%", opacity: 0.7 }}
      />
      <div className="absolute text-center text-white text-sm opacity-60">
        Background Effects Preview
      </div>
    </div>
  );
}
