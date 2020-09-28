//model
let playerHealth = 100;
const playerHealthMax = 100;
let npcHealth = 250;
const npcHealthMax = 250;
let end;
const npcBilder = ["url('Bilder/TerjeFullHP.png')", "url('Bilder/TerjeLowHP.png')", "url('Bilder/TerjeNoHP.png')"];
const playerBilder = ["url('Bilder/AylaFullHP.png')", "url('Bilder/AylaLowHP.png')", "url('Bilder/AylaNoHP.png')" ];
const bilde = document.documentElement.style;

//view
show();
function show()
{
    
    let winner = winCheck();
    document.getElementById('app').innerHTML = 
        ` 
        <div class="main">
            <div class="playerNavn">Ayla Dragonborn</div>
            <div class="playerBilde"></div>
            <div class="npcNavn">Terjegur Grakk</div>
            <div class="npcBilde"></div>
            <div class="playerHp"><div class="hpBar" style="width: ${playerHealth}%; background-color: #4CAF50;">${playerHealth}</div></div>
            <div class="npcHp"><div class="hpBar" style="width: ${prosenter(npcHealth, npcHealthMax)}%; background-color: #4CAF50;">${npcHealth}</div></div>
            <div class="VS">${winner}</div>
            <div class="attack" onclick="attack()"></div>
        </div>
        `;
}



function checkHealthNpc() {

    if (prosenter(npcHealth, npcHealthMax) > 50) {
        //bytt bilde 1 npcBilder[0]
        console.log('masse liv');
        bilde.setProperty('--npcbilde', npcBilder[0]);
    }
    else if (prosenter(npcHealth, npcHealthMax) <= 50 && npcHealth >= 1) {
        //bytt bilde 2 npcBilder[1]
        console.log('snart ded');
        bilde.setProperty('--npcbilde', npcBilder[1]);
    }
    else if (prosenter(npcHealth, npcHealthMax) <= 0) {
        end = 'yey';
        //bytt bilde 3 npcBilder[2]
        console.log('yey');
        bilde.setProperty('--npcbilde', npcBilder[2]);
    }


}
function checkHealthPlayer() {

    if (playerHealth > 50) {
        //bytt bilde 1 
        console.log('masse liv');
        bilde.setProperty('--playerbilde', playerBilder[0]);
    }
    else if (playerHealth <= 50 && playerHealth >= 1)
    {
        //bytt bilde 2
        console.log('snart ded');
        bilde.setProperty('--playerbilde', playerBilder[1]);
    }
    else if (playerHealth <= 0)
    {
        
        //bytt bilde 3
        console.log('ded');
        end = 'taper';
        bilde.setProperty('--playerbilde', playerBilder[2]);
    }
    
   
}

function attack()
{
    if ((end == 'taper') || (end == 'yey')) return;
    npcHealth = npcHealth - playerAttack();
    npcHealth <= 0 ? npcHealth = 0 : npcHealth;
        checkHealthNpc();
        show();
    if (end != 'yey') {
        playerHealth = playerHealth - npcAttack();
        playerHealth <= 0 ? playerHealth = 0 : playerHealth;
        checkHealthPlayer();
        show();
    } else { return; }
}

//hjelpefunksjoner

function playerAttack()
{
    const playerDmg = Math.floor(Math.random() * 10) + 1; 
    const critChance = Math.floor(Math.random() * 100);
    if (critChance <= 45 && critChance >= 0)
    {
        console.log('crit ' + (playerDmg * 2))
        return (playerDmg * 2);
    }
    console.log(playerDmg)
    return playerDmg;
}

function npcAttack()
{
    const npcDmg = Math.floor(Math.random() * 15) + 1;
    const missChance = Math.floor(Math.random() * 100);
    if (missChance <= 40 && missChance >= 0) {
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
//hjelpefunksjon %
function prosenter(val, max) {
    return ((val * 100) / max);
}