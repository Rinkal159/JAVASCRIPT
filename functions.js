//* FUNCTIONS
//& ---------

{
    // hoisted

    print1()
    function print1() {
        // console.log(`print1`);

    }
}

{
    // not hoisted

    // print()

    let print = function () {
        console.log(`print`);

    }
}

{
    // variable is hoisted but TDZ(temporal declaration zone) applies 

    let a;
    // console.log(a);
    a = 5;
}

{
    function one() {

        function two() {
            // console.log(`namaste`);

            function three() {
                // console.log(`hola`);

            }

            three()

        }

        two()

        // console.log(`hello`);


    }

    one()
}

{
    // sum of two numbers, after checking the correct input(the input should be a number).
    function printSum(a, b) {
        if ((typeof a === "number" && typeof b === "number") && (!(Number.isNaN(a) || Number.isNaN(b)))) {
            // console.log(`the sum is ${a+b}`);
            return a + b;
        } else {
            // console.log(`invalid input`);

        }

    }

    // in the case of NaN, the typeof will result true, but the isNaN will result false, that's why && is used between those two coz when one is true but other is false, then the result will false and will display "invalid output"

    // to face NaN situation correctly, we use NaN in if syntax

    const sum = printSum(5, 's');
    // console.log(`the sum is ${sum}`)

}

{
    const obj = {
        first: 13,
        second: 18,
        sum() {
            const { first, second } = obj
            return first + second;
        }
    }

    const { sum } = obj;
    // console.log(`sum is ${sum()}`);


    // destructuring in for-in loop
    for (let key in obj) {
        const { [key]: value } = obj;
        // console.log(`key : ${key} and value : ${obj[key]}`);
    }

}


{
    const students = [
        { name: "rinkal", marks: 100 },
        { name: "krina", marks: 90 },
        { name: "vrunda", marks: 80 },
        { name: "nikita", marks: 70 },
        { name: "riya", marks: 60 },


    ]

    function sumOfNumbers() {
        let sum = 0;
        students.forEach(({ marks }) => {
            sum += marks;

        })

        return sum;
    }

    // console.log(`sum of marks is ${sumOfNumbers()}`);




    const sumOfMarks = students.reduce((acc, { marks }) => acc + marks, 0);

    // console.log(sumOfMarks);



}

{
    // let nums = prompt("numbers");
    // nums = nums.split(" ");

    // function average() {
    //     let sum = 0;

    // nums.forEach(num => sum += Number(num))
    // console.log(` the average is ${sum/ nums.length}`);

    // }

    // average()
}

{
    let arr = ["rinkal", "krina", "mahi"];

    function concat() {

        let sum = "";
        arr.forEach(name => sum += String(name));

        return sum;

    }

    // console.log(`concat of strings : ${concat()}`);

}

{
    function ave(...num) {

        const aveargeOfAll = num.reduce((acc, value, index, arr) => {
            acc += value;
            return index === arr.length - 1 ? acc / arr.length : acc
        }, 0);

        return aveargeOfAll;
    }

    // console.log(`average of all digits is ${ave(1, 2, 3, 4, 5)}`);

}
{
    function returnValues(val1, val2, ...products) {

        return [val1, val2, products.join(",")];
    }

    // console.log(`the products : ${returnValues("soap", "waternbottle", "makeup", "chocolate", "biscuits")}`);

}
{
    const user1 = {
        name: "rinkal",
        age: 17
    };

    const user2 = {
        name: "krina",
        age: 23
    }

    function printInfo(...obj) {

        obj.forEach(({ name, age }) => {
            // console.log(`${name}'s age is ${age}`);           
        })
    }

    printInfo(user1, user2);
}

{
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [7, 8, 9];
    const arr4 = [10, 11, 12];

    function getAllValues(...arr) {

        arr.forEach((value) => {
            // console.log(`the values are : ${value[2]}`);            
        })
    }

    getAllValues(arr1, arr2, arr3, arr4)


}




    