//* high order function example when returning function in a function
//& ------------------------------------------------------------------

{
    let x = 14;
    let y = 12;

    ((a, b) => {
        return () => {
            console.log(a+b);
            
        }
    })(x, y)();

    // console.log(IIFE());
}


{
    let x = 12;
    let y = 14;

    const IIFE = ((a, b) => {
        return {
            adding: () => console.log(a + b),
            substracting: () => console.log(a - b),
            multiplicating: () => console.log(a * b),
            dividing: () => console.log(a / b),
        }
    })(x, y)

    // IIFE.adding()
    // IIFE.substracting()
    // IIFE.multiplicating()
    // IIFE.dividing()
}