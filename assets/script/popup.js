
var players = JSON.parse(localStorage.getItem('players')) || [];

const closebtn =document.getElementById('closebtn');


closebtn.addEventListener('click',function(){
  popup.style.visibility='visible';
  popup.style.visibility='hidden';
})







function createPlayerCard(player) {
  return `
  
    <div class="w-[12rem] bg-[#27272a] p-4 flex flex-col items-center justify-center gap-3 h-[18rem] rounded-xl">
    
  <!-- Player Image -->
  <div
    class="w-full bg-contain bg-no-repeat h-[6rem] rounded-md"
    style="background-image: url('${player.photo}')">
  </div>

  <!-- Player Name -->
  <div class="text-center">
    <h1 class="text-[#d9d9d9] text-sm font-semibold truncate">${player.name}</h1>
  </div>

  <!-- Stats Section -->
  <div class="flex flex-col items-center gap-2">
    <p class="text-xs text-[#d9d9d9]">Stats</p>
    <div class="flex gap-1 flex-wrap justify-center">
      <div
        class="w-[1.8rem] h-[1.8rem] bg-[#18181b] text-[#d9d9d9] text-xs text-center flex items-center justify-center rounded-md border border-[#18181b]">
        ${player.rating}
      </div>
      <div
        class="w-[1.8rem] h-[1.8rem] bg-[#18181b] text-[#d9d9d9] text-xs text-center flex items-center justify-center rounded-md border border-[#18181b]">
        ${player.position === "GK" ? player.diving : player.pace}
      </div>
      <div
        class="w-[1.8rem] h-[1.8rem] bg-[#18181b] text-[#d9d9d9] text-xs text-center flex items-center justify-center rounded-md border border-[#18181b]">
        ${player.position === "GK" ? player.handling : player.shooting}
      </div>
      <div
        class="w-[1.8rem] h-[1.8rem] bg-[#18181b] text-[#d9d9d9] text-xs text-center flex items-center justify-center rounded-md border border-[#18181b]">
        ${player.position === "GK" ? player.kicking : player.passing}
      </div>
      <div
        class="w-[1.8rem] h-[1.8rem] bg-[#18181b] text-[#d9d9d9] text-xs text-center flex items-center justify-center rounded-md border border-[#18181b]">
        ${player.position === "GK" ? player.reflexes : player.dribbling}
      </div>
      <div
        class="w-[1.8rem] h-[1.8rem] bg-[#18181b] text-[#d9d9d9] text-xs text-center flex items-center justify-center rounded-md border border-[#18181b]">
        ${player.position === "GK" ? player.speed : player.defending}
      </div>
      <div
        class="w-[1.8rem] h-[1.8rem] bg-[#18181b] text-[#d9d9d9] text-xs text-center flex items-center justify-center rounded-md border border-[#18181b]">
        ${player.position === "GK" ? player.positioning : player.physical}
      </div>
    </div>
  </div>

  <!-- Position and Flag -->
  <div class="flex justify-between items-center w-full">
    <p class="text-white text-xs">${player.position}</p>
    <img src="${player.flag}" alt="${player.name} flag" class="w-6 h-4 rounded-md">
  </div>
</div>

  `;
}


function showAllPlayers(players) {
    const cardContainer = document.getElementById('cardContainer');
    if (!cardContainer) {
      console.error('Card container not found!');
      return;
    }
  
    cardContainer.innerHTML = '';
  
    players.forEach(player => {
      const cardHTML = createPlayerCard(player);
      cardContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
  }
  
  showAllPlayers(players);
  

showAllPlayers(players);



document.addEventListener('DOMContentLoaded', () => {
  const card1 = document.getElementById('card1');
  const popup = document.getElementById('popup');

  card1.addEventListener('click', () => {
    popup.style.visibility = 'visible'; 
    popup.style.opacity = '1'; 
  });

 
});







const gkButton = document.querySelector("#GK");
console.log(gkButton);

gkButton.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(gkButton.id);

  const finded = players.filter((plr) => plr.position === "GK");
 

  
  let modal = document.querySelector(".gk-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "gk-modal";
    document.body.appendChild(modal);
  }

  modal.innerHTML = "";


  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  modal.appendChild(closeButton);


  finded.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <div class="popupCard w-[12rem] bg-[#27272a] p-4 flex flex-col items-center justify-center gap-3 h-[18rem] rounded-xl">
        <div
          class="w-full bg-contain bg-no-repeat h-[6rem] rounded-md"
          style="background-image: url('${player.photo}')">
        </div>
        <div class="text-center">
          <h1 class="text-[#d9d9d9] text-sm font-semibold truncate">${player.name}</h1>
        </div>
        <div class="flex flex-col items-center gap-2">
          <p class="text-xs text-[#d9d9d9]">Stats</p>
          <div class="flex gap-1 flex-wrap justify-center">
            ${["rating", "diving", "handling", "kicking", "reflexes", "speed", "positioning"]
              .map(
                (stat) => `
                <div class="w-[1.8rem] h-[1.8rem] bg-[#18181b] text-[#d9d9d9] text-xs text-center flex items-center justify-center rounded-md border border-[#18181b]">
                  ${player[stat]}
                </div>
              `
              )
              .join("")}
          </div>
        </div>
        <div class="flex justify-between items-center w-full">
          <p class="text-white text-xs">${player.position}</p>
          <img src="${player.flag}" alt="${player.name} flag" class="w-6 h-4 rounded-md">
        </div>
      </div>
    `;
    modal.appendChild(card);
  });

  modal.classList.remove("hidden");
});

 

// ******************************************RW******************************


const RWbtn = document.querySelector("#RW");
console.log(RWbtn);

RWbtn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(RWbtn.id) 
  
  const finded = players.filter((plr) => plr.position === "RW");

  
  let modal = document.querySelector(".gk-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "gk-modal";
    document.body.appendChild(modal);
  }

  modal.innerHTML = "";


  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  modal.appendChild(closeButton);


  finded.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
 <div id="card-photo" class="relative w-[250px] h-[400px] bg-cover" style="background-image: url('/assets/images/card.png');">
     <div onclick="deletePlayer(index)" class=" top-8 left-8 relative"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" viewBox="0 0 72 72"
      style="fill:#FFFFFF;">
      <path d="M 32.5 9 C 28.364 9 25 12.364 25 16.5 L 25 18 L 17 18 C 14.791 18 13 19.791 13 22 C 13 24.209 14.791 26 17 26 L 17.232422 26 L 18.671875 51.916016 C 18.923875 56.449016 22.67875 60 27.21875 60 L 44.78125 60 C 49.32125 60 53.076125 56.449016 53.328125 51.916016 L 54.767578 26 L 55 26 C 57.209 26 59 24.209 59 22 C 59 19.791 57.209 18 55 18 L 47 18 L 47 16.5 C 47 12.364 43.636 9 39.5 9 L 32.5 9 z M 32.5 16 L 39.5 16 C 39.775 16 40 16.224 40 16.5 L 40 18 L 32 18 L 32 16.5 C 32 16.224 32.225 16 32.5 16 z M 36 28 C 37.104 28 38 28.896 38 30 L 38 47.923828 C 38 49.028828 37.104 49.923828 36 49.923828 C 34.896 49.923828 34 49.027828 34 47.923828 L 34 30 C 34 28.896 34.896 28 36 28 z M 27.392578 28.001953 C 28.459578 27.979953 29.421937 28.827641 29.460938 29.931641 L 30.085938 47.931641 C 30.123938 49.035641 29.258297 49.959047 28.154297 49.998047 C 28.131297 49.999047 28.108937 50 28.085938 50 C 27.012938 50 26.125891 49.148359 26.087891 48.068359 L 25.462891 30.068359 C 25.424891 28.964359 26.288578 28.040953 27.392578 28.001953 z M 44.607422 28.001953 C 45.711422 28.039953 46.575109 28.964359 46.537109 30.068359 L 45.912109 48.068359 C 45.874109 49.148359 44.986063 50 43.914062 50 C 43.891062 50 43.868703 49.999047 43.845703 49.998047 C 42.741703 49.960047 41.876063 49.035641 41.914062 47.931641 L 42.539062 29.931641 C 42.577062 28.827641 43.518422 27.979953 44.607422 28.001953 z"></path>
      </svg> </div>
      <div id="detailsbtn" class=" top-8 left-[90%] absolute"> <img src="/assets/images/info_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt=""></div>
      <!-- Player Photo -->
      <div class="absolute top-[20%] left-[70%] transform -translate-x-1/2 w-[55%] h-[30%]">
        <img src="${players.photo}" alt="unknown player" class="w-full h-full object-contain">
      </div>

      <!-- Position -->
      <div id="position" class="absolute top-[35%] left-[29%] text-white text-sm font-bold">
        ${players.position}
      </div>

      <!-- Club Logo -->
      <div class="absolute top-[40%] left-[27%]">
        <img id="playerLogoCard" class="h-[2rem]" src="${players.logo}" alt="Logo">
      </div>

      <!-- Flag -->
      <div class="absolute top-[26%] left-[29%]">
        <button id="flag" class="w-6 h-4">
          <img src="${players.flag}" alt="Flag" class="w-full h-full object-contain">
        </button>
      </div>

      <!-- Player Name -->
      <div class="card-name absolute bottom-[40%] left-[30%] text-center text-white text-md font-bold ">
        ${players.name}
      </div>

      <!-- Stats Section -->
      <div class="absolute bottom-[20%] left-[30%] flex text-white text-sm">
        <div class="grid grid-cols-2 gap-y-2 gap-x-10">
          <div class="flex justify-between gap-2">
            <span>PAC</span>
            <span>${players.position === "GK" ? players.diving : players.pace}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>SHO</span>
            <span>${players.position === "GK" ? players.handling : players.shooting}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PAS</span>
            <span>${players.position === "GK" ? players.kicking : players.passing}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DRI</span>
            <span>${players.position === "GK" ? players.reflexes : players.dribbling}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DEF</span>
            <span>${players.position === "GK" ? players.speed : players.defending}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PHY</span>
            <span>${players.position === "GK" ? players.positioning : players.physical}</span>
          </div>
        </div>
      </div>
    </div>
    `;
    modal.appendChild(card);
  });

  modal.classList.remove("hidden");
});

 
// *******************************ST*******************************


