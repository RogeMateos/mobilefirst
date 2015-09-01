function cargarContenido(evento)
{
	//alert("probando");

	var anchoPantalla = window.innerWidth;
	var altoPantalla = window.innerHeight;

	console.log(anchoPantalla,altoPantalla,evento.type);

	var video = '<video controls preload poster="img/web-hero.jpg"><source src="video/web-superhero.webm" type="video/webm" /><source src="video/web-superhero.mp4" type="video/mp4" /></video>';
	var mapa = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2624.99162985171!2d2.294481!3d48.85837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre+Eiffel!5e0!3m2!1ses-419!2smx!4v1419292329580" width="400" height="300" frameborder="0" style="border:0"></iframe>';

	//if(anchoPantalla>=769)
	//matchMedia >= IE10
	if(window.matchMedia("(min-width:769px)").matches)
	{
		document.getElementById("video").innerHTML = video;
		document.getElementById("mapa").innerHTML = mapa;
	}
	else
	{
		document.getElementById("video").innerHTML = null;
		document.getElementById("mapa").innerHTML = null;
	}
}

window.addEventListener("load",cargarContenido);
window.addEventListener("resize",cargarContenido);