const obj = {
    name: "rinkal",
    age: 18,
    username: "Rinkal159",
    password: "rinkal#123_9902",
}

const myProxy = new Proxy(obj, {
    // get(target, prop, value) {
    //     if (prop.toLowerCase() === "password") {
    //         throw new Error("Access denied!")
    //     }
    //     return target[prop]
    // },
    set(target, prop, value) {
        console.log(target[prop] + " changed to " + value);
        target[prop] = value;
        return target[prop];
    }
});

// console.log(myProxy.password);
// myProxy.password = "rinkal";
// console.log(myProxy.password);

//&-------------------------------------------------------------------------------------------------------- 

//* Negative indexing on array

let arr = [1, 2, 3, 4, 5];

function negativeIndexing(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            const index = Number(prop);

            if (index < 0) {
                return target[target.length + index];
            } else {
                return target[prop];
            }
        }
    })
}

arr = negativeIndexing(arr);
console.log(arr[-1]);

