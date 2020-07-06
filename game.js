"use strict"
// fetching elements
const img = document.getElementsByTagName('img');
const h2 = document.getElementsByTagName('h2')[0];
const h3 = document.getElementsByTagName('h3')[0];
var person1;
var person2;
// assigning events
for(let i = 0 ; i < 3; i++ ){
img[i].addEventListener('click',clicked);
}
// function defining to get value of player weapons
function clicked(){
    // value of weapon for person 1
    if( h2.innerText ===  'PLAYER 1 CHOOSE YOUR WEAPON'){
        person1  = this.getAttribute('alt');
        h2.innerHTML = '<h2>PLAYER 2 CHOOSE YOUR WEAPON</h2>'; 
    }
     else {
         // value of weapon for player 2
        person2 = this.getAttribute('alt');
        // making result visible
        h3.style.visibility = 'visible';
        // calling result function
        const announce = result(person1,person2);
        // displaying result function
        h3.innerHTML = `<h3>${announce}<br><br>Refresh for another round<h3>`;
    }
}
// defining result function
var result = function(a,b){
    if ( a === b ){
        return 'DRAW';
    } else if ( a === 'scissor' && b === 'paper' || a === 'stone' && b === 'scissor' ||  a === 'paper' && b === 'stone' ){
        return 'PLAYER 1 WINS';
    } else if ( a === 'scissor' && b === 'stone' ||  a === 'paper' && b === 'scissor' || a === 'stone' && b === 'paper' ){
        return 'PLAYER 2 WINS'
    }
}


