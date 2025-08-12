const person = {
    name: "john",
    greet() {
        console.log(this.name);
    }
};

const boundGreet = person.greet.bind(person);
// boundGreet();

//&-------------------------------------------------------------------------------------------------------- 

const obj = {
    name: "rinkal"
}

function greetRinkal() {
    console.log(`hello, ${this.name}`);
}

const boundRinkalGreet = greetRinkal.bind(obj);
// boundRinkalGreet();

//&-------------------------------------------------------------------------------------------------------- 

const obj1 = {
    name: "rinkal",
    greetPerson() {
        return `hello, ${this.name}`
    }
}
const obj2 = {
    name: "krina"
}

obj1.greetPerson.call(obj2 && { name: "mahi" });
