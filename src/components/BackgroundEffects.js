import React, { useEffect, useRef } from "react";

function BackgroundEffects() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Node structure for Neural Net
    const nodeCount = Math.min(60, Math.floor((width * height) / 25000));
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
      });
    }

    // Parallax stars
    const starCount = 80;
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.2 + 0.3,
        depth: Math.random() * 0.6 + 0.1, // multiplier for parallax
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    // Concentric holographic circles
    const holoCircles = [
      { radius: 180, speed: 0.0015, offset: 0, dash: [4, 12] },
      { radius: 320, speed: -0.0008, offset: 0, dash: [8, 20] },
      { radius: 450, speed: 0.0005, offset: 0, dash: [20, 40] },
    ];

    const handleMouseMove = (e) => {
      // Set target coordinates for smooth easing
      mouseRef.current.tx = e.clientX;
      mouseRef.current.ty = e.clientY;
      
      // Update CSS variables for CSS spotlight fallback and cards spotlight
      document.documentElement.style.setProperty("--spotlight-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--spotlight-y", `${e.clientY}px`);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Initial spotlight position
    mouseRef.current.tx = width / 2;
    mouseRef.current.ty = height / 2;
    mouseRef.current.x = width / 2;
    mouseRef.current.y = height / 2;

    const drawGrid = (ctx, w, h) => {
      ctx.strokeStyle = "rgba(139, 92, 246, 0.03)";
      ctx.lineWidth = 1;
      
      // Vertical grid lines with perspective projection styling
      const gridSpacing = 60;
      
      // Simple perspective grid in the lower half/background
      ctx.beginPath();
      for (let x = -w; x < w * 2; x += gridSpacing) {
        ctx.moveTo(x, h);
        ctx.lineTo(w / 2 + (x - w / 2) * 0.15, h - 300);
      }
      // Horizontal lines
      for (let y = h - 300; y <= h; y += 40) {
        const ratio = (y - (h - 300)) / 300; // 0 at top, 1 at bottom
        const alpha = ratio * 0.06;
        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();
    };

    const draw = () => {
      // Clear with dark purple tinted void
      ctx.fillStyle = "#02000a";
      ctx.fillRect(0, 0, width, height);

      // Radial aurora background gradients
      const grad1 = ctx.createRadialGradient(
        width * 0.25, height * 0.2, 0,
        width * 0.25, height * 0.2, width * 0.6
      );
      grad1.addColorStop(0, "rgba(76, 29, 149, 0.12)");
      grad1.addColorStop(0.5, "rgba(49, 46, 129, 0.04)");
      grad1.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.75, height * 0.7, 0,
        width * 0.75, height * 0.7, width * 0.6
      );
      grad2.addColorStop(0, "rgba(14, 116, 144, 0.07)");
      grad2.addColorStop(0.5, "rgba(76, 29, 149, 0.02)");
      grad2.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse follow easing
      const mouse = mouseRef.current;
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      // Spotlight Glow Layer
      const spotlight = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, 450
      );
      spotlight.addColorStop(0, "rgba(139, 92, 246, 0.07)");
      spotlight.addColorStop(0.5, "rgba(6, 182, 212, 0.02)");
      spotlight.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = spotlight;
      ctx.fillRect(0, 0, width, height);

      // Draw perspective grid
      drawGrid(ctx, width, height);

      // Parallax Stars
      stars.forEach((star) => {
        // Shift stars based on mouse coordinates relative to center
        const offsetX = (mouse.x - width / 2) * star.depth * 0.05;
        const offsetY = (mouse.y - height / 2) * star.depth * 0.05;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x + offsetX, star.y + offsetY, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Slow drift
        star.y -= 0.03;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
      });

      // Holographic Rings around mouse center
      holoCircles.forEach((circle) => {
        circle.offset += circle.speed;
        ctx.strokeStyle = "rgba(167, 139, 250, 0.05)";
        ctx.lineWidth = 1;
        ctx.setLineDash(circle.dash);
        
        ctx.beginPath();
        // Ring center is locked to a soft float around mouse
        const ringX = mouse.x + Math.sin(circle.offset) * 10;
        const ringY = mouse.y + Math.cos(circle.offset) * 10;
        ctx.arc(ringX, ringY, circle.radius, circle.offset, circle.offset + Math.PI * 2);
        ctx.stroke();
      });
      ctx.setLineDash([]); // Reset dash

      // Draw Neural Network Nodes and Connections
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        // Wall collisions
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw node
        ctx.fillStyle = "rgba(167, 139, 250, 0.4)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect to neighbors
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.12;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Mouse hover interaction lines
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const mouseDist = Math.sqrt(dx * dx + dy * dy);
        if (mouseDist < 200) {
          const alpha = (1 - mouseDist / 200) * 0.18;
          ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}

export default BackgroundEffects;
