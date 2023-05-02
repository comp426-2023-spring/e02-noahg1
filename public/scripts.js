// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver


function onLoad(){
    for(let e of document.getElementsByName('rpsls')){
        e.style.display =  "none"
    }

    for(let e of document.getElementsByName('player2')){
        e.style.display =  "none"
    }

}

function getGameType(){
    
}

function rpsls(){
    let type = 'rps'
    for (let x of document.getElementsByName("game")) {
        if (x.checked == true) { type = x.id }
    }
    if(type == 'rpsls'){
        for(let e of document.getElementsByName('rpsls')){
            e.style.display =  "inline"
        }
    }
}

function rps(){
    let type = 'rps'
    for (let x of document.getElementsByName("game")) {
        if (x.checked == true) { type = x.id }
    }
    if(type == 'rps'){
        for(let e of document.getElementsByName('rpsls')){
            e.style.display =  "none"
        }
    }
}

function comp(){
    let player = "comp"
    for(let p of document.getElementsByName("comp")){
        if (p.checked == true) { player = p.id }
    }
    if(player = 'p2'){
        for(let t of document.getElementsByName('player2')){
            t.style.display = "none"
        }
    }

}
function player(){
    let player = "comp"
    for(let p of document.getElementsByName("comp")){
        if (p.checked == true) { player = p.id }
    }
    if(player = 'p2'){
        for(let t of document.getElementsByName('player2')){
            t.style.display = "inline"
        }
    }
}

function play(){
    let type = 'rps'
    for (let x of document.getElementsByName("game")) {
        if (x.checked == true) { type = x.id }
    }
    console.log(type)

}