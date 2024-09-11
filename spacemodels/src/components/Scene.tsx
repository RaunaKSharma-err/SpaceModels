import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Earth from "../pages/earth";
import Mars from "../pages/Mars";
import Mercury from "../pages/Mercury";
import Venus from "../pages/Venus";

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
      <ambientLight intensity={2} />
      <directionalLight />
      <Venus />
    </Canvas>
  );
};
export default Scene;
