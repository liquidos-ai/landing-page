import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createNoise4D } from 'simplex-noise';
import { useTheme } from './theme-provider';

export function ParticleSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const updateSize = () => {
      const width = Math.min(containerRef.current!.clientWidth, 600);
      const height = width;
      renderer.setSize(width, height);
    };

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    updateSize();
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const geometry = new THREE.BufferGeometry();
    const particleCount = 10000;
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const radius = 1;

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: theme === 'dark' ? 0x6b8aff : 0x4263eb,
      size: 0.012,
      sizeAttenuation: true,
      transparent: true,
      opacity: theme === 'dark' ? 0.9 : 0.8,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 2;

    // Create noise generator
    const noise4D = createNoise4D();

    // Mouse interaction
    let targetRotationY = 0;
    let targetRotationX = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = offsetX * 1.5;
      targetRotationX = offsetY * 1.5;
    };
    // containerRef.current.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', updateSize);

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.003;

      const pos = geometry.attributes.position.array as Float32Array;
      const wavePulse = Math.sin(time * 0.5) * 0.15;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const ox = originalPositions[i3];
        const oy = originalPositions[i3 + 1];
        const oz = originalPositions[i3 + 2];

        const noiseValue = noise4D(ox * 1.2, oy * 1.2, oz * 1.2, time) * 0.25;
        const distortionFactor = 1 + noiseValue + wavePulse * 0.1;

        pos[i3] = ox * distortionFactor;
        pos[i3 + 1] = oy * distortionFactor;
        pos[i3 + 2] = oz * distortionFactor;
      }

      geometry.attributes.position.needsUpdate = true;
      particles.rotation.y += (targetRotationY - particles.rotation.y) * 0.05;
      particles.rotation.x += (targetRotationX - particles.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      containerRef.current?.removeChild(renderer.domElement);
      containerRef.current?.removeEventListener('mousemove', handleMouseMove);
      geometry.dispose();
      material.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="w-full aspect-square max-w-[600px] mx-auto md:mx-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2"
    />
  );
}
