class Smartphone extends DispositivoPortatil{
	constructor(numPedido,ref,marca,peso,precio,procesador,capacidad,ram,so,tamanioPantalla){
		super(numPedido,ref,marca,peso,precio,procesador,capacidad,ram,so);
		this.tamanioPantalla = tamanioPantalla;
	}
}