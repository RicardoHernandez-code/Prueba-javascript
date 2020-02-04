class Ordenador extends Producto{
	constructor(numPedido,ref,marca,peso,precio,procesador,capacidad,ram,grafica,so){
		super(numPedido,ref,marca,peso,precio);
		this.procesador = procesador;
		this.capacidad = capacidad;
		this.ram = ram;
		this.grafica = grafica;
		this.so = so;
	}
}