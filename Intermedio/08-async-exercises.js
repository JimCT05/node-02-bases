// /*
// Clase 45 - Asincronía
// Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=14558
// */

// // 1. Crea una función para saludar que reciba un nombre y un callback. 
// //    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".
// function saludar(nombre, callback){
//     setTimeout(()=>{
//         callback(`Hola ${nombre}`)
//     },2000)
// }

// saludar("Jim", (mensaje) => {
//     console.log(mensaje);
// });

// //opcion 2

// function saludarConRetraso(nombre, callback) {
//   setTimeout(() => {
//     callback(nombre);
//   }, 2000); // Ejecuta el callback después de 2 segundos
// }


// // Llamamos a la función principal
// saludarConRetraso("Jim Edson", (nombre)=> {
//   console.log(`Hola, ${nombre}`);
// });
// // 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
// //    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

// function task1(callback) {
//   setTimeout(() => {
//     console.log("Tarea 1 completada");
//     callback();
//   }, 1000);
// }

// function task2(callback) {
//   setTimeout(() => {
//     console.log("Tarea 2 completada");
//     callback();
//   }, 1000);
// }

// function task3(callback) {
//   setTimeout(() => {
//     console.log("Tarea 3 completada");
//     callback();
//   }, 1000);
// }

// task1(() => {
//     task2(() => {
//         task3(() => {
//             console.log("Todas las tareas completadas");
//         });
//     });
// });

// // 3. Crea una función para verificar un número que retorne una Promesa. 
// //    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
// //    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

// function verificarNumero(numero){
//     return new Promise((resolve, reject)=>{
//         if(numero % 2 === 0){
//             resolve("Número Par")
//         }else{
//             reject("Numero Impar")
//         }
//     })
// }

// verificarNumero(4)
//     .then(resultado => console.log(resultado))
//     .catch(error => console.log(error));

// // 4. Crea tres funciones que devuelvan promesas:
// //    firstTask(): tarda 1s y muestra "Primera tarea completada".
// //    secondTask(): tarda 2s y muestra "Segunda tarea completada".
// //    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".
// function firstTask(){
//   return new Promise((resolve)=> {
//     setTimeout(() => {
//       console.log("Primera tarea completada");
//       resolve();
//     }, 1000);
//   });
// }
// function secondTask(){
//   return new Promise((resolve)=> {
//     setTimeout(() => {
//       console.log("Segunda tarea completada");
//       resolve();
//     }, 2000);
//   });
// }

// function thirdTask(){
//   return new Promise((resolve)=> {
//     setTimeout(() => {
//       console.log("Tercera tarea completada");
//       resolve();
//     }, 1500);
//   });
// }

// firstTask().then(() => {
//   return secondTask();
// }).then(() => {
//   return thirdTask();
// }).then(() => {
//   console.log("Todas las tareas completadas");
// });

// // 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().
// function wait (ms){
//   return new Promise((resolve) => setTimeout(resolve, ms))
// }

//   function firstTask1(){
//     return new Promise(resolve => {
//       console.log("Primera tarea completada async");
//       resolve();
//       });
//   }

//   function secondTask2(){
//     return new Promise(resolve => {
//       console.log("Segunda tarea completada async");
//       resolve();
//     });
//   }

//   function thirdTask3(){
//     return new Promise(resolve => {
//       console.log("Tercera tarea completada async");
//       resolve();
//     });
//   }


// async function executeTasks() {
//   await wait(1000);
//   firstTask1();
//   await wait(2000);
//   secondTask2();
//   await wait(1500);
//   thirdTask3();
// }

// executeTasks();

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

// function getUser(id){
//   return new Promise((resovle,reject) => {
//     setTimeout(()=>{
//       if(id < 5){
//         resolve({ id, nombre: "Usuario " + id })
//       }else{
//         reject("Usuario no encontrado")
//       }
//     },2000)
//   })
// }



async function fetchUser(id) {
  try {
    const user = await getUser(id);
    console.log("Usuario encontrado:", user);
  } catch (error) {
    console.error("Error:", error);
  }
}

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 5) {
        resolve({ id, nombre: "Usuario " + id });
      } else {
        reject("Usuario no encontrado");
      }
    }, 2000);
  });
}

fetchUser(3)
// getUser(6).then(user => {
//   console.log("Usuario encontrado:", user);
// }).catch(error => {
//   console.error("Error:", error);
// });



// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
   console.log("Inicio")
   setTimeout(() => console.log("setTimeout ejecutado"), 0)
   Promise.resolve().then(() => console.log("Promesa resuelta"))
   console.log("Fin")

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function task1() {
  return wait(1000).then(() => console.log("Tarea 1 completada"));
}

function task2() {
  return wait(2000).then(() => console.log("Tarea 2 completada"));
}

function task3() {
  return wait(1500).then(() => console.log("Tarea 3 completada"));
}

Promise.all([task1(), task2(), task3()]).then(() => {
  console.log("Todas las promesas resueltas");
});

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

function waitSeconds(segundos) {
  return new Promise(resolve => setTimeout(resolve, segundos * 1000))
}

async function main() {
  await waitSeconds(3)
  console.log("Tiempo finalizado")
}

main()

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes



// function checkBalance() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(500);
//     }, 1000);
//   });
// }

// function withdrawMoney(amount) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (amount <= 500) {
//         resolve("Operación exitosa, saldo restante: " + (500 - amount) + "$");
//       } else {
//         reject("Error: Fondos insuficientes");
//       }
//     }, 2000);
//   });
// }

// async function main2() {
//   const balance = await checkBalance();
//   console.log("Saldo disponible:", balance + "$");

//   try {
//     const result1 = await withdrawMoney(300);
//     console.log(result1);
//   } catch (error) {
//     console.error(error);
//   }

//   try {
//     const result2 = await withdrawMoney(300);
//     console.log(result2);
//   } catch (error) {
//     console.error(error);
//   }
// }

// main2();
