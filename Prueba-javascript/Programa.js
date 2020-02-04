/* Variable del carrito de compras */
let carrito = [];

/* Precio sin IVA  */

let precio = 0;

/*peso total */

let pesoTotal = 0;


/* Precio con IVA */

let precioIva = 0;


/* coste de envio */

let costoEnvio = 6;

/* Identificador de producto */

let Identificador = 0;


/* RESET campos despues de un ingreso exitoso */

function resetOrdenador(){
		referenciaOrdenador = document.getElementById('referenciaOrdenador').value = "";
		marcaOrdenador = document.getElementById('marcaOrdenador').value = "";
		pesoOrdenador = document.getElementById('pesoOrdenador').value = "";
		procesadorOrdenador = document.getElementById('procesadorOrdenador').value = "";
		capacidadOrdenador = document.getElementById('capacidadOrdenador').value;
		ramOrdenador = document.getElementById('ramOrdenador').value = "";
		graficaOrdenador = document.getElementById('graficaOrdenador').value = "";
		soOrdenador = document.getElementById('soOrdenador').value = "";
		

}

function resetPortatiles(){
		referenciaPortatil = document.getElementById("referenciaPortatil").value = "";
		marcaPortatil = document.getElementById("marcaPortatil").value = "";
		pesoPortatil = document.getElementById("pesoPortatil").value = "";
		precioPortatil = document.getElementById("precioPortatil").value = "";
		procesadorPortatil = document.getElementById("procesadorPortatil").value = "";
		ramPortatil = document.getElementById("ramPortatil").value = "";
		soPortatil = document.getElementById("soPortatil").value = "";
		


}

function resetAccesorios(){
		referenciaAccesorio = document.getElementById("referenciaAccesorio").value =  "";
		marcaAccesorio = document.getElementById("marcaAccesorio").value =  "";
		pesoAccesorio = document.getElementById("pesoAccesorio").value = "";
		precioAccesorio = document.getElementById("precioAccesorio").value = "";
		

}



/* Ordenador */




/* funciones para crear productos */

/* funcion ordenador*/

function crearOrdenador(){
	/* campos de recogida */
	Identificador++;
	let referenciaOrdenador = document.getElementById('referenciaOrdenador').value;
	let marcaOrdenador = document.getElementById('marcaOrdenador').value;
	let pesoOrdenador = document.getElementById('pesoOrdenador').valueAsNumber;
	pesoTotal += pesoOrdenador;
	var precioOrdenador = document.getElementById('precioOrdenador').valueAsNumber;
    precio+=precioOrdenador;
    precioIva+=((precioOrdenador*21)/100)+precioOrdenador;
	let procesadorOrdenador = document.getElementById('procesadorOrdenador').value;
	let capacidadOrdenador = document.getElementById('capacidadOrdenador').value;
	let ramOrdenador = document.getElementById('ramOrdenador').value;
	let graficaOrdenador = document.getElementById('graficaOrdenador').value;
	let soOrdenador = document.getElementById('soOrdenador').value;
	let tipoOrdenador = document.getElementById('tipoOrdenador');
	if(referenciaOrdenador != "" && marcaOrdenador != "" && pesoOrdenador != "" && precioOrdenador != "" && procesadorOrdenador != "" && capacidadOrdenador != "" && ramOrdenador != "" && graficaOrdenador != "" && soOrdenador != ""){
			if (tipoOrdenador.value == 'sobremesa') {
			let blueDvd = document.getElementById('blueDvd').value;
			if (blueDvd != "0") {
				let nuevoSobremesa = new Sobremesa(Identificador,referenciaOrdenador,marcaOrdenador,pesoOrdenador,precioOrdenador,procesadorOrdenador,capacidadOrdenador,ramOrdenador,graficaOrdenador,soOrdenador,blueDvd);

				carrito.push(nuevoSobremesa);
				verificarEnvio();
				alert("El ordenador de sobremesa ha sido agregado al carrito");
				blueDvd = document.getElementById('blueDvd').value = "0";
				resetOrdenador();
			}else{
				alert("Hay campos vacios!");
			}
			
			}else if(tipoOrdenador.value == 'portatil'){
			let tamanoPantallaPor = document.getElementById('tamanoPantallaPor').value;
			if (tamanoPantallaPor != "") {
				verificarEnvio();

				let nuevoPortatil = new Portatil(Identificador,referenciaOrdenador,marcaOrdenador,pesoOrdenador,precioOrdenador,procesadorOrdenador,capacidadOrdenador,ramOrdenador,graficaOrdenador,soOrdenador,tamanoPantallaPor);
				carrito.push(nuevoPortatil);
				verificarEnvio();	
				alert("El portatil ha sido agregado al carrito.");
				tamanoPantallaPor = document.getElementById('tamanoPantallaPor').value = "";
				//resetOrdenador();
			}else{
				alert("Hay campos vacios!");
			}
		}

	}else{
		alert('Hay campos vacios!');
	}
}

/* Funcion dispositivo portatil */