const STbtn = document.querySelector("#ST");
console.log(STbtn);

STbtn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(STbtn.id) 

  const finded = players.filter((plr) => plr.position === "ST");
  console.log("hello"+finded);

  
  let modal = document.querySelector(".gk-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "gk-modal";
    document.body.appendChild(modal);
  }

  modal.innerHTML = "";


  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  modal.appendChild(closeButton);


  finded.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
       <div id="card-photo" class="relative w-[250px] h-[400px] bg-cover" style="background-image: url('/assets/images/card.png');">
     <div onclick="deletePlayer(index)" class=" top-8 left-8 relative"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" viewBox="0 0 72 72"
      style="fill:#FFFFFF;">
      <path d="M 32.5 9 C 28.364 9 25 12.364 25 16.5 L 25 18 L 17 18 C 14.791 18 13 19.791 13 22 C 13 24.209 14.791 26 17 26 L 17.232422 26 L 18.671875 51.916016 C 18.923875 56.449016 22.67875 60 27.21875 60 L 44.78125 60 C 49.32125 60 53.076125 56.449016 53.328125 51.916016 L 54.767578 26 L 55 26 C 57.209 26 59 24.209 59 22 C 59 19.791 57.209 18 55 18 L 47 18 L 47 16.5 C 47 12.364 43.636 9 39.5 9 L 32.5 9 z M 32.5 16 L 39.5 16 C 39.775 16 40 16.224 40 16.5 L 40 18 L 32 18 L 32 16.5 C 32 16.224 32.225 16 32.5 16 z M 36 28 C 37.104 28 38 28.896 38 30 L 38 47.923828 C 38 49.028828 37.104 49.923828 36 49.923828 C 34.896 49.923828 34 49.027828 34 47.923828 L 34 30 C 34 28.896 34.896 28 36 28 z M 27.392578 28.001953 C 28.459578 27.979953 29.421937 28.827641 29.460938 29.931641 L 30.085938 47.931641 C 30.123938 49.035641 29.258297 49.959047 28.154297 49.998047 C 28.131297 49.999047 28.108937 50 28.085938 50 C 27.012938 50 26.125891 49.148359 26.087891 48.068359 L 25.462891 30.068359 C 25.424891 28.964359 26.288578 28.040953 27.392578 28.001953 z M 44.607422 28.001953 C 45.711422 28.039953 46.575109 28.964359 46.537109 30.068359 L 45.912109 48.068359 C 45.874109 49.148359 44.986063 50 43.914062 50 C 43.891062 50 43.868703 49.999047 43.845703 49.998047 C 42.741703 49.960047 41.876063 49.035641 41.914062 47.931641 L 42.539062 29.931641 C 42.577062 28.827641 43.518422 27.979953 44.607422 28.001953 z"></path>
      </svg> </div>
      <div id="detailsbtn" class=" top-8 left-[90%] absolute"> <img src="/assets/images/info_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt=""></div>
      <!-- Player Photo -->
      <div class="absolute top-[20%] left-[70%] transform -translate-x-1/2 w-[55%] h-[30%]">
        <img src="${players.photo}" alt="unknown player" class="w-full h-full object-contain">
      </div>

      <!-- Position -->
      <div id="position" class="absolute top-[35%] left-[29%] text-white text-sm font-bold">
        ${players.position}
      </div>

      <!-- Club Logo -->
      <div class="absolute top-[40%] left-[27%]">
        <img id="playerLogoCard" class="h-[2rem]" src="${players.logo}" alt="Logo">
      </div>

      <!-- Flag -->
      <div class="absolute top-[26%] left-[29%]">
        <button id="flag" class="w-6 h-4">
          <img src="${players.flag}" alt="Flag" class="w-full h-full object-contain">
        </button>
      </div>

      <!-- Player Name -->
      <div class="card-name absolute bottom-[40%] left-[30%] text-center text-white text-md font-bold ">
        ${players.name}
      </div>

      <!-- Stats Section -->
      <div class="absolute bottom-[20%] left-[30%] flex text-white text-sm">
        <div class="grid grid-cols-2 gap-y-2 gap-x-10">
          <div class="flex justify-between gap-2">
            <span>PAC</span>
            <span>${players.position === "GK" ? players.diving : players.pace}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>SHO</span>
            <span>${players.position === "GK" ? players.handling : players.shooting}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PAS</span>
            <span>${players.position === "GK" ? players.kicking : players.passing}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DRI</span>
            <span>${players.position === "GK" ? players.reflexes : players.dribbling}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DEF</span>
            <span>${players.position === "GK" ? players.speed : players.defending}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PHY</span>
            <span>${players.position === "GK" ? players.positioning : players.physical}</span>
          </div>
        </div>
      </div>
    </div>

    
    `;
    modal.appendChild(card);
  });

  modal.classList.remove("hidden");
});

 
// *****************************LW****************************

const LWcard = document.querySelector("#LW");
console.log(LWcard);

LWcard.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(LWcard.id) 

  const finded = players.filter((plr) => plr.position === "LW");
  console.log("hello"+finded);

  
  let modal = document.querySelector(".gk-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "gk-modal";
    document.body.appendChild(modal);
  }

  modal.innerHTML = "";


  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  modal.appendChild(closeButton);


  finded.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
 <div id="card-photo" class="relative w-[250px] h-[400px] bg-cover" style="background-image: url('/assets/images/card.png');">
     <div onclick="deletePlayer(index)" class=" top-8 left-8 relative"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" viewBox="0 0 72 72"
      style="fill:#FFFFFF;">
      <path d="M 32.5 9 C 28.364 9 25 12.364 25 16.5 L 25 18 L 17 18 C 14.791 18 13 19.791 13 22 C 13 24.209 14.791 26 17 26 L 17.232422 26 L 18.671875 51.916016 C 18.923875 56.449016 22.67875 60 27.21875 60 L 44.78125 60 C 49.32125 60 53.076125 56.449016 53.328125 51.916016 L 54.767578 26 L 55 26 C 57.209 26 59 24.209 59 22 C 59 19.791 57.209 18 55 18 L 47 18 L 47 16.5 C 47 12.364 43.636 9 39.5 9 L 32.5 9 z M 32.5 16 L 39.5 16 C 39.775 16 40 16.224 40 16.5 L 40 18 L 32 18 L 32 16.5 C 32 16.224 32.225 16 32.5 16 z M 36 28 C 37.104 28 38 28.896 38 30 L 38 47.923828 C 38 49.028828 37.104 49.923828 36 49.923828 C 34.896 49.923828 34 49.027828 34 47.923828 L 34 30 C 34 28.896 34.896 28 36 28 z M 27.392578 28.001953 C 28.459578 27.979953 29.421937 28.827641 29.460938 29.931641 L 30.085938 47.931641 C 30.123938 49.035641 29.258297 49.959047 28.154297 49.998047 C 28.131297 49.999047 28.108937 50 28.085938 50 C 27.012938 50 26.125891 49.148359 26.087891 48.068359 L 25.462891 30.068359 C 25.424891 28.964359 26.288578 28.040953 27.392578 28.001953 z M 44.607422 28.001953 C 45.711422 28.039953 46.575109 28.964359 46.537109 30.068359 L 45.912109 48.068359 C 45.874109 49.148359 44.986063 50 43.914062 50 C 43.891062 50 43.868703 49.999047 43.845703 49.998047 C 42.741703 49.960047 41.876063 49.035641 41.914062 47.931641 L 42.539062 29.931641 C 42.577062 28.827641 43.518422 27.979953 44.607422 28.001953 z"></path>
      </svg> </div>
      <div id="detailsbtn" class=" top-8 left-[90%] absolute"> <img src="/assets/images/info_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt=""></div>
      <!-- Player Photo -->
      <div class="absolute top-[20%] left-[70%] transform -translate-x-1/2 w-[55%] h-[30%]">
        <img src="${players.photo}" alt="unknown player" class="w-full h-full object-contain">
      </div>

      <!-- Position -->
      <div id="position" class="absolute top-[35%] left-[29%] text-white text-sm font-bold">
        ${players.position}
      </div>

      <!-- Club Logo -->
      <div class="absolute top-[40%] left-[27%]">
        <img id="playerLogoCard" class="h-[2rem]" src="${players.logo}" alt="Logo">
      </div>

      <!-- Flag -->
      <div class="absolute top-[26%] left-[29%]">
        <button id="flag" class="w-6 h-4">
          <img src="${players.flag}" alt="Flag" class="w-full h-full object-contain">
        </button>
      </div>

      <!-- Player Name -->
      <div class="card-name absolute bottom-[40%] left-[30%] text-center text-white text-md font-bold ">
        ${players.name}
      </div>

      <!-- Stats Section -->
      <div class="absolute bottom-[20%] left-[30%] flex text-white text-sm">
        <div class="grid grid-cols-2 gap-y-2 gap-x-10">
          <div class="flex justify-between gap-2">
            <span>PAC</span>
            <span>${players.position === "GK" ? players.diving : players.pace}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>SHO</span>
            <span>${players.position === "GK" ? players.handling : players.shooting}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PAS</span>
            <span>${players.position === "GK" ? players.kicking : players.passing}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DRI</span>
            <span>${players.position === "GK" ? players.reflexes : players.dribbling}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DEF</span>
            <span>${players.position === "GK" ? players.speed : players.defending}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PHY</span>
            <span>${players.position === "GK" ? players.positioning : players.physical}</span>
          </div>
        </div>
      </div>
    </div>
       
    `;
    modal.appendChild(card);
  });

  modal.classList.remove("hidden");
});



