const height = document.getElementById("height")
const weight = document.getElementById("weight")
const submit = document.getElementById("submit")

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const bmi = weight.value / (height.value * height.value);
    const showbmi = document.createElement("h2");
    showbmi.innerText = "BMI : " + bmi.toFixed(2);
    showbmi.style.paddingBottom = "10px"

    form.appendChild(showbmi);

    const filter = document.createElement("h3");

    if (bmi < 18.6) {
        filter.innerText = "Under-Weight"
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        filter.innerText = "Normal-Weight"
    } else {
        filter.innerText = "Over-Weight"
    }

    form.appendChild(filter);

    // if(showbmi) {
    //     form.removeChild(showbmi)
    // }
})


