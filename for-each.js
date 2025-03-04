// FOR EACH
// --------------------------------------------------------------------------------------------------------------------------------------


{
    const arr = [
        ['X', ' ', 'O'],
        [' ', 'X', ' '],
        ['O', ' ', 'X']
    ]

    arr.forEach((nums) => {
            // console.log(nums.join(" "));
    })
}

{
    const numbers = [1, 2, 3, 4, 5];

    numbers.forEach((num, index, arr) => {
        arr[index] = num * 2;
    })
    // console.log(`arr is : ${numbers} `);




    let multy = 1;
    numbers.forEach(num => multy *= num);
    // console.log(multy);

    const multy2 = numbers.reduce((acc, num) => {
        acc *= num
        return acc;
    }, 1)

    // console.log(multy2);


}


{
    // updation using foreach
    const arrOfObj = [
        { name: "rinkal", age: 17, hasSister: false },
        { name: "krina", age: 23, hasSister: false }
    ]

    arrOfObj.forEach((arr) => {
        arr.hasSister = true;
        arr.age *= 2;
        arr.name = arr.name.split("");
    });

    //     console.log(arrOfObj);


    arrOfObj.forEach(({ name, age }) => {
        // console.log(`the name is ${name} and age is ${age}`);       
    })

    for (const { name, age } of arrOfObj) {
        // console.log(`name is ${name} and age is ${age}`);       
    }
}


{
    const prices = [100, 200, 300];

    prices.forEach((price, i, arr) => {
    arr[i] = price * 10;  // Apply 10% discount
    });

    // console.log(prices);  // [90, 180, 270]
}
