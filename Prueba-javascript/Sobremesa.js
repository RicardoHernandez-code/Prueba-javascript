class Sobremesa extends Ordenador{
	constructor(numPedido,ref,marca,peso,precio,procesador,capacidad,ram,grafica,so,blueDvd){
		super(numPedido,ref,marca,peso,precio,procesador,capacidad,ram,grafica,so);
		this.blueDvd = blueDvd;
	}
}