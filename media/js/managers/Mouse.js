let mouse = {
    x: 0,
    y: 0,
    center: {
        x: 0,
        y: 0
    }
};

onmousemove = e=> {

    mouse.x = e.clientX;
    mouse.y = e.clientY;

    mouse.center.x = e.clientX - innerWidth / 2;
    mouse.center.y = e.clientY - innerHeight / 2;

}