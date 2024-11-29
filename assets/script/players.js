// fetch('script/data.json')
// .then((response) => response.json())
// .then((data)=> localStorage.setItem('players', JSON.stringify(data.players)))
const players = JSON.parse(localStorage.getItem('players')) || [];



// const cardContainer =document.getElementById('cardContainer');
function showPlayers(players){
    return `
       <div id="image" class="w-full focus:border-[#6d28d9] ml-7 bg-contain bg-no-repeat bg-[url('${players.photo}')] h-[8rem] rounded-xl"></div>
                
                <div>
                  <h1 id="playerName" class="text-[#d9d9d9] text-lg font-semibold truncate">${players.name}</h1>
                </div>
                
                <div  class="flex flex-col w-full gap-2">
                  <p class="text-sm text-[#d9d9d9]">Static</p>
                  <div id="buttons" class="flex w-full gap-2 flex-wrap">

                     <div id="rating"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${players.rating}
                    </div>

                    <div id="pace"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${players.position === "GK" ? players.diving : players.pace}
                      </div>

                    <div id="shooting"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${players.position === "GK" ? players.handling : players.shooting}
                      </div>

                    <div id="passing"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${players.position === "GK" ? players.kicking : players.passing}
                      </div>

                    <div id="dribbling"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                      ${players.position === "GK" ? players.reflexes : players.dribbling}
                      </div>

                    <div id="defending"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                        ${players.position === "GK" ? players.speed : players.defending}
                      </div>

                    <div id="physical"
                      type="text"
                      class="w-[2rem] h-[2rem] bg-[#18181b] text-[#d9d9d9] text-center rounded-md border border-[#18181b] focus:border-[#6d28d9] focus:outline-none">
                       ${players.position === "GK" ? players.positioning : players.physical}
                      </div>
    
                </div>
                <div class="flex w-full justify-between ">
                    <p class="text-white" id="position">${players.position}</p>
                    
                   <img src="${players.flag}" alt="terrain" class="px-1 py-1 rounded-lg">
   
                </div>
              </div>
    `;
    

}


function showAllPlayers (players){
    const cardContainer = document.getElementById('cardContainer');


    cardContainer.innerHTML = ``
    players.forEach(element => {
        const div = document.createElement('div')
        div.classList = `w-[14rem] bg-[#27272a] p-4 flex flex-col gap-3 h-full rounded-xl`
        div.innerHTML= showPlayers(element)
        div.setAttribute('data.id', element.id)
        cardContainer.appendChild(div)
    });
}
 showAllPlayers(players);

