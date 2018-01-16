// arguments object - no longer bound with arrow functions

// const add = function(a, b){
//     console.log(arguments);
//     return a + b;
// };
// console.log(add(55, 1, 3));

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 3));

//this keyword - no longer bound with arrow functions

// const user = {
//     name: 'Marcela',
//     cities: ['Natal', 'Vancouver', 'Barcelona', 'Recife'],
//     printCitiesLived: function(){
//         console.log(this.name);
//         console.log(this.cities);
// //this was never allowed in js5
//         this.cities.forEach(function (city){
//             console.log(this.name + 'has lived in ' + city);
//         });
//     }
// };

//this works in es6
// const user = {
//     name: 'Marcela',
//     cities: ['Natal', 'Vancouver', 'Barcelona', 'Recife'],
//     //cannot use arrow function here - loose bind to this.cities
//     // printCitiesLived: function(){
//     printCitiesLived() {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// };

const user = {
    name: 'Marcela',
    cities: ['Natal', 'Vancouver', 'Barcelona', 'Recife'],
    printCitiesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printCitiesLived());

const multiplier = {
    numbers: ['1', '2', '3'],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((x) => x * this.multiplyBy);
    }
}

console.log(multiplier.multiply());