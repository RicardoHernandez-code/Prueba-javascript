


/*botones del menu*/
let logo = document.getElementById('logo');
let comprar = document.getElementById('comprar');
let btnCarrito = document.getElementById('btnCarrito');




/* secciones */ 
let menu = document.getElementById('menu');
let middle = document.getElementById('middle');
let carrito1 = document.getElementById('carrito1');


/* selectores de opciones (imagenes) */

let opcionOrdenadores = document.getElementById('opcionOrdenadores');
let opcionPortatiles = document.getElementById('opcionPortatiles');
let opcionAccesorios = document.getElementById('opcionAccesorios');


/* areas de productos */

let areaOrdenadores = document.getElementById('areaOrdenadores');
areaOrdenadores.style.display = 'none';
let areabotonOrdenador = document.getElementById('areabotonOrdenador');
areabotonOrdenador.style.display = 'none';

let areaPortatiles = document.getElementById('areaPortatiles');
areaPortatiles.style.display = 'none';
let areabotonPortatil = document.getElementById('areabotonPortatil');
areabotonPortatil.style.display = 'none';

let areaAccesorios = document.getElementById('areaAccesorios');
areaAccesorios.style.display = 'none';
let areabotonAccesorio = document.getElementById('areabotonAccesorio');
areaAccesorios.style.display = 'none';



/* Funciones de areas */


/* mostrar Menus */



opcionOrdenadores.onclick = function(){
	if (areaOrdenadores.style.display == 'none') {
		areaOrdenadores.style.display = 'flex';
		menu.style.display = 'none';
		middleS = false;
	}
}

opcionPortatiles.onclick = function(){
	if(areaPortatiles.style.display == 'none'){
		areaPortatiles.style.display = 'flex';
		menu.style.display = 'none';
		middleS = false;
	}
}


opcionAccesorios.onclick = function(){
	if (areaAccesorios.style.display = 'none') {
		areaAccesorios.style.display = 'flex';
		menu.style.display = 'none';
		middleS = false;
	}
}


/* mostrar secciones dependiendo de lo que se seleccione en el tipo de producto */

let tipoOrdenador = document.getElementById('tipoOrdenador');
let menuSobremesa = document.getElementById('menuSobremesa');
let menuPortatil = document.getElementById('menuPortatil');

menuSobremesa.style.display = 'none';
menuPortatil.style.display = 'none';


let tipoPortatil = document.getElementById('tipoPortatil');
let menuSmartphone = document.getElementById('menuSmartphone');
let menuTablet = document.getElementById('menuTablets');



menuSmartphone.style.display = 'none';
menuTablet.style.display = 'none';


let tipoAccesorio = document.getElementById('tipoAccesorio');
let menuCargadores = document.getElementById('menuCargadores');
let tipoRaton = document.getElementById('tipoRaton');
let menuRatones = document.getElementById('menuRatones');
let menuPantalla = document.getElementById('menuPantalla');

menuCargadores.style.display = 'none';
menuTablet.style.display = 'none';
menuPantalla.style.display = 'none';


tipoOrdenador.onclick = function(){
	if (tipoOrdenador.value == 0) {
		menuSobremesa.style.display = 'none';
		menuPortatil.style.display = 'none';
		areabotonOrdenador.style.display = 'none';
	}
	else if(tipoOrdenador.value == 'sobremesa'){
		menuSobremesa.style.display = 'block';
		menuPortatil.style.display = 'none';
		areabotonOrdenador.style.display = 'block';

	}else if(tipoOrdenador.value == 'portatil'){
		menuPortatil.style.display = 'block';
		menuSobremesa.style.display = 'none';
		areabotonOrdenador.style.display = 'block';

	}
}


tipoPortatil.onclick = function(){
	if (tipoPortatil.value == 0) {
		menuSmartphone.style.display = 'none';
		menuTablet.style.display = 'none';
		areabotonPortatil.style.display = 'none';
	}
	else if(tipoPortatil.value == 'tablet'){
		menuSmartphone.style.display = 'none';
		menuTablet.style.display = 'block';
		areabotonPortatil.style.display = 'block';
	}
	else if(tipoPortatil.value == 'smartphone'){
		menuSmartphone.style.display = 'block';
		menuTablet.style.display = 'none';
		areabotonPortatil.style.display = 'block';
	}
}

tipoAccesorio.onclick = function(){
	if (tipoAccesorio.value == '0') {
		menuCargadores.style.display = 'none';
		menuRatones.style.display = 'none';
		areabotonAccesorio.style.display = 'none';
		menuPantalla.style.display = 'none';

	}
	else if(tipoAccesorio.value == 'cargador'){
		menuCargadores.style.display = 'block';
		menuRatones.style.display = 'none';
		areabotonAccesorio.style.display = 'block';
		menuPantalla.style.display = 'none';
	}
	else if(tipoAccesorio.value == 'raton'){
		menuCargadores.style.display = 'none';
		menuRatones.style.display = 'block';
		areabotonAccesorio.style.display = 'block';
		menuPantalla.style.display = 'none';
	}
	else if(tipoAccesorio.value == 'pantalla'){
		menuPantalla.style.display = 'block';
		menuCargadores.style.display = 'none';
		menuRatones.style.display = 'none';
		areabotonAccesorio.style.display = 'block';
	}

	else if(tipoAccesorio.value == 'cable'){
		menuCargadores.style.display = 'none';
		menuRatones.style.display = 'none';
		areabotonAccesorio.style.display = 'block';
		menuPantalla.style.display = 'none';
	}
}


