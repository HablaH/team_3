//model
let playerHealth = 100;
let npcHealth = 100;
let end;
const npcBilder = [];
const playerBilder = [];

//view
show();
function show()
{
    const ended = ((end == 'taper') || (end == 'yey')) ? 'disabled' : '';
    let winner = winCheck();
    document.getElementById('app').innerHTML = 
        ` 
        <div class="main">
            <div class="playerNavn">PLAYER</div>
            <div class="playerBilde">playerBilde</div>
            <div class="npcNavn">npcNavn</div>
            <div class="npcBilde">npcBilde</div>
            <div class="playerHp">player: ${playerHealth}</div>
            <div class="npcHp">npc: ${npcHealth}</div>
            <div class="VS">${winner}</div>
            <div class="attack"><button onclick="attack()" ${ended}>ATTACK</button></div>
        </div>
        `;
}

//controller


function checkHealthNpc() {

    if (npcHealth > 50) {
        //bytt bilde 1 
        console.log('masse liv');
    }
    else if (npcHealth <= 50 && npcHealth >= 1) {
        //bytt bilde 2
        console.log('snart ded');
    }
    else if (npcHealth <= 0) {
        end = 'yey';
        //bytt bilde 3
        console.log('yey');
    }


}
function checkHealthPlayer() {

    if (playerHealth > 50) {
        //bytt bilde 1 
        console.log('masse liv');
    }
    else if (playerHealth <= 50 && playerHealth >= 1)
    {
        //bytt bilde 2
        console.log('snart ded');
    }
    else if (playerHealth <= 0)
    {
        
        //bytt bilde 3
        console.log('ded');
        end = 'taper';
    }
    
   
}

function attack()
{
    
        npcHealth = npcHealth - playerAttack();
        checkHealthNpc();
        show();
    if (end != 'yey') {
        playerHealth = playerHealth - npcAttack();
        checkHealthPlayer();
        show();
    } else { return; }
}

//hjelpefunksjoner

function playerAttack()
{
    const playerDmg = Math.floor(Math.random() * 10) + 1; 
    const critChance = Math.floor(Math.random() * 100);
    if (critChance <= 20 && critChance >= 0)
    {
        console.log('crit ' + (playerDmg * 2))
        return (playerDmg * 2);
    }
    console.log(playerDmg)
    return playerDmg;
}

function npcAttack()
{
    const npcDmg = Math.floor(Math.random() * 20) + 1;
    const missChance = Math.floor(Math.random() * 100);
    if (missChance <= 20 && missChance >= 0) {
        console.log('miss')
        return (npcDmg * 0);
    }
    console.log(npcDmg)
    return npcDmg;
}
function winCheck()
{
    if (end == 'taper') {
        return 'Du tapte!';
    } else if (end == 'yey') {
        return 'Du vant!';
    } else { return 'VS'; }
}