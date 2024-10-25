import * as THREE from 'three';
import { useEffect, useMemo } from 'react';
// @ts-ignore
import { getFresnelMat } from "/src/getFresnelMat.js";
// @ts-ignore
import getStarfield from "/src/getStarfield.js";
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  const textureLoader = new THREE.TextureLoader();

  const createScene = () => {
    const scene = new THREE.Scene();
    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = -23.4 * Math.PI / 180;
    scene.add(earthGroup);

    const earthMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(10, 12),
      new THREE.MeshPhongMaterial({
        map: textureLoader.load("src/assets/textures/earthmap10k.jpg"),
        specularMap: textureLoader.load("src/assets/textures/earthspec10k.jpg"),
        bumpMap: textureLoader.load("src/assets/textures/earthbump10k.jpg"),
        bumpScale: 0.01,
      })
    );
    earthGroup.add(earthMesh);

    const lightsMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(10, 12), 
      new THREE.MeshBasicMaterial({
        map: textureLoader.load("src/assets/textures/earthlights10k.jpg"),
        blending: THREE.AdditiveBlending,
      })
    );
    earthGroup.add(lightsMesh);

    const cloudsMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(10, 12),
      new THREE.MeshStandardMaterial({
        map: textureLoader.load("src/assets/textures/earthhiresclouds4K.jpg"),
        alphaMap: textureLoader.load('src/assets/textures/earthcloudmaptrans.jpg'),
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.8,
      })
    );
    cloudsMesh.scale.setScalar(1.01);
    earthGroup.add(cloudsMesh);

    const glowMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(10, 12),
      getFresnelMat()
    );
    glowMesh.scale.setScalar(1.012);
    earthGroup.add(glowMesh);

    const sunlight = new THREE.DirectionalLight(0xFFFFFF, 2);
    sunlight.position.set(-2, 0.5, 1.5);
    scene.add(sunlight);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-two",
        endTrigger: ".section-five",
        scrub: true,
      },
    });

    return { scene, earthMesh, lightsMesh, cloudsMesh, tl };
  };

  useEffect(() => {
    const { scene, earthMesh, lightsMesh, cloudsMesh, tl } = createScene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

    camera.position.set(2, 0, 50);
    
    document.body.appendChild(renderer.domElement);
    renderer.domElement.classList.add('top-0', 'left-0', 'w-full', 'h-full', 'z-0');
    Object.assign(renderer.domElement.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '999'
    });

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

    const animate = () => {
      lightsMesh.rotation.y = earthMesh.rotation.y += 0.002;
      cloudsMesh.rotation.y += 0.0024;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    scene.rotation.set(0, 3.1, 0);
  
    tl
      .to(scene.rotation, { y: 1.65 })
      .to(scene.rotation, { y: 3.1 });  

    return () => {
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
      scene.clear();
      document.body.removeChild(renderer.domElement);
    };
  }, [textureLoader]);

  return (
    <main>
      <section className="section-one"></section>
      <section className="section-two"></section>
      <section className="section-three"></section>
      <section className="section-four"></section>
      <section className="section-five"></section>
    </main>
  );
};

export default App;