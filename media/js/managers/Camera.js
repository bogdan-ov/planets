camera.position.z = 5;

function moveTo(x, y, z, speed=50, offset={x: 0, y: 2, z: 5}) {

    camera.position.x += ((x + offset.x) - (camera.position.x + mouse.center.x / 500)) / speed;
    camera.position.y += ((y + offset.y) - (camera.position.y - mouse.center.y / 500)) / speed;
    camera.position.z += ((z + offset.z) - camera.position.z) / speed;

}
function easing(delta) {

    camera.position.y += sin(delta / 5) / 200;

}