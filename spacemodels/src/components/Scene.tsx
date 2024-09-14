import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Sun from "../pages/sun";

const Scene = () => {
  return (
    <Canvas
      style={{ backgroundColor: "black", height: "100vh" }}
      camera={{ fov: 75, position: [0, 0, 5] }}
    >
      <directionalLight position={[-1, 0, 1]} />
      <Stars
        radius={100}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
      />
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight />
      <Sun />
    </Canvas>
  );
};
export default Scene;
