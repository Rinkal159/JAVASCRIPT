//* REDUCE
//& ------

{
    let arr = [1, 2, 3, 4, 5, 4, 2, 4];

    const sum = arr.reduce((acc, curr) => acc + curr, 0);
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

    const max = arr.reduce((acc, num) => num > acc ? num : acc, arr[0]);
    // console.log(max);

    const max2 = arr.reduce((acc, value) => Math.max(acc, value), arr[0]);
    // console.log(max2);
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


    // console.log(grouping);


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

    const sum = cart.reduce((acc, product) => acc + product.prices, 0)
    // console.log(sum);

}

{
    const arr = ["apple", "bannana", "cherry", "apple", "cherry"];

    const removing = arr.reduce((acc, fruit) => {
        if (!acc.includes(fruit)) {
            acc.push(fruit);
        }
        return acc;
    }, [])
    // console.log(removing);

}

{
    const inventary = [
        { name: "a", stock: 30 },
        { name: "b", stock: 120 },
        { name: "c", stock: 45 },
        { name: "d", stock: 70 },
    ]

    // const lowStocks = inventary.reduce((acc, curr) => {
    //     if (curr.stock < 50) {
    //         acc.push(curr.name);
    //     }
    //     return acc;
    // }, []);

    const lowStocks = inventary.filter((curr) => curr.stock < 50);

    // console.log(lowStocks);

}

{
    const userActivity = [
        { user: "bob", activity: 43 },
        { user: "arian", activity: 75 },
        { user: "cortan", activity: 33 },
        { user: "charlie", activity: 13 }
    ]

    const mostActiveNum = userActivity.reduce((acc, curr) => curr.activity > acc.activity ? curr : acc);

    // console.log(mostActiveNum);


}

{
    const expenses = [
        { description: "groceries", amount: 50, category: "food" },
        { description: "electricity bill", amount: 100, category: "utilities" },
        { description: "dinner", amount: 30, category: "food" },
        { description: "internet bill", amount: 50, category: "utilities" },
        { description: "internet bill", amount: 50, category: "food" },
    ];

    const totalExpenses = expenses.reduce((acc, curr) => {
        acc[curr.category] = acc[curr.category] ? acc[curr.category] + curr.amount : curr.amount;
        return acc;
    }, {})

    // console.log(totalExpenses);
}

{
    const obj = [
        { description: "write report", completed: "false", priority: 2 },
        { description: "send email", completed: "true", priority: 3 },
        { description: "prepare presentation", completed: "false", priority: 1 },
        { description: "learn english", completed: "true", priority: 4 },
    ];

    const nonCompletedTasks = obj.reduce((acc, curr) => {
        if (curr.completed === "false") {
            acc[curr.priority] = curr.description;
        }
        return acc;
    }, {});

    // console.log(nonCompletedTasks);
}

{
    //* reduce + map 
    const movieRatings = [
        { title: "A", ratings: [4, 5, 3] },
        { title: "B", ratings: [5, 5, 4] },
        { title: "C", ratings: [3, 4, 2] },
    ];

    const averageRating = movieRatings.map((val) => {
        const avg = val.ratings.reduce((acc, curr, i) => {
            acc += curr;
            return i == val.ratings.length - 1 ? acc / val.ratings.length : acc;
        });

        return { title: val.title, average: avg.toFixed(2) };
        /*[
            { title: 'A', ratings: '4.00' },
            { title: 'B', ratings: '4.67' },
            { title: 'C', ratings: '3.00' }
        ]*/

        val.ratings = avg.toFixed(2);
        return val;
        /*[
            { title: 'A', ratings: '4.00' },
            { title: 'B', ratings: '4.67' },
            { title: 'C', ratings: '3.00' }
        ]*/

        return avg; // [ '4.00', '4.67', '3.00' ]

    });

    console.log(averageRating);

    // when returning avg
    const alltogether = movieRatings.reduce((acc, curr, i) => {
        acc[curr.title] = averageRating[i];
        return acc;
    }, {})

    // console.log(alltogether);
}