import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const Rotor = ({ position }) => {
  const rotorRef = useRef();

  useFrame(() => {
    if (rotorRef.current) {
      rotorRef.current.rotation.y += 0.5;
    }
  });

  return (
    <group position={position}>
      <mesh ref={rotorRef}>
        <boxGeometry args={[1.2, 0.02, 0.1]} />
        <meshStandardMaterial color="#333" emissive="#00f2ff" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.3]} />
        <meshStandardMaterial color="#111" />
      </mesh>
    </group>
  );
};

const CybernetixModel = ({ scrollProgress }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollProgress * Math.PI * 2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.5, 0.4, 2]} />
          <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, 0, 0.8]}>
          <boxGeometry args={[0.8, 0.2, 0.2]} />
          <meshStandardMaterial color="#000" emissive="#00f2ff" emissiveIntensity={2} />
        </mesh>
        <group>
          <mesh position={[1.2, 0, 1.2]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[1.2, 0.1, 0.1]} />
            <meshStandardMaterial color="#222" />
          </mesh>
          <mesh position={[-1.2, 0, 1.2]} rotation={[0, 0, -Math.PI / 4]}>
            <boxGeometry args={[1.2, 0.1, 0.1]} />
            <meshStandardMaterial color="#222" />
          </mesh>
          <mesh position={[1.2, 0, -1.2]} rotation={[0, 0, -Math.PI / 4]}>
            <boxGeometry args={[1.2, 0.1, 0.1]} />
            <meshStandardMaterial color="#222" />
          </mesh>
          <mesh position={[-1.2, 0, -1.2]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[1.2, 0.1, 0.1]} />
            <meshStandardMaterial color="#222" />
          </mesh>
        </group>
        <Rotor position={[1.8, 0.2, 1.8]} />
        <Rotor position={[-1.8, 0.2, 1.8]} />
        <Rotor position={[1.8, 0.2, -1.8]} />
        <Rotor position={[-1.8, 0.2, -1.8]} />
        <mesh position={[0.5, -0.4, 0.5]}>
          <cylinderGeometry args={[0.02, 0.02, 0.6]} />
          <meshStandardMaterial color="#333" />
        </mesh>
        <mesh position={[-0.5, -0.4, 0.5]}>
          <cylinderGeometry args={[0.02, 0.02, 0.6]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </group>
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#00f2ff" />
      <ambientLight intensity={0.2} />
    </Float>
  );
};

export default CybernetixModel;
