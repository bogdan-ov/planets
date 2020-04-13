let page = 1;

$("#explore").on("click", ()=> {
    page = page === 1 ? 2 : 1;
});

function init() {

    const planet = new Planet(2);

    let sputns = [];
    let descs = [
        "Qa15", "Qdmb19",
        "Qb13", "Edang404",
        "Gdoo2"
    ]
    for (let count = 0; count ++ < 5;) {

        sputns.push(
            new Planet(.2, "sputn", descs[count-1])
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

        planet.mesh.rotateY(.002);
        if (page === 1) {

            planet.mesh.position.set(
                sin(speed) * 30,
                0,
                cos(speed) * 30
            );

        }
        if (page === 2) {

            planet.mesh.position.set(
                sin(speed + 20) * 30,
                0,
                cos(speed + 20) * 30
            );

        }

        for (let sputn in sputns) {

            let a = sputn * (PI / (sputns.length / 2)) + speed;
        
            sputns[sputn].mesh.position.set(
                sin(a) * 3 + planet.mesh.position.x,
                sin(-a) * 3 + planet.mesh.position.y,
                cos(a) * 3 + planet.mesh.position.z,
            );
        
        }

        // camera.position.set(
        //     planet.mesh.position.x + mouse.center.x / 1000, 
        //     planet.mesh.position.y + 2 - mouse.center.y / 1000,
        //     planet.mesh.position.z + 5
        // );
        camera.position.x += (planet.mesh.position.x - (camera.position.x + mouse.center.x / 500)) / 50;
        camera.position.y += ((planet.mesh.position.y + 2) - (camera.position.y - mouse.center.y / 500)) / 50;
        camera.position.z += ((planet.mesh.position.z + 5) - camera.position.z) / 50;
        
        camera.lookAt(planet.mesh.position);
        sun.lookAt(camera.position);

        // Raycasting
        raycaster.setFromCamera(_mouse, camera);

        let intersects = raycaster.intersectObjects(scene.children);

        for ( var intr = intersects.length; intr --;) {
            let inters = intersects[intr];

            if (inters.object.name === "sputn") {

                cursor_text.css({
                    transform: "translate(-50%, 0)",
                    opacity: 1
                });

                cursor_text.text(inters.object.desc);

                break;
            }

        }

    }
    function render() {

        // barier.render(scene, camera);
        composer.render(.1);
    }

}

if (win.width() > min_win_width)
    init();