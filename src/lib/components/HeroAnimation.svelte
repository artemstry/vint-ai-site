<script lang="ts">
	import { onMount } from 'svelte';

	let {
		points = 220,
		particleSize = 0.06,
		particleOpacity = 0.78,
		canvasOpacity = 0.72,
		speedMultiplier = 1,
		attractToPointer = false,
		attractStrength = 0.0022,
		chaos = 0.00024,
		spreadX = 18,
		spreadY = 8,
		spreadZ = 6,
		cameraDistance = 16
	}: {
		points?: number;
		particleSize?: number;
		particleOpacity?: number;
		canvasOpacity?: number;
		speedMultiplier?: number;
		attractToPointer?: boolean;
		attractStrength?: number;
		chaos?: number;
		spreadX?: number;
		spreadY?: number;
		spreadZ?: number;
		cameraDistance?: number;
	} = $props();

	let container: HTMLDivElement;

	onMount(() => {
		let disposed = false;
		let stop = () => {};

		const init = async () => {
			const THREE = await import('three');
			if (disposed) return;

			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
			camera.position.z = Math.max(8, cameraDistance);

			const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			container.append(renderer.domElement);

			const pointCount = Math.max(40, Math.floor(points));
			const motionBoost = Math.max(0.2, speedMultiplier);
			const noise = Math.max(0, chaos);
			const xRange = Math.max(4, spreadX);
			const yRange = Math.max(2, spreadY);
			const zRange = Math.max(1, spreadZ);
			const geometry = new THREE.BufferGeometry();
			const positions = new Float32Array(pointCount * 3);
			const velocities = new Float32Array(pointCount * 3);

			for (let i = 0; i < pointCount; i++) {
				const i3 = i * 3;
				positions[i3] = (Math.random() - 0.5) * xRange;
				positions[i3 + 1] = (Math.random() - 0.5) * yRange;
				positions[i3 + 2] = (Math.random() - 0.5) * zRange;
				velocities[i3] = (Math.random() - 0.5) * 0.008 * motionBoost;
				velocities[i3 + 1] = (Math.random() - 0.5) * 0.008 * motionBoost;
				velocities[i3 + 2] = (Math.random() - 0.5) * 0.004 * motionBoost;
			}

			geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
			const material = new THREE.PointsMaterial({
				color: 0xd95262,
				size: particleSize,
				transparent: true,
				opacity: particleOpacity
			});
			const cloud = new THREE.Points(geometry, material);
			scene.add(cloud);

			const resize = () => {
				const { clientWidth, clientHeight } = container;
				camera.aspect = clientWidth / clientHeight;
				camera.updateProjectionMatrix();
				renderer.setSize(clientWidth, clientHeight);
			};
			resize();
			window.addEventListener('resize', resize);

			const pointer = { x: 0, y: 0, active: false };
			const handlePointerMove = (event: PointerEvent) => {
				const rect = container.getBoundingClientRect();
				if (rect.width <= 0 || rect.height <= 0) return;
				const nx = (event.clientX - rect.left) / rect.width;
				const ny = (event.clientY - rect.top) / rect.height;
				pointer.x = (nx * 2 - 1) * (xRange * 0.48);
				pointer.y = -(ny * 2 - 1) * (yRange * 0.48);
				pointer.active = nx >= 0 && nx <= 1 && ny >= 0 && ny <= 1;
			};
			const handlePointerLeave = () => {
				pointer.active = false;
			};
			if (attractToPointer) {
				window.addEventListener('pointermove', handlePointerMove);
				window.addEventListener('pointerleave', handlePointerLeave);
			}

			let raf = 0;
			const animate = () => {
				const pos = geometry.attributes.position.array as Float32Array;
				for (let i = 0; i < pointCount; i++) {
					const i3 = i * 3;
					velocities[i3] += (Math.random() - 0.5) * noise;
					velocities[i3 + 1] += (Math.random() - 0.5) * noise;
					velocities[i3 + 2] += (Math.random() - 0.5) * noise * 0.6;

					if (attractToPointer && pointer.active) {
						const dx = pointer.x - pos[i3];
						const dy = pointer.y - pos[i3 + 1];
						const distanceSq = Math.max(0.6, dx * dx + dy * dy);
						const pull = (attractStrength * motionBoost) / distanceSq;
						velocities[i3] += dx * pull;
						velocities[i3 + 1] += dy * pull;
					}

					velocities[i3] *= 0.992;
					velocities[i3 + 1] *= 0.992;
					velocities[i3 + 2] *= 0.994;

					pos[i3] += velocities[i3];
					pos[i3 + 1] += velocities[i3 + 1];
					pos[i3 + 2] += velocities[i3 + 2];

					if (Math.abs(pos[i3]) > xRange * 0.5) velocities[i3] *= -1;
					if (Math.abs(pos[i3 + 1]) > yRange * 0.5) velocities[i3 + 1] *= -1;
					if (Math.abs(pos[i3 + 2]) > zRange * 0.57) velocities[i3 + 2] *= -1;
				}

				geometry.attributes.position.needsUpdate = true;
				cloud.rotation.y += 0.0009 * motionBoost;
				renderer.render(scene, camera);
				raf = requestAnimationFrame(animate);
			};
			animate();

			stop = () => {
				cancelAnimationFrame(raf);
				window.removeEventListener('resize', resize);
				if (attractToPointer) {
					window.removeEventListener('pointermove', handlePointerMove);
					window.removeEventListener('pointerleave', handlePointerLeave);
				}
				geometry.dispose();
				material.dispose();
				renderer.dispose();
				container.removeChild(renderer.domElement);
			};
		};

		void init();

		return () => {
			disposed = true;
			stop();
		};
	});
</script>

<div
	bind:this={container}
	class="hero-canvas"
	style={`--hero-canvas-opacity:${canvasOpacity};`}
	aria-hidden="true"
></div>

<style>
	.hero-canvas {
		position: absolute;
		inset: 0;
		opacity: var(--hero-canvas-opacity, 0.72);
		pointer-events: none;
	}
</style>
