// src/components/ThreeDScene.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { useRef } from "react";

// Floating cube component
function FloatingBox({ position, color }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    meshRef.current.position.y = position[1] + Math.sin(clock.elapsedTime * 2) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <RoundedBox args={[1, 1, 1]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color={color} />
      </RoundedBox>
    </mesh>
  );
}

export default function ThreeDScene() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [9, 5, 9] }}>
        {/* Lights */}
        <ambientLight intensity={2} />
        <directionalLight position={[40, 100, -50]} intensity={5} />

        {/* Base platform */}
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[4, 1, 4]} />
          <meshStandardMaterial color="#3e3ef0" />
        </mesh>

        {/* Yellow block */}
        <mesh position={[1, 0, -1.5]}>
          <boxGeometry args={[2, 1, 1]} />
          <meshStandardMaterial color="#f6c038" />
        </mesh>

        {/* Blue L block */}
        <mesh position={[-1, 0, .5]}>
          <boxGeometry args={[2, 1, 1]} />
          <meshStandardMaterial color="#bfdbfe" />
        </mesh>
        {/* Blue L block */}
        <mesh position={[-1.5, 0, 1.5]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#bfdbfe" />
        </mesh>

        {/* Orange sphere */}
        <mesh position={[0.5, 0.5, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#f97316" />
        </mesh>

        {/* White sphere */}
        <mesh position={[-0.7, -0.3, 1.3]}>
          <sphereGeometry args={[0.3, 20, 20]} />
          <meshStandardMaterial color="white" />
        </mesh>

        {/* Floating upper cubes */}
        <FloatingBox position={[-1.5, 2.5, -1]} color="#f9a8d4" />
        <FloatingBox position={[0, 2.5, -1]} color="#ffffff" />
        <FloatingBox position={[1.5, 2.5, -1]} color="#93c5fd" />
      </Canvas>
    </div>
  );
}
