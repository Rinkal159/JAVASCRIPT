// console.log("hello wortld!");

// const a = 12;
// const b = 12;
// console.log(a+b);

// const c = "33abc";
// console.log(typeof(c));

// let d = Number(c);
// console.log(d)
// console.log(typeof(d));

// const a = .673;
// const b = "hello";
// const c = a + b;
// console.log(c);
// console.log(typeof(c));


// console.log( "2" + (2 + 2) + 3);

// let num1, num2, num3;
// num1 = num2 = num3 = 4;
// console.log(num1, num2, num3);


// let a = 12;
// let b = 13;
// console.log(`the value of a is ${a} and b is ${b}`);


// console.log("hello2"> "Hello");


// let c = 3;
// const d = ++c;
// console.log(`the value of c is ${c} and d is ${d}`);

// let a = true;
// let b = 1;
// console.log(a===b);

// console.log("1" > 0 );
// console.log(null > 0);

// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined <= 0);

// let isLoggedIn ;
// console.log(typeof isLoggedIn);

// const str = new String("rinkal");
// console.log(str.slice(-5, -3 ));

// const str = "hello world"
// console.log(str.split(""));

// console.log(`hello \"world!\"`);

// const num = new Number(100);
// console.log(num);
// console.log(Number.isInteger(num));

// let randomNumberInFloat = Math.random()*10;
// console.log(randomNumberInFloat.toFixed(2));

// let randomNumberInInt = Math.floor((Math.random()*6) + 1);
// console.log(randomNumberInInt);


// const min = 5;
// const max = 10;

// let randomNumberBetween10To50 = Math.floor(Math.random() * (max-min+1) + min);
// console.log(randomNumberBetween10To50);


// const a = 13;

// console.log(Math.round(a));
// console.log(Math.ceil(a));
// console.log(Math.floor(a));
// console.log(Math.abs(a));
// console.log(Math.trunc(a));
// console.log(Math.sqrt(a));
// console.log(Math.cbrt(a));



// { finding current age



// const bornDate = new Date(2007, 1, 1);
// const todayDate = new Date();

// let age = todayDate.getFullYear() - bornDate.getFullYear();

// const monthDiff = todayDate.getMonth() - bornDate.getMonth();
// const dateDiff = todayDate.getDate() - bornDate.getDate();


// if (monthDiff < 0 || ( monthDiff===0 && dateDiff < 0)) {
//     age--;
// }

// console.log(`age : ${age}`);



// }


// let timeStamp = new Date(1738659349450);
// console.log(timeStamp.toString());


// for(let i =1; i<=10; i++) {
//     if (i%2==0) {
//         continue;
//     }
//     console.log(i);

// }


// let num = 2;
// for (let i =1; i<=10; i++) {
//     console.log(`table : ${num*i}`);
// }


// const numbers = [
//     "hello",
//     2,
//     33
// "hello",
// "hi",
// "namaste",
// "pranam",
// true,
// false,
// true
// ];

// console.log(numbers[0][3]); // 'l'

// console.log(numbers.lastIndexOf(true));
// console.log(numbers.join(" "));
// console.log(numbers.toString());



// const newNumbers = [4,5,6]
// const mergeNumbers = [0, ...numbers, ...newNumbers, 7]
// console.log(mergeNumbers);

// console.log(Array.isArray("rinkal"));
// console.log(Array.from("rinkal"));


// const a = 12;
// const b = 13;
// const c = 14;

// console.log(Array.of(a, b, c));


// console.log(new Array(3));
// console.log(Array.of(3));

// const months = ["jan", "july", "march", "aug"];

// months.splice(1, 0, "july", "june");
// console.log(months);

// console.log("111" - "222");
// console.log("abc" - "def");

// const arr= [10, 13, 2, 18, 5];
// console.log(Math.max(...arr));

{


    // const arr= [10, 20, 2, 18, 5];

    // let maxNumber = arr[0];
    // for (let i=1; i<arr.length-1; i++) {
    //     if (arr[i] > maxNumber) {
    //         maxNumber = arr[i];
    //     }

    // }
    // console.log(maxNumber);
    // console.log(arr);


}



