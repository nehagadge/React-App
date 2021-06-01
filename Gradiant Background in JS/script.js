var css= document.querySelector("h3")
var c1= document.querySelector(".color1")
var c2= document.querySelector(".color2")
var body=document.getElementById("gradiant")

function setGradiant()
{
	body.style.background = "linear-gradient(to right, " +c1.value + ", " +c2.value+ ")" 
}

c1.addEventListener("input", setGradiant)
c2.addEventListener("input", setGradiant)