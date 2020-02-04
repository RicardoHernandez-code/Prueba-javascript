class Cargador extends Accesorio{
	constructor(numPedido,ref,marca,peso,precio,amperaje,voltaje){
		super(numPedido,ref,marca,peso,precio);
		this.amperaje = amperaje;
		this.voltaje = voltaje;
	}
}