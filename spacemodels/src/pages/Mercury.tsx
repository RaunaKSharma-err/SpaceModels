import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";

const Mercury = () => {
  const [dayMap] = useLoader(TextureLoader, ["8k_mercury.jpg"]);
  const mercuryRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (mercuryRef.current) {
      mercuryRef.current.rotation.y += 0.004;
    }
  });
  return (
    <group ref={mercuryRef} rotation={[0.04, 0, 0]}>
      <mesh>
        <icosahedronGeometry args={[0.6, 12]} />
        <meshStandardMaterial map={dayMap} flatShading />
      </mesh>
    </group>
  );
};

export default Mercury;
