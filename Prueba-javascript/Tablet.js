class Tablet extends DispositivoPortatil{
	constructor(numPedido,ref,marca,peso,precio,procesador,capacidad,ram,so,tipoDeConexion){
		super(numPedido,ref,marca,peso,precio,procesador,capacidad,ram,so);
		this.tipoDeConexion = tipoDeConexion;
	}
}