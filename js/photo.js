const secImg = document.getElementById("secImg")


for (let index = 1; index <= 95; index++) {
    let img = document.createElement("img")
    img.setAttribute("src", `./assets/images/billie (${index}).jpg`)

    let figcaption = document.createElement("figcaption")
    figcaption.innerText = "Billie Eilish " + index

    // debugger
    let figure = document.createElement("figure")
    figure.appendChild(img)
    figure.appendChild(figcaption)

    secImg.insertAdjacentElement("beforeend", figure)
}