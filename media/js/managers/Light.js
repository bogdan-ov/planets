const ambient_light = new THREE.AmbientLight("#fff", .5);
scene.add(ambient_light);

const light = new THREE.PointLight("#fff", 1, 120);
// light.position.set(1, 8, 2);
light.castShadow = true;
light.shadow.camera.far = 500;

light.castShadow = true;
scene.add(light);
