import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { useEffect } from "react";
import { gsap } from "gsap";

// @ts-ignore
import { getFresnelMat } from "/src/getFresnelMat.js";
// @ts-ignore
import getStarfield from "/src/getStarfield.js";

import './App.css' 

const App = () => {
  useEffect(() => {
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

    document.body.appendChild(renderer.domElement);
    renderer.domElement.classList.add('top-0', 'left-0', 'w-full', 'h-full', 'z-0');
    Object.assign(renderer.domElement.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '-1'
    });


    const fontLoader = new FontLoader();
    fontLoader.load(
      'src/assets/fonts/gentilis_regular.typeface.json', 
      function (font) {
        const textGeometry = new TextGeometry(
          'Will this text show up as it is supposed to? Find out today!', {
          font: font,
          size: 1,
          height: 0.1
        });

      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);

      textMesh.position.set(0, 20, 15);
      scene.add(textMesh); 
    });


    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = -23.4 * Math.PI / 180
    scene.add(earthGroup);

    const textureLoader = new THREE.TextureLoader();
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
    )
    cloudsMesh.scale.setScalar(1.01);
    earthGroup.add(cloudsMesh);

    const glowMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(10, 12),
      getFresnelMat()
    );
    glowMesh.scale.setScalar(1.012);
    earthGroup.add(glowMesh);

    const stars = getStarfield({numStars: 2000});
    scene.add(stars);

    const sunlight = new THREE.DirectionalLight(0xFFFFFF, 2);
    sunlight.position.set(-2,0.5,1.5);
    scene.add(sunlight);

    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;
      
      camera.position.z = t * 0.1 + 50;
      camera.position.x = t * -0.2;
      camera.rotation.y = t * -0.002;
    }
    moveCamera();
    document.body.onscroll = moveCamera;

    function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		}
		window.addEventListener("resize", onWindowResize);

    const controls = new OrbitControls( camera, renderer.domElement );
    const animate = () => {
      lightsMesh.rotation.y = earthMesh.rotation.y += 0.001;
      cloudsMesh.rotation.y += 0.0012
      stars.rotation.y -= 0.0002;

      controls.update;

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
      scene.clear();
      document.body.removeChild(renderer.domElement);
    };  
  }, []);

  return (
    <main>
      <section className="section-one">
      </section>

      <section className="section-two">
      </section>

      <section className="section-three">
      </section>

      <section className="section-four">
      </section>

      <section className="section-five">
      </section>
    </main>
  );
};
  
export default App;
