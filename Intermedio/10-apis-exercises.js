process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { setGlobalDispatcher, ProxyAgent } = require('undici');

// Configuración del proxy (si necesita auth: 'http://user:pass@10.205.96.5:3128')
const proxyUrl = 'http://10.205.96.5:3128';

// Establecer dispatcher global para que la fetch nativa use el proxy
setGlobalDispatcher(new ProxyAgent({ uri: proxyUrl }));
/*
Clase 60 - APIs
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18710
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie
async function pokeApi(pokemon){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(`Especie de ${data.name}`)
        console.log(data.species.name)

        const speciesResponse = await fetch(data.species.url)
        const speciesData = await speciesResponse.json()

        const evolutionResponse = await fetch(speciesData.evolution_chain.url)
        const evolutionData = await evolutionResponse.json()

        
        // Paso 4: Recorrer la cadena evolutiva
        
        const evolutions = []

        function traverseChain(chainNode) {
        evolutions.push(chainNode.species.name)
        chainNode.evolves_to.forEach(nextEvolution => {
            traverseChain(nextEvolution) // recursivamente recorremos cada rama
        })
        }

        traverseChain(evolutionData.chain)

        // console.log(`✅ Evoluciones de ${pokemon}:`, evolutions)
        return evolutions
  } catch (error) {
        console.error("❌ Error al obtener la cadena evolutiva:", error)
  }
}


// Ejemplo de uso
// pokeApi("eevee")

pokeApi("bulbasaur").then(resultado => {
  console.log("✅ Evoluciones:", resultado);
});



// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
