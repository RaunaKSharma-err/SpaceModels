import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { AdditiveBlending, TextureLoader } from "three";
import * as THREE from "three";

const Earth = () => {
  const [dayMap, nightMap, cloudMap] = useLoader(TextureLoader, [
    "earthalbedo.jpg",
    "earth night_lights_modified.png",
    "clouds earth.png",
  ]);
  const earthRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.004;
    }
  });
  return (
    <group ref={earthRef} rotation={[0.04, 0, 0]}>
      <mesh>
        <icosahedronGeometry args={[1.28, 12]} />
        <meshStandardMaterial map={dayMap} flatShading />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.28, 12]} />
        <meshStandardMaterial map={nightMap} blending={AdditiveBlending} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.28, 12]} />
        <meshStandardMaterial
          map={cloudMap}
          transparent
          blending={AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

export default Earth;
