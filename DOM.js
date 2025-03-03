function popTheText(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    document.getElementById("greet").innerHTML = "hello, " + username;
}
// function preventSubmit(event) {
//     event.preventDefault();

//     function printMSG() {
//         let username = document.getElementById("username").value;
//         document.getElementById("greet").innerHTML = "<b>hello</b> " + username + "!";
//     }
//     printMSG()
// }
// let newElement = document.createElement("a");
// newElement.innerHTML = "google";
// newElement.setAttribute("href", "https://www.google.com");
// newElement.setAttribute("target", "_blank");
// document.body.appendChild(newElement);





// function chnagecolor() {
//     let ele = document.getElementById("target");
//     ele.classList.toggle("textinterchange");
//     ele.classList.toggle("text");

// }





// let list = document.getElementsByTagName("li")
// let alllist = document.querySelectorAll("Li")
