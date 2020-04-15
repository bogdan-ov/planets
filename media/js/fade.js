const fades = $(".fade");

function fadeUpdate() {

    fades.each(fd=> {
        fade = fades.eq(fd);

        $(".fade.fade_page" + page).css({
            transform: "translateY(-30px)",
            opacity: 0
        });

        $(".fade.fade_page" + (page-1)).css({
            transform: "translateY(-30px)",
            opacity: 0
        });

        setTimeout(()=> {
            $(".fade.fade_page" + page).css({
                transform: "translateY(0)",
                opacity: 1
            });
        }, 1000);

    });

}