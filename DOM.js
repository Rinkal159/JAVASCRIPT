function popTheText(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    document.getElementById("greet").innerHTML = "hello, " + username;
}