import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function Crystal() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.15;
    mesh.current.rotation.y = t * 0.2;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.4}>
      <mesh ref={mesh} scale={1.6}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#7c5cff"
          roughness={0.15}
          metalness={0.85}
          distort={0.35}
          speed={1.4}
          emissive={new THREE.Color('#3a2a8a')}
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
}

function InnerOrb() {
  return (
    <Float speed={0.6} floatIntensity={0.6}>
      <mesh scale={0.55}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#67e8f9"
          emissive={new THREE.Color('#0891b2')}
          emissiveIntensity={0.9}
          roughness={0.2}
          metalness={0.4}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

const HeroScene = () => {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: 'none' }}
    >
      <color attach="background" args={[0, 0, 0]} />
      <fog attach="fog" args={['#08080b', 6, 12]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 3]} intensity={1.4} color="#a78bfa" />
      <directionalLight position={[-4, -2, -3]} intensity={0.9} color="#67e8f9" />
      <pointLight position={[0, 0, 3]} intensity={0.8} color="#ffffff" />
      <Suspense fallback={null}>
        <Crystal />
        <InnerOrb />
        <Sparkles count={80} scale={6} size={2} speed={0.4} color="#a78bfa" opacity={0.7} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;
