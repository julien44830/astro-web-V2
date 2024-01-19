// Créer une scène
var scene = new THREE.Scene();

// Créer une caméra
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Créer un rendu
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Créer une sphère pour représenter le trou noir
var geometry = new THREE.SphereGeometry(5, 32, 32);
var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Positionner la caméra
camera.position.z = 10;

// Animer la scène
function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
