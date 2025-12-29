import { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const OrganicFlow = () => {
  const pointsRef = useRef();
  const count = 2000;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    
    // Subtle breathing effect
    const s = 1 + Math.sin(time * 0.5) * 0.05;
    pointsRef.current.scale.set(s, s, s);
  });

  return (
    <group ref={pointsRef}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00bf72"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.NormalBlending}
          opacity={0.4}
        />
      </Points>
      
      {/* Structural Geometry - Icosahedron for that technical feel */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <icosahedronGeometry args={[8, 2]} />
        <meshBasicMaterial 
          color="#00bf72" 
          wireframe 
          transparent 
          opacity={0.03} 
        />
      </mesh>

      {/* Another layer of geometry for depth */}
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <sphereGeometry args={[10, 16, 16]} />
        <meshBasicMaterial 
          color="#ffcc00" 
          wireframe 
          transparent 
          opacity={0.02} 
        />
      </mesh>
    </group>
  );
};

const NeuralFlowCanvas = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1, 
      pointerEvents: 'none', 
      background: 'radial-gradient(circle at center, #f8fbfa 0%, #e8f0ed 100%)' 
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00bf72" />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <OrganicFlow />
        </Float>
      </Canvas>
    </div>
  );
};

export default NeuralFlowCanvas;
