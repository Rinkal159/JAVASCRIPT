function createButton(event) {
    event.preventDefault();

    const btn = document.querySelector("#calculate");
    const bmi = document.createElement("p")
    bmi.classList.add("newelement")

    const weight = document.querySelector("#weight").value
    const height = document.querySelector("#height").value

    const result = (weight / ((height * height)/1000)).toFixed(2);

    if (height === '' || height <= 0 || isNaN(height)) {
        bmi.appendChild(document.createTextNode(`height is not valid : ${height} , kindly provide valid height`))
        bmi.appendChild(document.createElement("br"))
    }
    if (weight === '' || weight <= 0 || isNaN(weight)) {
        bmi.appendChild(document.createTextNode(`weight is not valid : ${weight} , kindly provide valid weight`))
    }

    bmi.appendChild(document.createTextNode(`BMI : ${result}`))
    bmi.appendChild(document.createElement("br"))

    const underweight = result < 18.6;
    const normalweight = result < 24.9 && result>18.6;
    const overweight = result > 24.9;
    
    if (underweight) {
        bmi.appendChild(document.createTextNode(`you're underweight`))
    } else if(normalweight) {
        bmi.appendChild(document.createTextNode(`you have normal weight`))
    } else if(overweight) {
        bmi.appendChild(document.createTextNode(`you're overweight`))
    }


    const exist = btn.querySelector(".newelement")
    console.log(exist);

    if (exist) {
        btn.removeChild(exist)
    }

    btn.appendChild(bmi)
}