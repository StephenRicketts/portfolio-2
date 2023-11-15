import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Shape() {}

export function ThreeScene() {
  const sphereRef = useRef();
  const cameraPosition = useRef([0, 0, 10]);

  return (
    <div>
      <Canvas shadowMap>
        <ambientLight intensity={0.1} />
        <directionalLight
          color="red"
          position={[5, 5, 5]}
          intensity={1}
          castShadow
        />
        <mesh ref={sphereRef} position={[0, 0, 0]} castShadow>
          <sphereGeometry args={[2, 32, 32]} />
          <meshToonMaterial color="yellow" emissive="yellow" receiveShadow />
        </mesh>
        <mesh
          receiveShadow
          position={[0, -2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.5} />
        </mesh>
        <perspectiveCamera position={cameraPosition.current} />
      </Canvas>
    </div>
  );
}
