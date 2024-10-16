import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { useEffect } from "react";
import './App.css' 

const App = () => {
  useEffect(() => {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(25);

    document.body.appendChild(renderer.domElement);

    // Define an object (MeshStandardMaterial reacts to light, basic does not)
    const geometry = new THREE.TorusGeometry(10,3,16,100);
    const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
    
    // a type of light that is concentrated from one spot
    const pointLight = new THREE.PointLight(0xffffff, 80);
    pointLight.position.set(5,15,5);
    // lights up the whole environment
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(pointLight, ambientLight);

    // shows us where the lights are
    const lightHelper = new THREE.PointLightHelper(pointLight);
    // creates a grid along the xy plane
    const gridHelper = new THREE.GridHelper(200, 50);
    scene.add(lightHelper, gridHelper);

    // adds ability to interact with the scene
    const controls = new OrbitControls(camera, renderer.domElement);


    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial( { color: 0xffffff } )
      const star = new THREE.Mesh( geometry, material );

      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ));
      
      star.position.set(x, y, z);
      scene.add(star);
    }

    Array(200).fill().forEach(addStar);

    // animation function that continually runs and renders out the scene
    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;

      controls.update();

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function that runs when the component is unmounted
    return () => {
      renderer.dispose();  // Clean up the renderer to release WebGL resources
      scene.clear();       // Clear the scene (not mandatory, but it's good practice)
      document.body.removeChild(renderer.domElement);  // Remove the DOM element from the page
    };
  }, []);  // Empty dependency array, so the effect runs once when the component mounts

  return null;  // This component doesn't render any JSX, just the Three.js canvas
};

export default App;
