    // **********CREATED BY: GAGAN ARORA**************
    // **********Website: https://gagan.click/ *******

$(document).ready(function(){
    $("#myModal").modal('show');
});

let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');
let inpSpeed = document.getElementById('inpSpeed');

let values = [
    1,2,3,4,5,6,7
]

function getRandomValue(){//function for random value
    return values[parseInt(Math.random()*7)]//parseInt is used to return int value
    //math.random()*7 will select 1 values btw 1 to 7 in values obj (starting to 7)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// setInterval(() =>{
//     value1.innerText = getRandomValue()//for each slot calling random value function & placing the return value
//     value2.innerText = getRandomValue()//for each slot calling random value function & placing the return value
//     value3.innerText = getRandomValue()//for each slot calling random value function & placing the return value
// },400 /*time for changing random value of elements*/)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let animationId;
// function updateAnimation(newSpeed){
//     if (animationId) clearInterval(animationId)//cancel animation with stored animationId

//     animationId = setInterval(() => {//catching Interval id for future use
//         value1.innerText = getRandomValue();
//         value2.innerText = getRandomValue();
//         value3.innerText = getRandomValue();
//     },500/newSpeed)
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// inpSpeed.onchange = function(ev){//for speed change using css speed varible
//     document.documentElement.style.setProperty('--speed',ev.target.value);

//     updateAnimation(ev.target.value);
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let IntervalId;
// function go(){
//     value1.innerText = getRandomValue()//for each slot calling random value function & placing the return value
//     value2.innerText = getRandomValue()//for each slot calling random value function & placing the return value
//     value3.innerText = getRandomValue()
// }
// function starting1(){
//     value1.innerText = getRandomValue();
//     value2.innerText = getRandomValue();
//     value3.innerText = getRandomValue();
//     stop.addEventListener("click",stoping);
// } 
// function starting(){
//     document.documentElement.style.setProperty('--speed',4);
//     // go();
//     IntervalId = setInterval(starting1,500);
// }
// function stoping(){
//     // go();
//     document.documentElement.style.setProperty('--speed',-1);
//     clearInterval(IntervalId);
// }

// let start = document.getElementById('start-btn');
// let stop = document.getElementById('stop-btn');
// stop.addEventListener("click",stoping);
// start.addEventListener("click",starting);

var intervalID;

// Function to call repeatedly 
function randomVal(){
    value1.innerText = getRandomValue();
    value2.innerText = getRandomValue();
    value3.innerText = getRandomValue();
}
    
// Function to start setInterval call
function start(){
    intervalID = setInterval(randomVal, 500);
    document.documentElement.style.setProperty('--speed',3);
    document.querySelector('#start-btn').disabled = true;
}

// Function to stop setInterval call
function stop(){
    clearInterval(intervalID);
    document.documentElement.style.setProperty('--speed',-1);
    document.querySelector('#start-btn').disabled = false;
}
