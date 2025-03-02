// check odd or even using filter
// ------------------------------------------------------------------------------------------------------------------------------------

const numbers =prompt("numbers").split(" ");
console.log(`numbers : ${numbers}`);

const req = prompt("type odd or even to get odd and even values")

if(req == "odd") {
    const odd = numbers.filter((num) => num%2 !== 0);
    console.log(`odd numbers : ${odd}`);
    
} else if (req == "even") {
    const even = numbers.filter((num) => num%2 === 0);
    console.log(`even numbers : ${even}`);

} else {
    req = prompt("invalid command, please enter odd or even")
}