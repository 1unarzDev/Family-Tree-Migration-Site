import * as THREE from 'three';

function getPaths(path, fromLocation, toLocation, globeRadius, primeMeridianOffset = 200) {
    // Helper to convert latitude and longitude to Cartesian coordinates
    const latLongToCartesian = (lat, lon, radius) => {
        const phi = (90 - lat) * (Math.PI / 180);  // Convert latitude to radians
        const theta = (lon + 180 + primeMeridianOffset) * (Math.PI / 180);  // Adjust longitude with prime meridian offset
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);
        return new THREE.Vector3(x, y, z);
    };

    // Create icosahedron markers at each location
    const createLocationMarker = (location) => {
        const geometry = new THREE.IcosahedronGeometry(0.25, 2);
        const material = new THREE.MeshBasicMaterial({ color: location.color });
        const marker = new THREE.Mesh(geometry, material);

        // Position the marker at the location
        const position = latLongToCartesian(location.latitude, location.longitude, globeRadius);
        marker.position.copy(position);

        return marker;
    };

    // Create markers for each location
    const marker1 = createLocationMarker(fromLocation);
    const marker2 = createLocationMarker(toLocation);

    // Calculate positions for the arc line
    const start = latLongToCartesian(fromLocation.latitude, fromLocation.longitude, globeRadius);
    const end = latLongToCartesian(toLocation.latitude, toLocation.longitude, globeRadius);

    // Generate points for the arc using arcHeight
    const midPoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    const arcVector = midPoint.clone().normalize().multiplyScalar(globeRadius + path.arcHeight);
    
    // Create points along the arc
    const curve = new THREE.QuadraticBezierCurve3(start, arcVector, end);
    const points = curve.getPoints(50);  // Adjust density as desired
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Create the line material and mesh
    const material = new THREE.LineBasicMaterial({ color: path.color });
    const arcLine = new THREE.Line(geometry, material);

    // Return the arc line and location markers as requested
    return { arcLine, marker1, marker2 };
}

export { getPaths };