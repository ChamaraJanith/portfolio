import { useState, useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = ({ color, size, count, speed }) => {
  const pointsRef = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * speed;
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.2;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const StructuralMesh = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.15;
    meshRef.current.rotation.z = Math.cos(time * 0.2) * 0.3;
  });

  return (
    <group ref={meshRef}>
      {/* Primary Grid Spere */}
      <mesh>
        <sphereGeometry args={[8, 40, 40]} />
        <meshBasicMaterial 
          color="#00ff9d" 
          wireframe 
          transparent 
          opacity={0.05} 
        />
      </mesh>
      
      {/* Secondary Distorted Core */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[0, 0, -2]}>
          <icosahedronGeometry args={[4, 1]} />
          <meshBasicMaterial 
            color="#ffcc00" 
            wireframe 
            transparent 
            opacity={0.03} 
          />
        </mesh>
      </Float>

      {/* Connective Nodes */}
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[
          Math.sin(i * 1.5) * 5,
          Math.cos(i * 1.5) * 5,
          Math.tan(i) * 2
        ]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#00ff9d" />
        </mesh>
      ))}
    </group>
  );
};

const CosmicGridCanvas = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1, 
      pointerEvents: 'none', 
      background: 'radial-gradient(circle at center, #05100d 0%, #050c0a 100%)' 
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ff9d" />
          
          {/* Main Layers */}
          <ParticleField color="#00ff9d" size={0.015} count={5000} speed={0.05} />
          <ParticleField color="#ffcc00" size={0.01} count={2000} speed={-0.03} />
          
          <StructuralMesh />
          
          {/* Distant Energy Pulse */}
          <mesh position={[0, 0, -15]}>
            <sphereGeometry args={[10, 64, 64]} />
            <MeshDistortMaterial
              color="#00ff9d"
              transparent
              opacity={0.02}
              distort={0.4}
              speed={1.5}
            />
          </mesh>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default CosmicGridCanvas;
