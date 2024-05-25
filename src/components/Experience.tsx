import { Environment, OrbitControls } from "@react-three/drei";
import { Crystal } from "./Crystal";
import { Diamond } from "./Diamond";
import { Diamond2 } from "./Diamond2";
import { Diamond3 } from "./Diamond3";
import { useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const hdri = "/hdri/future.hdr";

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
      />
      <Diamond2
        scale={scale}
        visible={diamond}
        position={[positionScale, positionScale, positionScale]}
      />
      <Diamond3
        scale={scale}
        visible={diamond}
        position={[positionScale, positionScale, positionScale]}
      />
      <Environment files={hdri} background blur={0.2} />
    </>
  );
};
