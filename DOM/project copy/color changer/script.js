const boxes = document.querySelectorAll(".box")

boxes.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
        console.log(e.target.id);
        e.target.style.backgroundColor = e.target.id;
    })
    box.addEventListener("mouseout", (e) => {
        console.log(e.target.id);
        e.target.style.backgroundColor = "white";
    })
    box.addEventListener("click", (e) => {
        console.log(e.target.id);
        document.body.style.backgroundColor = e.target.id;
        e.target.style.backgroundColor = e.target.id;
    })
})