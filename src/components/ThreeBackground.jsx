import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090c0a, 0.045);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 8;

    // 2. Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. Central 3D Abstract Sculpture (Torus Knot)
    const geometry = new THREE.TorusKnotGeometry(1.6, 0.42, 128, 24, 2, 3);
    
    // Rich physical material responding to sage and burgundy lights
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x1b251d, // Deep sage dark
      metalness: 0.85,
      roughness: 0.22,
      clearcoat: 0.7,
      clearcoatRoughness: 0.2,
      reflectivity: 0.9,
      wireframe: false,
    });

    const sculpture = new THREE.Mesh(geometry, material);
    sculpture.position.set(2.2, 0.3, -0.5);
    scene.add(sculpture);

    // Subtle inner glowing wireframe overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x7e142e,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const wireMesh = new THREE.Mesh(geometry, wireMat);
    sculpture.add(wireMesh);

    // 4. Secondary floating geometric crystals
    const crystalGeo = new THREE.IcosahedronGeometry(0.35, 0);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0x87a986,
      metalness: 0.7,
      roughness: 0.2,
      wireframe: true
    });

    const crystals = [];
    for (let i = 0; i < 8; i++) {
      const crystal = new THREE.Mesh(crystalGeo, crystalMat);
      crystal.position.set(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6 - 1
      );
      crystal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      scene.add(crystal);
      crystals.push({
        mesh: crystal,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        floatOffset: Math.random() * Math.PI * 2
      });
    }

    // 5. Ambient Stardust Particles
    const particleCount = 750;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const sageCol = new THREE.Color(0x87a986);
    const burgCol = new THREE.Color(0x991b3b);
    const beigeCol = new THREE.Color(0xf0ebe1);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12 - 2;

      // Select color randomly between sage, burgundy, beige
      const r = Math.random();
      const col = r < 0.45 ? sageCol : r < 0.8 ? burgCol : beigeCol;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Lights (Sage green + Burgundy dynamic lighting)
    const ambientLight = new THREE.AmbientLight(0x0e1410, 2.2);
    scene.add(ambientLight);

    const burgundyLight = new THREE.PointLight(0xa31d3d, 4.5, 14);
    burgundyLight.position.set(-2, 3, 3);
    scene.add(burgundyLight);

    const sageLight = new THREE.PointLight(0x87a986, 3.8, 14);
    sageLight.position.set(4, -2, 2.5);
    scene.add(sageLight);

    const beigeRimLight = new THREE.DirectionalLight(0xf0ebe1, 0.8);
    beigeRimLight.position.set(0, 4, -4);
    scene.add(beigeRimLight);

    // 7. Mouse interaction & Smooth parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 8. Resize listener
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Adjust sculpture placement on mobile vs desktop
      if (window.innerWidth < 768) {
        sculpture.position.set(0, 0.5, -2);
        sculpture.scale.set(0.7, 0.7, 0.7);
      } else {
        sculpture.position.set(2.4, 0.2, -0.5);
        sculpture.scale.set(1, 1, 1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // 9. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Lerp mouse
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Rotate primary sculpture
      sculpture.rotation.x = elapsedTime * 0.16 + targetY * 0.4;
      sculpture.rotation.y = elapsedTime * 0.22 + targetX * 0.6;
      sculpture.position.y = (window.innerWidth < 768 ? 0.5 : 0.2) + Math.sin(elapsedTime * 0.8) * 0.12;

      // Animate secondary crystals
      crystals.forEach((c) => {
        c.mesh.rotation.x += c.rotSpeedX;
        c.mesh.rotation.y += c.rotSpeedY;
        c.mesh.position.y += Math.sin(elapsedTime + c.floatOffset) * 0.002;
      });

      // Slowly rotate particles
      particles.rotation.y = elapsedTime * 0.03 + targetX * 0.1;
      particles.rotation.x = elapsedTime * 0.015;

      // Orbit point lights slightly
      burgundyLight.position.x = -2.5 + Math.sin(elapsedTime * 0.6) * 1.5 - targetX;
      burgundyLight.position.y = 2.5 + Math.cos(elapsedTime * 0.5) * 1.2 - targetY;

      sageLight.position.x = 3.5 + Math.cos(elapsedTime * 0.7) * 1.5 + targetX;
      sageLight.position.y = -2.2 + Math.sin(elapsedTime * 0.5) * 1.2 + targetY;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireMat.dispose();
      crystalGeo.dispose();
      crystalMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
