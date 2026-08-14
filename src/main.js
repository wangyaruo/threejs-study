import * as THREE from 'three';

// 创建场景
const scene = new THREE.Scene();

// 创建几何体外观
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
// 创建几何体材质
const cubeMaterial = new THREE.MeshBasicMaterial({color: 'red'});

// 创建网格
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

// 将网格添加到场景中
scene.add(cubeMesh);

//初始化摄像机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 30)//透视摄像机

//摄像机的位置position
camera.position.z = 5;
