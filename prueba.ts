function holamundo(nombre){
	return "Hola Mundo!! Soy " + nombre	;
}

var nombre = "Diego Abanto";
var resultado = holamundo(nombre);


//document.getElementById("container").innerHTML = holamundo(nombre);
var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = resultado;

//VARIABLES Y TIPOS
var nombre:string =  "Diego";
var apellido:any = "Abanto"
var edad:number = 25;
var programador:boolean = true;
var langs: Array<string> = ["PHP", "JavaScript", "CSS"];


etiqueta.innerHTML = nombre + " " + apellido + " - " + edad;

//DIFERENCIAS ENTRE LET Y VAR

var a = 7;
var b = 12;

if(a==7){
	//El valor de a sera 4 en el bloque IF
	let a  = 4;
	var b = 1;

	console.log("DENTRO DEL IF:" + a + " - " + b);
}

console.log("FUERA DEL IF:" + a + " - " + b);

//FUNCIONES Y TIPADO

function devuelveNumero(num:number):string{
	return "Número devuelto: " + num;
}

function devuelveString(texto:string):number{
	if(texto == "hola"){
		var num = 66;
	} else{
		var num = 90;
	}
	return num;
}

alert(devuelveNumero(34));
alert(devuelveString("hola"));