/* mostrar menu de agregar un nuevo dispositivo portatil */



/* displays incializados en 'none' */

menu.style.display = 'none';
carrito1.style.display = 'none';




/* variables para manipular secciones */ 

let middleS = true;


/* funciones de las opciones del header */

comprar.onclick = function(){
	if (middleS == true) {
		areaOrdenadores.style.display = 'none'
		areaPortatiles.style.display = 'none';
		areaAccesorios.style.display = 'none';
		middle.style.display = 'none';
		carrito1.style.display = 'none';
		menu.style.display = 'flex';
		middleS = false;
	}
	else if(middleS == false){
		areaOrdenadores.style.display = 'none'
		areaPortatiles.style.display = 'none';
		areaAccesorios.style.display = 'none';
		carrito1.style.display = 'none';
		middle.style.display = 'none';
		menu.style.display = 'flex';

		/* desactivar secciones secundarias */
		menuSobremesa.style.display = 'none';
		menuPortatil.style.display = 'none';
		areabotonOrdenador.style.display = 'none';

		menuSmartphone.style.display = 'none';
		menuTablet.style.display = 'none';
		areabotonPortatil.style.display = 'none';

		menuCargadores.style.display = 'none';
		menuRatones.style.display = 'none';
		menuPantalla.style.display = 'none';





		/* reiniciar campos  */
		let blueDvd = document.getElementById('blueDvd');
		tipoOrdenador.value = '0';

		tipoPortatil.value = '0';

		tipoAccesorio.value = '0';

		blueDvd.value = '0';

		tipoRaton.value = '0';


	}
}

logo.onclick = function(){
	if (middleS == false) {
		areaOrdenadores.style.display = 'none'
		areaPortatiles.style.display = 'none';
		areaAccesorios.style.display = 'none';
		carrito1.style.display = 'none';
		middle.style.display = 'flex';
		menu.style.display = 'none';
		middleS = true;


		/* desactivar secciones secundarias */

		menuSobremesa.style.display = 'none';
		menuPortatil.style.display = 'none';
		areabotonOrdenador.style.display = 'none';

		menuSmartphone.style.display = 'none';
		menuTablet.style.display = 'none';
		areabotonPortatil.style.display = 'none';

		menuCargadores.style.display = 'none';
		menuRatones.style.display = 'none';
		menuPantalla.style.display = 'none';

		/* reiniciar campos  */

		tipoOrdenador.value = '0';

		tipoPortatil.value = '0';

		blueDvd.value = '0';

		tipoRaton.value = '0';

	}
}

btnCarrito.onclick = function(){
	/* campos a rellenar*/ 
	let precioCampo = document.getElementById('precioCampo');
	let precioIvaCampo = document.getElementById('precioIvaCampo');
	let cantidadProductos = document.getElementById('cantidadProductos');
	let pesoCampo = document.getElementById('pesoCampo');
	let precioEnvioCampo = document.getElementById('precioEnvioCampo');

		cantidadProductos = document.getElementById('cantidadProductos').innerHTML = "Cantidad de productos en el pedido :"+carrito.length;
		precioCampo = document.getElementById('precioCampo').innerHTML = "Precio (Sin Iva) :"+ precio+"  €";
		precioIvaCampo = document.getElementById('precioIvaCampo').innerHTML = "Precio (con IVA) :"+precioIva+" €";
		pesoCampo = document.getElementById('pesoCampo').innerHTML = "Peso del pedido: "+pesoTotal+" kgs";
		precioEnvioCampo = document.getElementById('precioEnvioCampo').innerHTML = "Precio del envio: "+costoEnvio+" €";

	if (middleS == true) {
		carrito1.style.display = 'flex';
		areaOrdenadores.style.display = 'none'
		areaPortatiles.style.display = 'none';
		areaAccesorios.style.display = 'none';
		middle.style.display = 'none';
		menu.style.display = 'none';
		middleS = false;
	}
	else if(middleS == false){
		carrito1.style.display = 'flex';
		areaOrdenadores.style.display = 'none'
		areaPortatiles.style.display = 'none';
		areaAccesorios.style.display = 'none';
		middle.style.display = 'none';
		menu.style.display = 'none';

		/* desactivar secciones secundarias */
		menuSobremesa.style.display = 'none';
		menuPortatil.style.display = 'none';
		areabotonOrdenador.style.display = 'none';

		menuSmartphone.style.display = 'none';
		menuTablet.style.display = 'none';
		areabotonPortatil.style.display = 'none';

		menuCargadores.style.display = 'none';
		menuRatones.style.display = 'none';
		menuPantalla.style.display = 'none';
		areabotonAccesorio.style.display = 'none';





		/* reiniciar campos  */
		let blueDvd = document.getElementById('blueDvd');
		tipoOrdenador.value = '0';

		tipoPortatil.value = '0';

		tipoAccesorio.value = '0';

		blueDvd.value = '0';

		tipoRaton.value = '0';


	}
}



