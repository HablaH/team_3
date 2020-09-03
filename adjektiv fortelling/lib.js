//model
var tracker = 0;
var space = ['____', '____', '____', '____', '____', '____', '____'];

//view
updateView();
function updateView()
{
    document.getElementById('app').innerHTML = `
        <div class="storyBox"><p>
            Det var en gang en ${space[0]} kanin, som ikke hadde kontroll p&aring; livet sitt,<br />
            Den hadde tjue ${space[1]} barn, tre ${space[2]} koner og en helt ${space[3]} jobb.<br />
            Den ${space[4]} kaninen hadde ikke noe fritid, og trengte en ${space[5]} ferie.<br /><br />

            Kaninen pakket sin ${space[6]} bag, og kj&oslash;pte en billett til Mallorca. 
        </p></div>
        <div class="buttonBox">
        <button onclick="settOrd(this)">pekte</button>
        <button onclick="settOrd(this)">teit</button>
        <button onclick="settOrd(this)">feit</button>
        <button onclick="settOrd(this)">vemelige</button>
        <button onclick="settOrd(this)">spydde</button>
        <button onclick="settOrd(this)">gammel</button>
        <button onclick="settOrd(this)">stor</button>
        <button onclick="settOrd(this)">stygge</button>
        <button onclick="settOrd(this)">urolige</button>
        <button onclick="settOrd(this)">irriterende</button>
        <button onclick="settOrd(this)">nydelige</button>
        <button onclick="settOrd(this)">forferdelig</button>
        <button onclick="settOrd(this)">grei</button>
        <button onclick="settOrd(this)">h&aring;pl&oslash;s</button>
        <button onclick="settOrd(this)">stabil</button>
        </div>
        <button class="angre midtstillt" onclick="angre()"></button>
    `;
}

//controller

// Sett ord til blank
function settOrd(teksten)
{   
    //Hvis tracker går over 7, blir tracker 7.
    if (tracker >= space.length) {
        return;
    }

    teksten.style.display = 'none';

    // Hent en ting fra arrayen og set det til teksten.
    space[tracker] = teksten.innerText;

    // Gå opp en verdi på tracker
    tracker++;
}


function angre() { // slette siste ordet

    // Hvis tracker går under 0, blir tracker 0
    if (tracker == 0)
    {
        return;
    }

    //Hent ordet fra array og gjør om til blank
    space[tracker - 1] = '____';

    // Gå ned en verdi på tracker
    tracker--;

    // Tegn view
    updateView();
}