// FOR EACH
// --------------------------------------------------------------------------------------------------------------------------------------
{


    //     const arr = [
    //     ['X', ' ', 'O'],
    //     [' ', 'X', ' '],
    //     ['O', ' ', 'X']
    // ]

    // arr.forEach((nums, index) => {
    //     console.log(nums.join(" ")); 
    // })



    // const numbers = [1, 2, 3, 4, 5];

    // numbers.forEach((num, index) => {
    //     console.log(`numbers are ${num*=2} and their indecies ${index}`);   
    // })

    // let multy = 1;
    // numbers.forEach(num => multy *= num);
    // console.log(multy);





    // updation using foreach
    // const arrOfObj = [
    //     { name: "rinkal", age: 17, hasSister: false },
    //     { name: "krina", age: 23, hasSister: false }
    // ]

    // arrOfObj.forEach((arr) => {
    //     arr.hasSister = true;
    //     arr.age *= 2;
    //     arr.name = arr.name.split("");
    // });

    //     console.log(arrOfObj);


    // arrOfObj.forEach(({name, age}) => {
    //     console.log(`the name is ${name} and age is ${age}`);       
    // })

    // for (const { name, age } of arrOfObj) {
    // console.log(`name is ${name} and age is ${age}`);       
    // }




    // const prices = [100, 200, 300];

    // prices.forEach((price, i, arr) => {
    // arr[i] = price * 10;  // Apply 10% discount
    // });

    // console.log(prices);  // [90, 180, 270]
}




// ASSIGNMENT QUESTIONS
// --------------------------------------------------------------------------------------------------------------------------------------

{
    // const str = "412";
    // const conversion = Boolean(str);

    // if (conversion == false) {
    //     console.log(`string is empty`);
    // } else {
    //     console.log(`string is not empty`);
    // }

}


{
    // const str = "Hello";
    // const lowerCase = str.toLowerCase();

    // if (str.charAt(0) === lowerCase.charAt(0)) {
    //     console.log(`true`);

    // } else {
    //     console.log(`false`);

    // }

}

{
    // const num = [ [1,2,3], [4,5,6], [7,8,9]]

    // for of loop

    // for (num2 of num){
    //     for(num3 of num2) {
    //         console.log(num3);
    //     }  
    // }

}


{
    // let num = 12345;
    // let count = 0;

    // while(num > 0) {
    //     num = Math.floor(num / 10);
    //     count++;
    // }
    // console.log(count);
}

{
    // let num = 287152;
    // let reminder = 0;


    // while (num > 0) {
    //     reminder += num % 10;
    //     num = Math.floor(num / 10);
    // }
    // console.log(reminder);
}

{
    // let num = 7;
    // let fact = 1;

    // for (let i = num; i >= 2; i--) {
    //     fact *= i;
    // }
    // console.log(fact);
}

{
    // let arr = [10, 1, 8, 6, 7, 44, 19];
    // let max = arr[0];

    // for (let i=1; i<arr.length; i++) {

    //     if (max < arr[i]) {

    //         let temp =max;
    //         max = arr[i];
    //         arr[i] = temp;
    //     }
    // }
    // console.log(max);
}

// const arr = [1, 2, 3];
// [arr[0], arr[arr.length-1]] = [arr[arr.length-1], arr[0]];
// console.log(arr);

{
    // let a = 12;
    // let b = 13;

    // [a, b] = [b, a];

    // console.log(a);
    // console.log(b);
}






// OBJECTS
// --------------------------------------------------------------------------------------------------------------------------------------

{
    // const obj = {
    //     name: "object1",
    //     dateOfCreation: new Date().toDateString(),

    //     nested: {
    //         author: "rinkal",
    //         age: 17
    //     }
    // }
    // console.log(obj);
    // console.log();

    // console.log(Object.keys(obj));
    // console.log(Object.values(obj));
    // console.log(Object.entries(obj));
    // console.log();

    // for (let key in obj) {
    //     console.log(`key : ${key} and value : ${obj[key]}`);    
    // }

    // for (let key in obj.nested) {
    //     console.log(`key : ${key} and value : ${obj.nested[key]}`);
    // }

}


{
    // const animal = {
    //     name: "tizer",
    //     species: "dog",
    //     intro() {
    //         console.log(`hello, my name is ${this.name} and my age is ${this.age} and my food is ${this.food}`);
    //     }
    // }

    // Object.defineProperty(animal, "name", {
    //     writable : true,
    //     configurable : false
    // })

    // animal.name = "olive"
    // delete animal.name
    // console.log(animal);

    // const pet = Object.create(animal, {
    //     age: {
    //         value: 14,
    //         writable: false
    //     },

    //     food: {
    //         value: "dog-food"
    //     }
    // });

    // ☝️ the better option for defineproperty when the object inherites from other object

    // Object.defineProperty(pet, "age", {
    //     value : 14,
    //     writable : false
    // })

    // pet.intro();

    // pet.species = "cat";

    // console.log(pet.species);
    // console.log(animal.species);

    // for(key in pet) {
    //     if(pet.hasOwnProperty(key)) {
    //         console.log(`key : ${key}`);       
    //     }   
    // }

}


