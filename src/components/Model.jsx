import { Canvas, useFrame } from "@react-three/fiber";
import {OrbitControls,useGLTF } from "@react-three/drei";
import { useRef } from "react";
import "./CSS/car.css";

function Asset() {
  const { scene } = useGLTF("teslacrash.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.0001; // Rotates smoothly on Y-axis
    }
  });

  return <primitive ref={modelRef} object={scene} />;
}

export default function Model() {
  return (
    <div className="w-full h-screen relative">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 3]} intensity={1} />
        <Asset />
        <OrbitControls enableZoom={false}/>

      </Canvas>
    </div>
  );
}