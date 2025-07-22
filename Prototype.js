//* In javascript, a class can have only one constructor.

const discount = {
    calcDiscout() {
        console.log("10% discount");
    },
    freeBie() {
        console.log("no freebie")
    }
}

const customer = {
    bill: 2000
}

// customer object can access the discount object now
customer.__proto__ = discount;

// &--------------------------------------------------------------------------------------------------------

const demoObj = {
    name : "rinkal",
    age : 18
}

Object.prototype.getAge = function() {
    console.log("age");   
}

demoObj.getAge();

// &--------------------------------------------------------------------------------------------------------
//* When a class extends another class, its constructor must call super() before accessing this 

class Person {

    greet() {
        console.log(`hello, ${this.name}`)
    }
    bye() {
        console.log(`bye, ${this.name}`)
    }

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    getMarks() {
        console.log(`marks : ${this.marks}`);

    }

    constructor(Person, marks) {
        super(Person.name, Person.age)
        this.marks = marks;
    }
}

const rinkal = new Person("rinkal", 18);
const krina = new Person("krina", 23);

const miniRinkal = new Student(rinkal, 100);
const miniKrina = new Student(krina, 100);

// &--------------------------------------------------------------------------------------------------------

let data = "college data";

class User {
    viewData() {
        console.log(`data : ${data}`);
    }

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
class Admin extends User {
    editData(clgdata) {
        data = clgdata;
    }
}
const user1 = new User("rinkal", "rinkalsingapuri@gmail.com");
user1.viewData();

const admin = new Admin();
admin.editData("very important clg data");