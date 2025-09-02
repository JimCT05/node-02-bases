//destructuración de objetos
// console.log(process.env);
const {PUBLIC, HOMEPATH} = process.env;
// console.table({PUBLIC, HOMEPATH});


//desctructuración de arrays
const characters = ["Flash", "Superman", "Batman"];
const [,,batman] = characters; //solo recoje batman
// console.log(batman);