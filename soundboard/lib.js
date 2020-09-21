// Model

// Lydliste (Hvor ligger lydene?)
const lydlisteA = ['Audio/Mads/Naa.mp3', 'Audio/Mads/Har.mp3', 'Audio/Mads/Du.mp3', 'Audio/Mads/Deg.mp3', 'Audio/Mads/Ut.mp3', 'Audio/Mads/Nei.mp3', 'Audio/Mads/Ikke.mp3', 'Audio/Mads/Hva.mp3', 'Audio/Mads/Driti.mp3', 'Audio/Mads/Tenke.mp3', 'Audio/Mads/Livet.mp3', 'Audio/Mads/Latter.mp3', 'Audio/Mads/Kjerring.mp3', 'Audio/Mads/FaenMeg.mp3', 'Audio/Mads/FuckaOpp.mp3'];
const lydlisteB = ['Audio/Seline/det.mp3', 'Audio/Seline/blir.mp3', 'Audio/Seline/for.mp3', 'Audio/Seline/deg.mp3', 'Audio/Seline/nei.mp3', 'Audio/Seline/hvorfor.mp3', 'Audio/Seline/jaa.mp3', 'Audio/Seline/sletter.mp3', 'Audio/Seline/alt.mp3', 'Audio/Seline/men.mp3', 'Audio/Seline/tulling.mp3', 'Audio/Seline/bitch.mp3', 'Audio/Seline/greit.mp3', 'Audio/Seline/dritt.mp3', 'Audio/Seline/meget.mp3'];

// Ordliste (Hva heter hver lyd?)
const ordlisteA = ['N&aring;', 'Har', 'Du', 'Deg', 'Ut', 'Nei', 'Ikke','Hva', 'Driti', 'Tenke', 'Livet', '"Latter"', 'Kjerring', 'Faen meg', 'Fucka opp'];
const ordlisteB = ['Det', 'Blir', 'For', 'Deg', 'Nei', 'Hvorfor', 'Jaa', 'Sletter', 'Alt', 'Men', 'Tulling', 'Bitch', 'Greit', 'Dritt', 'Meget'];

// Timeline index (Bruker tall for å finne ord og lyd).
var indekserOrd   = [];
var indekserArray = [];
var lydBar = []


//var ord = '';
//play animasjoner hvis true
var animA = false;
var animB = false;

// MULIG at vi må ha en ekstra array her for å finne hvilket array den skal plukke fra altså array A eller array B
const arrays = [lydlisteA, lydlisteB, ordlisteA, ordlisteB]

// View
function drawView()
{
	document.getElementById('app').innerHTML =
		`
		<div class="header">
			<button onclick="playSoundArray(lydBar)" class="playButton" style="border-right:snow 2px solid"></button>
			<div class="timeline">
				<div class="timelineContent"><p class="ordliste">${drawWords()}</p></div>
			</div>
			<button class="removeButton" onclick="removeSound()" style="border-left:snow 2px solid"></button>
		</div>
		<div class="content">
			<div class="characterA" style="min-width:268px; min-heigth: 240px;">
				<div class="topp" style="background-image: url('Bilder/mads1.png');"></div> 
				<div class="bunn ${(animA) ? 'anim' : ''}" style="background-image: url('Bilder/mads2.png');"></div> 

			</div>
			<div class="characterB" style="min-width:268px; min-heigth: 240px;">
				<div class="topp" style="background-image: url('Bilder/seline1.png');"></div> 
				<div class="bunn ${(animB) ? 'anim' : ''}" style="background-image: url('Bilder/seline2.png');"></div> 
			</div>
		</div>
		<div class="footer">
			<div class="containerL" style="border-right: 1px solid">
			${drawButton(0, ordlisteA, 'mads')}
			</div>
			<div class="containerR" style="border-left: 1px solid">
			${drawButton(1, ordlisteB, 'seline')}
			</div>
		</div>
	`;
}

// Controller
function drawButton(arrayIndex, ordliste, className)
{
	// Variabel for å holde buttons
	let buttons = ``;

	for (let i = 0; i < ordlisteA.length; i++) {
		buttons += `<button onclick="addSound(${arrayIndex}, ${i})" class="${className}">${ordliste[i]}</button>`
	};

	// Return her
	return buttons;
}

function addSoundUrl(arrayIndex, index) {
	//lagrer url fra lydlisteA eller lydlisteB i lydBar
	let liste = (arrayIndex == 0) ? lydlisteA : lydlisteB;	
	lydBar.push(liste[index]);
	return liste[index];
}
function addSound(arrayIndex, itemIndex)
{
	// Legg til ord indeks
	indekserOrd.push(itemIndex);

	// Legg til array indeks
	indekserArray.push(arrayIndex);

	//spill av og lagre url
	playSound(addSoundUrl(arrayIndex, itemIndex));

	// Draw View
	drawView();
}
	 
function removeSound()
{
	// Fjern array indeks
	indekserArray.pop();

	// Fjern ord indeks
	indekserOrd.pop();

	// Fjern fra lydbar.
	lydBar.pop();

	// Draw View
	drawView();
}

function drawWords()
{
	var result = ``;

	for (var i = 0; i < indekserOrd.length; i++)
	{
		result += (indekserArray[i] == 0) ? ordlisteA[indekserOrd[i]] + ' ' : ordlisteB[indekserOrd[i]] + ' ';
	}

	return result;
}

// Playsound
function playSound(url)
{
	var source = new Audio(url);
	source.play();
}

// PlaySoundArray
function playSoundArray(array) {
	var i = 1;
	var audio = new Audio(array[0]);
	audio.play();
	toggleAnimation(0, array.length - 1);

	audio.onended = function () {
		if (i < array.length) {
			toggleAnimation(i, array.length - 1);
			audio.src = array[i];
			audio.play();
			i++;
		}
	}
}

function toggleAnimation(index, lastIndex)
{
	if (lastIndex != index) {
		animA = (indekserArray[index] == 0) ? true : false;
		animB = (indekserArray[index] == 1) ? true : false;
		console.log('lastIndex: ' + lastIndex)
		console.log('Index: ' + index)
	}
	else
	{
		animA = false;
		animB = false;
		console.log('lastIndex: ' + lastIndex)
		console.log('Index: ' + index)
	}


	drawView();
}


