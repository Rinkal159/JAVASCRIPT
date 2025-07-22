//* IIFE(Immediately Invoked Function Expression)
//& ----------------------------------------------


{
    let a = 12;
    function sum(a, b) {
        return a+b;
    }
    
    module.exports = {sum, a};
}



{
    // for (let i = 0; i <= 3; i++) {

    // const print = () => console.log(`hello world! ${i}`);
    // print();

    // (function() {
    //console.log(`hellow world! : ${i}`);

    // })();
    // }
}


{
    // let a = 12;
    // let b = 12;

    // function sum(x, y) {
    //     return x + y;
    // }

    // module.exports = {
    //     a, b, sum
    // }
    
}
{
    // const a = 12;
    // const b = 14;
    // const IIFE = ((...num) => {
    //     const sum = num.reduce((acc, value) => acc + value, 0)
    //     return sum;


    // })(23, 45, 56, 78, 100);

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
    // })( 5)

    // console.log(IIFE);
}



