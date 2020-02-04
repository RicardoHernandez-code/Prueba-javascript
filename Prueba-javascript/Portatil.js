class Portatil extends Ordenador{
	constructor(numPedido,ref,marca,peso,precio,procesador,capacidad,ram,grafica,so,tamanioPantalla){
		super(numPedido,ref,marca,peso,precio,procesador,capacidad,ram,grafica,so);
		this.tamanioPantalla = tamanioPantalla;
	}
}