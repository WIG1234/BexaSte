import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { useRef, useState } from "react";
import "../styles/car.css";

function Asset() {
  const { scene, loading } = useGLTF("teslacrash.glb");
  const modelRef = useRef();

  if (loading) {
    return <Html center>Loading...</Html>;
  }

  return <primitive ref={modelRef} object={scene} />;
}

function CameraRotationTrigger({ setOpen }) {
  const controlsRef = useRef();
  const [hasRotated45Degrees, setHasRotated45Degrees] = useState(false);

  useFrame(() => {
    if (controlsRef.current) {
      const { rotation } = controlsRef.current.object;
      // Check if the camera has rotated 45 degrees around the Y-axis
      if (!hasRotated45Degrees && rotation.y >= Math.PI / 4) {
        setHasRotated45Degrees(true);
        setOpen(true); // Trigger the popup
      }
    }
  });

  return <OrbitControls ref={controlsRef} enableZoom={false} />;
}

export default function Model() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-screen relative">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 3]} intensity={1} />
        <Asset />
        <CameraRotationTrigger setOpen={setOpen} />

        {open && (
          <Html position={[0, -2, 0]} center>
            <div className="popup">
              <p>Tesla Crash Model Info</p>
              <button onClick={() => setOpen(false)}>Close</button>
            </div>
          </Html>
        )}
      </Canvas>
    </div>
  );
}
