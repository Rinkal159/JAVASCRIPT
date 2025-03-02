// finding current age
// ---------------------------------------------------------------------------------------------

const bornDate = new Date(2007, 1, 1);
const todayDate = new Date();

let age = todayDate.getFullYear() - bornDate.getFullYear();

const monthDiff = todayDate.getMonth() - bornDate.getMonth();
const dateDiff = todayDate.getDate() - bornDate.getDate();


if (monthDiff < 0 || ( monthDiff===0 && dateDiff < 0)) {
    age--;
}

console.log(`age : ${age}`);