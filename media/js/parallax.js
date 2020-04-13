function init() {

    const parallaxes = $(".parallax");

    parallaxes.each(par=> {
        win.on(
            "mousemove",
            ()=> {

                parallaxes.eq(par).css({
                    transform: `translate(
                        ${
                            -mouse.center.x / 30
                        }px, 
                        ${
                            -mouse.center.y / 30
                        }px)`
                })

            }
        );
    });

}

if (win.width() > min_win_width)
    init();