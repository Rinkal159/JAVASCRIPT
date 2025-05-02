// REDUCE
// -------------------------------------------------------------------------------------------------------------------------------------

{
    let arr = [1, 2, 3, 4, 5, 4, 2, 4];

    // reduce👇

    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    // console.log(sum);



    // for each👇

    let sum2 = 0;
    arr.forEach((num) => sum2 += num);
    // console.log(sum2);


    // doubling values using foreach
    arr.forEach((num, i, arr) => {
        arr[i] = num * 2;

    });
    // console.log(arr);




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

    const max2 = arr.reduce((acc, value) => Math.max(acc, value), arr[0]);
    // console.log(max2);

    arr.forEach((value, i, arr) => {
        arr[i] = value * 2
    });
    // console.log(arr);


    const multy = arr.map(num => num * 2);
    // console.log(multy);

    // console.log(arr);





}

{
    const people = [
        { name: "rinkal", age: 25 },
        { name: "krina", age: 30 },
        { name: "mahi", age: 25 },
        { name: "devang", age: 17 },
    ];

    const grouping = people.reduce((acc, person) => {
        acc[person.age] = acc[person.age] || [];
        acc[person.age].push(person.name);
        return acc;
    }, {})

    console.log(grouping);




    const animals = [
        { name: "lion", is: "carnivores" },
        { name: "tiger", is: "carnivores" },
        { name: "giraff", is: "herbivores" },
        { name: "cow", is: "herbivores" },
        { name: "fox", is: "carnivores" }
    ]

    const grouping2 = animals.reduce((acc, animal) => {
        acc[animal.is] = acc[animal.is] || [];
        acc[animal.is].push(animal.name);
        return acc;
    }, {});

    // console.log(grouping2);


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
        { item: "soap", prices: 20 },
        { item: "biscuit", prices: 20 },
        { item: "toothbrush", prices: 20 },
        { item: "chocolate", prices: 20 },
        { item: "bed", prices: 2000 }
    ]


    // // reduce👇
    const sum = cart.reduce((acc, product) => acc + product.prices, 0)
    // console.log(sum);




    // for-each👇

    let sum2 = 0;
    cart.forEach(({ prices }) => sum2 += prices);

    // console.log(sum2);


}

{
    const arr = ["apple", "bannana", "cherry", "apple", "cherry"];

    // // reduce👇
    const remobing = arr.reduce((acc, fruit) => {
        if (!acc.includes(fruit)) {
            acc.push(fruit);
        }
        return acc;
    }, [])
    // // console.log(remobing);


    // // for-each👇
    let newArr = [];
    arr.forEach((fruit) => {
        if (!newArr.includes(fruit)) {
            newArr.push(fruit)
        }
        // return arr;
    });
    // console.log(newArr);


}