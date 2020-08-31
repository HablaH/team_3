function testDrag(event)
{
	event.dataTransfer.setData("Image", event.target.id);
}
function allowDrop(event)
{
	event.preventDefault();
}
function testDrop(event)
{
	event.preventDefault();
	var data = event.dataTransfer.getData("Image");
	event.target.appendChild(document.getElementById(data));
}
