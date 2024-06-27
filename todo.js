import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoans = await inquirer.prompt([
        {
            name: "armeen",
            message: "what do you want to add in your todos?",
            type: "input",
        },
        {
            name: "ali",
            message: "do you want to add more?",
            type: "confirm",
            default: "false",
        }
    ]);
    todos.push(todoans.armeen);
    condition = todoans.adddmore;
    console.log(todos);
}
