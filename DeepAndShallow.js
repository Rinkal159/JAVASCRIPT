const obj = {
    name: "rinkal",
    age: 18,
    nested: {
        domain: "tech"
    },
    intro: function ({ name, age }) {
        return `${name} is ${age} years old.`;
    }
};

// shallow copy
const obj2 = obj;
obj2.name = "unknown";

console.log(obj2);

const { name } = obj;
console.log(Object.entries(obj.nested));
console.log(obj.intro(obj));


{   //DEEP COPY
    let a = 'a';
    let b = a;

    b = 'c';
    console.log(b);
    console.log(a);
}

{   //SHALLOW COPY (if not used spread, but here spread makes copy of arr and then assigned that to arr2)
    let obj = {
        name: "rinkal",
        ae: 18,
        address: {
            state: "gujarat",
            city: "bharuch"
        },
        domain: {
            degree: "bca",
            duration: 3
        }
    }

    let obj2 = {
        ...obj,
        address: { ...obj.address },
        domain : {...obj.domain}
    };
    obj2.address.state = "up";
    obj2.domain.degree = "BTech";


    console.log(obj2);
    console.log(obj);


}






