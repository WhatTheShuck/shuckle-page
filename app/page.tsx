"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import ShuckleStats from "./stats";
import ShuckleFacts from "./facts";
import ShuckleAbout from "./about";

const ShucklePage = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const baseStats = [
    { stat: "HP", value: 20 },
    { stat: "Attack", value: 10 },
    { stat: "Defense", value: 230 },
    { stat: "Sp. Attack", value: 10 },
    { stat: "Sp. Defense", value: 230 },
    { stat: "Speed", value: 5 },
  ];

  useEffect(() => {
    // Delay the initial check to ensure everything is mounted
    const initialTimeout = setTimeout(() => {
      const handleScroll = () => {
        if (!containerRef.current || hasAnimated) return;

        const rect = containerRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75; // Trigger when hero is 75% up the screen

        if (isVisible) {
          console.log("Element is visible!");
          setHasAnimated(true);
        }
      };

      window.addEventListener("scroll", handleScroll);
      // Don't check immediately, wait for first scroll
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, 100);

    return () => clearTimeout(initialTimeout);
  }, [hasAnimated]);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col items-center justify-center text-center p-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Fixed position container for glasses that stays above everything */}
        <div className="fixed inset-0 pointer-events-none z-50">
          <img
            src="/glasses.png"
            alt="Cool Glasses"
            className={`
              absolute left-1/2 top-1/2 -translate-y-1/2 w-64 h-64 object-contain
              transition-transform duration-1000 ease-out
              ${hasAnimated ? "-translate-x-1/2" : "translate-x-full"}
            `}
          />
        </div>

        {/* Hero image */}
        <div ref={containerRef} className="relative w-64 h-64 mb-8">
          <div className="rounded-full bg-red-900/30 border-4 border-red-600/40 flex items-center justify-center overflow-hidden">
            <img
              src="/hero_shuckle.png"
              alt="Shuckle"
              className="w-full h-full object-cover rounded-full"
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

      {/* Rest of the content... */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Basic Info Section */}
        <section className="mb-16">
          <ShuckleAbout />
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <ShuckleStats />
        </section>

        {/* Fun Facts Section */}
        <section className="mb-16">
          <ShuckleFacts />
        </section>
      </div>
    </div>
  );
};

export default ShucklePage;
