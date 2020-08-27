function testDrag(event)
{
	event.dataTransfer.setData("Text", event.target.id);
}
function allowDrop(event)
{
	event.preventDefault();
}
function testDrop(event)
{
	event.preventDefault();
	var data = event.dataTransfer.getData("Text");
	event.target.appendChild(document.getElementById(data));
}
