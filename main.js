

function slidetoggle()
{
	var toggle = document.getElementById("nav-slide");
	toggle.style.height = window.innerHeight - 60 + "px";

	if(toggle.style.left == "0px")
	{
		toggle.style.left = "-250px";
	}else
	{
		toggle.style.left = "0px";
	}

}