{
    // const ob1 = {
    //     name: "rinkal"
    // }
    // const ob2 = {
    //     age: 14
    // }

    // console.log(Object.assign({}, ob1, ob2));


    // Object.defineProperty(ob1, "age", {
    //     value: 17,
    // });

    // console.log(ob1);
    // console.log(ob1.age);
}

{
    // const obj1 = {
    //     name: "rinkal",
    //     age: 17,
    //     nested: {
    //         domain: "tech"
    //     }
    // }

    // function printInfo({ name, age }) {
    //     console.log(`my name is ${name} and age is ${age}`);

    // }
    // printInfo(obj1);


    // const { name: myName, age = 19, interests = "programming", nested: { domain } } = obj1;
    // console.log(myName);
    // console.log(age);
    // console.log(interests);
}

{
    // const obj = {
    //     1 : "a",
    //     2 : "b",
    //     true : "c",
    //     null : "d"
    // }

    // console.log(obj.true);

}

{
    // const arrOfObjects = [
    //     {
    //         name: "rinkal",
    //         age: 17
    //     },
    //     {
    //         name: "krina",
    //         age: 23
    //     },
    //     {
    //         name: "mahi",
    //         age: 18
    //     },
    //     {
    //         name: "devang"
    //     }
    // ];

    // console.log(arrOfObjects);

    // arrOfObjects.forEach(obj => obj.age = 17)

    // arrOfObjects.forEach(({name, age = 'not defined'}) => {
    //     console.log(`name is ${name} and age is ${age}`);

    // })


}



// FUNCTIONS
// --------------------------------------------------------------------------------------------------------------------------------------

{
    // sum of two numbers, after checking the correct input(the input should be a number).
    // function printSum(a, b) {
    //     if ((typeof a === "number" && typeof b === "number") && (!(Number.isNaN(a) || Number.isNaN(b)))) {
    //         // console.log(`the sum is ${a+b}`);
    //         return a + b;
    //     } else {
    //         console.log(`invalid input`);

    //     }

    // }

    // in the case of NaN, the typeof will result true, but the isNaN will result false, that's why && is used between those two coz when one is true but other is false, then the result will false and will display "invalid output"

    // to face NaN situation correctly, we use NaN in if syntax

    // const sum = printSum(5, 's');
    // console.log(`the sum is ${sum}`)

}

{
    // const obj = {
    //     first: 13,
    //     second: 18,
    //     sum() {
    //         const { first, second } = obj
    //         return first + second;
    //     }
    // }

    // const { sum } = obj;
    // console.log(`sum is ${sum()}`);


    // destructuring in for-in loop
    // for (let key in obj) {
    //     const { [key]: value } = obj;
    //     console.log(`key : ${key} and value : ${obj[key]}`);
    // }

}


{
    // const students = [
    //     { name: "rinkal", marks: 100 },
    //     { name: "krina", marks: 90 },
    //     { name: "vrunda", marks: 80 },
    //     { name: "nikita", marks: 70 },
    //     { name: "riya", marks: 60 },


    // ]

    // function sumOfNumbers() {
    //     let sum = 0;
    //     students.forEach(({marks}) => {
    //         sum += marks;

    //     })

    //     return sum;
    // }

    // console.log(`sum of marks is ${sumOfNumbers()}`);

}

{
    // let nums = prompt("numbers");
    // nums = nums.split(" ");

    // function average() {
    //     let sum = 0;

    //     nums.forEach(num => sum += Number(num))
    //     console.log(` the average is ${sum/ nums.length}`);

    // }

    // average()
}

{
    // let arr = ["rinkal", "krina", "mahi"];

    // function concat() {

    //     let sum = "";
    //     arr.forEach(name => sum += String(name));

    //     return sum;

    // }

    // console.log(`concat of strings : ${concat()}`);

}

{
    // function ave(...num) {

    //     const aveargeOfAll = num.reduce((acc, value,index,  arr) => {
    //         acc += value;
    //         return index === arr.length-1 ?  acc/ arr.length : acc
    //     }, 0);

    //     return aveargeOfAll;
    // }

    // console.log(`average of all digits is ${ave(1, 2, 3, 4, 5)}`);
    
}
{
    function returnValues(val1, val2, ...products) {
        
        return [val1, val2, products.join(" , ")];
    }

    console.log(`the products : ${returnValues("soap", "waternbottle", "makeup", "chocolate", "biscuits")}`);
    
}
{
    const user1 = {
        name : "rinkal",
        age : 17
    };

    const user2 = {
        name : "krina",
        age : 23
    }

    function printInfo(...obj) {
        
        obj.forEach(({name, age}) => {
            console.log(`${name}'s age is ${age}`);           
        })       
    }

    printInfo(user1, user2); 
    
    // [
    //     {},
    //     {}
    // ]
}

