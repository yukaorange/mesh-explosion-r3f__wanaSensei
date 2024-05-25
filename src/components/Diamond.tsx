import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useExplode } from "@/hooks/useExplode";
import { useOrbit } from "@/hooks/useOrbit";

type GLTFResult = GLTF & {
  nodes: {
    origin: THREE.Mesh;
    Icosphere001_cell: THREE.Mesh;
    Icosphere001_cell001: THREE.Mesh;
    Icosphere001_cell002: THREE.Mesh;
    Icosphere001_cell003: THREE.Mesh;
    Icosphere001_cell004: THREE.Mesh;
    Icosphere001_cell005: THREE.Mesh;
    Icosphere001_cell006: THREE.Mesh;
    Icosphere001_cell007: THREE.Mesh;
    Icosphere001_cell008: THREE.Mesh;
    Icosphere001_cell009: THREE.Mesh;
    Icosphere001_cell010: THREE.Mesh;
    Icosphere001_cell011: THREE.Mesh;
    Icosphere001_cell012: THREE.Mesh;
    Icosphere001_cell013: THREE.Mesh;
    Icosphere001_cell014: THREE.Mesh;
    Icosphere001_cell015: THREE.Mesh;
    Icosphere001_cell016: THREE.Mesh;
    Icosphere001_cell017: THREE.Mesh;
    Icosphere001_cell018: THREE.Mesh;
    Icosphere001_cell019: THREE.Mesh;
    Icosphere001_cell020: THREE.Mesh;
    Icosphere001_cell021: THREE.Mesh;
    Icosphere001_cell022: THREE.Mesh;
    Icosphere001_cell023: THREE.Mesh;
    Icosphere001_cell024: THREE.Mesh;
    Icosphere001_cell025: THREE.Mesh;
    Icosphere001_cell026: THREE.Mesh;
    Icosphere001_cell027: THREE.Mesh;
    Icosphere001_cell028: THREE.Mesh;
    Icosphere001_cell029: THREE.Mesh;
    Icosphere001_cell030: THREE.Mesh;
    Icosphere001_cell031: THREE.Mesh;
    Icosphere001_cell032: THREE.Mesh;
    Icosphere001_cell033: THREE.Mesh;
    Icosphere001_cell034: THREE.Mesh;
    Icosphere001_cell035: THREE.Mesh;
    Icosphere001_cell036: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshPhysicalMaterial;
  };
  // animations: GLTFAction[];
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export const Diamond = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF("/models/diamond.glb") as GLTFResult;

  const group = useRef<THREE.Group>(null);

  useExplode(group, { distance: 8 });

  useOrbit(group, {
    radius: 1,
    speed: 1,
    origin: new THREE.Vector3(0 + 90, 0, 0 + 90),
  });

  return (
    <group {...props} dispose={null} ref={group}>
      <mesh
        name="origin"
        geometry={nodes.origin.geometry}
        material={nodes.origin.material}
        scale={[0.566, 1.228, 0.69]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell.geometry}
        material={nodes.Icosphere001_cell.material}
        position={[0, -1.071, -0.014]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell001.geometry}
        material={nodes.Icosphere001_cell001.material}
        position={[0.233, -0.398, 0.177]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell002.geometry}
        material={nodes.Icosphere001_cell002.material}
        position={[-0.093, -0.416, 0.418]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell003.geometry}
        material={nodes.Icosphere001_cell003.material}
        position={[-0.233, -0.428, -0.017]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell004.geometry}
        material={nodes.Icosphere001_cell004.material}
        position={[-0.089, -0.326, -0.425]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell005.geometry}
        material={nodes.Icosphere001_cell005.material}
        position={[0.227, -0.488, -0.199]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell006.geometry}
        material={nodes.Icosphere001_cell006.material}
        position={[0.091, 0.441, 0.391]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell007.geometry}
        material={nodes.Icosphere001_cell007.material}
        position={[-0.221, 0.369, 0.248]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell008.geometry}
        material={materials.Material}
        position={[-0.201, 0.252, -0.193]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell009.geometry}
        material={nodes.Icosphere001_cell009.material}
        position={[0.123, 0.427, -0.447]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell010.geometry}
        material={nodes.Icosphere001_cell010.material}
        position={[0.299, 0.34, -0.049]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell011.geometry}
        material={nodes.Icosphere001_cell011.material}
        position={[0.005, 1.047, -0.012]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell012.geometry}
        material={nodes.Icosphere001_cell012.material}
        position={[0.137, -0.818, 0.135]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell013.geometry}
        material={nodes.Icosphere001_cell013.material}
        position={[0.101, -0.557, 0.431]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell014.geometry}
        material={nodes.Icosphere001_cell014.material}
        position={[0.142, -0.852, -0.155]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell015.geometry}
        material={nodes.Icosphere001_cell015.material}
        position={[-0.165, -0.886, 0.004]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell016.geometry}
        material={nodes.Icosphere001_cell016.material}
        position={[-0.197, -0.592, 0.244]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell017.geometry}
        material={nodes.Icosphere001_cell017.material}
        position={[-0.083, -0.921, -0.258]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell018.geometry}
        material={nodes.Icosphere001_cell018.material}
        position={[-0.22, -0.61, -0.262]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell019.geometry}
        material={nodes.Icosphere001_cell019.material}
        position={[0.092, -0.538, -0.457]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell020.geometry}
        material={nodes.Icosphere001_cell020.material}
        position={[0.248, 0.031, 0.133]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell021.geometry}
        material={nodes.Icosphere001_cell021.material}
        position={[0.272, -0.032, -0.155]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell022.geometry}
        material={nodes.Icosphere001_cell022.material}
        position={[0.005, -0.013, 0.549]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell023.geometry}
        material={nodes.Icosphere001_cell023.material}
        position={[0.222, 0.016, 0.427]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell024.geometry}
        material={nodes.Icosphere001_cell024.material}
        position={[-0.33, -0.083, 0.099]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell025.geometry}
        material={nodes.Icosphere001_cell025.material}
        position={[-0.203, -0.06, 0.341]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell026.geometry}
        material={nodes.Icosphere001_cell026.material}
        position={[-0.244, -0.083, -0.33]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell027.geometry}
        material={nodes.Icosphere001_cell027.material}
        position={[0.204, -0.005, -0.403]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell028.geometry}
        material={nodes.Icosphere001_cell028.material}
        position={[0.006, 0.045, -0.565]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell029.geometry}
        material={nodes.Icosphere001_cell029.material}
        position={[0.206, 0.555, 0.218]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell030.geometry}
        material={nodes.Icosphere001_cell030.material}
        position={[-0.247, 0.589, -0.018]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell031.geometry}
        material={nodes.Icosphere001_cell031.material}
        position={[-0.122, 0.601, -0.367]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell032.geometry}
        material={nodes.Icosphere001_cell032.material}
        position={[0.223, 0.523, -0.248]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell033.geometry}
        material={nodes.Icosphere001_cell033.material}
        position={[0.079, 0.878, 0.271]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell034.geometry}
        material={nodes.Icosphere001_cell034.material}
        position={[0.19, 0.81, -0.028]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell035.geometry}
        material={nodes.Icosphere001_cell035.material}
        position={[-0.144, 0.833, 0.132]}
      />
      <mesh
        geometry={nodes.Icosphere001_cell036.geometry}
        material={nodes.Icosphere001_cell036.material}
        position={[0.023, 0.874, -0.24]}
      />
    </group>
  );
};

useGLTF.preload("/models/diamond.glb");
