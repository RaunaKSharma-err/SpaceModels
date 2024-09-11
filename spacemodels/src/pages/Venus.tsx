import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";

const Venus = () => {
  const [dayMap] = useLoader(TextureLoader, ["8k_venus_surface.jpg"]);
  const venusRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (venusRef.current) {
      venusRef.current.rotation.y += 0.004;
    }
  });
  return (
    <group ref={venusRef} rotation={[0.04, 0, 0]}>
      <mesh>
        <icosahedronGeometry args={[1.2, 12]} />
        <meshStandardMaterial map={dayMap} flatShading />
      </mesh>
    </group>
  );
};

export default Venus;
