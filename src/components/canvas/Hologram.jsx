import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Hologram = () => {
  return (
    <mesh position={[2, 0, 0]} scale={1.8}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#00bf72"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
        metalness={1}
        wireframe={true}
      />
    </mesh>
  );
};

const HologramCanvas = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [5, 2, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Hologram />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default HologramCanvas;
