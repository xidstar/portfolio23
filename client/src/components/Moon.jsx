import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Moon = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const mount = mountRef.current;

    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Create moon geometry and material
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("./moon/scene.gltf");
    const material = new THREE.MeshBasicMaterial({ map: texture });

    // Create moon mesh and add it to the scene
    const moon = new THREE.Mesh(geometry, material);
    scene.add(moon);

    // Adjust camera position
    camera.position.z = 5;

    // Animation function
    const animate = () => {
      moon.rotation.y += 0.01; // Rotate the moon
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Moon;
