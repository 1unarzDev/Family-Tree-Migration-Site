// IMPORTS //
import * as THREE from 'three';
import { useEffect } from 'react'; //@ts-ignore
import { getFresnelMat } from "/src/getFresnelMat.js"; //@ts-ignore
import { getStarfield } from "/src/getStarfield.js"; //@ts-ignore
import { getPaths } from "/src/getPaths.js"
import './App.css'; //@ts-ignore

import map from '/src/map.json'; //@ts-ignore
import network from '/src/network.json'

interface MapData {
  code: string;
  color: string;
  city: string;
  province: string;
  country: string;
  latitude: number;
  longitude: number;
}

interface NetworkData{
  from: string;
  to: string;
  arcHeight: number;
  color: string;
}

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Define Static Variables //
const textureLoader = new THREE.TextureLoader();
const globeRadius = 10;

const earthMesh = new THREE.Mesh(
  new THREE.IcosahedronGeometry(globeRadius, 12),
  new THREE.MeshPhongMaterial({
    map: textureLoader.load("src/assets/textures/earthmap4k.jpg"),
    specularMap: textureLoader.load("src/assets/textures/earthspec4k.jpg"),
    bumpMap: textureLoader.load("src/assets/textures/earthbump4k.jpg"),
    bumpScale: 15,
  })
);

const lightsMesh = new THREE.Mesh(
  new THREE.IcosahedronGeometry(globeRadius, 12), 
  new THREE.MeshBasicMaterial({
    map: textureLoader.load("src/assets/textures/earthlights4k.jpg"),
    blending: THREE.AdditiveBlending,
  })
);

const cloudsMesh = new THREE.Mesh(
  new THREE.IcosahedronGeometry(globeRadius, 12),
  new THREE.MeshStandardMaterial({
    map: textureLoader.load("src/assets/textures/earthhiresclouds4K.jpg"),
    alphaMap: textureLoader.load('src/assets/textures/earthcloudmaptrans.jpg'),
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0.8,
  })
);

const glowMesh = new THREE.Mesh(
  new THREE.IcosahedronGeometry(globeRadius, 12),
  getFresnelMat()
);

