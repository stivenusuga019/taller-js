//Evento onunload
/*Veamos un ejemplo del evento onunload, que, recordamos, se activa cuando el usuario ha abandona la página web. Por tanto, onunload sirve para ejecutar una acción cuando el usuario se marcha de la página, ya sea porque pulsa un enlace que le lleva fuera de la página o porque cierra la ventana del navegador.
El ejemplo que deseamos mostrar sirve para abrir una página web en otra ventana cuando el usuario abandona la página. De este modo actúan muchos de los molestos popups de las páginas web, abriéndose justo cuando abandonamos el sitio que estábamos visitando.*/
//ejemplo
/*<html> 
<head> 
   	<title>Abre al salir</title> 
   	<script> 
   	function abreventana(){ 
      	window.open("http://www.google.es","venta","") 
   	} 
   	</script> 
</head>

<body onunload="abreventana()">

<a href="http://www.desarrolloweb.com">DW!!</a> 
</body> 
</html>*/

//Evento onload

/*Con el evento onload podemos ejecutar acciones justo cuando se han terminado de cargar todos los elementos de la página. Es un evento bastante utilizado pues es muy habitual que se deseen llevar a cabo acciones en ese preciso instante. En nuestro ejemplo vamos a ver cómo podríamos hacer un script para motivar a nuestros visitantes a que nos voten en un ranking cualquiera de páginas web */

//Ejemplo
/*<html> 
<head> 
   	<title>Votame!!</title> 
<script language="JavaScript"> 
function pedirVoto(){ 
   	if (confirm("Esta página está genial (ya la puedes ver). Me das tu voto?")){ 
      	window.open("http://www.loquesea.com/votar.php?idvoto=12111","","") 
   	} 
} 
</script> 
</head>

<body onload="pedirVoto()"> 
<h1>Página SuperChula</h1> 
<br> 
Esta página está muy bonita. Soy su autor y te puedo asegurar que no hay muchas páginas con tanta calidad en Internet 
<br> 
<br> 
<a href="#">Entrar</a>

</body> 
</html> */


//Evento onkeydown
/*El evento onkeydown se corresponde con el hecho de pulsar una tecla y no soltarla; el evento onkeypress es la propia pulsación de la tecla y el evento onkeyup hace referencia al hecho de soltar una tecla que estaba pulsada. */

//Ejemplo
/*<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
    alert("You pressed a key inside the input field");
}
</script>
</head>
<body>

<p>Una función se activa cuando el usuario presiona una tecla en el campo de entrada.</p>

<input type="text" onkeydown="myFunction()">

</body>
</html> */

//Evento onchange

/*El evento onchange se produce cuando el valor de un elemento se ha cambiado.
Para botones de radio y casillas de verificación, el evento onchange ocurre cuando el estado de activación se ha cambiado.*/

//Ejemplo
/*<!DOCTYPE html>
<html>
<head>
<script>
function preferedBrowser() {
    prefer = document.forms[0].browsers.value;
    alert("You prefer browsing internet with " + prefer);
}
</script>
</head>

<body>

<form>
Choose which browser you prefer:
<select id="browsers" onchange="preferedBrowser()">
<option value="Chrome">Chrome</option>
<option value="Internet Explorer">Internet Explorer</option>
<option value="Firefox">Firefox</option>
</select>
</form>

</body>
</html> */

//Evento onsubmit

/* El atributo onSubmit permite asociar una función de test en el formulario. Si la función retorna falso, les datos del formulario no se envían, quedan en la página. Se trata de un simple botón y no de envío, es necesario asociarle código JavaScript que se ejecuta con el evento onclick.*/

//Ejemplo
/*<!DOCTYPE html>
<html>
<head>
<script>
function confirmInput() {
    fname = document.forms[0].fname.value;
    alert("Hello " + fname + "! You will now be redirected to www.w3ii.com");
}
</script>
</head>

<body>
<form onsubmit="confirmInput()" action="http://www.w3ii.com/">
Enter your name: <input id="fname" type="text" size="20">
<input type="submit">
</form>
</body>

</html> */