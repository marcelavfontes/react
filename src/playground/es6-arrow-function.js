//Function can have a name - function square(x){} 
// function square(x){
//     return x * x;
// };

//Arrow functions are always anonymous - if wanna access later, assign to a variable
// const squareArrow = (x) => {
//     return x * x;
// };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));

const getFirstName = (x) => {
    return x.split(' ')[0];
}
console.log(getFirstName('Marcela Fontes'));

const getFirstNameArrow = (x) => x.split(' ')[0];
console.log(getFirstNameArrow('Marcela Fontes'));