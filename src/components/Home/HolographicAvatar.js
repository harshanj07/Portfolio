import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PointMaterial, Line } from "@react-three/drei";
import * as THREE from "three";

// Abstract Floating Hologram Core
function HologramCore({ mouse }) {
  const meshRef = useRef(null);
  const wireframeRef = useRef(null);
  const outerSphereRef = useRef(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Soft floating movement (sin/cos combo)
    const floatY = Math.sin(time * 1.5) * 0.15;
    const floatX = Math.cos(time * 0.8) * 0.05;
    
    // Target rotation based on mouse coordinates + time
    const targetRX = (mouse.current.y * Math.PI) / 8 + time * 0.1;
    const targetRY = (mouse.current.x * Math.PI) / 8 + time * 0.15;

    if (meshRef.current) {
      meshRef.current.position.y = floatY;
      meshRef.current.position.x = floatX;
      meshRef.current.rotation.x += (targetRX - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetRY - meshRef.current.rotation.y) * 0.05;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = -time * 0.2;
      wireframeRef.current.rotation.x = -time * 0.1;
    }

    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.z = time * 0.05;
      outerSphereRef.current.rotation.y = time * 0.08;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Outer Holographic Shield - Faceted transparent sphere */}
      <mesh ref={outerSphereRef}>
        <icosahedronGeometry args={[2.0, 1]} />
        <meshBasicMaterial
          color="#06B6D4"
          wireframe
          transparent
          opacity={0.06}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Primary Holographic Torus Knot */}
      <mesh ref={wireframeRef}>
        <torusKnotGeometry args={[1.0, 0.32, 100, 16, 2, 3]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={1.8}
          roughness={0.1}
          metalness={0.9}
          wireframe
        />
      </mesh>

      {/* Internal Core Sphere */}
      <mesh>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshBasicMaterial
          color="#EC4899"
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

// Orbiting Rings
function OrbitingRings() {
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.3;
      ring1Ref.current.position.y = Math.sin(time * 1.5) * 0.15; // match core float
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 0.2;
      ring2Ref.current.rotation.x = Math.PI / 4 + Math.sin(time * 0.5) * 0.1;
      ring2Ref.current.position.y = Math.sin(time * 1.5) * 0.15;
    }
  });

  // Generate coordinates for rings
  const points = [];
  for (let i = 0; i <= 64; i++) {
    const theta = (i / 64) * Math.PI * 2;
    points.push([Math.cos(theta) * 2.8, 0, Math.sin(theta) * 2.8]);
  }

  const points2 = [];
  for (let i = 0; i <= 64; i++) {
    const theta = (i / 64) * Math.PI * 2;
    points2.push([Math.cos(theta) * 3.4, Math.sin(theta) * 3.4, 0]);
  }

  return (
    <>
      <group ref={ring1Ref} rotation={[Math.PI / 6, 0, 0]}>
        <Line
          points={points}
          color="#8B5CF6"
          lineWidth={1.5}
          transparent
          opacity={0.35}
        />
        {/* Ring moon */}
        <mesh position={[2.8, 0, 0]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial color="#06B6D4" />
        </mesh>
      </group>

      <group ref={ring2Ref} rotation={[Math.PI / -4, Math.PI / 4, 0]}>
        <Line
          points={points2}
          color="#06B6D4"
          lineWidth={1.0}
          transparent
          opacity={0.25}
        />
        {/* Ring moon 2 */}
        <mesh position={[0, 3.4, 0]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial color="#EC4899" />
        </mesh>
      </group>
    </>
  );
}

// Glowing Holographic Particle Cloud
function HologramParticles() {
  const pointsRef = useRef(null);
  const count = 120;
  
  // Random coordinates in a shell shape
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = 2.0 + Math.random() * 2.5; // Radius between 2.0 and 4.5
    
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = time * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#c084f5"
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.65}
      />
    </points>
  );
}

export default function HolographicAvatar() {
  const mouse = useRef({ x: 0, y: 0 });
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse positions between -1 and 1
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (hasError) {
    // 2D HTML/CSS fallback if Three.js fails or WebGL is unsupported
    return (
      <div className="avatar-fallback-container">
        <div className="hologram-fallback-sphere">
          <div className="pulse-ring ring-1"></div>
          <div className="pulse-ring ring-2"></div>
          <div className="pulse-ring ring-3"></div>
        </div>
        <style>{`
          .avatar-fallback-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 400px;
            position: relative;
          }
          .hologram-fallback-sphere {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(3, 0, 20, 0.8) 70%);
            border: 2px solid var(--neon-purple);
            box-shadow: 0 0 30px var(--neon-purple-glow);
            animation: float-avatar 4s ease-in-out infinite;
            position: relative;
          }
          .pulse-ring {
            position: absolute;
            top: -20px; left: -20px; right: -20px; bottom: -20px;
            border: 1px dashed rgba(6, 182, 212, 0.3);
            border-radius: 50%;
            animation: rotate-ring 12s linear infinite;
          }
          .ring-2 {
            top: -40px; left: -40px; right: -40px; bottom: -40px;
            border-color: rgba(139, 92, 246, 0.2);
            animation-duration: 20s;
            animation-direction: reverse;
          }
          @keyframes float-avatar {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(3deg); }
          }
          @keyframes rotate-ring {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ height: "450px", width: "100%", position: "relative", zIndex: 10 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        onError={(err) => {
          console.warn("ThreeJS Canvas Error:", err);
          setHasError(true);
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#8B5CF6" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#06B6D4" />
        
        <HologramCore mouse={mouse} />
        <OrbitingRings />
        <HologramParticles />

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