// React App Component That Renders // 
const App = () => {  

  // Scene Initialization (Items That Will Change Over Time) //
  const createScene = () => {
    const scene = new THREE.Scene();
    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = -23.4 * Math.PI / 180;
    scene.add(earthGroup);

    cloudsMesh.scale.setScalar(1.01);
    glowMesh.scale.setScalar(1.012);

    earthGroup.add(earthMesh, lightsMesh, cloudsMesh, glowMesh);

    const sunlight = new THREE.DirectionalLight(0xFFFFFF, 2);
    sunlight.position.set(-2, -0.5, 2.6);
    scene.add(sunlight);

    // const stars = getStarfield();
    // scene.add(stars);

    const pathGroup = new THREE.Group();
    const markerGroup = new THREE.Group();

    const createPaths = () => {
      network.forEach((path: NetworkData) => {
        let fromLocation = map.find((location: MapData) => location.code === path.from);
        let toLocation = map.find((location: MapData) => location.code === path.to);        
        let {arcLine, marker1, marker2} = getPaths(path, fromLocation, toLocation, globeRadius);
        pathGroup.add(arcLine);
        markerGroup.add(marker1, marker2);
      }); 
    }
    createPaths();
    earthGroup.add(pathGroup, markerGroup);

    return {scene, earthGroup, pathGroup, markerGroup};
  };

  //  Mounted Once And Only Reruns When The Dependency Array Changes //
  useEffect(() => {
    // Define Three Components //
    const {scene, earthGroup, pathGroup, markerGroup} = createScene();
    scene.rotation.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 25);
    
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

    // Loader Animation //
    const startLoader = () => {
      let counterElement = document.querySelector(".counter");
      let currentValue = 0;
      const delay = 300;
      const targetValue = 100;
      
      const updateCounter = () => {
        const increment = Math.floor(Math.random() * 10) + 1;
        currentValue += increment;
    
        if (currentValue > targetValue) {
          currentValue = targetValue;
        }
    
        // @ts-ignore
        counterElement.textContent = currentValue;
    
        setTimeout(updateCounter, delay);
      }
      updateCounter();
      if (currentValue >= targetValue) {
        currentValue = targetValue; // @ts-ignore
        counterElement.textContent = currentValue;
        return;
      }
    }
    startLoader();
  
    // GSAP Animation //
    const masterTimeline = gsap.timeline();

    masterTimeline.to(".counter", {
      duration: 0.7,
      delay: 6.25,
      opacity: 0,
    })
    .to(".bar", {
      duration: 1.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    }, "-=1.25")
    .fromTo(".h1", {
      duration: 2,
      y: 700,
      ease: "power4.inOut",
      }, {
        y: 0,
        stagger: {
          amount: 0.5,
        },
      }, '<.75');
    
    // Scroll-triggered Timeline
    const tau = Math.PI * 2;
    const sectionDuration = 1;

    const updateTL = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section",
          scrub: true,
          start: "top top",
          end: "bottom bottom"
        },
        defaults: {duration: sectionDuration, ease: 'power2.inOut'}
      });
    
      tl.to(earthGroup.rotation, { y: 20 })
        .to(camera.position, { z: 15 })
        .to(camera.position, { z: 25 });
    
      return tl;
    };    
    masterTimeline.add(updateTL());

    // Helper Functions //
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

    let prevTime = 0;
    let frames = 0;
    let fps = 60;

    const animate = () => {
      markerGroup.rotation.y=lightsMesh.rotation.y = earthMesh.rotation.y += 0.06 / fps;
      cloudsMesh.rotation.y += 0.072 / fps;
      
      // Calculate fps and adjust animations accordingly
      frames ++;

			if ( performance.now() >= prevTime + 1000 ) {
				fps = frames / (performance.now() - prevTime) * 1000;
				prevTime = performance.now();
				frames = 0;
      }

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleans Up After The Animation Loop //
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      masterTimeline.kill();
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
      scene.clear();
      document.body.removeChild(renderer.domElement);
    };
  }, []); // Add Dependencies (Items That Should Rerun UseEffect() Here)

  // HTML Return Statement //
  return (
    <main>

      <h1 className="counter">0</h1>

      <div className="overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="header">
        <div className="h1">L</div>
        <div className="h1">i</div>
        <div className="h1">a</div>
        <div className="h1">m</div>
        <div className="h1">.</div>
      </div>

      <section className="hero">
        {/* <svg height="100px" width="200px" transform="translate(20,2.5)">
          <filter id="grainy">
            <feTurbulence type='fractalNoise' baseFrequency="0.6"/>
            <feComposite operator="in" in2="SourceGraphic" result="monoNoise"/>
          </filter>
          <path 
            xmlns="http://www.w3.org/2000/svg"  
            d="M28.7,-46.9C40,-43.1,54,-41.2,63.6,-33.7C73.2,-26.2,78.4,-13.1,75.1,-1.9C71.7,9.2,59.9,18.5,53.1,30.9C46.3,43.2,44.6,58.7,36.6,70.1C28.6,81.5,14.3,88.8,-0.9,90.4C-16.1,91.9,-32.1,87.7,-45.6,79.4C-59.1,71.2,-69.9,58.9,-78,45C-86.1,31.1,-91.4,15.5,-86.5,2.8C-81.6,-9.9,-66.5,-19.8,-56.8,-30.9C-47.1,-42.1,-42.9,-54.6,-34.4,-60C-25.8,-65.4,-12.9,-63.8,-2.1,-60.1C8.7,-56.5,17.3,-50.8,28.7,-46.9Z"
          />
        </svg> */}
      </section>
      <section className="section-two"></section>
      <section className="section-three"></section>
      <section className="section-four"></section>
      <section className="section-five"></section>
      <section className="section-six"></section>
      <section className="section-seven"></section>
      <section className="section-eight"></section>
    </main>
  );
};

// App Export For Connections With Other Scripts //
export default App;