function crearPortatil(){
	/* campos de recogida */

	let referenciaPortatil = document.getElementById('referenciaPortatil').value;
	let marcaPortatil = document.getElementById('marcaPortatil').value;
	let pesoPortatil = document.getElementById('pesoPortatil').valueAsNumber;
	pesoTotal += pesoPortatil;
	let precioPortatil = document.getElementById('precioPortatil').valueAsNumber;
	precio += precioPortatil;
	precioIva+=((precioPortatil*21)/100)+precioPortatil;
	let procesadorPortatil = document.getElementById('procesadorPortatil').value;
	let capacidadPortatil = document.getElementById('capacidadPortatil').value;
	let ramPortatil = document.getElementById('ramPortatil').value;
	let soPortatil = document.getElementById('soPortatil').value;

	let tipoPortatil = document.getElementById('tipoPortatil');

	if (referenciaPortatil != "" && marcaPortatil != "" && pesoPortatil != "" &&  precioPortatil != "" && procesadorPortatil != "" && capacidadPortatil != "" && ramPortatil != "" && soPortatil != "") {
		if(tipoPortatil.value == 'smartphone'){
			let tamanoPantallaPhone = document.getElementById('tamanoPantallaPhone').value;
			if(tamanoPantallaPhone != ""){
				let nuevoSmartphone = new Smartphone(Identificador,referenciaPortatil,marcaPortatil,pesoPortatil,precioPortatil,procesadorPortatil,capacidadPortatil,ramPortatil,soPortatil,tamanoPantallaPhone);
				carrito.push(nuevoSmartphone);
				verificarEnvio();
				alert("Smartphone agregado al pedido!");
				tamanoPantallaPhone = document.getElementById('tamanoPantallaPhone').value = "";
				resetPortatiles();
			}else{
				alert('Hay campos vacios!');
			}
			

		}else if(tipoPortatil.value == 'tablet'){
			let tipoConexion = document.getElementById('tipoConexion').value;
			if (tipoConexion != ""){
					let nuevaTablet = new Tablet(Identificador,referenciaPortatil,marcaPortatil,pesoPortatil,precioPortatil,procesadorPortatil,capacidadPortatil,ramPortatil,soPortatil,tipoConexion);
					carrito.push(nuevaTablet);
					verificarEnvio();
					alert("Tablet agregada al pedido!");
					tipoConexion = document.getElementById('tipoConexion').value = "";
					resetPortatiles();
			}else{
				alert("Hay campos vacios!");
			}
		}

	}else{
		alert("Hay campos vacios!");
	}
}



	

/* Funcion accesorio */

function crearAccesorio(){
	/* campos de entrada */

	let referenciaAccesorio = document.getElementById('referenciaAccesorio').value;
	let marcaAccesorio = document.getElementById('marcaAccesorio').value;
	let pesoAccesorio = document.getElementById('pesoAccesorio').valueAsNumber;
	pesoTotal += pesoAccesorio;
	let precioAccesorio = document.getElementById('precioAccesorio').valueAsNumber;;
	precio += precioAccesorio;
	precioIva+=((precioAccesorio*21)/100)+precioAccesorio;
	let tipoAccesorio = document.getElementById('tipoAccesorio');

	if (referenciaAccesorio != "" && marcaAccesorio != "" && pesoAccesorio != "" && precioAccesorio != ""){
			if(tipoAccesorio.value == 'cable'){
				let nuevoCable = new Cable(Identificador,referenciaAccesorio,marcaAccesorio,pesoAccesorio,precioAccesorio);
				carrito.push(nuevoCable);
				verificarEnvio();
				alert("Cable agregado al carrito");
				resetAccesorios();
		}
			else if(tipoAccesorio.value == 'cargador'){
				let amperaje = document.getElementById('amperaje').value;
				let voltaje = document.getElementById('voltaje').value;
				if (amperaje != "" && voltaje != "") {
					let nuevoCargador = new Cargador(Identificador,referenciaAccesorio,marcaAccesorio,pesoAccesorio,precioAccesorio,amperaje,voltaje);
					verificarEnvio();
					alert("Se ha agregado un cargador al carrito");
					voltaje = document.getElementById('voltaje').value = "";
					amperaje = document.getElementById('amperaje').value = "";
					resetAccesorios();
				}else{
					alert("Hay campos vacios!");
				}
				
		}
			else if(tipoAccesorio.value == 'raton'){
				let tipoRaton = document.getElementById('tipoRaton').value;
				if (tipoRaton != "0") {
					let nuevoRaton = new Raton(Identificador,referenciaAccesorio,marcaAccesorio,pesoAccesorio,precioAccesorio,tipoRaton);
					carrito.push(nuevoRaton);
					verificarEnvio();
					alert("Se ha agregado un raton al carrito");
					tipoRaton = document.getElementById('tipoRaton').value = "0";
					resetAccesorios();

				}else{
					alert("Hay campos vacios!");
				}
			}
			else if(tipoAccesorio.value == 'pantalla'){
				let tamanoPantallaAccesorio  = document.getElementById('tamanoPantallaAccesorio').value;
				if (tamanoPantallaAccesorio != "") {
					let nuevaPantalla = new Pantalla(Identificador,referenciaAccesorio,marcaAccesorio,pesoAccesorio,precioAccesorio,tamanoPantallaAccesorio);
					carrito.push(nuevaPantalla);
					verificarEnvio();
					alert("Se ha agregado una pantalla al carrito");
					tamanoPantallaAccesorio  = document.getElementById('tamanoPantallaAccesorio').value = "";
					resetAccesorios();
				}else{
					alert("Hay campos vacios");
				}
		}

	}else{
		alert("Hay campos vacios!");
	}
}




/* botones de agregar productos */

let botonOrdenador = document.getElementById('botonOrdenador');
let botonPortatil = document.getElementById('botonPortatil');
let botonAccesorio = document.getElementById('botonAccesorio');


/* funciones de dichos botones */


botonOrdenador.onclick = function(){
	crearOrdenador();
}

botonPortatil.onclick = function(){
	crearPortatil();
}

botonAccesorio.onclick = function(){
	crearAccesorio();
}


/* Funcion que verifica el peso y el precio del envio */

function verificarEnvio(){
	if (pesoTotal > 8) {
		costoEnvio = 9;
	}
	if(precioIva >= 99){
		costoEnvio = 0;
	}
}


