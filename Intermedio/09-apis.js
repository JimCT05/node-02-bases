process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { setGlobalDispatcher, ProxyAgent } = require('undici');

// Configuración del proxy (si necesita auth: 'http://user:pass@10.205.96.5:3128')
const proxyUrl = 'http://10.205.96.5:3128';

// Establecer dispatcher global para que la fetch nativa use el proxy
setGlobalDispatcher(new ProxyAgent({ uri: proxyUrl }));

// Ahora puedes usar fetch en la forma sencilla que pides:
// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         return response.json()
//     })
//       .then(data => console.log(data))
//       .catch(err => console.error('Error:', err));

// //Lo mismo pero con async/await

// async function getData(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.error('Error:', error)
//   }
// }
// getData()

// //POST
// const insert = {
//   userid: 1,
//   title: "Este es el titulo del post",
//   body: "Este es el cuerpo del post"
// }

// async function setPost(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(insert)

//     })
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.error('Error:', error)
//   }
// }
// setPost()

// //PATCH
// //Sirve para modificar una parte

// async function partialPostUpdate(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/5', { //aqui va /id a modificar
//       method: 'PATCH', 
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({title:"El titulo se ha actualizado"}) //solo se le pasa el valor a modificar

//     })
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.error('Error:', error)
//   }
// }
// partialPostUpdate()

//Autenticación mediante API Key
// async function getWeather(city) {
//     const apiKey = "4a9fc96104d32af1d1431d6c98835bcd"
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

//     try {
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("Error", error)
//     }
// }

// getWeather("Madrid")


//POKEAPI

async function getPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(`Habilidades de ${data.name}`)
        data.abilities.forEach(ability => console.log(ability.ability.name))
    } catch (error) {
        console.log("Error", error)
    }
}

getPokemon("pikachu")