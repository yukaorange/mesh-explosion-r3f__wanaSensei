import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RefObject } from "react";

export const useOrbit = (
  group: RefObject<THREE.Group>,
  {
    radius,
    speed,
    origin,
  }: { radius: number; speed: number; origin: THREE.Vector3 }
) => {
  const prevTimeRef = useRef(0);
  const scrollData = useScroll();
  const angleRef = useRef(0);

  const degToRad = (deg: number) => (deg * Math.PI) / 180;

  useFrame(({ clock }) => {
    if (!group.current) return;

    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - prevTimeRef.current;

    const isScrolled = scrollData.offset > 0;

    let moveSpeed = isScrolled ? speed * scrollData.offset * 1 : 0;

    
    const moveAmount = moveSpeed * deltaTime;

    angleRef.current += moveAmount;
    
    const radX = degToRad(origin.x);
    const radZ = degToRad(origin.z);

    let x = radius * Math.cos(angleRef.current + radX);
    let z = radius * Math.sin(angleRef.current + radZ);

    group.current.position.set(x, origin.y, z);

    if (isScrolled) {
      prevTimeRef.current = elapsedTime;
    }
  });
};
