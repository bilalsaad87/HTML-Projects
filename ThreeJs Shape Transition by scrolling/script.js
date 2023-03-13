const scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000 ); // Specify camera type like this
camera.position.z = 15;

const geometry = new THREE.BufferGeometry();

const positions = [];
const colors = [];

for (let i = 0; i < 5000; i++) {
    positions.push((Math.random() - 0.5) * 10);
    positions.push((Math.random() - 0.5) * 10);
    positions.push((Math.random() - 0.5) * 10);

    colors.push(Math.random());
    colors.push(Math.random());
    colors.push(Math.random());
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({ size: 0.05, vertexColors: true });

const particles = new THREE.Points(geometry, material);
scene.add(particles);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);

    // Add scrolling effect
    const scrollTop = document.documentElement.scrollTop;
    particles.rotation.x = scrollTop * 0.001;
    particles.rotation.y = scrollTop * 0.002;

    // Add shape-transitioning effect
    const t = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight));
    const radius = 1 + Math.sin(t * Math.PI * 2) * 4;
    geometry.attributes.position.array.forEach((position, i) => {
        if (i % 3 == 0) {
            const angle = i / 3 / 1000 * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            position = x;
            geometry.attributes.position.array[i] = position;
        }
    });
    geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
}

animate();
