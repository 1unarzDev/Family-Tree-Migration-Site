// IMPORTS //
import * as THREE from 'three';
import { useEffect, useState } from 'react'; //@ts-ignore
import { getFresnelMat } from "/src/getFresnelMat.js"; //@ts-ignore
import { getStarfield } from "/src/getStarfield.js"; //@ts-ignore
import { getPaths } from "/src/getPaths.js"
import './App.css'; 

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); //@ts-ignore

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
    alphaMap: textureLoader.load("src/assets/textures/earthcloudmaptrans.jpg"),
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
  // Define States //
  const [isLoading, setIsLoading] = useState(true);

  // Scene Initialization (Items That Will Change Over Time) //
  const createScene = () => {
    const scene = new THREE.Scene();

    // Earth Creation //
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

    // Path and Group Creation //
    const pathGroup = new THREE.Group();
    const markerGroup = new THREE.Group();

    const createPaths = () => {
      map.forEach((location: MapData) => {
        const marker = getPaths(globeRadius, location);
        markerGroup.add(marker);
      });

      network.forEach((path: NetworkData) => {
        const fromLocation = map.find((location: MapData) => location.code === path.from);
        const toLocation = map.find((location: MapData) => location.code === path.to);
        const arcLine = getPaths(globeRadius, fromLocation, toLocation, path);
        pathGroup.add(arcLine);
      });
    }
    createPaths();
    earthGroup.add(pathGroup, markerGroup);

    // Text Creation //
    /*const textGroup = new THREE.Group();

    const createText = () => {
      fontLoader.load("/src/assets/fonts/Proxima-Nova.json", (font) => {
        textBlocks.forEach((block) => {
          const textGeometry = new TextGeometry(block.text, {
            font: font,
            size: 0.1,
            height: 0.01,
            curveSegments: 12,
          });

          const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 1, transparent: false });
          const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      
          textMesh.position.set(block.position.x, block.position.y, block.position.z);
      
          textGroup.add(textMesh);
        });
      });
    };
    createText();
    scene.add(textGroup);*/

    return {scene, earthGroup, pathGroup, markerGroup/*, textGroup*/};
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
      const counterElement = document.querySelector(".counter");
      let currentValue = 0;
      const targetValue = 100;
    
      const updateCounter = () => {
        let increment = Math.floor(Math.random() * 5) + 5;
        currentValue = Math.min(currentValue + increment, targetValue);

        if (counterElement) counterElement.textContent = currentValue.toString();
    
        if (currentValue < targetValue) {
          setTimeout(() => requestAnimationFrame(updateCounter), 300);
        } else { // @ts-ignore
          counterElement.textContent = targetValue.toString();
        }
      };
      updateCounter();
    };    
    startLoader();

     // GSAP Animation //
     const masterTimeline = gsap.timeline();

     masterTimeline.to(".counter", {
       duration: 0.7,
       delay: 6.3,
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
       y: 1000,
       ease: "power4.inOut",
     }, {
       y: 0,
       stagger: {
         amount: 0.5,
       },
     }, '<.75')
     .add(() => {
       setIsLoading(false); // Set loading state to false after animations
       // Initialize ScrollTrigger here
       initializeScrollTrigger();
     });
     
     let rotationSpeed = 0.06;
     const rotationSpeedRef = { value: rotationSpeed };
     // Scroll-triggered Timeline
     const initializeScrollTrigger = () => {
       const sectionDuration = 1.2;
 
       const updateTL = () => {
         const tl1 = gsap.timeline({
           scrollTrigger: {
             trigger: ".hero",
             scrub: 0.7,
             start: "top top",
             end: "top+=25% top",
           },
           defaults: {duration: sectionDuration, ease: 'power2.inOut'}
         });
 
         const tl2 = gsap.timeline({
           scrollTrigger: {
             trigger: ".hero",
             scrub: 0.7,
             start: "top+=25% top",
             end: "top+=50% top",
           },
           defaults: {duration: sectionDuration, ease: 'power2.inOut'}
         });
 
         const tl3 = gsap.timeline({
           scrollTrigger: {
             trigger: ".section",
             scrub: 0.7,
             snap: {
              snapTo: 1/8.1
             },
             start: "top top",
             end: "top+=90% top",
           },
           defaults: {duration: sectionDuration, ease: 'power2.inOut'}
         });
         
         const i = 0;
 
         const pathChild = pathGroup.children[i];
         if (pathChild instanceof THREE.Line){
           var lineMaterialColor = pathChild.material.color;
         }
 
         const increaseScale = 10;
 
         const markerChild = markerGroup.children[i].children[1];
         const glowChild = markerGroup.children[i].children[0];
         let markerSize = 1;
         if (markerChild instanceof THREE.Mesh && markerChild.geometry instanceof THREE.IcosahedronGeometry){
           markerSize = markerChild.geometry.parameters.radius;
         }
         let glowSize = 1;
         if (glowChild instanceof THREE.Mesh && glowChild.geometry instanceof THREE.IcosahedronGeometry){
           glowSize = glowChild.geometry.parameters.radius;
           var glowMaterial = glowChild.material;
         }
 
          tl1.to(rotationSpeedRef, {
            value: -25,
            onUpdate: () => {
              rotationSpeed = rotationSpeedRef.value;
            },
          }, 0)

          const rotationLocation = [0.2, 1, -0.3, 0.7, -0.5, 1.3];

          tl2.to(rotationSpeedRef, {
                value: -0.06,
                onUpdate: () => {
                  rotationSpeed = rotationSpeedRef.value;
                },
              }, 0)
              .to(pathGroup.rotation, { y: rotationLocation[0] }, 0)
              .to(markerGroup.rotation, { y: rotationLocation[0] }, 0)
              .to(lightsMesh.rotation, { y: rotationLocation[0] }, 0)
              .to(earthMesh.rotation, { y: rotationLocation[0] }, 0)
              .to(cloudsMesh.rotation, { y: rotationLocation[0] }, 0);
 
          tl3
            .to(earthGroup.position, { x: -7 }, 0)
            .to(camera.position, { z: 20 }, 0)
            .to(earthGroup.rotation, { y: 5 }, 0)
            .to(lineMaterialColor, {
              r: 255,
              g: 255,
              b: 255,
            }, 0)
            .to(markerChild.scale, { x: increaseScale * markerSize, y: increaseScale * markerSize, z: increaseScale * markerSize }, 0)
            .to(glowChild.scale, { x: increaseScale * glowSize, y: increaseScale * glowSize, z: increaseScale * glowSize }, 0)
            .to(glowMaterial, { opacity: 0.8 }, 0);

          const tl31 = gsap.timeline({defaults: {duration: sectionDuration, ease: 'power2.inOut'}});
          tl31
            .to(earthGroup.position, { x: 7 }, 0)
            .to(pathGroup.rotation, { y: rotationLocation[1] }, 0)
            .to(markerGroup.rotation, { y: rotationLocation[1] }, 0)
            .to(lightsMesh.rotation, { y: rotationLocation[1] }, 0)
            .to(earthMesh.rotation, { y: rotationLocation[1] }, 0)
            .to(cloudsMesh.rotation, { y: rotationLocation[1] }, 0);
          tl3.add(tl31);

          tl3
            .to(earthGroup.position, { x: -7 })
            .to(earthGroup.position, { x: 7 })
            .to(earthGroup.position, { x: -7 })
            .to(earthGroup.position, { x: 7 })
            .to(earthGroup.position, { x: -7 })
            .to(earthGroup.position, { x: 7 })

            masterTimeline.add(tl1).add(tl2, `+=0`).add(tl3, `+=0`);
       };    
       updateTL();
     };

    // Helper Functions //
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

    let prevTime = performance.now();

    const animate = () => {

     // Animation + Speed Correction //
      const currentTime = performance.now();
      const deltaTime = (currentTime - prevTime) / 1000;
      prevTime = currentTime;
    
      pathGroup.rotation.y = markerGroup.rotation.y = lightsMesh.rotation.y = earthMesh.rotation.y += rotationSpeed * deltaTime;
      cloudsMesh.rotation.y += (rotationSpeed + 0.012) * deltaTime;

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
      <div className="hero">
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
          <div className="h1">M</div>
          <div className="h1">i</div>
          <div className="h1">g</div>
          <div className="h1">r</div>
          <div className="h1">a</div>
          <div className="h1">t</div>
          <div className="h1">i</div>
          <div className="h1">o</div>
          <div className="h1">n</div>
        </div>
      </div>

      <img src="src/assets/images/birds.svg" className="bg"/>

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

      {/* Conditionally render sections based on loading state */}
      {!isLoading && (
        <>
          <section className="section-two">
            <div className="align-right">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
          <section className="section-three">
          <div className="align-left">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
          <section className="section-four">
          <div className="align-right">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
          <section className="section-five">
          <div className="align-left">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
          <section className="section-six">
          <div className="align-right">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
          <section className="section-seven">
          <div className="align-left">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
          <section className="section-eight">
          <div className="align-right">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
          <section className="section-nine">
          <div className="align-left">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

// App Export For Connections With Other Scripts //
export default App;