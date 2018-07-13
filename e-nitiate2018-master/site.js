function a() {
	var couleur= document.getElementById('demo').style.color;
	if(couleur=="blue"){
		document.getElementById('demo').style.color="red";
	}
	else{
		document.getElementById('demo').style.color="blue";
		document.getElementById('demo').style.fontSize="40px";
	}
	console.log(couleur)
}




