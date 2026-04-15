let createParagraph = ()=>{

let newElement = document.createElement("p")
newElement.innerText = "paragraph Created With JavaScript"


document.body.appendChild(newElement)


}
let createDivJs = ()=>{

let createDiv = document.createElement("div")
createDiv.innerText = "Div Created With JavaScript"


document.body.appendChild(createDiv)
createDiv.classList.add("div3")
}

