import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";

const Uranus = () => {
  const [dayMap] = useLoader(TextureLoader, ["2k_uranus.jpg"]);
  const uranusRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (uranusRef.current) {
      uranusRef.current.rotation.y += 0.004;
    }
  });
  return (
    <group ref={uranusRef} rotation={[0.04, 0, 0]}>
      <mesh>
        <icosahedronGeometry args={[1.7, 20]} />
        <meshStandardMaterial map={dayMap} flatShading />
      </mesh>
    </group>
  );
};

export default Uranus;
