const 
    audio = document.querySelector("#audio"),
    audio_button = $(".audio_button"),
    waves = $(".wave");
let playing = true;

audio_button.on("click", ()=> {
    playing = !playing;

    if (playing)
        audio.play()
    else
        audio.pause()

});

let dt = 0;
setInterval(()=> {
    dt += playing ? .1 : 0;

    waves.each(wv=> {

        let wave = waves.eq(wv);
        let ease = (sin(wv * 9 + dt / 2) + 2) * 7;

        if (playing)
            wave.css({
                r: ease
            });

    });

}, 1000/60);