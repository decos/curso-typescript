//DECORADOR
//Donde utilicemos la funcion arranque() le vamos añadir un nuevo metodo llamado lanzar()
function arranque(lanzar: string){
	return function(target: Function){
		//
		target.prototype.lanzamiento = function(): void{
			console.log(lanzar);
		}

	}
}

@arranque('Lanzamiento del Curso de NodeJS y Angular 2')
class Programa{
	public nombre:string;
	public version:number;

	getNombre(){
		return this.nombre;
	}

	setNombre(nombre:string){
		this.nombre = nombre;
	}

	getVersion(){
		return this.version;
	}

	setVersion(version:number){
		this.version = version;
	}
}

var programa = new Programa();
programa.lanzamiento();

class EditorVideo extends Programa{
	public timeline:number;

	getTimeline(){
		return this.timeline;
	}

	setTimeline(timeline:number){
		this.timeline = timeline;
	}

	getAllData():string{
		return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeline();
	}
}

var editor = new EditorVideo();

editor.setNombre("Camtasia Studio");
editor.setVersion(1);
editor.setTimeline(4000);

console.log(editor.getAllData());

// LOGICA DEL FORMULARIO
 var programas = [];

 function guardar(){
 	//indicar que el elemento de DOM es de un tipo concreto
 	var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();
 	var version = 1;

 	var programa = new Programa();
 	programa.setNombre(nombre);
 	programa.setVersion(version);
 	
 	programas.push(programa);

 	var list = "";
 	for(var i=0; i < programas.length; i++){
 		list = list + "<li>" + programas[i].getNombre() + "</li>"
 	}

 	var listado =  <HTMLElement> document.getElementById("listado");
 	listado.innerHTML = list;

 	(<HTMLInputElement> document.getElementById("nombre")).value = "";
 }

//FUNCIONES FLECHA

 setInterval(() => {
 	console.log("hola");
 }, 1000)
/*
 setInterval((nombre_variable, hola) => {
 	console.log("hola2");
 }, 1000)
*/
 var frutas = [
 	"Manzana", "Naranja", "Platano", "Pera"
 ] ;
/*
 var recorrer = frutas.map(fruta => {
 	console.log(fruta);
 	console.log(fruta.length);
 })
*/
  var recorrer = frutas.map(function(fruta){
 	console.log(fruta);
 	console.log(fruta.length);
 })