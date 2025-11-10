//Objetos avanzados
// - Prototipos y Herncia

// Prototipos

let person = {
    name: `Jim`,
    age: 30,
    greet(){
        console.log(`Hola, mi nombre es ${this.name} y mi edad es ${this.age}`)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))
