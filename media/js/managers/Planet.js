class Planet {
    constructor(radius, color="#060f18") {

        this.mesh = new THREE.Mesh(
            new THREE.SphereGeometry(radius, 32, 32),
            new THREE.MeshLambertMaterial({ color: color })
        );
        scene.add(this.mesh);

    }
}