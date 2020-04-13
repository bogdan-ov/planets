class Particle {
    constructor(image, {x, y, z}, color="#060f18") {

        this.sprite = new THREE.Sprite( 
            new THREE.SpriteMaterial({
                map: new THREE.TextureLoader().load("media/img/" + image),
                color: color
            })
        );

        let scale = random(.2, 1.5);
        this.sprite.scale.set(
            scale,
            scale,
            scale
        );
        this.sprite.position.set(
            x, y, z
        );
        this.sprite.rotation.set(
            random(-PI, PI),
            random(-PI, PI),
            random(-PI, PI)
        );

        scene.add(this.sprite);

    }
}