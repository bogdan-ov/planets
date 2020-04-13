const cursor = $(".cursor");
const cursor_text = $(".cursor-text");
const cursor_eventer = {
    all: $(".cursor_resize, .button"),
    resize: $(".cursor_resize, .button")
}

let mouse = {
    x: 0,
    y: 0,
    center: {
        x: 0,
        y: 0
    }
};

// Raycasting
const raycaster = new THREE.Raycaster;
const _mouse = new THREE.Vector2;

onmousemove = e=> {
    cursor_text.css({
        transform: "translate(-50%, 10px)",
        opacity: 0
    });

    mouse.x = e.clientX;
    mouse.y = e.clientY;

    mouse.center.x = e.clientX - innerWidth / 2;
    mouse.center.y = e.clientY - innerHeight / 2;

    cursor.css({
        left: mouse.x + "px",
        top: mouse.y + "px"
    });
    cursor_text.css({
        left: mouse.x + "px",
        top: (mouse.y - 80) + "px"
    });

    _mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
	_mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;

}

cursor_eventer.all.each(ce=> {

    onHover(cursor_eventer.all.eq(ce), ()=> {

        cs({
            transform: "translate(-50%, -50%) scale(2)",
            opacity: .2
        });

    });

});

function cs(styles) {

    cursor.css(styles);

}
function onHover(selector, func) {

    selector.on("mouseover", func);
    selector.on("mouseout", ()=> {

        cs({
            transform: "",
            opacity: ""
        })

    });

}