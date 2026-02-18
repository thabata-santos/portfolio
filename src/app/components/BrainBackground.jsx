"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function BrainBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    console.log("BrainBackground mounted");
    const mount = mountRef.current;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b1120, 0.18);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const loader = new GLTFLoader();

    let brain;

    loader.load("/models/brain.glb", (gltf) => {
      brain = gltf.scene;
      brain.rotation.set(0, 0, 0); // vira ele corretamente
      brain.scale.set(0.9, 0.9, 0.9); // <<< tamanho ideal
      brain.position.set(0, -0.1, 0);

      brain.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshBasicMaterial({
            color: 0x9b5cff,
            wireframe: true,
            transparent: true,
            opacity: 0.15,
          });
        }
      });

      scene.add(brain);
    });

    let time = 0;
    let frameId;

    function animate() {
      frameId = requestAnimationFrame(animate);

      if (brain) {
        time += 0.01;

        brain.rotation.y += 0.0015;

        // pulsação sutil
        const scale = 1.2 + Math.sin(time) * 0.02;
        brain.scale.set(scale, scale, scale);
      }

      renderer.render(scene, camera);
    }

    animate();

    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }

      // Memory cleanup
      if (brain) {
        brain.traverse((child) => {
          if (child.isMesh) {
            child.geometry.dispose();
            if (Array.isArray(child.material)) {
              child.material.forEach(m => m.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-10 pointer-events-none"
    />
  );
}
