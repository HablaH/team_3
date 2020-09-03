var diskoEnabled = false;
var colors = ['Chartreuse', 'BlueViolet', 'Crimson', 'DarkOliveGreen', 'DarkGoldenRod', 'DarkSalmon', 'FireBrick', 'GreenYellow', 'HotPink', 'LemonChiffon', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'PowderBlue', 'PaleVioletRed', 'Tomato', 'Lime', 'Fuchsia'];
var music = document.getElementById('music');
var art = document.getElementById('art');

setInterval(diskoMode, 200);

function RandomColor(element)
{
	element.style.backgroundColor = colors[Math.round(Math.random() * colors.length)];
}


function diskoToggle()
{
	// Toggle kuler
	var a = document.getElementById('diskoballA');
	var b = document.getElementById('diskoballB');

	if (diskoEnabled == true)
	{
		diskoEnabled = false;
		music.pause();
		art.style.display = 'none';
		a.style.display = 'none';
		b.style.display = 'none';
	}
	else
	{
		diskoEnabled = true;
		music.play();
		music.volume = 0.5;
		art.style.display = 'block';
		a.style.display = 'block';
		b.style.display = 'block';
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


