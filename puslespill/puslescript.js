
var dragElement = null; // start drag element
var endElement = null;	// end drag element
var riktige = 0;

function MouseOver(element) {
	if (element == dragElement) {
		return;
	}

	endElement = element;
	//console.log("End: " + element.style.backgroundImage);
}

function DragStart(element) {

	// If draggable false
	if (element.style.backgroundImage == 'url("tom.png")')
	{
		return;
	}

	dragElement = element;
	//console.log("Start: " + element.style.backgroundImage);
}

function DragEnd() {
	//console.log('Set elements');

	//console.log(String(dragElement.style.backgroundImage));
	//console.log('Text:' + endElement.innerText);

	if (!endElement.draggable)
	{
		dragElement = null;
		endElement = null;

		return;
	}

	// If correct position
	if (dragElement.style.backgroundImage == endElement.innerText)
	{
		endElement.style.border = 'none';
		endElement.draggable = false;
		endElement.style.userSelect = 'none';
		// Legger til +1 på en variabel som tracker
		riktige++;
	}

	// Switch images
	if (dragElement != null && endElement != null)
	{
		var dragColor = dragElement.style.backgroundImage;
		var endColor = endElement.style.backgroundImage;

		dragElement.style.backgroundImage = endColor;
		endElement.style.backgroundImage = dragColor;
	}

	dragElement = null;
	endElement = null;

	checkWin();
}

function checkWin()
{
	// hvis denne variablen er lik størelse på antall pusslebrikker 
	if (riktige == 16)
	{
		// display message
		var vinn = document.getElementById('vinn');
		vinn.innerText = 'Gratulerer :)';
		vinn.style.color = 'green';
	}
}