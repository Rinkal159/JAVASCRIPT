// TO-DO 
// ------------------------------------------------------------------------------------------------------------------

let todo = prompt("Task/Tasks : ");
todo = todo.split(" ");

const oglist = [...todo];

let req = prompt(" type list/ add/ remove or oglist to perform respected operations");

while (true) {
    if (req == "quit") {
        console.log(`the app is closing`);
        break;

    }

    if (req == "list") {
        console.log(`The list : ${todo.join(", ")}`);
        console.log();

        req = prompt("Type list/ add/ remove/ oglist or quit:");

    }

    else if (req == "add") {

        let addTask = prompt("Task/Tasks you want to add : ");
        addTask = addTask.split(" ")

        console.log(`tasks you want to add : ${addTask.join(", ")}`);

        addTask.forEach((task) => {
            if (todo.includes(task)) {
                console.log(`the task : "${task}" you want to add is already in the list.`);
            } else {
                todo.push(task);
            }
        })

        console.log(`updated list after adding tasks : ${todo.join(", ")}`);
        console.log();

        req = prompt("Type list/ add/ remove/ oglist or quit:");


    }

    else if (req == "remove") {

        let deleteTask = prompt("Task/Tasks you want to delete : ");
        deleteTask = deleteTask.split(" ")

        console.log(`the tasks you want to delet : ${deleteTask.join(", ")} `);

        deleteTask.forEach((task) => {
            if (!todo.includes(task)) {
                console.log(`the task : "${task}" you want to delete is not in the list.`);
            }
        })

        todo = todo.filter(task => !deleteTask.includes(task));
        console.log(`updated list : ${todo.join(", ")}`);
        console.log();

        req = prompt("Type list/ add/ remove/ oglist or quit:");


    }

    else if (req == "oglist") {
        console.log(`The original list : ${oglist.join(", ")}`);

        req = prompt("Type list/ add/ remove/ oglist or quit:");

    }

    else {
        req = prompt(`Invalid command, please Type list/ add/ remove/ oglist or quit:`);
    }

}
