class Planet {
    constructor(radius, name="main_planet", desc="none", color="#060b18") {

        this.mesh = new THREE.Mesh(
            new THREE.SphereGeometry(desc !== "Edang404" ? radius : .5, 32, 32),
            new THREE.MeshPhongMaterial({
                color: desc !== "Edang404" ? color : "#000",
                map: new THREE.TextureLoader().load("media/img/Sand_005_baseColor.jpg"),
                bumpMap: new THREE.TextureLoader().load("media/img/dirt_weeds01_normal.jpg")
            })
        );
        this.mesh.name = name;
        this.mesh.desc = desc;

        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;

        scene.add(this.mesh);

    }
}