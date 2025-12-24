import * as THREE from "three";
import { createNoise4D } from "simplex-noise";

function init(container) {
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
	const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

	const setSize = () => {
		const size = Math.min(container.clientWidth || 520, 520);
		renderer.setSize(size, size);
	};
	setSize();
	container.appendChild(renderer.domElement);

	const geometry = new THREE.BufferGeometry();
	const particleCount = 7000;
	const positions = new Float32Array(particleCount * 3);
	const originals = new Float32Array(particleCount * 3);
	const colors = new Float32Array(particleCount * 3);
	const radius = 1;

	for (let i = 0; i < particleCount; i++) {
		const theta = Math.random() * Math.PI * 2;
		const phi = Math.acos(2 * Math.random() - 1);
		const x = radius * Math.sin(phi) * Math.cos(theta);
		const y = radius * Math.sin(phi) * Math.sin(theta);
		const z = radius * Math.cos(phi);
		const i3 = i * 3;
		positions[i3] = originals[i3] = x;
		positions[i3 + 1] = originals[i3 + 1] = y;
		positions[i3 + 2] = originals[i3 + 2] = z;

		const dist = Math.sqrt(x * x + y * y + z * z) / radius;
		const color = new THREE.Color();
		if (dist < 0.35) {
			color.set("#0c1e40");
		} else if (dist < 0.7) {
			const t = (dist - 0.35) / 0.35;
			color.lerpColors(new THREE.Color("#0c1e40"), new THREE.Color("#1f4ba3"), t);
		} else {
			const t = (dist - 0.7) / 0.3;
			color.lerpColors(new THREE.Color("#1f4ba3"), new THREE.Color("#4a5fd1"), t);
		}
		const brightness = 0.55 + 0.2 * (1 - dist);
		color.multiplyScalar(brightness);
		colors[i3] = color.r;
		colors[i3 + 1] = color.g;
		colors[i3 + 2] = color.b;
	}

	geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
	geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

	const material = new THREE.PointsMaterial({
		size: 0.01,
		sizeAttenuation: true,
		transparent: true,
		opacity: 0.7,
		vertexColors: true,
		blending: THREE.AdditiveBlending,
	});

	const particles = new THREE.Points(geometry, material);
	scene.add(particles);
	camera.position.z = 2;

	const noise4D = createNoise4D();
	let targetRotationY = 0;
	let targetRotationX = 0;

	const handleMouseMove = (e) => {
		const rect = container.getBoundingClientRect();
		const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
		const offsetY = (e.clientY - rect.top) / rect.height - 0.5;
		targetRotationY = offsetX * 1.5;
		targetRotationX = offsetY * 1.5;
	};

	window.addEventListener("mousemove", handleMouseMove);
	window.addEventListener("resize", setSize);

	let time = 0;
	let animationId;
	const animate = () => {
		animationId = requestAnimationFrame(animate);
		time += 0.003;
		const pos = geometry.attributes.position.array;
		const wavePulse = Math.sin(time * 0.5) * 0.12;
		for (let i = 0; i < particleCount; i++) {
			const i3 = i * 3;
			const ox = originals[i3];
			const oy = originals[i3 + 1];
			const oz = originals[i3 + 2];
			const noiseValue = noise4D(ox * 1.2, oy * 1.2, oz * 1.2, time) * 0.22;
			const factor = 1 + noiseValue + wavePulse * 0.08;
			pos[i3] = ox * factor;
			pos[i3 + 1] = oy * factor;
			pos[i3 + 2] = oz * factor;
		}
		geometry.attributes.position.needsUpdate = true;
		particles.rotation.y += (targetRotationY - particles.rotation.y) * 0.05;
		particles.rotation.x += (targetRotationX - particles.rotation.x) * 0.05;
		particles.rotation.z += 0.001;
		renderer.render(scene, camera);
	};
	animate();

	const cleanup = () => {
		cancelAnimationFrame(animationId);
		window.removeEventListener("resize", setSize);
		window.removeEventListener("mousemove", handleMouseMove);
		if (renderer.domElement.parentNode === container) {
			container.removeChild(renderer.domElement);
		}
		geometry.dispose();
		material.dispose();
	};

	return cleanup;
}

function bootstrap() {
	const targets = document.querySelectorAll("[data-particle-sphere]");
	targets.forEach((el) => {
		if (el._sphereInit) return;
		el._sphereInit = true;
		const cleanup = init(el);
		el.addEventListener("astro:after-swap", cleanup);
	});
}

if (typeof window !== "undefined") {
	bootstrap();
	window.addEventListener("astro:after-swap", bootstrap);
}

