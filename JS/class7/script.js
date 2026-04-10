h1 = document.getElementById('heading1')
p = document.getElementById('idp1')

colors = ["red", "green", "blue"]
start = 0;

function changeColor(){
if(start == 3){
    start = 0
}
h1.style.color = colors[start];
start = start+1
    
}

function changeBgColor(){
h1.style.backgroundColor = 'Yellow'

}

function changePColor(){
p.style.color = 'green'

}

function createParagraph(){

    newPara = document.createElement('p')
    newPara.innerText = "New Paragraph"
    document.body.appendChild(newPara)

}