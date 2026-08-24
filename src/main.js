import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

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

//初始化摄像机  参数：fov，aspect，near，far
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 2, 30)//透视摄像机

//摄像机的位置position
camera.position.z =5;

//获取到canvas元素  canvas：画布
const canvas=document.querySelector('canvas.threejs');

//创建渲染器
const renderer=new THREE.WebGLRenderer({canvas:canvas});

renderer.setSize(window.innerWidth, window.innerHeight);//设置渲染器大小

//创建轨道控制器
const controls =new OrbitControls(camera, canvas);
controls.enableDamping = true; //启用阻尼效果
controls.autoRotate = true; //自动旋转效果

controls.update(); //

//渲染循环
const renderLoop=()=>{
    controls.update(); //更新控制器
    //渲染场景
    renderer.render(scene, camera);
   window.requestAnimationFrame(renderLoop);
}

renderLoop()
