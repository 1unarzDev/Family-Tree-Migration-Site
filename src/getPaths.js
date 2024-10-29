import * as THREE from 'three';

function getPaths(globeRadius, location1, location2 = null, path = null) {
    // Helper to convert latitude and longitude to Cartesian coordinates
    const latLongToCartesian = (lat, lon, radius) => {
        const phi = (90 - lat) * (Math.PI / 180);  // Convert latitude to radians
        const theta = (-lon + 180) * (Math.PI / 180);  // Adjust longitude with prime meridian offset
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);
        return new THREE.Vector3(x, y, z);
    };

    // Create icosahedron markers at each location
    const createLocationMarker = (location) => {
        // Generate a unique color or use location.color
        const markerColor = new THREE.Color(location.color); // Ensure you provide distinct colors
    
        // Create the geometry for the marker
        const geometry = new THREE.IcosahedronGeometry(0.1, 2);
        
        // Create a mesh material for the main color
        const material = new THREE.MeshBasicMaterial({ 
            color: markerColor,
            transparent: true,
            opacity: 0.9 // Adjust opacity for a subtle effect
        });
    
        const marker = new THREE.Mesh(geometry, material);
    
        // Create a glow effect using a second larger geometry
        const glowGeometry = new THREE.IcosahedronGeometry(0.15, 2); // Slightly larger
        const glowMaterial = new THREE.MeshBasicMaterial({ 
            color: markerColor, 
            transparent: true, 
            opacity: 0.5 // More transparent for a glowing effect
        });
    
        const glowMarker = new THREE.Mesh(glowGeometry, glowMaterial);
    
        // Position the markers
        const position = latLongToCartesian(location.latitude, location.longitude, globeRadius);
        marker.position.copy(position);
        glowMarker.position.copy(position);
    
        // Create a group to manage both the marker and its glow
        const group = new THREE.Group();
        group.add(glowMarker); // Add glow first
        group.add(marker); // Add main marker on top
    
        return group;
    };
    
    // Create markers for each location
    if (location2 == null) {
        const marker = createLocationMarker(location1);
        return marker;
    }

    // Calculate positions for the arc line
    const start = latLongToCartesian(location1.latitude, location1.longitude, globeRadius);
    const end = latLongToCartesian(location2.latitude, location2.longitude, globeRadius);

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
    return arcLine;
}

export { getPaths };