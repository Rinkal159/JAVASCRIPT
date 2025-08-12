//* IIFE(Immediately Invoked Function Expression)
//& ----------------------------------------------


{
    // for (let i = 0; i <= 3; i++) {

    // const print = () => console.log(`hello world! ${i}`);
    // print();

    // (function() {
    //console.log(`hellow world! : ${i}`);

    // })();
    // }
}

// if you want to return something
{
    const IIFE = ((...num) => {
        const sum = num.reduce((acc, value) => acc + value, 0)
        return sum;

    })(23, 45, 56, 78, 100);

    // console.log(IIFE);
}

{
    // const root = 12;
    // const a = root;

    // const IIFE = ((x) => {
    //     return {
    //          value : () => console.log( `Root value : ${root}`),
    //          increment : () => console.log(`Increment : ${++x}`),
    //          decrement : () => console.log(`Decrement : ${--x}`)        
    //     }
    // })(a)

    // IIFE.value()
    // IIFE.increment()
    // IIFE.decrement()
    // IIFE.increment()
    // IIFE.increment()
    // IIFE.increment()
    // IIFE.value() 

}

{
    // let root = 0;
    // let a = root;

    // const returnInfo =  (x) => {
    //     return {
    //         value: () => console.log(`Root value : ${root}`),
    //         increment: () => console.log(`Increment : ${++x}`),
    //         decrement: () => console.log(`Decrement : ${--x}`)
    //     }
    // }

    // const handler = returnInfo(a);
    // handler.value()
    // handler.increment()
    // handler.decrement()
    // handler.value()
}


{
    // let a = 4;

    // const IIFE = ((b) => {
    //     return a+b;
    // })(5)

    // console.log(IIFE);
}



