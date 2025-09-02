//requerimos el archivo pero lo guardamos con en una variable deconstruyendola para sacarla del objeto con {}, porque si no quedaria con estructura {codigo}
// const { emailTemplate }  = require('./js-foundation/01-template');

// console.log(emailTemplate);

// require('./js-foundation/02-destructuring');

const { getUserByID }  = require('./js-foundation/03-callbacks');


getUserByID(1);