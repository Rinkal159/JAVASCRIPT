// with this

// const boxes = document.querySelectorAll(".div");

// boxes.forEach((box) => {
//     box.addEventListener("click", function () {
//         let color = this.id;
//         console.log(color);

//         document.body.style.backgroundColor = color;

//         boxes.forEach((b) => {
//             b.style.backgroundColor = "#fff";
//         });

//         this.style.backgroundColor = color;
//     })
// }) 





// with target

const box = document.querySelectorAll(".div");

document.querySelector(".box").addEventListener("click", function (event) {
    let color = event.target.id;

    document.body.style.backgroundColor = color;

    box.forEach((b) => {
        b.style.backgroundColor = "#fff";
    });

    event.target.style.backgroundColor = color;
})
