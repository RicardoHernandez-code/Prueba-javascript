class DispositivoPortatil extends Producto{
	constructor(numPedido,ref,marca,peso,precio,procesador,capacidad,ram,so){
		super(numPedido,ref,marca,peso,precio);
		this.procesador = procesador;
		this.capacidad = capacidad;
		this.ram = ram;
		this.so = so;
	}
}
