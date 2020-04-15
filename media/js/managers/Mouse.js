const cursor = $(".cursor");
const cursor_text = $(".cursor-text");
const cursor_eventer = {
    all: $(".cursor_resize, .cursor_connecter, .button"),
    resize: $(".cursor_resize, .button"),
    connecter: $(".cursor_connecter")
}

let mouse = {
    x: 0,
    y: 0,
    center: {
        x: 0,
        y: 0
    },
    movement: {
        x: 0,
        y: 0
    },
    down: false
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

    mouse.movement.x = e.movementX;
    mouse.movement.y = e.movementY;

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
    let con = cursor_eventer.connecter.eq(ce);

    onHover(cursor_eventer.resize.eq(ce), ()=> {

        cs({
            transform: "translate(-50%, -50%) scale(2)",
            opacity: .2
        });

    });
    onHover(cursor_eventer.connecter.eq(ce), ()=> {

        con.css({
            transition: "transform .3s"
        });

    });
    onMove(cursor_eventer.connecter.eq(ce), ()=> {

        cs({
            transform: "translate(-50%, -50%) scale(2.5)",
            opacity: .2
        });

        con.css({
            transform: `translate(${
                (mouse.x - (con.offset().left + con.width() / 2)) / 1.5
            }px, ${
                (mouse.y - (con.offset().top + con.height() / 2)) / 1.5
            }px)`
        })

    }, ()=> {

        let con = cursor_eventer.connecter.eq(ce);
        con.css({
            transform: `translate(0px, 0px)`,
            transition: ".3s"
        });

        cs({
            transform: "",
            opacity: ""
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
function onHoverDef(selector, func, func_invert) {

    selector.on("mouseover", func);
    selector.on("mouseout", func_invert);

}
function onMove(selector, func, reverse_func=false) {

    let rf = reverse_func ? reverse_func : ()=> {

        cs({
            transform: "",
            opacity: ""
        })

    }

    selector.on("mousemove", func);
    selector.on("mouseout", rf);

}