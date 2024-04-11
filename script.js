//nombre, edad y género, y el método obtDetalles()
class Persona{
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
        console.log(`Tu nombre es  ${this.nombre}, tienes ${this.edad} años y eres ${this.genero}`);
      }
}

//Estudiante, que hereda de Persona, e incluye las propiedades
//curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona{
    constructor(nombre, edad, genero, curso, grupo,) {
        super(nombre, edad, genero)
        this.curso = curso;
        this.grupo=grupo
    }
    registrar() {
        console.log(`Eres estudiante de ${this.curso} y perteneces al grupo ${this.grupo}`);
      }
}

//Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar()

class Profesor extends Persona{
    constructor(nombre, edad, genero, asignatura, nivelgrupo,) {
        super(nombre, edad, genero)
        this.asignatura = asignatura;
        this.nivelgrupo = nivelgrupo;
    }
    asignar() {
        this.obtDetalles
        console.log(`Eres profesor de ${this.asignatura} y del nivel ${this.nivelgrupo}`);
      }
}

let persona1 = new Persona("Paco", 25, "hombre");
persona1.obtDetalles()


let estudiante1 = new Estudiante("Juan", 23, "hombre","FullStack", "FullTime");
estudiante1.obtDetalles()
estudiante1.registrar()

let profesor1 = new Profesor("Maria", 35, "mujer","Javascript", "Avanzado");
profesor1.obtDetalles()
profesor1.asignar()