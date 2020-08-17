const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeleft= document.querySelector('#time-left');
let score= document.querySelector('#score');
let result=0;

let currentTime= timeleft.textContent;
function randomSquare(){
	square.forEach(className=>{
		className.classList.remove('mole');
	})

	let randomPosition= square[Math.floor(Math.random()*9)]
	randomPosition.classList.add('mole');

	//
	hitPosition= randomPosition.id;

}

square.forEach(id=>{
	id.addEventListener('mouseup',()=>{

		if(id.id===hitPosition){
			console.log("click");
			result++;
			score.textContent=result;
		}

	})

})

function moveMole(){
	let timerID=null;
	timerID=setInterval(randomSquare,1000)

}

moveMole();

function countdown(){
	currentTime--;
	timeleft.textContent=currentTime;

	if(currentTime===0){
		clearInterval(timerID);
		alert("game Over");
	}
}

let timerID=setInterval(countdown,1000);