
const players = JSON.parse(localStorage.getItem('players')) || [];
console.log(players);


let index;


function showPlayers(player,index) {
  return `
    <div id="card-photo" class="relative w-[250px] h-[400px] bg-cover" style="background-image: url('/assets/images/card.png');">
     <div id="deleteButton" class="top-8 left-8 relative">
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" viewBox="0 0 72 72"
      style="fill:#FFFFFF;">
      <path d="M 32.5 9 C 28.364 9 25 12.364 25 16.5 L 25 18 L 17 18 C 14.791 18 13 19.791 13 22 C 13 24.209 14.791 26 17 26 L 17.232422 26 L 18.671875 51.916016 C 18.923875 56.449016 22.67875 60 27.21875 60 L 44.78125 60 C 49.32125 60 53.076125 56.449016 53.328125 51.916016 L 54.767578 26 L 55 26 C 57.209 26 59 24.209 59 22 C 59 19.791 57.209 18 55 18 L 47 18 L 47 16.5 C 47 12.364 43.636 9 39.5 9 L 32.5 9 z M 32.5 16 L 39.5 16 C 39.775 16 40 16.224 40 16.5 L 40 18 L 32 18 L 32 16.5 C 32 16.224 32.225 16 32.5 16 z M 36 28 C 37.104 28 38 28.896 38 30 L 38 47.923828 C 38 49.028828 37.104 49.923828 36 49.923828 C 34.896 49.923828 34 49.027828 34 47.923828 L 34 30 C 34 28.896 34.896 28 36 28 z M 27.392578 28.001953 C 28.459578 27.979953 29.421937 28.827641 29.460938 29.931641 L 30.085938 47.931641 C 30.123938 49.035641 29.258297 49.959047 28.154297 49.998047 C 28.131297 49.999047 28.108937 50 28.085938 50 C 27.012938 50 26.125891 49.148359 26.087891 48.068359 L 25.462891 30.068359 C 25.424891 28.964359 26.288578 28.040953 27.392578 28.001953 z M 44.607422 28.001953 C 45.711422 28.039953 46.575109 28.964359 46.537109 30.068359 L 45.912109 48.068359 C 45.874109 49.148359 44.986063 50 43.914062 50 C 43.891062 50 43.868703 49.999047 43.845703 49.998047 C 42.741703 49.960047 41.876063 49.035641 41.914062 47.931641 L 42.539062 29.931641 C 42.577062 28.827641 43.518422 27.979953 44.607422 28.001953 z"></path>
      </svg> </div>
      <div id="detailsbtn" class=" top-8 left-[90%] absolute"> <img src="/assets/images/info_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt=""></div>
      <!-- Player Photo -->
      <div class="absolute top-[20%] left-[70%] transform -translate-x-1/2 w-[55%] h-[30%]">
        <img src="${player.photo}" alt="unknown player" class="w-full h-full object-contain">
      </div>

      <!-- Position -->
      <div id="position" class="absolute top-[35%] left-[29%] text-white text-sm font-bold">
        ${player.position}
      </div>

      <!-- Club Logo -->
      <div class="absolute top-[40%] left-[27%]">
        <img id="playerLogoCard" class="h-[2rem]" src="${player.logo}" alt="Logo">
      </div>

      <!-- Flag -->
      <div class="absolute top-[26%] left-[29%]">
        <button id="flag" class="w-6 h-4">
          <img src="${player.flag}" alt="Flag" class="w-full h-full object-contain">
        </button>
      </div>

      <!-- Player Name -->
      <div class="card-name absolute bottom-[40%] left-[30%] text-center text-white text-md font-bold ">
        ${player.name}
      </div>

      <!-- Stats Section -->
      <div class="absolute bottom-[20%] left-[30%] flex text-white text-sm">
        <div class="grid grid-cols-2 gap-y-2 gap-x-10">
          <div class="flex justify-between gap-2">
            <span>PAC</span>
            <span>${player.position === "GK" ? player.diving : player.pace}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>SHO</span>
            <span>${player.position === "GK" ? player.handling : player.shooting}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PAS</span>
            <span>${player.position === "GK" ? player.kicking : player.passing}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DRI</span>
            <span>${player.position === "GK" ? player.reflexes : player.dribbling}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DEF</span>
            <span>${player.position === "GK" ? player.speed : player.defending}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PHY</span>
            <span>${player.position === "GK" ? player.positioning : player.physical}</span>
          </div>
        </div>
      </div>
    </div>
  `;
} showAllPlayers();



function showAllPlayers() {
  const cardContainer = document.getElementById('cardContainer');

  // Clear the container
  cardContainer.innerHTML = ``;

  // Loop through the players and render each card
  players.forEach((player, index) => {
    const div = document.createElement('div');
    div.classList = `w-[16rem] p-4 flex flex-col gap-3 h-full rounded-xl`;
    div.innerHTML = showPlayers(player, index);
    div.setAttribute('data-index', index);
    cardContainer.appendChild(div);

    // Attach the delete event listener to each card
    div.querySelector('#deleteButton').addEventListener('click', () => deletePlayer(index));
  });
}

// Define deletePlayer globally
window.deletePlayer = function(index) {
  // Remove player from the array
  players.splice(index, 1);

  // Update localStorage
  localStorage.setItem('players', JSON.stringify(players));

  // Re-render all players
  showAllPlayers();
};

// ****************form ajout ********************

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const firstaddplayerbtn = document.getElementById('firstaddplayerbtn');

firstaddplayerbtn.addEventListener("click", () => {
    popup.classList.add("show");
    console.log("hhhhhhhh");
    
});

closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
});

//  validation

    playerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const position = document.getElementById("position").value;
      const name = document.getElementById("name").value;

      if (!position || !name) {
        errorMessage.style.display = "block";
      } else {
        errorMessage.style.display = "none";
        alert("Player added successfully!");
        popup.classList.remove("show");
      }
    });

    document.getElementById("playerForm").addEventListener("submit", ajoutplayer);

    function ajoutplayer(e) {
      e.preventDefault(); 
    
  
      // ajout de joueur
  const name = document.getElementById("name").value;
  const image = document.getElementById("image").files[0];
  const nationality = document.getElementById("nationality").value;
  const position = document.getElementById("position").value;

  const stats = {
    pace: document.getElementById("stats1Input").value,
    shooting: document.getElementById("stats2Input").value,
    passing: document.getElementById("stats3Input").value,
    dribbling: document.getElementById("stats4Input").value,
    defending: document.getElementById("stats5Input").value,
    physical: document.getElementById("stats6Input").value,
  };

  //player object
    const player = {
      id: players.length + 1,
      name,
      photo: image ? URL.createObjectURL(image) : "/assets/images/default-player.png",
      flag: `/assets/flags/${nationality.toLowerCase()}.png`,
      logo: `/assets/logos/default-logo.png`,
      position,
      pace: stats.pace,
      shooting: stats.shooting,
      passing: stats.passing,
      dribbling: stats.dribbling,
      defending: stats.defending,
      physical: stats.physical,
    ...(position === "GK" && {
      diving: stats.pace,
      handling: stats.shooting,
      kicking: stats.passing,
      reflexes: stats.dribbling,
      speed: stats.defending,
      positioning: stats.physical,
    }),
  };

  players.push(player);
  localStorage.setItem("players", JSON.stringify(players));

 
  showAllPlayers(players);
  document.getElementById("playerForm").reset();
  popup.classList.remove("show");
   
}



// function suppression (){
//  const trashbtn =document.getElementById('trashbtn');

//  trashbtn.addEventListener('click', ())



// }