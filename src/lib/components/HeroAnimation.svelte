<script lang="ts">
	import { onMount } from 'svelte';

	let container: HTMLDivElement;

	onMount(() => {
		let disposed = false;
		let stop = () => {};

		const init = async () => {
			const THREE = await import('three');
			if (disposed) return;

			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
			camera.position.z = 16;

			const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			container.append(renderer.domElement);

			const points = 220;
			const geometry = new THREE.BufferGeometry();
			const positions = new Float32Array(points * 3);
			const velocities = new Float32Array(points * 3);

			for (let i = 0; i < points; i++) {
				const i3 = i * 3;
				positions[i3] = (Math.random() - 0.5) * 18;
				positions[i3 + 1] = (Math.random() - 0.5) * 8;
				positions[i3 + 2] = (Math.random() - 0.5) * 6;
				velocities[i3] = (Math.random() - 0.5) * 0.008;
				velocities[i3 + 1] = (Math.random() - 0.5) * 0.008;
				velocities[i3 + 2] = (Math.random() - 0.5) * 0.004;
			}

			geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
			const material = new THREE.PointsMaterial({
				color: 0x4fd5ff,
				size: 0.07,
				transparent: true,
				opacity: 0.9
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

			let raf = 0;
			const animate = () => {
				const pos = geometry.attributes.position.array as Float32Array;
				for (let i = 0; i < points; i++) {
					const i3 = i * 3;
					pos[i3] += velocities[i3];
					pos[i3 + 1] += velocities[i3 + 1];
					pos[i3 + 2] += velocities[i3 + 2];

					if (Math.abs(pos[i3]) > 9) velocities[i3] *= -1;
					if (Math.abs(pos[i3 + 1]) > 4.6) velocities[i3 + 1] *= -1;
					if (Math.abs(pos[i3 + 2]) > 3.4) velocities[i3 + 2] *= -1;
				}

				geometry.attributes.position.needsUpdate = true;
				cloud.rotation.y += 0.0009;
				renderer.render(scene, camera);
				raf = requestAnimationFrame(animate);
			};
			animate();

			stop = () => {
				cancelAnimationFrame(raf);
				window.removeEventListener('resize', resize);
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

<div bind:this={container} class="hero-canvas" aria-hidden="true"></div>

<style>
	.hero-canvas {
		position: absolute;
		inset: 0;
		opacity: 0.85;
		pointer-events: none;
	}
</style>
