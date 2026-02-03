const capas = document.querySelectorAll(".capa");

let music = new Audio(undefined);
let label = null;

capas.forEach((capa) => {
    capa.addEventListener("click", (e) => {
        tocarMusica(e)
    })
    capa.addEventListener("keypress", (e) => {
        // console.log(e.key);
        if (e.key === "Enter") tocarMusica(e)
    })
})

function tocarMusica(e) {
    let element = e.target;
    let label = element.nextElementSibling.nextElementSibling
    let title = label.nextElementSibling
    let lirycs = title.nextElementSibling

    try {
        if (music.paused === false) {
            // se a musica estiver tocando colocará em modo pause
            music.pause()
            music.classList.remove("playing")
            music.parentElement.classList.remove("playing")
            label.innerText = "play"
            console.log("stoped");
            music.load()
            console.log("loaded");
            label.innerText = "play"
            title.classList.add("hide")
            lirycs.classList.add("hide")
        } else {
            // fazendo musica tocar
            music = element.nextElementSibling;
            music.play()
            music.parentElement.classList.add("playing")
            title.classList.remove("hide")
            lirycs.classList.remove("hide")
            label.innerText = "pause"
            console.log("playing");
        }
    } catch (error) {
        console.log("Aconteceu algum erro tente Novamente em 3 segundos.")
    }
    console.clear()
    hide()
}

function hide() {
    let divPlaying = document.querySelectorAll(".music.playing");
    let divNotPlaying = document.querySelectorAll(".music:not(.playing)");

    if (divPlaying.length > 0) {
        divNotPlaying.forEach((div)=>{
            div.classList.add("hide")
        })
    } else {
        divNotPlaying.forEach((div)=>{
            div.classList.remove("hide")
        })

    }
}