import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";

const Mars = () => {
  const [dayMap] = useLoader(TextureLoader, ["8k_mars.jpg"]);
  const marsRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (marsRef.current) {
      marsRef.current.rotation.y += 0.004;
    }
  });
  return (
    <group ref={marsRef} rotation={[0.04, 0, 0]}>
      <mesh>
        <icosahedronGeometry args={[0.6, 12]} />
        <meshStandardMaterial map={dayMap} flatShading />
      </mesh>
    </group>
  );
};

export default Mars;
