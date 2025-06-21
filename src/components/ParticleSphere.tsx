import { useEffect, useRef } from "react";
import * as THREE from "three";
import { createNoise4D } from "simplex-noise";
import { useTheme } from "../contexts/ThemeContext";

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
    const colors = new Float32Array(particleCount * 3);
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

      // Create a radial gradient from center outward
      const distance = Math.sqrt(x * x + y * y + z * z);
      const normalizedDistance = distance / radius;

      // Gradient from red (center) to pink (middle) to violet (outer)
      const color = new THREE.Color();

      if (normalizedDistance < 0.3) {
        // Center: Red
        color.setHex(0xef4444);
      } else if (normalizedDistance < 0.7) {
        // Middle: Blend from red to pink
        const t = (normalizedDistance - 0.3) / 0.4;
        color.lerpColors(
          new THREE.Color(0xef4444),
          new THREE.Color(0xec4899),
          t,
        );
      } else {
        // Outer: Blend from pink to violet
        const t = (normalizedDistance - 0.7) / 0.3;
        color.lerpColors(
          new THREE.Color(0xec4899),
          new THREE.Color(0x8b5cf6),
          t,
        );
      }

      // Add subtle brightness variation
      const brightness = 0.8 + 0.2 * (1 - normalizedDistance);
      color.multiplyScalar(brightness);

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.01,
      sizeAttenuation: true,
      transparent: true,
      opacity: theme === "dark" ? 0.8 : 0.7,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
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
      if (!containerRef.current) {
        return;
      }
      const rect = containerRef.current!.getBoundingClientRect();
      const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = offsetX * 1.5;
      targetRotationX = offsetY * 1.5;
    };
    // containerRef.current.addEventListener('mousemove', handleMouseMove);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", updateSize);

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
      particles.rotation.z += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      containerRef.current?.removeChild(renderer.domElement);
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
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
