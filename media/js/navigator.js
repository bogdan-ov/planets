let page = 1;
const pages = {
    welcome: $(".section:nth-child(1)"),
    explore: $(".section:nth-child(2)")
}

const explore_button = $("#explore");

const list_item_count = 5;
const nav_list_items = $(".nav-item");

nav_list_items.each(nli=> {
    nav_list_items.eq(nli).on("mouseover", ()=> {

        $(".choose_page .process .bar").css({
            height: ((nli / (list_item_count - 1)) * 100) + "%"
        })

    });
});

explore_button.on("click", ()=> {

    page = 2;

    pageUpdate();

});

function pageUpdate() {

    fadeUpdate();

    setTimeout(()=> {
        $(".main").scrollLeft(win.width() * (page - 1))
    }, 500);

}

// Nav
// const nav = $(".nav");
// const list = $(".nav .list-ver")
// let scroller = {
//     now: 0,
//     need: 0
// };
// let choosed_page = "";

// // Loop
// loop();
// function loop() {
//     requestAnimationFrame(loop);

//     scroller.now += (scroller.need - scroller.now) / 20;

//     scroller.need < 0 ? scroller.need = 0 : 0;
//     scroller.need > list.width() - win.width() ? scroller.need = list.width() - win.width() : 0;
    
//     list.css({
//         transform: `skewX(${ -(scroller.need - scroller.now) / 20 }deg)`
//     });

//     nav.scrollLeft(scroller.now);
// }

// nav.on("wheel", e=> {
    
//     scroller.need += e.originalEvent.deltaY || e.originalEvent.deltaX;
    
// });
const nav = $(".nav");

onmousedown = ()=> {
    mouse.down = true;

    document.onmousemove = e=> {
    
        if (e.movementY < 10 && mouse.down) {
            console.log(e.movementY);
            nav.css({
                "z-index": 1111,
                opacity: 1
            });

        }

    };
    onmouseup = ()=> {
        mouse.down = false;
        nav.css({
            "z-index": "",
            opacity: ""
        });
    }

};