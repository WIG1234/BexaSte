import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import "../styles/car.css";

function adjustModelForScreenSize() {
  let modelScale = null;
  let modelPosition = [0, 0, 0]; // x, y, z

  if (window.innerWidth < 768) {
    modelScale = [0.5, 0.5, 0.5];
    modelPosition = [0, -1, 0]; // Adjust position for smaller screens
  } else {
    modelScale = [1, 1, 1];
    modelPosition = [0, 0, 0]; // Default position for larger screens
  }

  return [modelScale, modelPosition];
}

function Asset() {
  const { scene, loading } = useGLTF("teslacrash.glb");
  const modelRef = useRef();
  const [modelScale, modelPosition] = adjustModelForScreenSize();

  const [screenSize, setScreenSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return <Html center>Loading...</Html>;
  }

  return <primitive ref={modelRef} object={scene} scale={modelScale} position={modelPosition} />;
}

function CameraRotationTrigger({ setOpen }) {
  const controlsRef = useRef();
  const [lastRotation, setLastRotation] = useState(0);

  useFrame(() => {
    if (controlsRef.current) {
      const { rotation } = controlsRef.current.object;
      const currentRotation = rotation.y;

      // Normalize rotation to always be positive
      const normalizedRotation = ((currentRotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      if (Math.abs(normalizedRotation - lastRotation) >= Math.PI / 4) {
        setLastRotation(normalizedRotation);
        setOpen(true);
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
      </Canvas>

      {open && (
        <div className="popup">
          <div className="popup-content">
            <h2>Tesla Crash Model</h2>
            <p>Rotation triggered! Every 45° you get this pop-up.</p>
            <button onClick={() => setOpen(false)}>Got it</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .popup {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          color: white;
          animation: fadeIn 0.3s ease-in-out;
          width: 280px;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
        }

        .popup-content {
          font-family: "Poppins", sans-serif;
        }

        h2 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        p {
          font-size: 14px;
          opacity: 0.8;
        }

        button {
          background: linear-gradient(135deg, #8e44ad, #3498db);
          border: none;
          padding: 8px 16px;
          margin-top: 10px;
          border-radius: 8px;
          cursor: pointer;
          color: white;
          font-size: 14px;
          transition: 0.2s;
        }

        button:hover {
          transform: scale(1.05);
          opacity: 0.9;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -55%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </div>
  );
}
