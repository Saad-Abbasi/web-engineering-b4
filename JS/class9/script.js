// Finding Name using while loop

let myFriends = ["Ali", "Ahmed", "Mustafa", "Anjum", "Ajmal"]
let found = true

while (!found && myFriends.length > 0) {

    if(myFriends[0] === "Ajmal"){
        console.log("Found Ajmal")
        found = true
    }else{
        myFriends.shift()
    }
    
}