// **************************************** CM**************************************
// °°°°°°°°1°°°°°°

const CMbtn1 = document.querySelector("#CM1");
console.log(CMbtn1);

CMbtn1.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(CMbtn1.id) 

  const finded = players.filter((plr) => plr.position === "CM");
  console.log("hello"+finded);

  
  let modal = document.querySelector(".gk-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "gk-modal";
    document.body.appendChild(modal);
  }

  modal.innerHTML = "";


  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  modal.appendChild(closeButton);


  finded.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
 <div id="card-photo" class="relative w-[250px] h-[400px] bg-cover" style="background-image: url('/assets/images/card.png');">
     <div onclick="deletePlayer(index)" class=" top-8 left-8 relative"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" viewBox="0 0 72 72"
      style="fill:#FFFFFF;">
      <path d="M 32.5 9 C 28.364 9 25 12.364 25 16.5 L 25 18 L 17 18 C 14.791 18 13 19.791 13 22 C 13 24.209 14.791 26 17 26 L 17.232422 26 L 18.671875 51.916016 C 18.923875 56.449016 22.67875 60 27.21875 60 L 44.78125 60 C 49.32125 60 53.076125 56.449016 53.328125 51.916016 L 54.767578 26 L 55 26 C 57.209 26 59 24.209 59 22 C 59 19.791 57.209 18 55 18 L 47 18 L 47 16.5 C 47 12.364 43.636 9 39.5 9 L 32.5 9 z M 32.5 16 L 39.5 16 C 39.775 16 40 16.224 40 16.5 L 40 18 L 32 18 L 32 16.5 C 32 16.224 32.225 16 32.5 16 z M 36 28 C 37.104 28 38 28.896 38 30 L 38 47.923828 C 38 49.028828 37.104 49.923828 36 49.923828 C 34.896 49.923828 34 49.027828 34 47.923828 L 34 30 C 34 28.896 34.896 28 36 28 z M 27.392578 28.001953 C 28.459578 27.979953 29.421937 28.827641 29.460938 29.931641 L 30.085938 47.931641 C 30.123938 49.035641 29.258297 49.959047 28.154297 49.998047 C 28.131297 49.999047 28.108937 50 28.085938 50 C 27.012938 50 26.125891 49.148359 26.087891 48.068359 L 25.462891 30.068359 C 25.424891 28.964359 26.288578 28.040953 27.392578 28.001953 z M 44.607422 28.001953 C 45.711422 28.039953 46.575109 28.964359 46.537109 30.068359 L 45.912109 48.068359 C 45.874109 49.148359 44.986063 50 43.914062 50 C 43.891062 50 43.868703 49.999047 43.845703 49.998047 C 42.741703 49.960047 41.876063 49.035641 41.914062 47.931641 L 42.539062 29.931641 C 42.577062 28.827641 43.518422 27.979953 44.607422 28.001953 z"></path>
      </svg> </div>
      <div id="detailsbtn" class=" top-8 left-[90%] absolute"> <img src="/assets/images/info_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt=""></div>
      <!-- Player Photo -->
      <div class="absolute top-[20%] left-[70%] transform -translate-x-1/2 w-[55%] h-[30%]">
        <img src="${players.photo}" alt="unknown player" class="w-full h-full object-contain">
      </div>

      <!-- Position -->
      <div id="position" class="absolute top-[35%] left-[29%] text-white text-sm font-bold">
        ${players.position}
      </div>

      <!-- Club Logo -->
      <div class="absolute top-[40%] left-[27%]">
        <img id="playerLogoCard" class="h-[2rem]" src="${players.logo}" alt="Logo">
      </div>

      <!-- Flag -->
      <div class="absolute top-[26%] left-[29%]">
        <button id="flag" class="w-6 h-4">
          <img src="${players.flag}" alt="Flag" class="w-full h-full object-contain">
        </button>
      </div>

      <!-- Player Name -->
      <div class="card-name absolute bottom-[40%] left-[30%] text-center text-white text-md font-bold ">
        ${players.name}
      </div>

      <!-- Stats Section -->
      <div class="absolute bottom-[20%] left-[30%] flex text-white text-sm">
        <div class="grid grid-cols-2 gap-y-2 gap-x-10">
          <div class="flex justify-between gap-2">
            <span>PAC</span>
            <span>${players.position === "GK" ? players.diving : players.pace}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>SHO</span>
            <span>${players.position === "GK" ? players.handling : players.shooting}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PAS</span>
            <span>${players.position === "GK" ? players.kicking : players.passing}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DRI</span>
            <span>${players.position === "GK" ? players.reflexes : players.dribbling}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DEF</span>
            <span>${players.position === "GK" ? players.speed : players.defending}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PHY</span>
            <span>${players.position === "GK" ? players.positioning : players.physical}</span>
          </div>
        </div>
      </div>
    </div>
       
    `;
    modal.appendChild(card);
  });

  modal.classList.remove("hidden");
});


// °°°°°°°°°2°°°°°°°
const CMbtn2 = document.querySelector("#CM2");
console.log(CMbtn2);

CMbtn2.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(CMbtn2.id) 

  const finded = players.filter((plr) => plr.position === "CM");
  console.log("hello"+finded);

  
  let modal = document.querySelector(".gk-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "gk-modal";
    document.body.appendChild(modal);
  }

  modal.innerHTML = "";


  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  modal.appendChild(closeButton);


  finded.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
 <div id="card-photo" class="relative w-[250px] h-[400px] bg-cover" style="background-image: url('/assets/images/card.png');">
     <div onclick="deletePlayer(index)" class=" top-8 left-8 relative"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" viewBox="0 0 72 72"
      style="fill:#FFFFFF;">
      <path d="M 32.5 9 C 28.364 9 25 12.364 25 16.5 L 25 18 L 17 18 C 14.791 18 13 19.791 13 22 C 13 24.209 14.791 26 17 26 L 17.232422 26 L 18.671875 51.916016 C 18.923875 56.449016 22.67875 60 27.21875 60 L 44.78125 60 C 49.32125 60 53.076125 56.449016 53.328125 51.916016 L 54.767578 26 L 55 26 C 57.209 26 59 24.209 59 22 C 59 19.791 57.209 18 55 18 L 47 18 L 47 16.5 C 47 12.364 43.636 9 39.5 9 L 32.5 9 z M 32.5 16 L 39.5 16 C 39.775 16 40 16.224 40 16.5 L 40 18 L 32 18 L 32 16.5 C 32 16.224 32.225 16 32.5 16 z M 36 28 C 37.104 28 38 28.896 38 30 L 38 47.923828 C 38 49.028828 37.104 49.923828 36 49.923828 C 34.896 49.923828 34 49.027828 34 47.923828 L 34 30 C 34 28.896 34.896 28 36 28 z M 27.392578 28.001953 C 28.459578 27.979953 29.421937 28.827641 29.460938 29.931641 L 30.085938 47.931641 C 30.123938 49.035641 29.258297 49.959047 28.154297 49.998047 C 28.131297 49.999047 28.108937 50 28.085938 50 C 27.012938 50 26.125891 49.148359 26.087891 48.068359 L 25.462891 30.068359 C 25.424891 28.964359 26.288578 28.040953 27.392578 28.001953 z M 44.607422 28.001953 C 45.711422 28.039953 46.575109 28.964359 46.537109 30.068359 L 45.912109 48.068359 C 45.874109 49.148359 44.986063 50 43.914062 50 C 43.891062 50 43.868703 49.999047 43.845703 49.998047 C 42.741703 49.960047 41.876063 49.035641 41.914062 47.931641 L 42.539062 29.931641 C 42.577062 28.827641 43.518422 27.979953 44.607422 28.001953 z"></path>
      </svg> </div>
      <div id="detailsbtn" class=" top-8 left-[90%] absolute"> <img src="/assets/images/info_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt=""></div>
      <!-- Player Photo -->
      <div class="absolute top-[20%] left-[70%] transform -translate-x-1/2 w-[55%] h-[30%]">
        <img src="${players.photo}" alt="unknown player" class="w-full h-full object-contain">
      </div>

      <!-- Position -->
      <div id="position" class="absolute top-[35%] left-[29%] text-white text-sm font-bold">
        ${players.position}
      </div>

      <!-- Club Logo -->
      <div class="absolute top-[40%] left-[27%]">
        <img id="playerLogoCard" class="h-[2rem]" src="${players.logo}" alt="Logo">
      </div>

      <!-- Flag -->
      <div class="absolute top-[26%] left-[29%]">
        <button id="flag" class="w-6 h-4">
          <img src="${players.flag}" alt="Flag" class="w-full h-full object-contain">
        </button>
      </div>

      <!-- Player Name -->
      <div class="card-name absolute bottom-[40%] left-[30%] text-center text-white text-md font-bold ">
        ${players.name}
      </div>

      <!-- Stats Section -->
      <div class="absolute bottom-[20%] left-[30%] flex text-white text-sm">
        <div class="grid grid-cols-2 gap-y-2 gap-x-10">
          <div class="flex justify-between gap-2">
            <span>PAC</span>
            <span>${players.position === "GK" ? players.diving : players.pace}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>SHO</span>
            <span>${players.position === "GK" ? players.handling : players.shooting}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PAS</span>
            <span>${players.position === "GK" ? players.kicking : players.passing}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DRI</span>
            <span>${players.position === "GK" ? players.reflexes : players.dribbling}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DEF</span>
            <span>${players.position === "GK" ? players.speed : players.defending}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PHY</span>
            <span>${players.position === "GK" ? players.positioning : players.physical}</span>
          </div>
        </div>
      </div>
    </div>
      
    `;
    modal.appendChild(card);
  });

  modal.classList.remove("hidden");
});




