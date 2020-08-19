var diskoEnabled = false;
var colors = ['Chartreuse', 'BlueViolet', 'Crimson', 'DarkOliveGreen', 'DarkGoldenRod', 'DarkSalmon', 'FireBrick', 'GreenYellow', 'HotPink', 'LemonChiffon', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'PowderBlue', 'PaleVioletRed','Tomato']

setInterval(diskoMode, 200);

function RandomColor(element)
{
	element.style.backgroundColor = colors[Math.round(Math.random() * colors.length)];
}


function diskoToggle()
{
	if (diskoEnabled == true)
	{
		diskoEnabled = false
	}
	else
	{
		diskoEnabled = true
		document.getElementById('media').style.display = 'initial';
    }
}

function diskoMode()
{
	if (diskoEnabled)
	{
		for (var i = 0; i < 9; i++)
		{
			RandomColor(document.getElementById(i));
		}	
	}
}


