// SCOPE
// -------------------------------------------------------------------------------------------------------------------------------------

{
    const a = 13;
    const b = 14;

    // here a and b are cousins

    function sum() {
        const a = 15;
        const b = 17;

        // here a and b are siblings, why we take that cousins when we have our own siblings.
        return a + b;
    }

    // console.log(a);

    // console.log(sum());
}

{
    const a = 10;
    const b = 11;

    function outer() {
        const a = 12;
        // const b = 13;

        // console.log(`outer sum : ${a + b}`);

        function inner() {
            const a = 10;

            return a * b;
        }

        // console.log(`unner multipky : ${inner()}`);
    }

    // console.log(a + b);

    outer();
}

{
    var localVar = "i am global"

    function localExample() {
        var localVar = "I am local!";
        // console.log(localVar); // ✅ Accessible inside
    }

    localExample();
    //   console.log(localVar); // ❌ Error: localVar is not defined
}

{
    // understanding of scope and order of execution
    let globalVar = "I'm global";

    function outside() {

        function inside() {
            let globalVar = "I'm local in bar";
            // console.log(`inside : ${globalVar}`);

            function inInInside() {
                let globalVar = "im very local";
                // console.log(`in in inside : ${globalVar}`);

            }

            inInInside();
        }

        inside();

        // console.log(`outside : ${globalVar}`);

    }

    outside();
}

{
    function outer() {
        let count = 0;

        return function inner() {
            count++;
            // console.log(count);

        }
    }

    const counter = outer();
    counter();
    counter();
    counter();
    counter();
    counter();
}



{
    function outer() {

        let arr = [1, 2, 3, 4, 5];

        return function inner() {
            const sum = arr.reduce((acc, value) => acc + value, 0);
            // console.log(`sum is ${sum}`);

            function inInInner() {
                const multy = arr.reduce((acc, value) => acc * value, 1)
                return multy;
            }

            // console.log(`product is ${inInInner()}`);

        }
    }

    outer()();
}

{
    function outer() {
        function inner() {
            // console.log(x);
            // console.log(y);

        }
        let x = 3;
        let y = 4;

        inner();
    }

    outer()
}