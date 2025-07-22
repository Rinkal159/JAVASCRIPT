//* Basics of JavaScript

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

{
    const people = [
        { fname: "rinkal", lname: "singapuri", age: 17 },
        { fname: "mahi", lname: "shah", age: 19 },
        { fname: "devang", lname: "kapadia", age: 20 },
        { fname: "maitraiyee", lname: "chutia", age: 19 },
        { fname: "priyanshi", lname: "vanza", age: 18 },
    ];

    let arr = people.map((name) => name.fname + " " + name.lname)
    // console.log(arr);

    let arr2 = people.reduce((acc, name) => {
        acc[name.age] = acc[name.age] || [];
        acc[name.age].push(name.fname);
        return acc;
    }, {});

    // console.log(arr2);


    {
        let arr3 = people.filter((name) => name.age > 17).map((name) => name.fname);
        // console.log(arr3);



        let arr4 = people.reduce((acc, name) => {
            if (name.age > 17) {
                acc.push(name.fname)
            }
            return acc;
        }, [])
        // console.log(arr4);
    }









}