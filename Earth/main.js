import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import getStarfield from "./src/getStarfield.js";
import { getFresnelMat } from "./src/getFresnelMat.js";

const h = window.innerHeight;
const w = window.innerWidth;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 3;
const scene = new THREE.Scene();

const earthGroup = new THREE.Group();
earthGroup.rotation.z = (-23.4 * Math.PI) / 180;
scene.add(earthGroup);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.003;

const loader = new THREE.TextureLoader();

const geometry = new THREE.IcosahedronGeometry(1.28, 10);
const material = new THREE.MeshStandardMaterial({
  map: loader.load("./Public/earth albedo.jpg"),
});

const earthMesh = new THREE.Mesh(geometry, material);
earthGroup.add(earthMesh);

const lightMat = new THREE.MeshBasicMaterial({
  map: loader.load("./Public/earth night_lights_modified.png"),
  blending: THREE.AdditiveBlending,
});

const cloudMat = new THREE.MeshStandardMaterial({
  map: loader.load("./Public/clouds earth.png"),
  blending: THREE.AdditiveBlending,
});

const cloudMesh = new THREE.Mesh(geometry, cloudMat);
cloudMesh.scale.setScalar(1.001);
earthGroup.add(cloudMesh);

const fresnelMat = getFresnelMat();
const glowMesh = new THREE.Mesh(geometry, fresnelMat);
glowMesh.scale.setScalar(1.01);
earthGroup.add(glowMesh);

const lightMesh = new THREE.Mesh(geometry, lightMat);
earthGroup.add(lightMesh);

const stars = getStarfield({ numStars: 4000 });
scene.add(stars);

const sunlight = new THREE.DirectionalLight(0xffffff);
sunlight.position.set(-2, 0.5, 1.5);
scene.add(sunlight);

function animate(t = 0) {
  requestAnimationFrame(animate);
  earthMesh.rotation.y += 0.002;
  lightMesh.rotation.y += 0.002;
  cloudMesh.rotation.y += 0.002;
  glowMesh.rotation.z += 0.002;
  controls.update();
  renderer.render(scene, camera);
}
animate();
