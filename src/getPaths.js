import * as THREE from "three";

export default function getPaths(start, end, color) {
    const toCartesian = (lat, lon, radius) => {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);
        return new THREE.Vector3(
          -radius * Math.sin(phi) * Math.cos(theta),
           radius * Math.cos(phi),
           radius * Math.sin(phi) * Math.sin(theta)
        );
    };

    const start = toCartesian(lat1, lon1, R);
    const end = toCartesian(lat2, lon2, R);
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    mid.setLength(R * 1.1);  // Raise the midpoint for a curved effect
    const curve = new THREE.CatmullRomCurve3([start, mid, end]);    

    const points = curve.getPoints(50);  // Increase for smoother lines
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: 0.6 });
    
    const line = new THREE.Line(geometry, material);
    return line;
  }