const box = document.querySelector('#box');

    setInterval(() => {
        let time = new Date().toTimeString();
        box.innerText = time;
    }, 1000);
