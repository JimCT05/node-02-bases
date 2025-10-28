//Funciones avanzadas

//Ciudadanos de primera clase
//Puedes hacer una función generica sin nombre y asignarla a una constante, asi invocarla con el nombre de la constante
const greet = function (name){
    console.log(`Hola ${name}`)
}

greet("Jim")

//Puedes llamar a una funcion dentro de otra funcion ya que le pasamos la funcion por medio de la constante
function processGreeting (greetFunction, name){
    greetFunction(name) //aqui tiene el valor de greet con el nuevo name
}

//Aqui se la pasamos al invoccarla, constante "greet" es la funcion
processGreeting(greet, "Edson")

//Arrow functions avanzadas

//Retorno implicito
const multiply = (a,b) => a*b
console.log(multiply(5,2))

// - this lexico

const handler = {
    name: "Sunny",
    greetings: function (){
        console.log(`Hola, ${this.name}`)
    }
    //las arrow functions no heredan el this superior, crean el suyo propio(global), asi que no acceden al objeto a buscar valores
    //Es mejor usar functions normales si quieres referenciar algun parametro del objeto y la arrow para otros casos
    // greeting: () => console.log(`Hola, ${this.name}`)
}
handler.greetings()

// Parámetros Rest (...)

function sum(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(10, 15))