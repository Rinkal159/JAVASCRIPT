// setTimeout (higher order function)
// -----------------------------------------------------------------------------------------------------------------------------------

{
    function hello(name) {
        // console.log(`hello ${name}`);

    }
    setTimeout(hello, 2000, "rinkal");

    // console.log(`after`);
}

{
    // console.log(`before`);
    setTimeout(() => {
        // console.log(`setTimeout`);
    }, 2000);
    // console.log(`after`);
}

{
    let arr = [1, 2, 3, 4, 5];

    setTimeout((arr1) => {

        arr1.forEach((num, i, arr) => {
            arr[i] = num*2;
        });

        // console.log(arr1);

    }, 1000, arr)

}

{
    let arr1 = ["hi", "hello", 2]
    for (let i = 0; i < arr1.length; i++) {
        setTimeout(() => {
            console.log(arr1[i]);

        }, i*2000)

    }
    console.log(`after`);

}