// °°°°°°°°°2°°°°°°°
const CMbtn3 = document.querySelector("#CM3");
console.log(CMbtn3);

CMbtn3.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(CMbtn3.id) 

  const finded = players.filter((plr) => plr.position === "CM");
  console.log("hello"+finded);

  
  let modal = document.querySelector(".gk-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "gk-modal";
    document.body.appendChild(modal);
  }

  modal.innerHTML = "";


  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  modal.appendChild(closeButton);


  finded.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
 <div id="card-photo" class="relative w-[250px] h-[400px] bg-cover" style="background-image: url('/assets/images/card.png');">
     <div onclick="deletePlayer(index)" class=" top-8 left-8 relative"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" viewBox="0 0 72 72"
      style="fill:#FFFFFF;">
      <path d="M 32.5 9 C 28.364 9 25 12.364 25 16.5 L 25 18 L 17 18 C 14.791 18 13 19.791 13 22 C 13 24.209 14.791 26 17 26 L 17.232422 26 L 18.671875 51.916016 C 18.923875 56.449016 22.67875 60 27.21875 60 L 44.78125 60 C 49.32125 60 53.076125 56.449016 53.328125 51.916016 L 54.767578 26 L 55 26 C 57.209 26 59 24.209 59 22 C 59 19.791 57.209 18 55 18 L 47 18 L 47 16.5 C 47 12.364 43.636 9 39.5 9 L 32.5 9 z M 32.5 16 L 39.5 16 C 39.775 16 40 16.224 40 16.5 L 40 18 L 32 18 L 32 16.5 C 32 16.224 32.225 16 32.5 16 z M 36 28 C 37.104 28 38 28.896 38 30 L 38 47.923828 C 38 49.028828 37.104 49.923828 36 49.923828 C 34.896 49.923828 34 49.027828 34 47.923828 L 34 30 C 34 28.896 34.896 28 36 28 z M 27.392578 28.001953 C 28.459578 27.979953 29.421937 28.827641 29.460938 29.931641 L 30.085938 47.931641 C 30.123938 49.035641 29.258297 49.959047 28.154297 49.998047 C 28.131297 49.999047 28.108937 50 28.085938 50 C 27.012938 50 26.125891 49.148359 26.087891 48.068359 L 25.462891 30.068359 C 25.424891 28.964359 26.288578 28.040953 27.392578 28.001953 z M 44.607422 28.001953 C 45.711422 28.039953 46.575109 28.964359 46.537109 30.068359 L 45.912109 48.068359 C 45.874109 49.148359 44.986063 50 43.914062 50 C 43.891062 50 43.868703 49.999047 43.845703 49.998047 C 42.741703 49.960047 41.876063 49.035641 41.914062 47.931641 L 42.539062 29.931641 C 42.577062 28.827641 43.518422 27.979953 44.607422 28.001953 z"></path>
      </svg> </div>
      <div id="detailsbtn" class=" top-8 left-[90%] absolute"> <img src="/assets/images/info_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt=""></div>
      <!-- Player Photo -->
      <div class="absolute top-[20%] left-[70%] transform -translate-x-1/2 w-[55%] h-[30%]">
        <img src="${players.photo}" alt="unknown player" class="w-full h-full object-contain">
      </div>

      <!-- Position -->
      <div id="position" class="absolute top-[35%] left-[29%] text-white text-sm font-bold">
        ${players.position}
      </div>

      <!-- Club Logo -->
      <div class="absolute top-[40%] left-[27%]">
        <img id="playerLogoCard" class="h-[2rem]" src="${players.logo}" alt="Logo">
      </div>

      <!-- Flag -->
      <div class="absolute top-[26%] left-[29%]">
        <button id="flag" class="w-6 h-4">
          <img src="${players.flag}" alt="Flag" class="w-full h-full object-contain">
        </button>
      </div>

      <!-- Player Name -->
      <div class="card-name absolute bottom-[40%] left-[30%] text-center text-white text-md font-bold ">
        ${players.name}
      </div>

      <!-- Stats Section -->
      <div class="absolute bottom-[20%] left-[30%] flex text-white text-sm">
        <div class="grid grid-cols-2 gap-y-2 gap-x-10">
          <div class="flex justify-between gap-2">
            <span>PAC</span>
            <span>${players.position === "GK" ? players.diving : players.pace}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>SHO</span>
            <span>${players.position === "GK" ? players.handling : players.shooting}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PAS</span>
            <span>${players.position === "GK" ? players.kicking : players.passing}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DRI</span>
            <span>${players.position === "GK" ? players.reflexes : players.dribbling}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DEF</span>
            <span>${players.position === "GK" ? players.speed : players.defending}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PHY</span>
            <span>${players.position === "GK" ? players.positioning : players.physical}</span>
          </div>
        </div>
      </div>
    </div>
       
    `;
    modal.appendChild(card);
  });

  modal.classList.remove("hidden");
});






// ****************************************LB****************************************

const LBcard = document.querySelector("#LB");
console.log(LBcard);

LBcard.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(LBcard.id) 

  const finded = players.filter((plr) => plr.position === "LB");
  console.log("hello"+finded);

  
  let modal = document.querySelector(".gk-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "gk-modal";
    document.body.appendChild(modal);
  }

  modal.innerHTML = "";


  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  modal.appendChild(closeButton);


  finded.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
 <div id="card-photo" class="relative w-[250px] h-[400px] bg-cover" style="background-image: url('/assets/images/card.png');">
     <div onclick="deletePlayer(index)" class=" top-8 left-8 relative"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" viewBox="0 0 72 72"
      style="fill:#FFFFFF;">
      <path d="M 32.5 9 C 28.364 9 25 12.364 25 16.5 L 25 18 L 17 18 C 14.791 18 13 19.791 13 22 C 13 24.209 14.791 26 17 26 L 17.232422 26 L 18.671875 51.916016 C 18.923875 56.449016 22.67875 60 27.21875 60 L 44.78125 60 C 49.32125 60 53.076125 56.449016 53.328125 51.916016 L 54.767578 26 L 55 26 C 57.209 26 59 24.209 59 22 C 59 19.791 57.209 18 55 18 L 47 18 L 47 16.5 C 47 12.364 43.636 9 39.5 9 L 32.5 9 z M 32.5 16 L 39.5 16 C 39.775 16 40 16.224 40 16.5 L 40 18 L 32 18 L 32 16.5 C 32 16.224 32.225 16 32.5 16 z M 36 28 C 37.104 28 38 28.896 38 30 L 38 47.923828 C 38 49.028828 37.104 49.923828 36 49.923828 C 34.896 49.923828 34 49.027828 34 47.923828 L 34 30 C 34 28.896 34.896 28 36 28 z M 27.392578 28.001953 C 28.459578 27.979953 29.421937 28.827641 29.460938 29.931641 L 30.085938 47.931641 C 30.123938 49.035641 29.258297 49.959047 28.154297 49.998047 C 28.131297 49.999047 28.108937 50 28.085938 50 C 27.012938 50 26.125891 49.148359 26.087891 48.068359 L 25.462891 30.068359 C 25.424891 28.964359 26.288578 28.040953 27.392578 28.001953 z M 44.607422 28.001953 C 45.711422 28.039953 46.575109 28.964359 46.537109 30.068359 L 45.912109 48.068359 C 45.874109 49.148359 44.986063 50 43.914062 50 C 43.891062 50 43.868703 49.999047 43.845703 49.998047 C 42.741703 49.960047 41.876063 49.035641 41.914062 47.931641 L 42.539062 29.931641 C 42.577062 28.827641 43.518422 27.979953 44.607422 28.001953 z"></path>
      </svg> </div>
      <div id="detailsbtn" class=" top-8 left-[90%] absolute"> <img src="/assets/images/info_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt=""></div>
      <!-- Player Photo -->
      <div class="absolute top-[20%] left-[70%] transform -translate-x-1/2 w-[55%] h-[30%]">
        <img src="${players.photo}" alt="unknown player" class="w-full h-full object-contain">
      </div>

      <!-- Position -->
      <div id="position" class="absolute top-[35%] left-[29%] text-white text-sm font-bold">
        ${players.position}
      </div>

      <!-- Club Logo -->
      <div class="absolute top-[40%] left-[27%]">
        <img id="playerLogoCard" class="h-[2rem]" src="${players.logo}" alt="Logo">
      </div>

      <!-- Flag -->
      <div class="absolute top-[26%] left-[29%]">
        <button id="flag" class="w-6 h-4">
          <img src="${players.flag}" alt="Flag" class="w-full h-full object-contain">
        </button>
      </div>

      <!-- Player Name -->
      <div class="card-name absolute bottom-[40%] left-[30%] text-center text-white text-md font-bold ">
        ${players.name}
      </div>

      <!-- Stats Section -->
      <div class="absolute bottom-[20%] left-[30%] flex text-white text-sm">
        <div class="grid grid-cols-2 gap-y-2 gap-x-10">
          <div class="flex justify-between gap-2">
            <span>PAC</span>
            <span>${players.position === "GK" ? players.diving : players.pace}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>SHO</span>
            <span>${players.position === "GK" ? players.handling : players.shooting}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PAS</span>
            <span>${players.position === "GK" ? players.kicking : players.passing}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DRI</span>
            <span>${players.position === "GK" ? players.reflexes : players.dribbling}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DEF</span>
            <span>${players.position === "GK" ? players.speed : players.defending}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PHY</span>
            <span>${players.position === "GK" ? players.positioning : players.physical}</span>
          </div>
        </div>
      </div>
    </div>
        
    `;
    modal.appendChild(card);
  });

  modal.classList.remove("hidden");
});



