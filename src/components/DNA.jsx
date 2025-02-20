import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { useState } from 'react';
import "../styles/car.css";

// Vertex Shader
const vertexShader = `
    varying vec3 vNormal;
    varying vec3 vViewDir;

    void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        vViewDir = normalize(-viewPosition.xyz);
        gl_Position = projectionMatrix * viewPosition;
    }
`;

// Fragment Shader
const fragmentShader = `
    varying vec3 vNormal;
    varying vec3 vViewDir;

    void main() {
        // Fresnel calculation
        float facing = dot(vNormal, vViewDir);
        facing = 1.0 - facing; // Invert it to achieve Fresnel-like effect
        float fresnel = pow(facing, .9); // Simulating "Layer Weight" Blend of 0.3

        // Interpolating blue to white
        vec3 color = mix(vec3(0,00,0.00), vec3(0.52,0.60,1.00), fresnel);

        gl_FragColor = vec4(color, 1.0); // Output RGBA color
    }
`;

function CustomMaterialModel({ modelPath }) {
  const gltf = useLoader(GLTFLoader, modelPath);
  const modelRef = useRef();

  // Custom ShaderMaterial
  const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {},
  });

  // Traverse through the model and replace its materials
  React.useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = shaderMaterial;
      }
    });
  }, [gltf, shaderMaterial]);

  // Default transformation values
  const [position] = useState([0, 0,-3]);
  const [rotation, setRotation] = useState([0, 1.5, 0]);
  const [scale] = useState([1, 1, 1]);


  // Apply the transformations
  useFrame(() => {
    if (modelRef.current) {
      setRotation(([x, y, z]) => [x, y-.01, z]);
      console.log(rotation) // Increment the Y-axis rotation
      modelRef.current.position.set(...position);
      modelRef.current.rotation.set(...rotation);
      modelRef.current.scale.set(...scale);
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} />;
}


export default function DNA() {
  let vectorRotatorleft = [40, 0, 0];
  let vectorRotatorright = [-40, 0, 0];

  return (
    <div className="w-screen h-screen relative">
      <Canvas className="w-screen h-screen bg-black absolute top-0 left-0 z-0">
        <ambientLight />
        <spotLight position={[10, 10, 10]} />
        <CustomMaterialModel modelPath="ferrar.glb" />
      </Canvas>
      <div className="w-screen h-screen bg-transparent backdrop-blur-sm z-10 absolute top-0 left-0">
        
      </div>
    </div>
  );
}
