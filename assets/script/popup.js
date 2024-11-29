
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
            <div id="rating"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.rating}
                    </div>

                    <div id="pace"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.diving : player.pace}
                      </div>

                    <div id="shooting"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.handling : player.shooting}
                      </div>

                    <div id="passing"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.kicking : player.passing}
                      </div>

                    <div id="dribbling"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.reflexes : player.dribbling}
                      </div>

                    <div id="defending"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                        ${player.position === "GK" ? player.speed : player.defending}
                      </div>

                    <div id="physical"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                       ${player.position === "GK" ? player.positioning : player.physical}
                      </div>
    
                </div>
                <div class="flex w-full justify-between ">
                    <p class="text-white" id="position">${player.position}</p>
                    
                   <img src="${player.flag}" alt="terrain" class="px-1 py-1 rounded-lg">
   
                </div>
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
      <div class="popupCard  w-[12rem] bg-[#27272a] p-4 flex flex-col items-center justify-center  h-[18rem] rounded-xl">
        <div
          class="w-full bg-contain ml-20 bg-no-repeat h-[6rem] rounded-md"
          style="background-image: url('${player.photo}')">
        </div>
        <div class="text-center">
          <h1 class="text-[#d9d9d9] text-sm font-semibold truncate">${player.name}</h1>
        </div>
        <div class="flex flex-col items-center gap-2">
          <p class="text-xs text-[#d9d9d9]">Stats</p>
          <div class="flex gap-1 flex-wrap justify-center">
           <div id="rating"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.rating}
                    </div>

                    <div id="pace"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.diving : player.pace}
                      </div>

                    <div id="shooting"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.handling : player.shooting}
                      </div>

                    <div id="passing"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.kicking : player.passing}
                      </div>

                    <div id="dribbling"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.reflexes : player.dribbling}
                      </div>

                    <div id="defending"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                        ${player.position === "GK" ? player.speed : player.defending}
                      </div>

                    <div id="physical"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                       ${player.position === "GK" ? player.positioning : player.physical}
                      </div>
    
                </div>
                <div class="flex w-full justify-between ">
                    <p class="text-white" id="position">${player.position}</p>
                    
                   <img src="${player.flag}" alt="terrain" class="px-1 py-1 rounded-lg">
   
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
      <div class="popupCard  w-[12rem] bg-[#27272a] p-4 flex flex-col items-center justify-center gap-3 h-[18rem] rounded-xl">
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
             <div id="rating"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.rating}
                    </div>

                    <div id="pace"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.diving : player.pace}
                      </div>

                    <div id="shooting"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.handling : player.shooting}
                      </div>

                    <div id="passing"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.kicking : player.passing}
                      </div>

                    <div id="dribbling"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.reflexes : player.dribbling}
                      </div>

                    <div id="defending"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                        ${player.position === "GK" ? player.speed : player.defending}
                      </div>

                    <div id="physical"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                       ${player.position === "GK" ? player.positioning : player.physical}
                      </div>
    
                </div>
                <div class="flex w-full justify-between ">
                    <p class="text-white" id="position">${player.position}</p>
                    
                   <img src="${player.flag}" alt="terrain" class="px-1 py-1 rounded-lg">
   
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
      <div class="popupCard  w-[12rem] bg-[#27272a] p-4 flex flex-col items-center justify-center gap-3 h-[18rem] rounded-xl">
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
             <div id="rating"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.rating}
                    </div>

                    <div id="pace"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.diving : player.pace}
                      </div>

                    <div id="shooting"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.handling : player.shooting}
                      </div>

                    <div id="passing"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.kicking : player.passing}
                      </div>

                    <div id="dribbling"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.reflexes : player.dribbling}
                      </div>

                    <div id="defending"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                        ${player.position === "GK" ? player.speed : player.defending}
                      </div>

                    <div id="physical"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                       ${player.position === "GK" ? player.positioning : player.physical}
                      </div>
    
                </div>
                <div class="flex w-full justify-between ">
                    <p class="text-white" id="position">${player.position}</p>
                    
                   <img src="${player.flag}" alt="terrain" class="px-1 py-1 rounded-lg">
   
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
      <div class="popupCard  w-[12rem] bg-[#27272a] p-4 flex flex-col items-center justify-center gap-3 h-[18rem] rounded-xl">
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
             <div id="rating"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.rating}
                    </div>

                    <div id="pace"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.diving : player.pace}
                      </div>

                    <div id="shooting"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.handling : player.shooting}
                      </div>

                    <div id="passing"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.kicking : player.passing}
                      </div>

                    <div id="dribbling"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.reflexes : player.dribbling}
                      </div>

                    <div id="defending"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                        ${player.position === "GK" ? player.speed : player.defending}
                      </div>

                    <div id="physical"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                       ${player.position === "GK" ? player.positioning : player.physical}
                      </div>
    
                </div>
                <div class="flex w-full justify-between ">
                    <p class="text-white" id="position">${player.position}</p>
                    
                   <img src="${player.flag}" alt="terrain" class="px-1 py-1 rounded-lg">
   
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
      <div class="popupCard  w-[12rem] bg-[#27272a] p-4 flex flex-col items-center justify-center gap-3 h-[18rem] rounded-xl">
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
            <div id="rating"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.rating}
                    </div>

                    <div id="pace"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.diving : player.pace}
                      </div>

                    <div id="shooting"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.handling : player.shooting}
                      </div>

                    <div id="passing"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.kicking : player.passing}
                      </div>

                    <div id="dribbling"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.reflexes : player.dribbling}
                      </div>

                    <div id="defending"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                        ${player.position === "GK" ? player.speed : player.defending}
                      </div>

                    <div id="physical"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                       ${player.position === "GK" ? player.positioning : player.physical}
                      </div>
    
                </div>
                <div class="flex w-full justify-between ">
                    <p class="text-white" id="position">${player.position}</p>
                    
                   <img src="${player.flag}" alt="terrain" class="px-1 py-1 rounded-lg">
   
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
      <div class="popupCard  w-[12rem] bg-[#27272a] p-4 flex flex-col items-center justify-center gap-3 h-[18rem] rounded-xl">
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
            <div id="rating"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.rating}
                    </div>

                    <div id="pace"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.diving : player.pace}
                      </div>

                    <div id="shooting"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.handling : player.shooting}
                      </div>

                    <div id="passing"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.kicking : player.passing}
                      </div>

                    <div id="dribbling"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.reflexes : player.dribbling}
                      </div>

                    <div id="defending"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                        ${player.position === "GK" ? player.speed : player.defending}
                      </div>

                    <div id="physical"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                       ${player.position === "GK" ? player.positioning : player.physical}
                      </div>
    
                </div>
                <div class="flex w-full justify-between ">
                    <p class="text-white" id="position">${player.position}</p>
                    
                   <img src="${player.flag}" alt="terrain" class="px-1 py-1 rounded-lg">
   
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
      <div class="popupCard  w-[12rem] bg-[#27272a] p-4 flex flex-col items-center justify-center gap-3 h-[18rem] rounded-xl">
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
           <div id="rating"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.rating}
                    </div>

                    <div id="pace"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.diving : player.pace}
                      </div>

                    <div id="shooting"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.handling : player.shooting}
                      </div>

                    <div id="passing"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.kicking : player.passing}
                      </div>

                    <div id="dribbling"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.reflexes : player.dribbling}
                      </div>

                    <div id="defending"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                        ${player.position === "GK" ? player.speed : player.defending}
                      </div>

                    <div id="physical"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                       ${player.position === "GK" ? player.positioning : player.physical}
                      </div>
    
                </div>
                <div class="flex w-full justify-between ">
                    <p class="text-white" id="position">${player.position}</p>
                    
                   <img src="${player.flag}" alt="terrain" class="px-1 py-1 rounded-lg">
   
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
      <div class="popupCard  w-[12rem] bg-[#27272a] p-4 flex flex-col items-center justify-center gap-3 h-[18rem] rounded-xl">
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
            <div id="rating"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.rating}
                    </div>

                    <div id="pace"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.diving : player.pace}
                      </div>

                    <div id="shooting"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.handling : player.shooting}
                      </div>

                    <div id="passing"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.kicking : player.passing}
                      </div>

                    <div id="dribbling"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.reflexes : player.dribbling}
                      </div>

                    <div id="defending"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                        ${player.position === "GK" ? player.speed : player.defending}
                      </div>

                    <div id="physical"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                       ${player.position === "GK" ? player.positioning : player.physical}
                      </div>
    
                </div>
                <div class="flex w-full justify-between ">
                    <p class="text-white" id="position">${player.position}</p>
                    
                   <img src="${player.flag}" alt="terrain" class="px-1 py-1 rounded-lg">
   
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
            <div id="rating"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.rating}
                    </div>

                    <div id="pace"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.diving : player.pace}
                      </div>

                    <div id="shooting"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.handling : player.shooting}
                      </div>

                    <div id="passing"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.kicking : player.passing}
                      </div>

                    <div id="dribbling"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${player.position === "GK" ? player.reflexes : player.dribbling}
                      </div>

                    <div id="defending"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                        ${player.position === "GK" ? player.speed : player.defending}
                      </div>

                    <div id="physical"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                       ${player.position === "GK" ? player.positioning : player.physical}
                      </div>
    
                </div>
                <div class="flex w-full justify-between ">
                    <p class="text-white" id="position">${player.position}</p>
                    
                   <img src="${player.flag}" alt="terrain" class="px-1 py-1 rounded-lg">
   
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