// ***********************CB**********************************************************

const CBcard1 = document.querySelector("#CB1");
console.log(LBcard);

CBcard1.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(CBcard1.id) 

  const finded = players.filter((plr) => plr.position === "CB");
  console.log("hello"+finded);

  
  let modal = document.querySelector(".gk-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "gk-modal";
    document.body.appendChild(modal);
  }

  modal.innerHTML = "";


  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  modal.appendChild(closeButton);


  finded.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
       <div id="card-photo" class="relative w-[250px] h-[400px] bg-cover" style="background-image: url('/assets/images/card.png');">
     <div onclick="deletePlayer(index)" class=" top-8 left-8 relative"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" viewBox="0 0 72 72"
      style="fill:#FFFFFF;">
      <path d="M 32.5 9 C 28.364 9 25 12.364 25 16.5 L 25 18 L 17 18 C 14.791 18 13 19.791 13 22 C 13 24.209 14.791 26 17 26 L 17.232422 26 L 18.671875 51.916016 C 18.923875 56.449016 22.67875 60 27.21875 60 L 44.78125 60 C 49.32125 60 53.076125 56.449016 53.328125 51.916016 L 54.767578 26 L 55 26 C 57.209 26 59 24.209 59 22 C 59 19.791 57.209 18 55 18 L 47 18 L 47 16.5 C 47 12.364 43.636 9 39.5 9 L 32.5 9 z M 32.5 16 L 39.5 16 C 39.775 16 40 16.224 40 16.5 L 40 18 L 32 18 L 32 16.5 C 32 16.224 32.225 16 32.5 16 z M 36 28 C 37.104 28 38 28.896 38 30 L 38 47.923828 C 38 49.028828 37.104 49.923828 36 49.923828 C 34.896 49.923828 34 49.027828 34 47.923828 L 34 30 C 34 28.896 34.896 28 36 28 z M 27.392578 28.001953 C 28.459578 27.979953 29.421937 28.827641 29.460938 29.931641 L 30.085938 47.931641 C 30.123938 49.035641 29.258297 49.959047 28.154297 49.998047 C 28.131297 49.999047 28.108937 50 28.085938 50 C 27.012938 50 26.125891 49.148359 26.087891 48.068359 L 25.462891 30.068359 C 25.424891 28.964359 26.288578 28.040953 27.392578 28.001953 z M 44.607422 28.001953 C 45.711422 28.039953 46.575109 28.964359 46.537109 30.068359 L 45.912109 48.068359 C 45.874109 49.148359 44.986063 50 43.914062 50 C 43.891062 50 43.868703 49.999047 43.845703 49.998047 C 42.741703 49.960047 41.876063 49.035641 41.914062 47.931641 L 42.539062 29.931641 C 42.577062 28.827641 43.518422 27.979953 44.607422 28.001953 z"></path>
      </svg> </div>
      <div id="detailsbtn" class=" top-8 left-[90%] absolute"> <img src="/assets/images/info_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt=""></div>
      <!-- Player Photo -->
      <div class="absolute top-[20%] left-[70%] transform -translate-x-1/2 w-[55%] h-[30%]">
        <img src="${players.photo}" alt="unknown player" class="w-full h-full object-contain">
      </div>

      <!-- Position -->
      <div id="position" class="absolute top-[35%] left-[29%] text-white text-sm font-bold">
        ${players.position}
      </div>

      <!-- Club Logo -->
      <div class="absolute top-[40%] left-[27%]">
        <img id="playerLogoCard" class="h-[2rem]" src="${players.logo}" alt="Logo">
      </div>

      <!-- Flag -->
      <div class="absolute top-[26%] left-[29%]">
        <button id="flag" class="w-6 h-4">
          <img src="${players.flag}" alt="Flag" class="w-full h-full object-contain">
        </button>
      </div>

      <!-- Player Name -->
      <div class="card-name absolute bottom-[40%] left-[30%] text-center text-white text-md font-bold ">
        ${players.name}
      </div>

      <!-- Stats Section -->
      <div class="absolute bottom-[20%] left-[30%] flex text-white text-sm">
        <div class="grid grid-cols-2 gap-y-2 gap-x-10">
          <div class="flex justify-between gap-2">
            <span>PAC</span>
            <span>${players.position === "GK" ? players.diving : players.pace}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>SHO</span>
            <span>${players.position === "GK" ? players.handling : players.shooting}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PAS</span>
            <span>${players.position === "GK" ? players.kicking : players.passing}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DRI</span>
            <span>${players.position === "GK" ? players.reflexes : players.dribbling}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DEF</span>
            <span>${players.position === "GK" ? players.speed : players.defending}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PHY</span>
            <span>${players.position === "GK" ? players.positioning : players.physical}</span>
          </div>
        </div>
      </div>
    </div>
        
    `;
    modal.appendChild(card);
  });

  modal.classList.remove("hidden");
});


const CBcard2 = document.querySelector("#CB2");
console.log(LBcard);

CBcard2.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(CBcard2.id) 

  const finded = players.filter((plr) => plr.position === "CB");
  console.log("hello"+finded);

  
  let modal = document.querySelector(".gk-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "gk-modal";
    document.body.appendChild(modal);
  }

  modal.innerHTML = "";


  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  modal.appendChild(closeButton);


  finded.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <div id="card-photo" class="relative w-[250px] h-[400px] bg-cover" style="background-image: url('/assets/images/card.png');">
     <div onclick="deletePlayer(index)" class=" top-8 left-8 relative"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" viewBox="0 0 72 72"
      style="fill:#FFFFFF;">
      <path d="M 32.5 9 C 28.364 9 25 12.364 25 16.5 L 25 18 L 17 18 C 14.791 18 13 19.791 13 22 C 13 24.209 14.791 26 17 26 L 17.232422 26 L 18.671875 51.916016 C 18.923875 56.449016 22.67875 60 27.21875 60 L 44.78125 60 C 49.32125 60 53.076125 56.449016 53.328125 51.916016 L 54.767578 26 L 55 26 C 57.209 26 59 24.209 59 22 C 59 19.791 57.209 18 55 18 L 47 18 L 47 16.5 C 47 12.364 43.636 9 39.5 9 L 32.5 9 z M 32.5 16 L 39.5 16 C 39.775 16 40 16.224 40 16.5 L 40 18 L 32 18 L 32 16.5 C 32 16.224 32.225 16 32.5 16 z M 36 28 C 37.104 28 38 28.896 38 30 L 38 47.923828 C 38 49.028828 37.104 49.923828 36 49.923828 C 34.896 49.923828 34 49.027828 34 47.923828 L 34 30 C 34 28.896 34.896 28 36 28 z M 27.392578 28.001953 C 28.459578 27.979953 29.421937 28.827641 29.460938 29.931641 L 30.085938 47.931641 C 30.123938 49.035641 29.258297 49.959047 28.154297 49.998047 C 28.131297 49.999047 28.108937 50 28.085938 50 C 27.012938 50 26.125891 49.148359 26.087891 48.068359 L 25.462891 30.068359 C 25.424891 28.964359 26.288578 28.040953 27.392578 28.001953 z M 44.607422 28.001953 C 45.711422 28.039953 46.575109 28.964359 46.537109 30.068359 L 45.912109 48.068359 C 45.874109 49.148359 44.986063 50 43.914062 50 C 43.891062 50 43.868703 49.999047 43.845703 49.998047 C 42.741703 49.960047 41.876063 49.035641 41.914062 47.931641 L 42.539062 29.931641 C 42.577062 28.827641 43.518422 27.979953 44.607422 28.001953 z"></path>
      </svg> </div>
      <div id="detailsbtn" class=" top-8 left-[90%] absolute"> <img src="/assets/images/info_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt=""></div>
      <!-- Player Photo -->
      <div class="absolute top-[20%] left-[70%] transform -translate-x-1/2 w-[55%] h-[30%]">
        <img src="${players.photo}" alt="unknown player" class="w-full h-full object-contain">
      </div>

      <!-- Position -->
      <div id="position" class="absolute top-[35%] left-[29%] text-white text-sm font-bold">
        ${players.position}
      </div>

      <!-- Club Logo -->
      <div class="absolute top-[40%] left-[27%]">
        <img id="playerLogoCard" class="h-[2rem]" src="${players.logo}" alt="Logo">
      </div>

      <!-- Flag -->
      <div class="absolute top-[26%] left-[29%]">
        <button id="flag" class="w-6 h-4">
          <img src="${players.flag}" alt="Flag" class="w-full h-full object-contain">
        </button>
      </div>

      <!-- Player Name -->
      <div class="card-name absolute bottom-[40%] left-[30%] text-center text-white text-md font-bold ">
        ${players.name}
      </div>

      <!-- Stats Section -->
      <div class="absolute bottom-[20%] left-[30%] flex text-white text-sm">
        <div class="grid grid-cols-2 gap-y-2 gap-x-10">
          <div class="flex justify-between gap-2">
            <span>PAC</span>
            <span>${players.position === "GK" ? players.diving : players.pace}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>SHO</span>
            <span>${players.position === "GK" ? players.handling : players.shooting}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PAS</span>
            <span>${players.position === "GK" ? players.kicking : players.passing}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DRI</span>
            <span>${players.position === "GK" ? players.reflexes : players.dribbling}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DEF</span>
            <span>${players.position === "GK" ? players.speed : players.defending}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PHY</span>
            <span>${players.position === "GK" ? players.positioning : players.physical}</span>
          </div>
        </div>
      </div>
    </div>
       
    `;
    modal.appendChild(card);
  });

  modal.classList.remove("hidden");
});



