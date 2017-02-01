function slidetoggle()
{
	var slider = document.getElementById("nav-slide");
	slider.style.heigth = window.innerHeight - 60 + "px";
	if(slider.style.left == "0px")
	{
		slider.style.left = "-250px";
	}else
	{
		slider.style.left = "0px";
	}
}