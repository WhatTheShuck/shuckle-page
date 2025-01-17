"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import ShuckleStats from "./stats";
import ShuckleFacts from "./facts";
import ShuckleAbout from "./about";

const ShucklePage = () => {
  const [animationPhase, setAnimationPhase] = useState<
    "initial" | "bounceDown" | "bounceUp" | "final"
  >("initial");
  const shuckleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial delay before animation starts
    const startTimeout = setTimeout(() => {
      setAnimationPhase("bounceDown");

      // Time for diagonal descent
      setTimeout(() => {
        setAnimationPhase("bounceUp");

        // Time for upward bounce
        setTimeout(() => {
          setAnimationPhase("final");
        }, 400); // Duration of upward bounce
      }, 400); // Duration of downward motion
    }, 1500); // Initial delay in milliseconds

    return () => clearTimeout(startTimeout);
  }, []);

  // Animation position calculations
  const getTransform = (phase: typeof animationPhase) => {
    // Starting position (off-screen right, higher up)
    const initialX = 1000; // Distance from center to start (px)
    const initialY = -300; // Starting height offset (px)

    // Bounce point (where it changes direction)
    const bounceX = 100; // Distance from final position for bounce (px)
    const bounceY = 100; // How far below final position to bounce (px)

    // Final resting position
    const finalX = -5; // Final X offset from center (px)
    const finalY = -100; // Final Y offset from center (px)

    // Scale values
    const movingScale = 1.2; // Size while moving
    const finalScale = 1; // Size when landed

    switch (phase) {
      case "initial":
        return `translateX(${initialX}px) translateY(${initialY}px) rotate(0deg) scale(${movingScale})`;
      case "bounceDown":
        return `translateX(${bounceX}px) translateY(${bounceY}px) rotate(45deg) scale(${movingScale})`;
      case "bounceUp":
        return `translateX(${bounceX}px) translateY(${finalY}px) rotate(-45deg) scale(${movingScale})`;
      case "final":
        return `translateX(${finalX}px) translateY(${finalY}px) rotate(0deg) scale(${finalScale})`;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col items-center justify-center text-center p-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Hero image */}
        <div ref={shuckleRef} className="relative w-64 h-64 mb-8">
          <div className="rounded-full bg-red-900/30 border-4 border-red-600/40 flex items-center justify-center overflow-hidden">
            <img
              src="/hero_shuckle.png"
              alt="Shuckle"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Glasses container */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <img
              src="/glasses.png"
              alt="Cool Glasses"
              style={{
                position: "absolute",
                width: "100px", // Width of glasses image
                height: "50px", // Height of glasses image
                left: "50%", // Centers the glasses horizontally
                top: "50%", // Centers the glasses vertically
                transform: getTransform(animationPhase),
                transition: "transform 400ms ease-in-out", // Animation duration and easing
              }}
            />
          </div>
        </div>

        <h1 className="text-6xl font-bold text-red-500 mb-4">Shuckle</h1>
        <p className="text-xl text-yellow-400 mb-12">
          Don't Fuckle with Shuckle!
        </p>

        <div className="absolute bottom-8 animate-bounce">
          <p className="text-red-400 mb-2">
            Scroll down to learn more about Shuckle
          </p>
          <ChevronDown className="w-8 h-8 text-red-400 mx-auto" />
        </div>
      </div>

      {/* Rest of the content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <section className="mb-16">
          <ShuckleAbout />
        </section>

        <section className="mb-16">
          <ShuckleStats />
        </section>

        <section className="mb-16">
          <ShuckleFacts />
        </section>
      </div>
    </div>
  );
};

export default ShucklePage;
