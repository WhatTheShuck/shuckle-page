import React, { useEffect, useState, useRef } from "react";

const BouncingShuckleBackground = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 3, y: 3 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shuckleRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const shuckle = shuckleRef.current;

    if (!container || !shuckle) return;

    // Set random initial position
    setPosition({
      x: Math.random() * (container.offsetWidth - shuckle.offsetWidth),
      y: Math.random() * (container.offsetHeight - shuckle.offsetHeight),
    });

    let animationFrameId: number;
    const speed = 0.5;

    const animate = () => {
      setPosition((prevPos) => {
        const newPos = { x: prevPos.x, y: prevPos.y };
        setVelocity((prevVel) => {
          const newVel = { x: prevVel.x, y: prevVel.y };

          // Update position based on velocity
          newPos.x += newVel.x * speed;
          newPos.y += newVel.y * speed;

          // Check for collisions with container edges
          if (
            newPos.x <= 0 ||
            newPos.x >= container.offsetWidth - shuckle.offsetWidth
          ) {
            newVel.x *= -1;
          }
          if (
            newPos.y <= 0 ||
            newPos.y >= container.offsetHeight - shuckle.offsetHeight
          ) {
            newVel.y *= -1;
          }

          // Keep shuckle within bounds
          newPos.x = Math.max(
            0,
            Math.min(newPos.x, container.offsetWidth - shuckle.offsetWidth),
          );
          newPos.y = Math.max(
            0,
            Math.min(newPos.y, container.offsetHeight - shuckle.offsetHeight),
          );

          return newVel;
        });
        return newPos;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }} // Above background, below content
    >
      <div className="absolute inset-0 bg-transparent">
        <img
          ref={shuckleRef}
          src="/shuckle.gif"
          alt="Bouncing Shuckle"
          className="absolute w-24 h-24 object-contain"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: "transform 16ms linear",
          }}
        />
      </div>
    </div>
  );
};

export default BouncingShuckleBackground;
