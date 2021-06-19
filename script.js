
const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  1,
  10000
);


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xaaaaaa, 1);

document.body.appendChild(renderer.domElement);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.7 );
scene.add( directionalLight );

const cube = {

  geometry: new THREE.BoxGeometry(1, 1, 1),
 
  material: new THREE.MeshStandardMaterial({ color: 0xff0051 })
};
const bigcube = {

  geometry: new THREE.BoxGeometry(3, 3, 3),
 
  material: new THREE.MeshStandardMaterial( {
 color: "#dadada", wireframe: true, transparent: true
})
};

cube.mesh = new THREE.Mesh(cube.geometry, cube.material);
bigcube.mesh = new THREE.Mesh(bigcube.geometry, bigcube.material);


scene.add(cube.mesh);
scene.add(bigcube.mesh);

camera.position.z = 5;
camera.position.x = 5;
camera.position.y = 5;
camera.lookAt(0,0,0)
function render() {

  renderer.render(scene, camera);

  cube.mesh.rotation.x += 0.04;
  cube.mesh.rotation.y -= 0.04;
  bigcube.mesh.rotation.x -= 0.01;
  bigcube.mesh.rotation.y += 0.01;


  requestAnimationFrame(render);
}

render();