// **************************RB**********************************************************

const RBcard = document.querySelector("#RB");
console.log(RBcard);

RBcard.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(RBcard.id) 

  const finded = players.filter((plr) => plr.position === "RB");
  console.log("hello"+finded);

  
  let modal = document.querySelector(".gk-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "gk-modal";
    document.body.appendChild(modal);
  }

  modal.innerHTML = "";


  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  modal.appendChild(closeButton);


  finded.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
       <div id="card-photo" class="relative w-[250px] h-[400px] bg-cover" style="background-image: url('/assets/images/card.png');">
     <div onclick="deletePlayer(index)" class=" top-8 left-8 relative"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" viewBox="0 0 72 72"
      style="fill:#FFFFFF;">
      <path d="M 32.5 9 C 28.364 9 25 12.364 25 16.5 L 25 18 L 17 18 C 14.791 18 13 19.791 13 22 C 13 24.209 14.791 26 17 26 L 17.232422 26 L 18.671875 51.916016 C 18.923875 56.449016 22.67875 60 27.21875 60 L 44.78125 60 C 49.32125 60 53.076125 56.449016 53.328125 51.916016 L 54.767578 26 L 55 26 C 57.209 26 59 24.209 59 22 C 59 19.791 57.209 18 55 18 L 47 18 L 47 16.5 C 47 12.364 43.636 9 39.5 9 L 32.5 9 z M 32.5 16 L 39.5 16 C 39.775 16 40 16.224 40 16.5 L 40 18 L 32 18 L 32 16.5 C 32 16.224 32.225 16 32.5 16 z M 36 28 C 37.104 28 38 28.896 38 30 L 38 47.923828 C 38 49.028828 37.104 49.923828 36 49.923828 C 34.896 49.923828 34 49.027828 34 47.923828 L 34 30 C 34 28.896 34.896 28 36 28 z M 27.392578 28.001953 C 28.459578 27.979953 29.421937 28.827641 29.460938 29.931641 L 30.085938 47.931641 C 30.123938 49.035641 29.258297 49.959047 28.154297 49.998047 C 28.131297 49.999047 28.108937 50 28.085938 50 C 27.012938 50 26.125891 49.148359 26.087891 48.068359 L 25.462891 30.068359 C 25.424891 28.964359 26.288578 28.040953 27.392578 28.001953 z M 44.607422 28.001953 C 45.711422 28.039953 46.575109 28.964359 46.537109 30.068359 L 45.912109 48.068359 C 45.874109 49.148359 44.986063 50 43.914062 50 C 43.891062 50 43.868703 49.999047 43.845703 49.998047 C 42.741703 49.960047 41.876063 49.035641 41.914062 47.931641 L 42.539062 29.931641 C 42.577062 28.827641 43.518422 27.979953 44.607422 28.001953 z"></path>
      </svg> </div>
      <div id="detailsbtn" class=" top-8 left-[90%] absolute"> <img src="/assets/images/info_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt=""></div>
      <!-- Player Photo -->
      <div class="absolute top-[20%] left-[70%] transform -translate-x-1/2 w-[55%] h-[30%]">
        <img src="${players.photo}" alt="unknown player" class="w-full h-full object-contain">
      </div>

      <!-- Position -->
      <div id="position" class="absolute top-[35%] left-[29%] text-white text-sm font-bold">
        ${players.position}
      </div>

      <!-- Club Logo -->
      <div class="absolute top-[40%] left-[27%]">
        <img id="playerLogoCard" class="h-[2rem]" src="${players.logo}" alt="Logo">
      </div>

      <!-- Flag -->
      <div class="absolute top-[26%] left-[29%]">
        <button id="flag" class="w-6 h-4">
          <img src="${players.flag}" alt="Flag" class="w-full h-full object-contain">
        </button>
      </div>

      <!-- Player Name -->
      <div class="card-name absolute bottom-[40%] left-[30%] text-center text-white text-md font-bold ">
        ${players.name}
      </div>

      <!-- Stats Section -->
      <div class="absolute bottom-[20%] left-[30%] flex text-white text-sm">
        <div class="grid grid-cols-2 gap-y-2 gap-x-10">
          <div class="flex justify-between gap-2">
            <span>PAC</span>
            <span>${players.position === "GK" ? players.diving : players.pace}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>SHO</span>
            <span>${players.position === "GK" ? players.handling : players.shooting}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PAS</span>
            <span>${players.position === "GK" ? players.kicking : players.passing}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DRI</span>
            <span>${players.position === "GK" ? players.reflexes : players.dribbling}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>DEF</span>
            <span>${players.position === "GK" ? players.speed : players.defending}</span>
          </div>
          <div class="flex justify-between gap-2">
            <span>PHY</span>
            <span>${players.position === "GK" ? players.positioning : players.physical}</span>
          </div>
        </div>
      </div>
    </div>
      
    `;
    modal.appendChild(card);
    
  });
   
  modal.classList.remove("hidden");
});










document.getElementById("LW").addEventListener("click", () => {
  document.querySelector(".popup-form-container").classList.remove("hidden");
});

document.querySelector(".popup-form-container").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.add("hidden");
  }
});

document.getElementById("addPlayerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const newPlayer = {
    name: document.getElementById("playerName").value,
    position: document.getElementById("playerPosition").value,
    photo: document.getElementById("playerPhoto").value,
    nationality: document.getElementById("playerNationality").value,
    club: document.getElementById("playerClub").value,
    flag: document.getElementById("playerFlag").value,
    rating: document.getElementById("playerRating").value,
  };

  console.log("New Player Added:", newPlayer);
  document.querySelector(".popup-form-container").classList.add("hidden");
});

const listCard = document.querySelectorAll(".popupCard");
listCard.forEach(card =>{
  card.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log(card);
    
  })
})
