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
  arcAlt: number;
  color: string;
}

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Define Static Variables //
const textureLoader = new THREE.TextureLoader();

const earthMesh = new THREE.Mesh(
  new THREE.IcosahedronGeometry(10, 12),
  new THREE.MeshPhongMaterial({
    map: textureLoader.load("src/assets/textures/earthmap4k.jpg"),
    specularMap: textureLoader.load("src/assets/textures/earthspec4k.jpg"),
    bumpMap: textureLoader.load("src/assets/textures/earthbump4k.jpg"),
    bumpScale: 10,
  })
);

const lightsMesh = new THREE.Mesh(
  new THREE.IcosahedronGeometry(10, 12), 
  new THREE.MeshBasicMaterial({
    map: textureLoader.load("src/assets/textures/earthlights4k.jpg"),
    blending: THREE.AdditiveBlending,
  })
);

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

const glowMesh = new THREE.Mesh(
  new THREE.IcosahedronGeometry(10, 12),
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

    earthGroup.add(earthMesh);
    earthGroup.add(lightsMesh);
    earthGroup.add(cloudsMesh);
    earthGroup.add(glowMesh);

    const sunlight = new THREE.DirectionalLight(0xFFFFFF, 2);
    sunlight.position.set(-2, -0.5, 2.6);
    scene.add(sunlight);

    // const stars = getStarfield();
    // scene.add(stars);

    const createPaths = () => {
      map.forEach((location: MapData) => {
        console.log(`City: ${location.city}, Country: ${location.country}`);
      });

      network.forEach((path: NetworkData) => {
        const fromLocation = map.find((location: MapData) => location.code === path.from);
        const toLocation = map.find((location: MapData) => location.code === path.to);

        console.log(
            `From: ${fromLocation ? fromLocation.city : 'Unknown'}, To: ${toLocation ? toLocation.city : 'Unknown'}`
        );
      });

      // const paths = getPaths();
    }
    createPaths();

    return scene;
  };

  //  Mounted Once And Only Reruns When The Dependency Array Changes //
  useEffect(() => {
    const scene = createScene();
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
  
    // GSAP Animation //
    const updateTL = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-two",
          endTrigger: ".section-five",
          scrub: true,
        },
      });
    
      /* GSAP Crashcourse /*

        gsap.from('.className', { duration: 1, y: '-100%', ease: 'bounce'})

        animates every component that has the .className class
        from the state that you give it to the state that it is
        written in your code, this is mostly used for animations
        when the website first loads in

        the line above would animate from the bottom of the page
        to the top with a duration of 1

        ease has different preset curves from GSAP

        the stagger property staggers each element in each class

        the rest of these should be self-explanatory

        gsap.from('.class2', { duration: 1, opacity: 0, delay: 1 })
        gsap.from('.class3', { duration: 2, x: '-100vw', delay: 1, ease: 'power2.in' })

        --------------------------------------------------------

        gsap.to('.classTo', {duration: 1, y: 0, ease: 'elastic', delay: 2.5 })

        animates to a certain position if you apply a transform to the class
        .class2 {
          transform: translateY(100%);
        }

        --------------------------------------------------------

        gsap.fromTo('.class5', 
                    { opacity: 0, scale: 0, rotation: 720 }, 
                    { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 })

        this is just a better version of gsap.to
        because it allows you to specify the start
        and end values in one line of code

        --------------------------------------------------------

        const obj = { x: 0 }
        gsap.to(obj, { x: 100 , onUpdate: () => console.log(obj.x) })

        onUpdate: () => runs every time you update, so it can be good for SVGs

        --------------------------------------------------------

        A timeline helps you line up all of these animations and set defaults

        const timeline = gsaptimeline( {defaults: { duration: 1 }} )
        timeline.from('.class1', { y: '-100%', ease: 'bounce' }).from('.nextClass' { opacity: 0, stagger: .5}, '<.5')

        the animation now has the default value of the timeline

        you can chain them together by just adding another .from after
        just remember that you can override things

        timelines also have absolute and relative delays from the previous item

        if you just write a number after all of the parameters, it is absolute
        if you use a carat, it references the animation in that direction
        in this example, you go .5 seconds after the previous animation

        you can easily reverse a timeline like so

        const button = document.querySelector('.button')

        button.addEventListener('click', () => {timeline.reverse()})

      */

      tl.to(scene.rotation, { y: 1.65 })
        .to(scene.rotation, { y: 3.1 });

      return tl;
    };
    const timeline = updateTL();

    // Helper Functions //
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

    // Cleans Up After The Animation Loop //
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      timeline.kill();
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
      scene.clear();
      document.body.removeChild(renderer.domElement);
    };
  }, []); // Add Dependencies (Items That Should Rerun UseEffect() Here)

  // HTML Return Statement //
  return (
    <main>
      <section className="section-one">
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