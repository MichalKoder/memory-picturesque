var tab = [...Array(6).keys(), ...Array(6).keys()];
tab.sort( ()=>Math.random()-0.5 );

var firstRevealed;
var secondRevealed;
var oneRevealed = false;
var match = false;
var lock = false;
var srNotSet = true;
var muza_reveal = new Audio('snd/reveal.wav');

function initCards() {
    for(let i = 0;i<12;i++) {
    document.getElementById("c"+i).style.backgroundImage = "url('img/reverse.png')";
    }
}

function cover2cards(a,b) {
    a.style.backgroundImage = "url('img/reverse.png')";
    b.style.backgroundImage = "url('img/reverse.png')";
    oneRevealed = false;
    lock = false;
    document.getElementById('tries').innerHTML = parseInt(document.getElementById('tries').innerHTML)+1;// increase score
}

function reveal(y) {
    y.style.backgroundImage = "url('img/card"+(tab[(parseInt(y.id.substring(1)))]+1)+".png')";
    muza_reveal.play();
}

function revealCard(x) {
    if (!lock) {  
        setTimeout(function() {reveal(x)}, 50);
        if(!oneRevealed) {
            firstRevealed = x;
            oneRevealed = true;
        } else lock = true;
       
        if(x.id != firstRevealed.id) {
        if(tab[x.id.substring(1)] == tab[firstRevealed.id.substring(1)]){
            setTimeout(function() {hide2cards(x,firstRevealed)}, 1000); // hide pair
        } else { // pair mismatched
            setTimeout(function() {cover2cards(x,firstRevealed)}, 1000); // reverse pair
        }
    } else lock = false;
    }
}
    

function hide2cards(a,b) {
    a.style.visibility = "hidden";
    b.style.visibility = "hidden";
    oneRevealed = false;
    lock = false;

}