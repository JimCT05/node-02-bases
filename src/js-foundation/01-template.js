//comilla `` es para un string en varias lineas, asi agregamos codigo html

const emailTemplate = `
<div>
    <h1>Hi Jim</h1>
    <p>Gracias por tu orden</p>
    <p>Gracias por tu orden2</p>
</div>`;

//exportamos la variable pero la guardamos como un objeto con {} por si es necesario acceder a diferentes valores despues
module.exports = {
    emailTemplate
}

