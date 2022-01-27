//const Rectangulo = class R{

//}


//El hoisting no aplica para las clases declaradas con class
class Rectangulo{
}


 /*Hoisting
Cuando se toman variables definidas con var
y funciones definidas con function
y las lleva al comienzo del archivo
console.log(Cuadrado)*/

function Cuadrado(){}
//console.log (Cuadrado, Rectangulo)

const r = new Rectangulo()

class Cerdo{
    static estatico = 42 //propiedad estatica para usarla con un metodo estatico
    propiedad = 'mi propiedad' //propiedad publica de las clases
    #hambre //propiedad privada de la clase

    constructor(estado = 'raro', hambre= false){
        this.estado = estado
        this.#hambre = hambre
    }
    hablar(){
        console.log(`Soy un cerdo ${this.estado} ${this.#hambre ?'con mucha hambre' : 'satisfecho!'}`);
    }

    static comer(){
        console.log(this.estatico, 'estoy comiendo') //los metedos estaticos no pueden acceder a las propiedades de la clase, debe ser una propiedad estatica
    }
}

Cerdo.comer()
const feliz = new Cerdo('felizz')
//console.log(feliz.__proto__.hablar)
feliz.hablar()
console.log(feliz)
const triste = new Cerdo('triste')
//triste.hablar()
const nose = new Cerdo()
//nose.hablar()