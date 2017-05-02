function holamundo(nombre) {
    return "Hola Mundo!! Soy " + nombre;
}
var nombre = "Diego Abanto";
var resultado = holamundo(nombre);
//document.getElementById("container").innerHTML = holamundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
//VARIABLES Y TIPOS
var nombre = "Diego";
var apellido = "Abanto";
var edad = 25;
var programador = true;
var langs = ["PHP", "JavaScript", "CSS"];
etiqueta.innerHTML = nombre + " " + apellido + " - " + edad;
//DIFERENCIAS ENTRE LET Y VAR
var a = 7;
var b = 12;
if (a == 7) {
    //El valor de a sera 4 en el bloque IF
    var a_1 = 4;
    var b = 1;
    console.log("DENTRO DEL IF:" + a_1 + " - " + b);
}
console.log("FUERA DEL IF:" + a + " - " + b);
//FUNCIONES Y TIPADO
function devuelveNumero(num) {
    return "Número devuelto: " + num;
}
function devuelveString(texto) {
    if (texto == "hola") {
        var num = 66;
    }
    else {
        var num = 90;
    }
    return num;
}
alert(devuelveNumero(34));
alert(devuelveString("hola"));
