//to display anything using three.js, we need 3 things.
//a Scene, a Camera, and a Renderer.

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
let isPlay = 1;
let cubeRotateX = 0.01;
let cubeRotateY = 0.025;
let sliderX = document.getElementById("myRangeX");
let sliderY = document.getElementById("myRangeY");
let pauseBtn = document.getElementById("myPauseBtn");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshPhongMaterial( {color: 0x00ff00, specular: 0x0f0f0f, shininess: 85});
var cube = new THREE.Mesh(geometry, material);
var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.x = 10; pointLight.position.y = 30; pointLight.position.z = 120;

//add objects to our scene
scene.add(cube, pointLight);
//move camera out in z a little so we're not inside of cube
camera.position.z = 5;

//now we need to render and animate with a Loop
let animate = () => {
  if (!isPlay) return;
  requestAnimationFrame(animate);
  cube.rotation.x += cubeRotateX;
  cube.rotation.y += cubeRotateY;

  renderer.render(scene,camera);
}
animate();

let setValX = (val) => {
  cubeRotateX = val / 100;
  console.log(val / 100);
}
let setValY = (val) => {
  cubeRotateY = val / 100;
  console.log(val / 100);
}

let pause = () => {
  if (isPlay == 0){
    isPlay = 1;
    pauseBtn.style.backgroundColor = "Red";
  }
  else
  {
    isPlay = 0;
    pauseBtn.style.backgroundColor = "Green";
  }
  animate();
}
