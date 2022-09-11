import * as THREE from 'three';

// Setup

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);
renderer.render(scene, camera);

// Torus

// Tube
// 10, 3, 16, 100
// Triangle
// 12.768, 2.0889, 30, 3, 6.283185
const geometry = new THREE.TorusGeometry(15.789, 1.485, 10, 3, 6.283185);
const material = new THREE.MeshStandardMaterial({ color: 0x1D3557 });
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

const heroTexture = new THREE.TextureLoader().load('/assets/img/sqImg0.jpg');
const hero = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: heroTexture }));
scene.add(hero);

// Moon

const darkStarTexture = new THREE.TextureLoader().load('/assets/img/darkStar.png');
const normalTexture = new THREE.TextureLoader().load('/assets/img/normal.jpg');
const darkStar = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: darkStarTexture,
    normalMap: normalTexture,
  })
);

scene.add(darkStar);
darkStar.position.z = 30;
darkStar.position.setX(-10);
hero.position.z = -5;
hero.position.x = 1;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  darkStar.rotation.x += 0.05;
  darkStar.rotation.y += 0.075;
  darkStar.rotation.z += 0.05;
  hero.rotation.y += 0.01;
  hero.rotation.z += 0.01;
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  darkStar.rotation.x += 0.005;
  renderer.render(scene, camera);
}

animate();

// import "/assets/js/.js";

// build a function that checks what page user is on
// and sets js import to that page. 
// Then imports {page} + .js


// if (currentPage === oneOf.pageFromList) {
//   let filePath = pathFromPage + ".js";

//   import filePath;
// }