import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";

const Jupiter = () => {
  const [dayMap] = useLoader(TextureLoader, ["8k_jupiter.jpg"]);
  const jupiterRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (jupiterRef.current) {
      jupiterRef.current.rotation.y += 0.004;
    }
  });
  return (
    <group ref={jupiterRef} rotation={[0.04, 0, 0]}>
      <mesh>
        <icosahedronGeometry args={[2, 12]} />
        <meshStandardMaterial map={dayMap} flatShading />
      </mesh>
    </group>
  );
};

export default Jupiter;
