import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RefObject } from "react";

type CustomMesh = THREE.Mesh & {
  originalPosition: THREE.Vector3;
  directionVector: THREE.Vector3;
  targetPosition: THREE.Vector3;
  originalRotation: THREE.Euler;
  targetRotation: THREE.Euler;
};

export const useExplode = (
  group: RefObject<THREE.Group>,
  { distance = 3, enableRotation = true }
) => {
  useEffect(() => {
    const groupWorldPosition = new THREE.Vector3();

    group.current?.getWorldPosition(groupWorldPosition);

    const groupChildren = group.current?.children as CustomMesh[];

    groupChildren.forEach((mesh) => {
      mesh.originalPosition = mesh.position.clone();

      const meshWorldPosition = new THREE.Vector3();

      mesh.getWorldPosition(meshWorldPosition);

      const meshWorldPositionForDirection = meshWorldPosition.clone();

      mesh.directionVector = meshWorldPositionForDirection
        .sub(groupWorldPosition)
        .normalize(); //this direction is from the center of the group to the each mesh position.
    });
  }, []);

  useEffect(() => {
    const groupChildren = group.current?.children as CustomMesh[];

    groupChildren.forEach((mesh) => {
      mesh.targetPosition = mesh.originalPosition
        .clone()
        .add(mesh.directionVector.clone().multiplyScalar(3));

      mesh.originalRotation = mesh.rotation.clone();

      mesh.targetRotation = new THREE.Euler(
        Math.random(),
        Math.random(),
        Math.random()
      );
    });
  }, [distance, enableRotation]);

  const scrollData = useScroll();

  useFrame(({ clock }) => {
    if (!group.current) return;

    const groupChildren = group.current?.children as CustomMesh[];

    groupChildren.forEach((mesh) => {
      if (scrollData.offset < 0.0001) {
        if (mesh.name == "origin") {
          mesh.visible = true;
        } else {
          mesh.visible = false;
        }
      } else {
        if (mesh.name == "origin") {
          mesh.visible = false;
        } else {
          mesh.visible = true;
        }
      }

      mesh.position.x = THREE.MathUtils.lerp(
        mesh.originalPosition.x,
        mesh.targetPosition.x,
        scrollData.offset
      );

      mesh.position.y = THREE.MathUtils.lerp(
        mesh.originalPosition.y,
        mesh.targetPosition.y,
        scrollData.offset
      );

      mesh.position.z = THREE.MathUtils.lerp(
        mesh.originalPosition.z,
        mesh.targetPosition.z,
        scrollData.offset
      );

      if (enableRotation) {
        mesh.rotation.x = THREE.MathUtils.lerp(
          mesh.originalRotation.x,
          mesh.targetRotation.x,
          scrollData.offset
        );

        mesh.rotation.y = THREE.MathUtils.lerp(
          mesh.originalRotation.y,
          mesh.targetRotation.y,
          scrollData.offset
        );

        mesh.rotation.z = THREE.MathUtils.lerp(
          mesh.originalRotation.z,
          mesh.targetRotation.z,
          scrollData.offset
        );
      }
    });
  });
};
