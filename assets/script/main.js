// fetch('../script/data.json')
// .then((response) => response.json())
// .then((data)=> localStorage.setItem('players', JSON.stringify(data.players)))
// console.log('the players:',players)
import { data } from "./data.js";
let players =JSON.parse(localStorage.getItem('players'))|| data.players;
localStorage.setItem('players', JSON.stringify(players))
console.log(players);



// creat selectedPlaceHolder variable 
// placeholders.forEach: onclick () => selectedPlaceholder = clickedPlaceholder

let selectedPlaceholder;
const placeholders = document.querySelectorAll('.placeholder');

function selectPlaceholder(event) {
  const element = event.currentTarget;
  // remove selected-placeholder class from all cards 
  document.querySelectorAll('#cardContainer').forEach(card => card.classList.remove("selected-placeholder"))
  element.querySelector('#cardContainer').classList.add("selected-placeholder")
  // selectedPlaceholder = element;

  const players =document.querySelectorAll('.player-card')
  players.forEach(player => player.addEventListener('click', choosePlayer));  
}

placeholders.forEach(placeholder => placeholder.addEventListener('click', selectPlaceholder));

function choosePlayer (event){
  selectedPlaceholder = document.querySelector(".selected-placeholder")
  selectedPlaceholder.innerHTML = event.currentTarget.innerHTML
  selectedPlaceholder.style.width = "fit-content"
  selectedPlaceholder.style.height = "fit-content"
  document.querySelector('.gk-modal').classList.add("hidden")
  selectedPlaceholder.classList.remove("selected-placeholder")
}