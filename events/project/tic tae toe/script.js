const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
    const newele = document.createElement("h1");
    newele.innerText = "O";
    newele.classList.add("ele")

    if(event.currentTarget.querySelector("h1")) {
        return;
    }
    event.target.appendChild(newele);
})