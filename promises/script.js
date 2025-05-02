{
    let num = 10;
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 5) {
                resolve(num)
            } else {
                reject()
            }
        }, 2000);
    })
        .then((number) => {
            console.log(number);
            return number * 2
        })
        .then((number) => {
            console.log(number);
            return number * 2
        })
        .then((number) => {
            console.log(number);

        })
        .catch(() => console.log("something went wrong")
        )
}

{
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("promise executed");
            resolve("promise consumed")
        }, 1000);
    })

    myPromise.then((msg) => {
        console.log(msg);

    })
}

{
    // let age = 1;
    // let myPromiseTwo = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         if (age > 15) {
    //             resolve("age is greater than 15");
    //         } else {
    //             reject("age is less than 15")
    //         }
    //     }, 1000);
    // })
    // myPromiseTwo
    //     .then((msg) => {
    //         console.log(msg);
    //     })
    //     .catch((err) => {
    //         console.log(err);

    //     })
}

{
    // new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve({ name: "rinkal", age: 17, degree: "bca" })

    //     }, 1000);
    // }).then((obj) => {
    //     console.log(obj);

    // })
}

{
    function namaste() {
        console.log("hello");
        
    }
    function hello(n1) {
        n1();
    }
    hello(namaste)
}

{
    // const p1 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("p1")
    //     }, 2000);
    // })
    // const p2 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         reject("p2")
    //     }, 1000);
    // })
    // const p3 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         reject("p3")
    //     }, 1000);
    // })

    // Promise.race([p1, p2, p3])
    //     .then((value) => {
    //         console.log(value);

    //     })
    //     .catch((error) => {
    //         console.log(error);

    //     })
}

{
    // function print(a, b, callback) {
    //     console.log(a, b);
    //     console.log(callback(a, b));
        
    // }

    // function sum(a, b) {
    //     console.log(a+b);
        
    // }

    // print(12, 13, sum)
    
}

{
    // let num = Math.floor(Math.random()*10 +1);
    // new Promise((resolve, reject) => {

    //     setTimeout(() => {
    //         if(num>=5) {
    //             resolve(`internent speed is fast : ${num}`)

    //         } else {
    //             reject(`internent speed is slow : ${num}`)

    //         }
    //     }, 1000);
    // })
    // .then((msg) => {
    //     console.log(msg);

    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if(num>=8) {
    //                 resolve(`internet speed is very fast`)
    //             } else {
    //                 reject(`internet speed is less fast`)
    //             }
    //         }, 1000);
    //     })

    // })
    // .then((msg) => {
    //     console.log(msg);

    // })
    // .catch((msg) => {
    //     console.log(msg);

    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if(num<=2 && num <5) {
    //                 resolve(`internet speed is very slow`)
    //             } else if(num>2 && num<5) {
    //                 reject(`internet speed is less slow`)
    //             }
    //         }, 1000);
    //     })
    //     .then((msg) => {
    //         console.log(msg);

    //     })
    // })

    // .catch((msg) => {
    //     console.log(msg);

    // })
}


// HTML Connection
{
    // let h = document.querySelector(".heading");

    // function colorChange(color) {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(h.style.color = color)
    //         }, 1000);
    //     })
    // }

    // colorChange("red")
    //     .then(() => {
    //         return colorChange("pink")
    //     })
    //     .then(() => {
    //         return colorChange("yellow")
    //     })
    //     .then(() => {
    //         return colorChange("blue")
    //     })
    //     .then(() => {
    //         return colorChange("grey")
    //     })
    //     .then(() => {
    //         return colorChange("green")
    //     })
    //     .then(() => {
    //         return colorChange("white")
    //     })
}
