//clases avanzadas
class Person {
    #name
    constructor (name) {
        //indicamos que no se creeen objetos Persona, solo heredados
        if (new.target === Person){
            throw new Error("La clase Person no puede ser instanciada directamente")
        }
        this.#name = name
    }
    greet(){
        console.log(`Hola, mi nombre es ${this.#name}`)
    }

    makeSound(){
        throw new Error("El metodo makeSound tiene que ser implementado de una subclase")
    }

    getName(){
        return this.#name
    }
    setName(name){
        this.#name = name
    }   

}
// const persona1 = new Person("Jim", 30)
// persona1.greet()

// persona1.sayAge = function (){
//     console.log(`Y tengo ${this.age} años`)
// } 
// persona1.sayAge()
console.log("---polimorfismo-----")
//clases abstractas

class Animal extends Person {
    makeSound() {
        console.log(`Guau, soy ${this.getName()}`)
    }
}

const perro = new Animal("Noisha")
console.log(perro)
perro.makeSound()
console.log(perro.getName())

//MIXINS
console.log("--mixins------")
