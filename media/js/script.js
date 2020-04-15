function init() {

    const planet = new Planet(2);

    let text,
        text_geometry;
    const loader = new THREE.FontLoader();
    loader.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/droid/droid_sans_regular.typeface.json", font=> {

        text_geometry = new THREE.TextGeometry(
            "Hello", 
            {

                font: font,

                size: 1,
                height: 1,
            
            }
        );

    });
    
    text = new THREE.Mesh(
        text_geometry,
        new THREE.MeshLambertMaterial
    );
    // text.position.set(
    //     planet.position.x-2,
    //     planet.position.y,
    //     planet.position.z-2
    // );

    scene.add(text);

    let sputns = [];
    let types = [
        {
            name: "DNFooter",
            size: .2,
            bump: "1.jpg"
        },
        {
            name: "QAbout",
            size: .3,
            bump: "3.jpg"
        },
        {
            name: "NFeedbacks",
            size: .3,
            bump: "4.jpg"
        },
        {
            name: "QCommunication",
            size: .5,
            bump: "4.jpg"
        },
        {
            name: "NPortfolio",
            size: .4,
            bump: "3.jpg"
        },
    ]
    for (let count = 0; count ++ < 5;) {

        sputns.push(
            new Planet(types[count-1].size, "sputn", types[count-1].name, types[count-1].bump)
        );

    }

    let particles = [];
    for (let count = 60; count --;) {

        particles.push(
            new Particle(
                `particle${ Math.floor(random(1, 4)) }.png`,
                {
                    x: random(-40, 40),
                    y: random(-40, 40),
                    z: random(-40, 40)
                },
                "#04050c"
            )
        );

    }

    let 
        delta = 0,
        speed;
    loop();
    function loop() {
        requestAnimationFrame(loop);
        delta += .1;
        speed = delta / 50;

        update();
        render();
    }
    function update() {
        
        if (page === 1) solarMove();

        moveTo(
            planet.mesh.position.x,
            planet.mesh.position.y,
            planet.mesh.position.z
        );
        
        camera.lookAt(planet.mesh.position);
        easing(delta);

        sun.lookAt(camera.position);

        // Raycasting
        raycaster.setFromCamera(_mouse, camera);

        let intersects = raycaster.intersectObjects(scene.children);

        for ( var intr = intersects.length; intr --;) {
            let inters = intersects[intr];

            if (inters.object.name === "sputn" && page === 1) {

                cursor_text.css({
                    transform: "translate(-50%, 0)",
                    opacity: 1
                });

                cursor_text.text(inters.object.desc);

                break;
            }

        }

    }
    function solarMove() {

        for (let sputn in sputns) {

            let a = sputn * (PI / (sputns.length / 2)) + speed;
        
            sputns[sputn].mesh.position.set(
                sin(a) * 3 + planet.mesh.position.x,
                sin(-a) * 3 + planet.mesh.position.y,
                cos(a) * 3 + planet.mesh.position.z,
            );
        
        }

        planet.mesh.rotateY(.002);

        planet.mesh.position.set(
            sin(speed) * 30,
            0,
            cos(speed) * 30
        );

    }
    function render() {        
        composer.render(.1);
    }

}

if (win.width() > min_win_width)
    init();