

// Console Text 
console.log(document.getElementById("id01").firstChild.nodeValue)

// Copy text from id01 to id02
document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;
