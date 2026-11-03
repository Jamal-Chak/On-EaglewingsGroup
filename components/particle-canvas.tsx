'use client';

import { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const particles = new THREE.Group();
    const particleCount = 150;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
      colors[i] = 0.2 + Math.random() * 0.6;
      colors[i + 1] = 0.4 + Math.random() * 0.4;
      colors[i + 2] = 1.0;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    particles.add(points);
    scene.add(particles);

    camera.position.z = 5;

    const lines = new THREE.Group();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.15,
    });
    scene.add(lines);

    let linePositions: number[] = [];
    let lineColors: number[] = [];

    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;
      points.rotation.x = time * 0.1;
      points.rotation.y = time * 0.15;

      lines.clear();
      linePositions = [];
      lineColors = [];
      const posArray = positions;
      const distThreshold = 2.5;

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = posArray[i * 3] - posArray[j * 3];
          const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
          const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < distThreshold) {
            linePositions.push(posArray[i * 3], posArray[i * 3 + 1], posArray[i * 3 + 2]);
            linePositions.push(posArray[j * 3], posArray[j * 3 + 1], posArray[j * 3 + 2]);
            const opacity = 0.2 * (1 - dist / distThreshold);
            lineColors.push(0.2, 0.5, 1, opacity, 0.2, 0.5, 1, opacity);
          }
        }
      }

      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      lineGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 4));
      const lineSegments = new THREE.LineSegments(lineGeo, lineMaterial);
      lines.clear();
      lines.add(lineSegments);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}