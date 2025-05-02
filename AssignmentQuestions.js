// ASSIGNMENT QUESTIONS
// --------------------------------------------------------------------------------------------------------------------------------------

{
    const max = 3;
    const min = 1;

    let random = Math.floor(Math.random() * (max - min + 1) + min);

    function colorChecker() {
        if (random === 1) {
            console.log(`\"RED\" means \"STOP\"`);

        } else if (random === 2) {
            console.log(`\"GREEN\" means \"GO\"`);

        } else {
            console.log(`\"YELLOW\" means \"SLOW DOWN\"`);

        }
    }

    // colorChecker()/;

}

{
    // let size = prompt("The size of the popcorn").toLowerCase();

    // if (size == "s") {
    //     console.log(`price for popcorn is 100`);

    // } else if (size == "m") {
    //     console.log(`price for popcorn is 200`);

    // } else if (size == "l") {
    //     console.log(`price for popcorn is 300`);

    // } else if (size == "xl") {
    //     console.log(`price for popcorn is 400`);

    // }
}
{
    function chewckReminder(a, b) {
        if (a % 10 == b % 10) {
            console.log("have same last digit");

        } else {
            console.log("have different last digits");

        }
    }
    // chewckReminder(33, 63);
}

{
    let str = "";
    if (str) {
        // console.log("non-empty string");

    } else {
        // console.log("empty string");

    }
}
{
    let a;
    console.log(a);
    a = 13;
    
}


{
    const str = "412";
    const conversion = Boolean(str);

    if (conversion == false) {
        // console.log(`string is empty`);
    } else {
        // console.log(`string is not empty`);
    }

}


{
    const str = "Hello";
    const lowerCase = str.toLowerCase();

    if (str.charAt(0) === lowerCase.charAt(0)) {
        // console.log(`true`);

    } else {
        // console.log(`false`);

    }

}

{
    const num = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

    // for of loop

    for (num2 of num) {
        for (num3 of num2) {
            // console.log(num3);
        }
    }

}


{
    let num = 12345;
    let count = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    // console.log(count);
}

{
    let num = 287152;
    let reminder = 0;


    while (num > 0) {
        reminder += num % 10;
        num = Math.floor(num / 10);
    }
    // console.log(reminder);
}

{
    let num = 7;
    let fact = 1;

    for (let i = num; i >= 2; i--) {
        fact *= i;
    }
    // console.log(fact);
}

{
    let arr = [10, 1, 8, 6, 7, 44, 19];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (max < arr[i]) {

            let temp = max;
            max = arr[i];
            arr[i] = temp;
        }
    }
    // console.log(max);
}

{
    const arr = [1, 2, 3];
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    // console.log(arr);
}

{
    let a = 12;
    let b = 13;

    [a, b] = [b, a];

    // console.log(a);
    // console.log(b);
}


{
    const arr = [2, 4, 6, 24, 35, 10, 9];
    const num = 5;

    const largerThanNum = arr.filter((value) => value > num);
    // console.log(largerThanNum);


}

{
    let str = "abcgfdaagf";
    str = str.split("");

    const duplicate = str.reduce((acc, value) => {
        if (!acc.includes(value)) {
            acc.push(value);
        }
        return acc;
    }, []);

    // console.log(duplicate.join(""));

}

{
    let arr = ["india", "china", "usa", "afghanistan", "united states of america", "papua new guinee"];

    let maxLength = arr.reduce((acc, value) => ((value.length > acc.length) ? value : acc), arr[0])
    // console.log(maxLength);

}

{
    let sentence = "apnacollege";
    sentence = sentence.split("");

    let countVowels = sentence.reduce((acc, value) => {
        if (value === "i" || value === "o" || value === "u" || value === "a" || value === "e") {
            acc++;
        }
        return acc;
    }, 0)

    // console.log(countVowels);

}

{
    const min = 10;
    const max = 20;

    const number = Math.floor(Math.random() * ((max - min) + 1) + min);
    // console.log(number);

}
