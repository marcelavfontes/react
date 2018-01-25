
class Person {
    //only method that gets called implicitly   
    //setting default value
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi! I am ${this.name}.`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()){
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }

        return greeting;
    }
}

const me = new Student('Kerveros', 26, 'Computer Science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const me2 = new Traveler('Kerveros', 26, 'Natal');
console.log(me2.getGreeting());

const other2 = new Traveler();
console.log(other2.getGreeting());