//* CALL BACK
//& ---------

{
    let a = 12;
    let b = 14;
    function calculator(x, y, callback) {
        // console.log(`here a is ${x}, and b is ${y}`);
        // console.log(`the result : ${callback(x, y)}`);

    }

    function adding(x, y) {
        return x + y;
    }
    function substracting(x, y) {
        return x - y;
    }
    function multiplicating(x, y) {
        return x * y;
    }
    function dividing(x, y) {
        return x / y;
    }

    calculator(a, b, adding)
    calculator(a, b, substracting)
    calculator(a, b, multiplicating)
    calculator(a, b, dividing)
}