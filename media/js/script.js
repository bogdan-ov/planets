function init() {

    const planet = new Planet(2);

    let sputns = [];
    for (let count = 5; count --;) {

        sputns.push(
            new Planet(.2)
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

    let delta = 0;
    loop();
    function loop() {
        requestAnimationFrame(loop);
        delta += .1;

        update();
        render();
    }
    function update() {

        let speed = delta / 50;
        planet.mesh.position.set(
            sin(speed) * 30,
            0,
            cos(speed) * 30
        );
        for (let sputn in sputns) {
        
            sputns[sputn].mesh.position.set(
                sin(sputn + speed) * 3 + planet.mesh.position.x,
                cos(speed) * 3 + planet.mesh.position.y,
                cos(sputn - speed) * 3 + planet.mesh.position.z,
            );
        
        }

        camera.position.set(
            planet.mesh.position.x + mouse.center.x / 1000, 
            planet.mesh.position.y + 2 - mouse.center.y / 1000,
            planet.mesh.position.z + 5
        );
        
        camera.lookAt(planet.mesh.position);
        sun.lookAt(camera.position);

    }
    function render() {

        // barier.render(scene, camera);
        composer.render(.1);
    }

}

if (win.width() > min_win_width)
    init();