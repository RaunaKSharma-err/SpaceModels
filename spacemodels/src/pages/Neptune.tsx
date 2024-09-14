import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";

const Neptune = () => {
  const [dayMap] = useLoader(TextureLoader, ["2k_neptune.jpg"]);
  const neptuneRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (neptuneRef.current) {
      neptuneRef.current.rotation.y += 0.004;
    }
  });
  return (
    <group ref={neptuneRef} rotation={[0.04, 0, 0]}>
      <mesh>
        <icosahedronGeometry args={[1.6, 20]} />
        <meshStandardMaterial map={dayMap} flatShading />
      </mesh>
    </group>
  );
};

export default Neptune;
