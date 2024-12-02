
const players = JSON.parse(localStorage.getItem('players')) || [];
console.log(players);





function showPlayers(players) {
  return `
    <div id="card-photo" class="relative w-[250px] h-[400px] bg-cover" style="background-image: url('/assets/images/card.png');">
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
}



function showAllPlayers (players){
    const cardContainer = document.getElementById('cardContainer');


    cardContainer.innerHTML = ``
    players.forEach(element => {
        const div = document.createElement('div')
        div.classList = `w-[16rem] p-4 flex flex-col gap-3 h-full rounded-xl`
        div.innerHTML= showPlayers(element)
        div.setAttribute('data.id', element.id)
        cardContainer.appendChild(div)
    });
}
 showAllPlayers(players);



 

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

