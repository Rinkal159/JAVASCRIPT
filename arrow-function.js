// ARROW FUNCTION
// --------------------------------------------------------------------------------------------------------------------------------------

{
  // const print = () => console.log(`print`);

  // print();
}

{
  // prompt with arrow function

  // let num = prompt("The numbers you want to sum");
  // num = num.split(" ");

  // const average = (input) => {
  //   const reduceVar = input.reduce((acc, value, index, arr) => {

  //     acc += Number(value);
  //     const av = acc / arr.length;
  //     return index === arr.length - 1 ? av.toFixed(2) : acc;
  //   }, 0);

  //   return reduceVar;

  //   // console.log(average(num));

  //   const sum = (input) => {
  //     const reduceVar = input.reduce((acc, value) => acc + Number(value), 0);

  //     return reduceVar;
  //   }

  //   // console.log(sum(num));
  // }
}


{
  const obj = {
    username: "rinkal",
    age: 17,

    printInfo: function ({ username, age }) {
      // console.log(`${username}'s age is ${age}`);

    },

    printObj: function () {
      console.log(this)

    }

  }

  obj.printObj()
  obj.age = 18;
  obj.printObj()
  // obj.printInfo(obj)

}

{

  const demo2 = () => {
    const a = 13;
    // console.log(this);

  }
  demo2()
}

{
  const obj = {
    username: "rinkal159",

    name: {
      fname: "rinkal",
      lname: "singapuri"
    },

    age: 18,

    printInfo : function({name : {fname, lname}}) {
        console.log(`first name is ${fname} and last name is ${lname}`);

    }

    // printInfo: ({ username, name: { fname } }) => {
    //   console.log(`usename is ${username} and fname is ${fname}`);

    // }
  }

  obj.printInfo(obj);
}