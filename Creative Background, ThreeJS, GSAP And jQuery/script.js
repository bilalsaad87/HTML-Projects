// Set up Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create cube mesh
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animate cube rotation with GSAP
gsap.to(cube.rotation, { duration: 3, y: Math.PI * 2, repeat: -1, ease: 'linear' });

// Animate camera position with GSAP
gsap.to(camera.position, { duration: 5, z: 2, yoyo: true, repeat: -1, ease: 'sine.inOut' });

// Add particle system with Three.js and GSAP
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 5000;
const positions = new Float32Array(particlesCount * 3);
for (let i = 0; i < positions.length; i += 3) {
    const radius = Math.random() * 5;
    const angle = Math.random() * Math.PI * 2;
    positions[i] = Math.cos(angle) * radius;
    positions[i + 1] = Math.sin(angle) * radius;
    positions[i + 2] = Math.random() * 2 - 1;
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const particlesMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);
gsap.to(particles.rotation, { duration: 10, y: Math.PI * 2, repeat: -1, ease: 'none' });

// Add interactive event with jQuery
$(document).on('click', function () {
    gsap.to(cube.scale, { duration: 1, x: 2, y: 2, z: 2, yoyo: true, repeat: 1, ease: 'back.out(2)' });
});

// Render the scene
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();
