// for of and for in nested funda
// -----------------------------------------------------------------------------------------------------------------------------------

{
    const arr = [[1, 2], [3, 4], 5];

    for (let num of arr) {
        if (Array.isArray(num)) {  // Check if it's an array before looping
            for (let nested of num) {
                // console.log(nested);
            }
        }
         else {
            // console.log(num);  // Print number directly
        }
    }

}

{
    const obj = {
        name: "rinkal",
        age: 17,

        nested: {
            hobby: "play",
            passion: "programming"
        }
    }

    for (let key in obj) {

        if (typeof obj[key] === "object") {
            // console.log(`${key} is a nested object`);
        } else {
            // console.log(`${key} is not a nested object`);
        }

    }

}