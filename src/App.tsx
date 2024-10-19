import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { useEffect } from "react";
import { getFresnelMat } from "/src/getFresnelMat.js";
import getStarfield from "/src/getStarfield.js";
import './App.css' 

const App = () => {
  useEffect(() => {
    
    // Set up scene, camera, and renderer
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

    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = -23.4 * Math.PI / 180
    scene.add(earthGroup);

    const loader = new THREE.TextureLoader();
    const earthMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(10, 12),
      new THREE.MeshPhongMaterial({
        map: loader.load("src/assets/textures/earthmap10k.jpg"),
        specularMap: loader.load("src/assets/textures/earthspec10k.jpg"),
        bumpMap: loader.load("src/assets/textures/earthbump10k.jpg"),
        bumpScale: 0.01,
      })
    );
    earthGroup.add(earthMesh);

    const lightsMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(10, 12), 
      new THREE.MeshBasicMaterial({
        map: loader.load("src/assets/textures/earthlights10k.jpg"),
        blending: THREE.AdditiveBlending,
      })
    );
    earthGroup.add(lightsMesh);

    const cloudsMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(10, 12),
      new THREE.MeshStandardMaterial({
        map: loader.load("src/assets/textures/earthhiresclouds4K.jpg"),
        alphaMap: loader.load('src/assets/textures/earthcloudmaptrans.jpg'),
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

    const controls = new OrbitControls(camera, renderer.domElement);

    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;
      
      camera.position.z = t * 0.1 + 50;
      camera.position.x = t * -0.2; // 
      camera.rotation.y = t * -0.002;
    }
    moveCamera();
    document.body.onscroll = moveCamera;

    const animate = () => {
      lightsMesh.rotation.y = earthMesh.rotation.y += 0.001;
      cloudsMesh.rotation.y += 0.0012
      stars.rotation.y -= 0.0002;

      controls.update();

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

  /*return (
    <main>
      <header>
        <h1>Liam Bray</h1>
        <p>Welcome to my website!</p>
      </header>
      
      <blockquote>
        <p>I like making stuff and putting it on the internet</p>
      </blockquote>
  
      <section>
        <h2>Work History</h2>
        
        <div>
          <h3>McDonalds</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
        <div>
          <h3>Burger King</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
        <div>
          <h3>Taco Bell</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
      </section>
  
      <blockquote>
        <p>Thanks for watching!</p>
      </blockquote>
    </main>
  );*/
  
  return (null);
};
  
export default App;
