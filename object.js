//* OBJECTS
//& --------------------------------------------------------------------------------------------------------------------------------------

//^ Do not trust const objects to have constant contents!

const timeStamps = Date.now(); //timestampes
const date = new Date().toLocaleString(); //date

// console.log(timeStamps); 
// console.log(date); 


{
    const obj = {
        name: "object1",
        dateOfCreation: new Date().toDateString(),

        nested: {
            author: "rinkal",
            age: 17
        }
    }
    // console.log(obj);
    // console.log();

    // console.log(Object.keys(obj));
    // console.log(Object.values(obj));
    // console.log(Object.entries(obj));
    // console.log();

    for (let key in obj) {
        // console.log(`key : ${key} and value : ${obj[key]}`);    
    }

    for (let key in obj.nested) {
        // console.log(`key : ${key} and value : ${obj.nested[key]}`);
    }

}


{
    const animal = {
        name: "tizer",
        species: "dog",
        intro() {
            console.log(`hello, my name is ${this.name} and my age is ${this.age} and my food is ${this.food}`);
        }
    }

    Object.defineProperty(animal, "name", {
        writable: false, //cannot change value
        configurable: false //cannot delete key
    })

    animal.name = "olive"
    delete animal.name
    console.log(animal);

    const pet = Object.create(animal, {
        name : {
            value : "simran"
        },

        age: {
            value: 14,
            writable: false
        },

        food: {
            value: "dog-food"
        }
    });

    // console.log(animal);
    pet.species = "cat";
    // console.log(pet);



    // ☝️ the better option for defineproperty when the object inherites from other object

    Object.defineProperty(pet, "age", {
        value: 14,
        writable: false
    })

    // pet.intro();
    

    // console.log(pet.species);
    // console.log(animal.species);

    for (key in pet) {
        if (pet.hasOwnProperty(key)) {
            // console.log(`key : ${key}`);       
        }
    }

}


{
    const ob1 = {
        name: "rinkal"
    }
    const ob2 = {
        age: 14
    }

    // console.log(Object.assign({}, ob1, ob2));


    // Object.defineProperty(ob1, "age", {
    //     value: 17,
    // });     will not add age key in the ob1 object

    // console.log(ob1);

    // ob1.age = 17;      will add age key in the ob1 object

    // console.log(ob1);
    // console.log(ob1.age);
}

{
    const obj1 = {
        name: "rinkal",
        age: 17,
        nested: {
            domain: "tech"
        }
    }

    function printInfo({ name, age }) {
        // console.log(`my name is ${name} and age is ${age}`);

    }
    // printInfo(obj1);


    // const { name: myName, age = 19, interests = "programming", nested: { domain } } = obj1;
    // console.log(myName);
    // console.log(age);
    // console.log(interests);
}

{
    const obj = {
        1: "a",
        2: "b",
        true: "c",
        null: "d"
    }

    // console.log(obj.true);

}

{
    const arrOfObjects = [
        {
            name: "rinkal",
            age: 17
        },
        {
            name: "krina",
            age: 23
        },
        {
            name: "mahi",
            age: 18
        },
        {
            name: "devang"
        }
    ];

    // console.log(arrOfObjects);

    arrOfObjects.forEach(obj => obj.age = 17)

    arrOfObjects.forEach(({ name, age = 'not defined' }) => {
        // console.log(`name is ${name} and age is ${age}`);

    })

    

}