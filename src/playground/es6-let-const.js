//var - can be reasigned, can be redefined
var nameVar = 'Marcela';
var nameVar = 'Kerveros';
console.log('nameVar', nameVar);

//let - can be reasigned, cannot be redefined
let nameLet = 'Jen';
nameLet = 'Julie'
console.log('nameLet', nameLet);

//const - cannot be reasigned nor redefined
const nameConst = 'Frank';
console.log('nameConst', nameConst);

//Block scoping - 
//when something is block level scope it's not only bound to functions but it's also bound to code blocks
//var - bound only to function ('if' is a statement, not a function - 
// ˆit can be created inside an 'if' and changed outside of it)
//let, const - bound to code blocks

const fullName = 'Marcela Fontes';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);