{
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [7, 8, 9];
    const arr4 = [10, 11, 12];

    function getAllValues(...arr) {

        arr.forEach((value) => {
            console.log(`the values are : ${value[2
                
            ]}`);            
        })
    }

    getAllValues(arr1, arr2, arr3, arr4)


}




// REDUCE
// -------------------------------------------------------------------------------------------------------------------------------------

{
    const arr = [1, 2, 3, 4, 5, 4, 2, 4];

    // reduce👇

    // const sum = arr.reduce((acc, curr) => acc+curr, 0);
    // console.log(sum);



    // for each👇

    // let sum =0;
    // arr.forEach((num) => sum += num);
    // console.log(sum);
    
    
}

{
    const arr = [1, 2, 3, 4, 5, 4, 2, 4];

    const occur = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    // console.log(occur);
    
}

{
    const arr = [23, 56, 14, 29];
    const max = arr.reduce((acc, num) => num > acc ? num : acc);

    // console.log(max);
    
}

{
    // const people = [
    //     {name : "rinkal", age : 25},
    //     {name : "krina", age : 30},
    //     {name : "mahi", age : 25},
    //     {name : "devang", age : 17},
    // ];

    // const grouping = people.reduce((acc, person) => {
    //     acc[person.age] = acc[person.age] || [];
    //     acc[person.age].push(person.name);
    //     return acc;
    // }, {})

    // console.log(Object.keys(grouping));




    // const animals = [
    //     {name : "lion", is : "carnivores"},
    //     {name : "tiger", is : "carnivores"},
    //     {name : "giraff", is : "herbivores"},
    //     {name : "cow", is : "herbivores"},
    //     {name : "fox", is : "carnivores"}
    // ]

    // const grouping = animals.reduce((acc, animal) => {
    //     acc[animal.is] = acc[animal.is] || [];
    //     acc[animal.is].push(animal.name);
    //     return acc;
    // }, {});

    // console.log(grouping);
    
    
} 

{
    const arr = [[1, 2], [3, 4], [5, 6]];

    const flatted = arr.reduce((acc, num) => 
        acc.concat(num)
    , []);

    // console.log(flatted);
    
}
{
    const cart = [
        {item : "soap", prices : 20},
        {item : "biscuit", prices : 20},
        {item : "toothbrush", prices : 20},
        {item : "chocolate", prices : 20},
        {item : "bed", prices : 2000}
    ]


    // reduce👇
    const sum = cart.reduce((acc, product) => acc + product.prices, 0)
    console.log(sum);




    // for-each👇

    // let sum = 0;
    // cart.forEach(({prices}) => sum += prices);

    // console.log(sum);
    
    
}

{
    const arr = ["apple", "bannana", "cherry", "apple", "cherry"];

    // reduce👇
    // const remobing = arr.reduce((acc, fruit) => {
    //     if(!acc.includes(fruit)) {
    //         acc.push(fruit);
    //     }
    //     return acc;
    // }, [])
    // console.log(remobing);


    // for-each👇
    let newArr = [];
    arr.forEach((fruit) => {
        if(!newArr.includes(fruit)) {
            newArr.push(fruit)            
        }
        // return arr;
    });
    console.log(newArr);
    
    
}



// RANDOM NUMBER GUESS GAME
// -----------------------------------------------------------------------------------------------------------------------------------


// const num = Math.floor((Math.random() * 5) + 1);
// // console.log(num);

// let guess = prompt(`Guess the number between 1 to 5 or type "quit" to exit`);


// while (true) {

//     if ((guess === "quit")) {
//         console.log("you quit!");
//         break;

//     } else {
//         guess = Number(guess);

//         if (Number.isNaN(guess)) {
//             guess = Number(prompt("not a number, try again"));

//         } else if (guess === num) {
//             console.log("yeyyy!! you guessed right.");
//             break;

//         }
//         else if (guess >= 1 && guess <= 5) {
//             guess = Number(prompt("try again..."))

//         }
//         else {
//             guess = Number(prompt("invalid number, guess between 1 and 5"))
//         }
//     }

// }





console.log(`chnaged file`);

console.log(`added new print statement`);

