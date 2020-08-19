var diskoEnabled = false;
var colors = ['Chartreuse', 'BlueViolet', 'Crimson', 'DarkOliveGreen', 'DarkGoldenRod', 'DarkSalmon', 'FireBrick', 'GreenYellow', 'HotPink', 'LemonChiffon', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'PowderBlue', 'PaleVioletRed', 'Tomato'];
var music = document.getElementById('music');
var art = document.getElementById('art');

setInterval(diskoMode, 200);

function RandomColor(element)
{
	element.style.backgroundColor = colors[Math.round(Math.random() * colors.length)];
}


function diskoToggle()
{
	if (diskoEnabled == true)
	{
		diskoEnabled = false;
		music.pause();
		art.style.opacity = 0;
	}
	else
	{
		diskoEnabled = true;
		music.play();
		art.style.opacity = 100;
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


