import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, shaderMaterial } from '@react-three/drei';
import { useRef, useState } from 'react';
import { extend } from '@react-three/fiber';

const GradientMaterial = shaderMaterial(
  { time: 0 },
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  `
  uniform float time;
  varying vec2 vUv;
  void main() {
    float gradient = smoothstep(0.0, 1.0, vUv.y + sin(time) * 0.5);
    gl_FragColor = vec4(mix(vec3(0.0, 1.0, 0.0), vec3(1.0, 0.0, 1.0), gradient), 1.0);
  }
  `
);

extend({ GradientMaterial });

function Model({ url, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1] }) {
  const { scene } = useGLTF(url);
  const materialRef = useRef();

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.time = clock.elapsedTime;
    }
  });

  return (
    <primitive 
      object={scene} 
      material={<gradientMaterial ref={materialRef} />} 
      position={position} 
      rotation={rotation} 
      scale={scale} 
    />
  );
}

export default function GLTFViewer({ modelUrl, position, rotation, scale }) {
  return (
    <Canvas camera={{ position: [0, 1, 3] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1} />
      <Model url={modelUrl} position={[]} rotation={rotation} scale={scale} />
    </Canvas>
  );
}
