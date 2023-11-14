const submit = document.getElementById("submit")
const wall = document.getElementById("wall")
const inputText = document.getElementById("text")
const color = document.getElementById("color")
const graffiti = document.getElementById("graffiti")
const poster = document.getElementById("poster")

submit.addEventListener("click", (event) => {
    event.preventDefault()
    const newDiv = document.createElement("div")
    newDiv.className += " relative h-[300px] w-[300px] flex flex-col items-start pr-2 pt-2 rounded-xl text-white justify-center"
    wall.appendChild(newDiv)
    const paragraph = document.createElement("p")
    paragraph.className += "text-3xl flex self-center justify-center text-center justify-self-center"
    paragraph.textContent += inputText.value
    newDiv.appendChild(paragraph)
    newDiv.classList.add(`bg-[${color.value}]`)
    const close = document.createElement("span.close")
    close.className+= "flex absolute right-2 top-2 justify-self-end h-6 w-6 text-xl font-semibold bg-black bg-opacity-30 text-white items-center justify-center self-end rounded-sm"
    close.innerHTML = "X"
    newDiv.appendChild(close)
    if(graffiti.checked){
        newDiv.classList.add("graffiti", "italic")
    }
    if(poster.checked){
        newDiv.classList.add("poster", "non-italic")
    }
    graffiti.value=""
    poster.value=""
    inputText.value=""
    color.value=""
})

wall.addEventListener("click", (event) => {
    event.preventDefault()
    button = event.target
    console.log(button)
    if (button.tagName == "SPAN.CLOSE") {
        button.parentElement.remove()
    }
})

