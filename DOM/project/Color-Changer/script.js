const boxes = document.querySelectorAll(".div");

boxes.forEach((box) => {
    box.addEventListener("click", function () {
        let color = this.id;
        console.log(color);

        document.body.style.backgroundColor = color;

        boxes.forEach((b) => {
            b.style.backgroundColor = "#fff";
        });

        this.style.backgroundColor = color;
    })
}) 