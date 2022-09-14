import * as THREE from 'three';
// Setup

const scene = new THREE.Scene();

// initial camera perspective 
// 75, window.innerWidth / window.innerHeight, 0.1, 1000
const camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, .1, 2000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);
renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry(9.956, 2.8215, 30, 200, 6.283185);
const material = new THREE.MeshStandardMaterial({ color: 0xd9534f });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// Background

const bgTexture = new THREE.TextureLoader().load('/assets/img/nightSky.jpg');
scene.background = bgTexture;

// Avatar

const heroTexture = new THREE.TextureLoader().load('/assets/img/typingGameSq0.jpg');
const hero = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: heroTexture }));
scene.add(hero);
hero.position.z = -5;
hero.position.x = 1;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  hero.rotation.y += 0.01;
  hero.rotation.z += 0.01;
  camera.position.z = t * 0.01;
  camera.position.x = t * 0.0002;
  camera.rotation.y = t * 0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  renderer.render(scene, camera);
}

animate();