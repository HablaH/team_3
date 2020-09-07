//model
var tracker = 0;
var space = ['____', '____', '____', '____', '____', '____', '____'];
var used = [false, false, false, false, false, false, false, false, false, false, false, false, false, false]
var lagret = [];
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
        ${(!used[0])  ? tegnKnapp('pekte', 0) : ''}
        ${(!used[1])  ? tegnKnapp('teit', 1) : ''}
        ${(!used[2])  ? tegnKnapp('feit', 2) : ''}
        ${(!used[3])  ? tegnKnapp('vemelige', 3) : ''}   
        ${(!used[4])  ? tegnKnapp('spydde', 4) : ''}
        ${(!used[5])  ? tegnKnapp('gammel', 5) : ''}    
        ${(!used[6])  ? tegnKnapp('stor', 6) : ''}
        ${(!used[7])  ? tegnKnapp('stygge', 7) : ''}
        ${(!used[8])  ? tegnKnapp('urolige', 8) : ''}
        ${(!used[9])  ? tegnKnapp('irriterende', 9) : ''}
        ${(!used[10]) ? tegnKnapp('nydelig', 10) : ''}  
        ${(!used[11]) ? tegnKnapp('forferdelig', 11) : ''}
        ${(!used[12]) ? tegnKnapp('grei', 12) : ''}
        ${(!used[13]) ? tegnKnapp('stabil', 13) : ''}
        </div>
        <button class="angre midtstillt" onclick="angre()"></button>
    `;
}

//controller
function tegnKnapp(tekst, index)
{
    return '<button onclick="settOrd(this, '+ index +')">' + tekst + '</button>';
}

// Sett ord til blank
function settOrd(teksten, index)
{
    used[index] = true;

    //Hvis tracker g�r over 7, blir tracker 7.
    if (tracker >= space.length)
    {
        return;
    }

    // Hent en ting fra arrayen og set det til teksten.
    space[tracker] = teksten.innerText;
    lagret[tracker] = index;
    // G� opp en verdi p� tracker
    tracker++;

    // Tegn view
    updateView();
}


function angre() { // slette siste ordet

    // Hvis tracker g�r under 0, blir tracker 0
    if (tracker == 0)
    {
        return;
    }

    // Hent ordet fra array og gj�r om til blank
    var saved = space[tracker - 1];
    tegnKnapp(saved);
    used[] = false;
    saved = '____';

    // G� ned en verdi p� tracker
    tracker--;

    // Tegn view
    updateView();
}