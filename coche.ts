class Coche {
	
	public color:string;
	public modelo:string;
	public velocidad:number;

	constructor(modelo:any=null){
		this.color = "Blanco";
		this.velocidad = 0;

		if(modelo == null){
			this.modelo = "BMW Generico";
		} else{
			this.modelo = modelo
		}
		
	}

	public getColor():string{
		return this.color;
	}

	public setColor(color:string){
		this.color = color;
	}

	public getModelo():string{
		return this.modelo;
	}

	public setModelo(modelo:string){
		this.modelo = modelo;
	}

	public getVelocidad():number{
		return this.velocidad;
	}

	public setVelocidad(velocidad:number){
		this.velocidad = velocidad;
	}

	public acelerar(){
		this.velocidad++;
	}

	public frenar(){
		this.velocidad--;
	}

}

var coche = new Coche("Renault Clio");


coche.setColor("ROJO");
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("El modelo del coche 1 es: " + coche.getModelo());
console.log("El color del coche 1 es: " + coche.getColor());
console.log("La velocidad del coche 1 es: " + coche.getVelocidad());

coche.frenar();
console.log("La velocidad después de frenar el coche 1 es: " + coche.getVelocidad());
/*
var coche2 = new Coche();
var coche3 = new Coche();
coche2.setColor("AZUL");
coche3.setColor("VERDE");
console.log("El color del coche 2 es: " + coche2.getColor());
console.log("El color del coche 3 es: " + coche3.getColor());
*/