
'use strict';

const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
document.querySelector('#question').textContent=`What is ${num1} multiply by ${num2}`;

let score=0;
function getScore(){
   if(localStorage.getItem('score')){
      console.log(localStorage.getItem('score'));
      score=localStorage.getItem('score');
      document.getElementById('score').innerHTML=
      `score:${score}`;
   }
}
function updateLocalStorage(){
   localStorage.setItem("score",JSON.stringify(score));
}

document.querySelector('.btn').addEventListener('click',function(){
    const h=Number(document.querySelector('.in').value);
    console.log(h);
   if(h===(num1 * num2)){
    document.querySelector('p').textContent='Correct answer';
    score++;
    document.getElementById('score').innerHTML=
    `score:${score}`;
    updateLocalStorage();
   }
   else{
    score--;
    document.querySelector('p').textContent='Wrong answer';
      document.getElementById('score').innerHTML=
    `score:${score}`;
    updateLocalStorage();
   }
});
window.addEventListener("load", (event) => {
   console.log("page is fully loaded");
   getScore();
 });

