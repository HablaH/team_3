//model
var tracker = 0;
var space = ['&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'];
var used = [false, false, false, false, false, false, false, false, false, false, false, false, false, false];
var lagret = [];

//view
updateView();
function updateView()
{
    document.getElementById('app').innerHTML = `
        <div class="storyBox" style="margin-top:5%;"><p>
            Det var en gang en <u>${space[0]}</u> kanin, som ikke hadde kontroll p&aring; livet sitt,<br />
            Den hadde tjue <u>${space[1]}</u> barn, tre <u>${space[2]}</u> koner og en helt <u>${space[3]}</u> jobb.<br />
            Den <u>${space[4]}</u> kaninen hadde ikke noe fritid, og trengte en <u>${space[5]}</u> ferie.<br /><br />

            Kaninen pakket sin <u>${space[6]}</u> bag, og kj&oslash;pte en billett til Mallorca. 
        </p></div>
        <div class="buttonBox">
        ${(!used[0])  ? tegnKnapp('lilla', 0) : ''}
        ${(!used[1])  ? tegnKnapp('teit', 1) : ''}
        ${(!used[2])  ? tegnKnapp('feit', 2) : ''}
        ${(!used[3])  ? tegnKnapp('vemelige', 3) : ''}   
        ${(!used[4])  ? tegnKnapp('spygr&oslash;nne', 4) : ''}
        ${(!used[5])  ? tegnKnapp('gammel', 5) : ''}    
        ${(!used[6])  ? tegnKnapp('stor', 6) : ''}
        ${(!used[7])  ? tegnKnapp('stygge', 7) : ''}
        ${(!used[8])  ? tegnKnapp('urolige', 8) : ''}
        ${(!used[9])  ? tegnKnapp('irriterende', 9) : ''}
        ${(!used[10]) ? tegnKnapp('nydelig', 10) : ''}  
        ${(!used[11]) ? tegnKnapp('forferdelig', 11) : ''}
        ${(!used[12]) ? tegnKnapp('grei', 12) : ''}
        ${(!used[13]) ? tegnKnapp('stabil', 13) : ''}
        </div><br/>
        <div class="midtstillt"><button class="angre" onclick="angre()"></button>
        <div><b>Angrepille</b></div></div>
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
    

    //Hvis tracker går over 7, blir tracker 7.
    if (tracker >= space.length)
    {
        return;
    }
    used[index] = true;
    // Hent en ting fra arrayen og set det til teksten.
    space[tracker] = '<mark><u>' + teksten.innerText + '</u></mark>';
    lagret[tracker] = index;
    // Gå opp en verdi på tracker
    tracker++;

    // Tegn view
    updateView();
}


function angre() { // slette siste ordet

    // Hvis tracker går under 0, blir tracker 0
    if (tracker == 0)
    {
        return;
    }

    // Hent ordet fra array og gjør om til blank
    

    // endre verdien i used til false
    var siste = lagret.slice(lagret.length - 1);
    lagret.pop();
    used.splice(siste, 1, false);

    //ord tilbake til blank
    space[tracker - 1] = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";    
    
    // Gå ned en verdi på tracker
    tracker--;

    // Tegn view
    updateView();
}