import { Environment, OrbitControls } from "@react-three/drei";
import { Crystal } from "./Crystal";
import { Diamond } from "./Diamond";
import { useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { Suspense, useState } from "react";
import * as THREE from "three";

const hdri = "/hdri/future.hdr";
// const hdri = "/hdri/hologram-map.hdr";

export const Experience = () => {
  // const { crystal, diamond } = useControls({
  //   crystal: {
  //     value: true,
  //     label: "Crystal",
  //   },
  //   diamond: {
  //     value: true,
  //     label: "Diamond",
  //   },
  // });

  // const [crystal, setCrystal] = useState(true);
  const [diamond, setDiamond] = useState(true);

  const isMobile = useMediaQuery({ maxWidth: 868 });
  const scale = isMobile ? 0.3 : 0.5;
  const positionScale = isMobile ? 0.3 : 0.5;
  const radius = isMobile ? 0.5 : 1;

  return (
    <>
      {/* <OrbitControls enableZoom={false} /> */}
      {/* <Crystal
        scale={scale}
        visible={crystal}
        position={[-positionScale, -positionScale, -positionScale]}
      /> */}
      <Diamond
        scale={scale}
        visible={diamond}
        position={[positionScale, positionScale, positionScale]}
        radius={radius}
        speed={1}
        origin={new THREE.Vector3(0 + 90, 0, 0 + 90)}
      />
      <Diamond
        scale={scale}
        visible={diamond}
        position={[positionScale, positionScale, positionScale]}
        radius={radius}
        speed={1}
        origin={new THREE.Vector3(120 + 90, 0, 120 + 90)}
      />
      <Diamond
        scale={scale}
        visible={diamond}
        position={[positionScale, positionScale, positionScale]}
        radius={radius}
        speed={1}
        origin={new THREE.Vector3(240 + 90, 0, 240 + 90)}
      />
      <Environment files={hdri} background blur={0.2} />
    </>
  );
};
