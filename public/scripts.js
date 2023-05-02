// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver


function onLoad(){
    document.getElementById('comp').checked = false;
    document.getElementById('rock').checked = true;
    document.getElementById("results").style.display = "none"
    document.getElementById("shotImg").style.display = "none"
    document.getElementById("oppShotImg").style.display = "none"
    document.getElementById("shotImgLab").style.display = "none"
    document.getElementById("oppShotImgLab").style.display = "none"
    for(let e of document.getElementsByName('rpsls')){
        e.style.display =  "none"
    }

    for(let e of document.getElementsByName('shots')){
        e.style.display =  "none"
    }
}

function reset(){
    document.getElementById('comp').checked = false;
    document.getElementById('rpsls').checked = true;
    document.getElementById('rpsls').checked = false;
    document.getElementById("results").style.display = "none"
    document.getElementById("shotImg").style.display = "none"
    document.getElementById("oppShotImg").style.display = "none"
    document.getElementById("shotImgLab").style.display = "none"
    document.getElementById("oppShotImgLab").style.display = "none"
    for(let e of document.getElementsByName('rpsls')){
        e.style.display =  "none"
    }

    for(let e of document.getElementsByName('shots')){
        e.style.display =  "none"
    }
}

function rules(){
    window.alert(`Rules:
    Scissors CUTS Paper
    Paper COVERS Rock
    Rock SMOOSHES Lizard
    Lizard POISONS Spock
    Spock SMASHES Scissors
    Scissors DECAPITATES Lizard
    Lizard EATS Paper
    Paper DISPROVES Spock
    Spock VAPORIZES Rock
    Rock CRUSHES Scissors
    
    `)
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
    let box = document.getElementById('comp').checked

    if(box){
        for(let x of document.getElementsByName('shots')){
            x.style.display = "inline"
        }
    } else {
        for(let x of document.getElementsByName('shots')){
            x.style.display = "none"
        }
    }

}

async function play(){
    let type = 'rps'

    for (let x of document.getElementsByName("game")) {
        if (x.checked == true) { type = x.id }
    }
    
    let shot = 'rock'

    for(let x of document.getElementsByName('throw')){
        if (x.checked == true) {shot = x.id}
    }

    let opp = 'comp'

    for (let x of document.getElementsByName('comp')){
        if(x.checked == true){opp = x.id}
    }


    let baseurl = window.location.href.concat('app/')
    let url = baseurl.concat(type.concat('/play/'))

    if(document.getElementById('comp').checked){
        url = url.concat(shot)
    }

    let response = await fetch(url)
    let result = await response.json()
    console.log(result)

    resultString = 'You selected ' + result.player

    
    document.getElementById("shotImg").setAttribute("src", "img/"+result.player+".jpg");
    document.getElementById("shotImgLab").style.display = "block"
    document.getElementById("shotImg").style.display = "inline"
    document.getElementById("oppShotImg").style.display = "none"
    document.getElementById("oppShotImgLab").style.display = "none"

    if (document.getElementById('comp').checked) {
        resultString = resultString + ' , your opponent selected ' + result.opponent + '. Result: ' + result.result;
        document.getElementById("oppShotImg").setAttribute("src", "img/"+result.opponent+".jpg");
        document.getElementById("oppShotImgLab").style.display = "block"
        document.getElementById("oppShotImg").style.display = "inline"
    }

    document.getElementById("results").innerText = resultString
    document.getElementById("results").style.display = "block"

}