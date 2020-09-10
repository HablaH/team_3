// Model
var valgt, valgtBot;
var imageArray = ['Images/fish.png', 'Images/turtle.png', 'Images/lion.png', 'Images/seline.png'];
var lydArray =   ['Audio/fish.m4a', 'Audio/turtle.m4a', 'Audio/lion.m4a', 'Audio/ugh.m4a', 'Audio/yay.m4a', 'Audio/buu.m4a', 'Audio/huh.m4a'];
var bruktJuks = false;
var resultat = 'Choose something';
var anim = false;
var help = false;

function spillLyd(index)
{
	var source = new Audio(lydArray[index]);
	source.play();
}

// Controller
function botChoice()
{
	// Velger et tilfeldig dyr, og returnerer det som tall.
	return Math.floor(Math.random() * imageArray.length);
}

function personChoice(tall)
{
	// Hvis animasjon spiller 
	if (anim)
	{
		return;
	}

	// lagrer tall i variabelen valgt !
	valgt = tall;
	spillLyd(tall);
	anim = true;
	help = false;
	drawView();
	setTimeout(checkWin, 2000);	
}

function jukseKnapp()
{
	// Resultat : True / False
	if (bruktJuks == false) {
		bruktJuks = true;
	}
	else
	{
		bruktJuks = false;
	}	

	drawView();
}

function checkWin()
{
	valgtBot = botChoice();

	// Same
	if (valgt == valgtBot) {
		resultat = 'Draw!';
		spillLyd(6);
		console.log(1);
	}
	else if (valgt == 3 || valgtBot == 3)
	{
		resultat = (valgt == 3) ? 'Player Win' : 'Player Lose';
		(valgt == 3) ? spillLyd(4) : spillLyd(5);
	}
	else if (valgt == 0 && valgtBot == 2 || valgt == 2 && valgtBot == 0) {
		resultat = (valgt == 2 && valgtBot == 0) ? 'Player Win' : 'Player Lose';
		(valgt == 2 && valgtBot == 0) ? spillLyd(4) : spillLyd(5);
		console.log(3);
	}
	else if (valgt < valgtBot) {
		resultat = 'Player Win';
		spillLyd(4);
		console.log(4);
	}
	else {
		resultat = 'Player Lose';
		spillLyd(5);
		console.log(5);
	}

	// Draw
	// fisk, padde, løve

	/*if (valgt == valgtBot) {
		resultat = 'Draw!';
		//console.log(1);
	}
	else if (valgt == 3 || valgtBot == 3) {
		resultat = (valgt == 3) ? 'Player Win' : 'Player Lose';
	}
	else if (valgt == 0 && valgtBot == 2 || valgt == 2 && valgtBot == 0) {
		resultat = (valgt == 2 && valgtBot == 0) ? 'Player Win' : 'Player Lose';
		//console.log(3);
	}
	else if (valgt == 2 && valgtBot == 1 || valgt == 1 && valgtBot == 2) {
		resultat = (valgt == 1 && valgtBot == 2) ? 'Player Win' : 'Player Lose';
		//console.log(3);
	}
	else if (valgt == 1 && valgtBot == 0 || valgt == 0 && valgtBot == 1) {
		resultat = (valgt == 0 && valgtBot == 1) ? 'Player Win' : 'Player Lose';
		//console.log(3);
	}*/

	//console.log('Spiller valgte: ' + imageArray[player] + ' Bot valgte: ' + imageArray[bot] + ' Result: ' + result);

	// Stop animation.	
	anim = false;
	drawView();
}
function toggleHelp() {
	if (help)
	{
		help = false;
	}
	else
	{
		help = true;
	}

	drawView();
}

// View
drawView();
function drawView()
{
	var helpHTML = `<img class="help" src="Images/help.png"/>`;

	document.getElementById('app').innerHTML = `
 
		<div class="pChoice">
			<button class="choice" onclick="personChoice(0);" style="background-Image: url(${imageArray[0]});${(anim) ? 'opacity:0.5;' : ''};"></button>
			<button class="choice" onclick="personChoice(1);" style="background-Image: url(${imageArray[1]});${(anim) ? 'opacity:0.5;' : ''};"></button>
			<button class="choice" onclick="personChoice(2);" style="background-Image: url(${imageArray[2]});${(anim) ? 'opacity:0.5;' : ''};"></button>
			${(bruktJuks == true) ? `<button class="choice" onclick="personChoice(3);" style="background-Image: url(${imageArray[3]}); ${(anim) ? 'opacity:0.5;' : ''};"></button>` : ''}
		</div>
		<div class="gScreen">
			<div class="valgtbilde" style="background-Image:url(${imageArray[valgt]}) ">
			</div>  
			<div class="botbilde ${ (anim == true) ? 'anim' : ''}" style="background-Image:url(${(!help) ? imageArray[valgtBot] : 'Images/help.png'})">			
			
			</div>
			<div class="jukseknapp">
				<button onclick="jukseKnapp()">Cheat?</button>
				<button onclick="toggleHelp()">Help</button>
			</div>
		</div>
		<div class="wScreen"><p>${resultat}</p></div >
	`;
}
