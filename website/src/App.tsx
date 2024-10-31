// IMPORTS //
import * as THREE from 'three';
import { useEffect, useState } from 'react'; //@ts-ignore
import { getFresnelMat } from "/src/getFresnelMat.js"; //@ts-ignore
import { getStarfield } from "/src/getStarfield.js"; //@ts-ignore
import { getPaths } from "/src/getPaths.js"
import './App.css'; 

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Lenis from 'lenis'

//@ts-ignore
import map from '/src/map.json';
//@ts-ignore
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
    map: textureLoader.load("./assets/textures/earthmap4k.jpg"),
    specularMap: textureLoader.load("./assets/textures/earthspec4k.jpg"),
    bumpMap: textureLoader.load("./assets/textures/earthbump4k.jpg"),
    bumpScale: 15,
  })
);

const lightsMesh = new THREE.Mesh(
  new THREE.IcosahedronGeometry(globeRadius, 12), 
  new THREE.MeshBasicMaterial({
    map: textureLoader.load("./assets/textures/earthlights4k.jpg"),
    blending: THREE.AdditiveBlending,
  })
);

const cloudsMesh = new THREE.Mesh(
  new THREE.IcosahedronGeometry(globeRadius, 12),
  new THREE.MeshStandardMaterial({
    map: textureLoader.load("./assets/textures/earthhiresclouds4K.jpg"),
    alphaMap: textureLoader.load("./assets/textures/earthcloudmaptrans.jpg"),
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
    glowMesh.scale.setScalar(1.011);

    earthGroup.add(earthMesh, lightsMesh, cloudsMesh, glowMesh);

    const sunlight = new THREE.DirectionalLight(0xFFFFFF, 2);
    sunlight.position.set(-2, -0.5, 2.6);
    scene.add(sunlight);

    // Path and Group Creation //
    const pathGroup = new THREE.Group();
    const markerGroup = new THREE.Group();

    const createPaths = () => {
      map.forEach((location: MapData) => {
        const marker = getPaths(globeRadius-0.05, location);
        markerGroup.add(marker);
      });

      network.forEach((path: NetworkData) => {
        const fromLocation = map.find((location: MapData) => location.code === path.from);
        const toLocation = map.find((location: MapData) => location.code === path.to);
        const arcLine = getPaths(globeRadius-0.05, fromLocation, toLocation, path);
        pathGroup.add(arcLine);
      });
    }
    createPaths();
    earthGroup.add(pathGroup, markerGroup);

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

    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis({
      wheelMultiplier: 0.3
    });

    // Listen for the 'scroll' event and log the event data to the console
    lenis.on('scroll', (e) => {
      console.log(e);
    });

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);

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
     
     let rotationSpeed = 0.16;
     const rotationSpeedRef = { value: rotationSpeed };
     // Scroll-triggered Timeline
     const initializeScrollTrigger = () => {
       const updateTL = () => {
         const tl1 = gsap.timeline({
           scrollTrigger: {
             trigger: ".hero",
             scrub: 0.7,
             start: "top top",
             end: "top+=20% top",
           },
           defaults: {ease: 'power2.inOut'}
         });
 
         const tl2 = gsap.timeline({
           scrollTrigger: {
             trigger: ".section",
             scrub: 0.7,
            //  snap: {
            //   snapTo: 0.1
            //  },
             start: "top top",
             end: "top+=70% top",
           },
           defaults: {ease: 'power2.inOut'}
         });
         
         let i = 0;
         let j = 1;

         const pathChild = pathGroup.children[j];
         if (pathChild instanceof THREE.Line){
           var lineMaterialColor = pathChild.material.color;
         }
 
          const increaseScale = 1;

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

         const rotationLocation = [0.35, 0.45, -2.15, -1.5, -1.7, 0.3, -1.35];

          tl1.to(rotationSpeedRef, {
            value: -1,
            onUpdate: () => {
              rotationSpeed = rotationSpeedRef.value;
            }
          }, 0)

          tl2
            .to(pathGroup.rotation, { y: rotationLocation[0] }, 0)
            .to(markerGroup.rotation, { y: rotationLocation[0] }, 0)
            .to(lightsMesh.rotation, { y: rotationLocation[0] }, 0)
            .to(earthMesh.rotation, { y: rotationLocation[0] }, 0)
            .to(cloudsMesh.rotation, { y: rotationLocation[0] }, 0)
            .to(earthGroup.position, { x: -7 }, 0)
            .to(camera.position, { z: 17 }, 0)
            .to(earthGroup.rotation, { y: 5 }, 0)
            .to(lineMaterialColor, {
              r: 0,
              g: 0,
              b: 0,
            }, 0)
            .to(markerChild.scale, { x: increaseScale * markerSize, y: increaseScale * markerSize, z: increaseScale * markerSize }, 0)
            .to(glowChild.scale, { x: increaseScale * glowSize, y: increaseScale * glowSize, z: increaseScale * glowSize }, 0)
            .to(glowMaterial, { opacity: 1 }, 0);

          j++;
          const tl21 = gsap.timeline({defaults: {ease: 'power2.inOut'}});
          tl21
            .to(earthGroup.position, { x: 7 }, 0)
            .to(pathGroup.rotation, { y: rotationLocation[1] }, 0)
            .to(markerGroup.rotation, { y: rotationLocation[1] }, 0)
            .to(lightsMesh.rotation, { y: rotationLocation[1] }, 0)
            .to(earthMesh.rotation, { y: rotationLocation[1] }, 0)
            .to(cloudsMesh.rotation, { y: rotationLocation[1] }, 0)
            // .to(lineMaterialColor, {
            //   r: 0,
            //   g: 0,
            //   b: 0,
            // }, 0)
            .to(markerChild.scale, { x: increaseScale * markerSize, y: increaseScale * markerSize, z: increaseScale * markerSize }, 0)
            .to(glowChild.scale, { x: increaseScale * glowSize, y: increaseScale * glowSize, z: increaseScale * glowSize }, 0)
            .to(glowMaterial, { opacity: 1 }, 0);
          tl2.add(tl21);           

          const tl22 = gsap.timeline({defaults: {ease: 'power2.inOut'}});
          tl22
            .to(earthGroup.position, { x: -7 }, 0)
            .to(pathGroup.rotation, { y: rotationLocation[2] }, 0)
            .to(markerGroup.rotation, { y: rotationLocation[2] }, 0)
            .to(lightsMesh.rotation, { y: rotationLocation[2] }, 0)
            .to(earthMesh.rotation, { y: rotationLocation[2] }, 0)
            .to(cloudsMesh.rotation, { y: rotationLocation[2] }, 0)
          tl2.add(tl22);

          const tl23 = gsap.timeline({defaults: {ease: 'power2.inOut'}});
          tl23
            .to(earthGroup.position, { x: 7 }, 0)
            .to(pathGroup.rotation, { y: rotationLocation[3] }, 0)
            .to(markerGroup.rotation, { y: rotationLocation[3] }, 0)
            .to(lightsMesh.rotation, { y: rotationLocation[3] }, 0)
            .to(earthMesh.rotation, { y: rotationLocation[3] }, 0)
            .to(cloudsMesh.rotation, { y: rotationLocation[3] }, 0)
          tl2.add(tl23);

          const tl24 = gsap.timeline({defaults: {ease: 'power2.inOut'}});
          tl24
            .to(earthGroup.position, { x: -7 }, 0)
            .to(pathGroup.rotation, { y: rotationLocation[4] }, 0)
            .to(markerGroup.rotation, { y: rotationLocation[4] }, 0)
            .to(lightsMesh.rotation, { y: rotationLocation[4] }, 0)
            .to(earthMesh.rotation, { y: rotationLocation[4] }, 0)
            .to(cloudsMesh.rotation, { y: rotationLocation[4] }, 0)
          tl2.add(tl24);

          const tl25 = gsap.timeline({defaults: {ease: 'power2.inOut'}});
          tl25
            .to(earthGroup.position, { x: 7 }, 0)
            .to(pathGroup.rotation, { y: rotationLocation[5] }, 0)
            .to(markerGroup.rotation, { y: rotationLocation[5] }, 0)
            .to(lightsMesh.rotation, { y: rotationLocation[5] }, 0)
            .to(earthMesh.rotation, { y: rotationLocation[5] }, 0)
            .to(cloudsMesh.rotation, { y: rotationLocation[5] }, 0)
          tl2.add(tl25);

          const tl26 = gsap.timeline({defaults: {ease: 'power2.inOut'}});
          tl26
            .to(earthGroup.position, { x: -7 }, 0)
            .to(pathGroup.rotation, { y: rotationLocation[6] }, 0)
            .to(markerGroup.rotation, { y: rotationLocation[6] }, 0)
            .to(lightsMesh.rotation, { y: rotationLocation[6] }, 0)
            .to(earthMesh.rotation, { y: rotationLocation[6] }, 0)
            .to(cloudsMesh.rotation, { y: rotationLocation[6] }, 0)
          tl2.add(tl26);

          tl2.to(earthGroup.position, { y: 30 })

          masterTimeline.add(tl1).add(tl2, `+=0`);
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

    // let prevTime = performance.now();

    const animate = () => {

     // Animation + Speed Correction //
      // const currentTime = performance.now();
      // const deltaTime = (currentTime - prevTime) / 1000;
      // prevTime = currentTime;
    
      // if(!stoppedRotating){
      //   pathGroup.rotation.y = markerGroup.rotation.y = lightsMesh.rotation.y = earthMesh.rotation.y += rotationSpeed * deltaTime;
      //   cloudsMesh.rotation.y += (rotationSpeed * 1.4) * deltaTime;
      // }

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

      <img src="./assets/images/birds.svg" className="bg"/>

      {/* Conditionally render sections based on loading state */}
      {!isLoading && (
        <>
          <section className="section-two">
            <div className="align-right">
              <p>
                My maternal grandparents both moved to Tokyo to attend university. They met in Tokyo and eventually decided to move to Ichikawa for better economic conditions and to have children.
              </p>
            </div>
          </section>
          <section className="section-three">
          <div className="align-left">
              <p>
                After my mother was born, my maternal grandparents moved with her to Toyama, my maternal grandfather's hometown. Here, they started a business and raised my mother.
              </p>
            </div>
          </section>
          <section className="section-four">
          <div className="align-right">
              <p>
                Transitioning to my father's side of the family, my paternal grandfather was born in Darby, Pennsylvania, and my paternal grandmother was born in Boston. After meeting eachother and having children, they moved around to various locations for my grandfather's work at Locheed.
              </p>
            </div>
          </section>
          <section className="section-five">
          <div className="align-left">
              <p>
                They moved to various locations in the US using a combination of airplanes and cars. First, they moved to Valencia, California. Then, they moved to Medway, Massachusetts. Lastly, they migrated to Denton and then to Arlington where my father was raised.
              </p>
            </div>
          </section>
          <section className="section-six">
          <div className="align-right">
              <p>
                After being raised in Arlington (my father actually went to Martin), my father migrated to Austin, where he stayed for a few years to attend college.
              </p>
            </div>
          </section>
          <section className="section-seven">
          <div className="align-left">
              <p>
                Eventually, my father went to Japan to improve his Japanese speaking ability. Around the same time, my mother was living in Tokyo after attending a pharmacy school. 
              </p>
            </div>
          </section>
          <section className="section-eight">
          <div className="align-right">
              <p>
                All of this has lead up to where I am today. My parents eventually moved to Fort Worth and had my brother and I. After a few years, my family moved to Mansfield due to the better access to education.
              </p>
            </div>
          </section>
          <section className="section-nine">
          <div>
              <h2>What are/were the occupations of all your maternal and paternal grandparents?</h2>
              <h3>My maternal grandmother was a piano teacher; my maternal grandfather was a nuclear power plant engineer; my paternal grandmother was a dietition; my paternal grandfather was an electrical engineer.</h3>
              <h2>What were push/pull factors if your grandparents moved around or stayed in one place?</h2>
              <h3>My maternal grandfather and grandmother both moved from their hometowns to Tokyo in order to pursue higher education (pull). After meeting each other, they migrated to Ichikawa, a suburb of Tokyo, due to the lower costs of items (economic push/pull), while still being able to work in the urban city of Toyko. Once they had my mother, they moved to Toyama after a few years because they wanted to start a business in my grandfather’s hometown.</h3>
              <h3>On my father’s side of the family, my paternal grandfather migrated throughout the US for his work at Lockheed Martin as an electrical engineer. My paternal grandmother, on the other hand, was originally from Massachusetts, so she remained there until she met my grandfather, so she followed him for his work.</h3>
              <h2>What are the occupations of your parents?</h2>
              <h3>My father is a police officer, and my mother does real estate work.</h3>
              <h2>What were the push/pull factors if your parents moved around or stayed in one place?</h2>
              <h3>When my parents were younger, they primarily moved for education or economic reasons (mostly pull). Both of my parents migrated to receive a university degree, and my father moved to Japan for a few years to bolster his Japanese skills (pull). After my parents met, they decided to move to Texas due to better economic opportunities and a better environment for raising children. (push from Japan)</h3>
              <h2>What mode of transportation was used in any of the above moves?</h2>
              <h3>The main modes of transportation that were used during each move were car, train, and airplane. Each move within Japan was made by using a combination of trains (the primary mode of transportation due to space constraints) and cars to effectively transport personal belongings. My father’s side of the family made many of their moves by using cars and airplanes depending on the distance traveled. When my father and mother were moving from Japan to the US, the only viable mode of transportation was an airplane.</h3>
              <h2>Interregional Migration (Internal):</h2>
              <ul>
                <li>The move from Toyama to Tokyo is considered interregional migration because Toyama is in a region northwest of Tokyo.</li>
                <li>Similar to the move from Toyama, the move from Mito to Tokyo is also considered interregional migration because Mito is in a different region north of Tokyo, the capital of Japan, but it is still within the same country.</li>
                <li>Ichikawa to Toyama</li>
                <li>Boston, Massachusetts, to Valencia, California</li>
                <li>Valencia, California, to Medway, Massachusetts</li>
                <li>Medway, Massachusetts, to Arlington, Texas</li>
                <li>The move from Arlington to Austin could be considered intraregional in some cases; however, they are quite far apart, and they are very different from one another, so it is better categorized as a form of interregional migration.</li>
              </ul>

              <h2>International Migration (Internal):</h2>
              <ul>
                <li>The move from Arlington, Texas, to Tokyo, Japan, is considered international migration because you are moving between countries, from the United States to Japan.</li>
                <li>Moving from Tokyo, Japan, to Fort Worth, Texas, is also a form of international migration.</li>
              </ul>

              <h2>Intraregional Migration: </h2>
              <ul>
                <li>Ichikawa is a suburb of Tokyo, so the move from Tokyo to Ichikawa (suburbanization) is considered a form of intraregional migration because you are still in the same region.</li>
                <li>The move from Fort Worth to Mansfield is considered intraregional migration because you are moving within the DFW region.</li>
              </ul>

              &nbsp;

              <h3>
                <b>Note:</b> Light Yellow = Maternal Grandmother, Light Green = Maternal Grandfather, Orange = Paternal Grandfather, Dark Blue = Paternal Grandmother, Purple = Mother, Blue = Father, Red = Me, and multiple family members in one move will result in a mixed color.
              </h3>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

// App Export For Connections With Other Scripts //
export default App;