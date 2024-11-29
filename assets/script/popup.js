
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




document.addEventListener('DOMContentLoaded', () => {
  const card2 = document.getElementById('card2');
  const popup = document.getElementById('popup');

  card2.addEventListener('click', () => {
    popup.style.visibility = 'visible'; 
    popup.style.opacity = '1'; 
  });

 
});





document.addEventListener('DOMContentLoaded', () => {
  const card3 = document.getElementById('card3');
  const popup = document.getElementById('popup');

  card3.addEventListener('click', () => {
    popup.style.visibility = 'visible'; 
    popup.style.opacity = '1'; 
  });

 
});





document.addEventListener('DOMContentLoaded', () => {
  const card4 = document.getElementById('card4');
  const popup = document.getElementById('popup');

  card4.addEventListener('click', () => {
    popup.style.visibility = 'visible'; 
    popup.style.opacity = '1'; 
  });

 
});




document.addEventListener('DOMContentLoaded', () => {
  const card5 = document.getElementById('card5');
  const popup = document.getElementById('popup');

  card5.addEventListener('click', () => {
    popup.style.visibility = 'visible'; 
    popup.style.opacity = '1'; 
  });

 
});





document.addEventListener('DOMContentLoaded', () => {
  const card6 = document.getElementById('card6');
  const popup = document.getElementById('popup');

  card6.addEventListener('click', () => {
    popup.style.visibility = 'visible'; 
    popup.style.opacity = '1'; 
  });

 
});



document.addEventListener('DOMContentLoaded', () => {
  const card7 = document.getElementById('card7');
  const popup = document.getElementById('popup');

  card7.addEventListener('click', () => {
    popup.style.visibility = 'visible'; 
    popup.style.opacity = '1'; 
  });

 
});




document.addEventListener('DOMContentLoaded', () => {
  const card8 = document.getElementById('card8');
  const popup = document.getElementById('popup');

  card1.addEventListener('click', () => {
    popup.style.visibility = 'visible'; 
    popup.style.opacity = '1'; 
  });

 
});


//§!!!

document.addEventListener('DOMContentLoaded', () => {
  const card9 = document.getElementById('card9');
  const popup = document.getElementById('popup');

  card9.addEventListener('click', () => {
    popup.style.visibility = 'visible'; 
    popup.style.opacity = '1'; 

  });


document.addEventListener('DOMContentLoaded', () => {
  const cardGK = document.getElementById('cardGK');
  const popup = document.getElementById('popup');

  cardGK.addEventListener('click', () => {
    popup.style.visibility = 'visible'; 
    popup.style.opacity = '1'; 
  });

 
});


const gkButton = document.querySelector("#GK");
console.log(gkButton);

gkButton.addEventListener("click", (e) => {
  e.stopPropagation();

  // Filter the players with position "GK"
  const finded = players.filter((plr) => plr.position === "GK");
  console.log("hello"+finded);

  
  // Create or select the modal
  let modal = document.querySelector(".gk-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "gk-modal";
    document.body.appendChild(modal);
  }

  // Reset the modal content
  modal.innerHTML = "";

  // Add close button
  const closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "✖";
  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  modal.appendChild(closeButton);

  // Append player cards to the modal

  finded.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <div class="w-[12rem] bg-[#27272a] p-4 flex flex-col items-center justify-center gap-3 h-[18rem] rounded-xl">
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

  // Display the modal
  modal.classList.remove("hidden");
});

 
});




document.addEventListener('DOMContentLoaded', () => {
  const cardGK = document.getElementById('cardGK');
  const popup = document.getElementById('popup');

  cardGK.addEventListener('click', () => {
    popup.style.visibility = 'visible'; 
    popup.style.opacity = '1'; 
  });

 
});




