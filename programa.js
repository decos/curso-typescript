var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//INICIO DEL MODULO
var Tienda;
(function (Tienda) {
    var Ropa = (function () {
        function Ropa(titulo) {
            this.titulo = titulo;
            alert(titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = (function () {
        function Informatica(titulo) {
            this.titulo = titulo;
            alert('Tienda de tecnologia: ' + titulo);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
var Informatica = Tienda.Informatica;
var cargar_informatica = new Informatica('supertienda');
//FIN DEL MODULO
//DECORADOR
//Donde utilicemos la funcion arranque() le vamos añadir un nuevo metodo llamado lanzar()
function arranque(lanzar) {
    return function (target) {
        //
        target.prototype.lanzamiento = function () {
            alert(lanzar);
        };
    };
}
var Programa = (function () {
    function Programa() {
    }
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    return Programa;
}());
Programa = __decorate([
    arranque('Lanzamiento del Curso de NodeJS y Angular 2')
], Programa);
var programa = new Programa();
programa.lanzamiento();
var EditorVideo = (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorVideo.prototype.getTimeline = function () {
        return this.timeline;
    };
    EditorVideo.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    EditorVideo.prototype.getAllData = function () {
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeline();
    };
    return EditorVideo;
}(Programa));
var editor = new EditorVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(1);
editor.setTimeline(4000);
console.log(editor.getAllData());
// LOGICA DEL FORMULARIO
var programas = [];
function guardar() {
    //indicar que el elemento de DOM es de un tipo concreto
    var nombre = document.getElementById("nombre").value.toString();
    var version = 1;
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(version);
    programas.push(programa);
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    document.getElementById("nombre").value = "";
}
//FUNCIONES FLECHA
setInterval(function () {
    console.log("hola");
}, 1000);
/*
 setInterval((nombre_variable, hola) => {
    console.log("hola2");
 }, 1000)
*/
var frutas = [
    "Manzana", "Naranja", "Platano", "Pera"
];
/*
 var recorrer = frutas.map(fruta => {
    console.log(fruta);
    console.log(fruta.length);
 })
*/
var recorrer = frutas.map(function (fruta) {
    console.log(fruta);
    console.log(fruta.length);
});
