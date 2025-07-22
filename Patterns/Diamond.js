let n = 4;
for (let i = 1; i <= n; i++) {
    let col = "";
    for (let j = n - 1; j >= i; j--) {
        col += " ";
    }

    for (let j = 1; j <= i; j++) {
        col += "*";
    }

    for (let j = 2; j <= i; j++) {
        col += "*";
    }
    console.log(col);

}
for (let i = n - 1; i >= 1; i--) {
    let col = "";
    for (let j = n - 1; j >= i; j--) {
        col += " ";
    }

    for (let j = 1; j <= i; j++) {
        col += "*";
    }

    for (let j = 2; j <= i; j++) {
        col += "*";
    }
    console.log(col);

}