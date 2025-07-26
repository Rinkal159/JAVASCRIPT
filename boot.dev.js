//* BOOT.DEV QUESTIONS
//& -------------------

let campaign = [
    {
        camp: "hello",
        name: "rinkal"
    },
    {
        camp: "hi",
        name: "krina"
    },
    {
        camp: "namaste",
        name: "pinki"
    },
    {
        camp: "hola",
        name: "shilpa"
    }
];

campaign.forEach((campa) => {
    campa.id = campa.camp + "-" + campa.name
})

// console.log(campaign);

//& ------------------------------------------------------------------------------------------------

function formatter(a, b) {
    return a+b
}
function reformat(msg, callback) {
    const first = callback(msg, ".");
    const second = callback(first, ".");
    const third = callback(second, ".");
    return `TEXTIO: ${third}`;
}
// console.log(reformat("hello", formatter));

//& ------------------------------------------------------------------------------------------------

function createContact(phoneNumber, name = "Anonymous", avatar = "default.jpg") {
    if (phoneNumber == null) {
        return "invalid phone number"
    } else {
        avatar = "/public/pictures/" + avatar;
    }
    return `Contact saved! Name: ${name}, Phone number: ${phoneNumber}, Avatar: ${avatar}`

}

// console.log(createContact());


