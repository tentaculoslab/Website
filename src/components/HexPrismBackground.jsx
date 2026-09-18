import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HexPrismBackground = () => {
  const containerRef = useRef(null);
  const [hasWebGLError, setHasWebGLError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    let scene, camera, renderer, animationFrameId;
    let clock = new THREE.Clock();
    const prismsData = [];

    try {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // 1. Scene Setup
      scene = new THREE.Scene();

      // 2. Camera Setup
      camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
      camera.position.set(0, 0, 45);

      // 3. Renderer Setup with WebGL Context check
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, failIfMajorPerformanceCaveat: false });
      renderer.setSize(width, height);
      renderer.setPixelRatio(1);
      containerRef.current.appendChild(renderer.domElement);

      // 4. Lighting
      const ambientLight = new THREE.AmbientLight(0x38bdf8, 0.6);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 1.0);
      dirLight1.position.set(20, 30, 20);
      scene.add(dirLight1);

      // 5. Create Floating 3D Hexagonal Prisms
      const prismsGroup = new THREE.Group();
      scene.add(prismsGroup);

      const prismCount = 10;
      const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });

      for (let i = 0; i < prismCount; i++) {
        const radius = 2.0 + Math.random() * 2.0;
        const h = 4.0 + Math.random() * 5.0;
        const geo = new THREE.CylinderGeometry(radius, radius, h, 6);
        const mesh = new THREE.Mesh(geo, wireframeMaterial);

        mesh.position.x = (Math.random() - 0.5) * 60;
        mesh.position.y = (Math.random() - 0.5) * 45;
        mesh.position.z = (Math.random() - 0.5) * 30 - 10;

        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;

        prismsGroup.add(mesh);

        prismsData.push({
          mesh,
          rotSpeedX: (Math.random() - 0.5) * 0.005,
          rotSpeedY: (Math.random() - 0.5) * 0.007,
          floatSpeed: 0.001 + Math.random() * 0.002,
          initialY: mesh.position.y,
          floatOffset: Math.random() * Math.PI * 2
        });
      }

      // 6. Animation Loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        prismsData.forEach((item) => {
          item.mesh.rotation.x += item.rotSpeedX;
          item.mesh.rotation.y += item.rotSpeedY;
          item.mesh.position.y = item.initialY + Math.sin(elapsedTime * 0.8 + item.floatOffset) * 2.0;
        });

        prismsGroup.rotation.y = Math.sin(elapsedTime * 0.1) * 0.1;
        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        if (!camera || !renderer) return;
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        if (renderer && renderer.domElement && containerRef.current) {
          try {
            containerRef.current.removeChild(renderer.domElement);
          } catch(e) {}
        }
        if (renderer) renderer.dispose();
      };
    } catch (err) {
      console.warn("WebGL context unavailable for HexPrismBackground, using CSS fallback:", err);
      setHasWebGLError(true);
    }
  }, []);

  if (hasWebGLError) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-[#377BDB]/10 via-transparent to-transparent animate-pulse" />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-35 mix-blend-screen overflow-hidden"
    />
  );
};
