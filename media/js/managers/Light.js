const ambient_light = new THREE.AmbientLight("#fff", .5);
scene.add(ambient_light);

const light = new THREE.PointLight("#fff", 1, 100);
light.position.set(1, 8, 2);
scene.add(light);