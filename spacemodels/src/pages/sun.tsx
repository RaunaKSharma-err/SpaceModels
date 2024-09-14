import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";

const Sun = () => {
  const [dayMap] = useLoader(TextureLoader, ["8k_sun.jpg"]);
  const sunRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.004;
    }
  });
  return (
    <group ref={sunRef} rotation={[0.04, 0, 0]}>
      <mesh>
        <icosahedronGeometry args={[2.2, 12]} />
        <meshStandardMaterial map={dayMap} flatShading />
      </mesh>
    </group>
  );
};

export default Sun;
