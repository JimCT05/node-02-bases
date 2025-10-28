const fs = require('fs');
const content = fs.readFileSync('README.md', 'utf8');
const words = content.split(' ');

/*forma 1*/
//const reactWordCount = words.filter((word) => word.toLowerCase().includes('react')).length;
/* funcion regular */
// const reactWordCount = content.match(/react/gi ?? []).length;

console.log("Número de palabras: ", words.length);
console.log("Palabras React: ", reactWordCount);