console.log("Inicio")

setTimeout(()=>{
    console.log("Esto se  despues de 2 segundos")
},2000)
console.log("Fin")

//Calback Hell
function step1(callback){
    setTimeout(()=>{
        console.log("Paso 1 completado")
        callback()
    },1000)
}

function step2(callback){
    setTimeout(()=>{
        console.log("Paso 2 completado")
        callback()
    },1000)
}

function step3(callback){
    setTimeout(()=>{
        console.log("Paso 3 completado")
        callback()
    },1000)
}

step1(()=>{
    step2(()=>{
        step3(()=>{
                console.log("Todos los pasos completados")
        })
    })
})