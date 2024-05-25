import { Canvas } from "@react-three/fiber";
import { Experience } from "@/components/Experience";
import { Loader, ScrollControls } from "@react-three/drei";

const App = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4}>
          <Experience />
        </ScrollControls>
      </Canvas>
      <Loader />
    </>
  );
};

export default App;
