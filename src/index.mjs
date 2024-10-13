import { Command } from "commander";
import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs";

const file_path = "./tasks.json";

const loadTasks = () => {
  try {
    if (!fs.existsSync(file_path)) return [];
    const data = fs.readFileSync(file_path, "utf-8");
    return JSON.parse(data) || [];
  } catch (error) {
    console.error(
      chalk.red("Failed to load tasks. Initializing with an empty list.")
    );
    return [];
  }
};

const saveTask = (tasks) => {
  fs.writeFileSync(file_path, JSON.stringify(tasks, null, 2));
};

const program = new Command();

program
  .command("add")
  .description("Add a new Task")
  .action(async () => {
    const { task } = await inquirer.prompt({
      type: "input",
      name: "task",
      message: "Enter a new task",
    });
    const tasks = loadTasks();
    tasks.push({ task, completed: false });
    saveTask(tasks);
    console.log(chalk.green("Task added successfully!"));
  });

  program
  .command("update <index>")
  .description("Update an existing task")
  .action(async (index) => {
    const tasks = loadTasks();
    if (index < 1 || index > tasks.length) {
      console.log(chalk.red("Invalid task number!"));
      return;
    }

    const { newTask } = await inquirer.prompt({
      type: "input",
      name: "newTask",
      message: "Enter the updated task description:",
    });

    tasks[index - 1].task = newTask;
    saveTask(tasks);
    console.log(chalk.green("Task updated successfully!"));
  });

program
  .command("complete <index>")
  .description("Mark a task as completed")
  .action(async (index) => {
    const tasks = loadTasks();
    if (index < 1 || index > tasks.length) {
      console.log(chalk.red("Invalid index"));
      return;
    }
    tasks[index - 1].completed = true;
    saveTask(tasks);
    console.log(chalk.green("Task marked as completed!"));
  });

program
  .command("list")
  .description("show all tasks")
  .action(async () => {
    const tasks = loadTasks();
    console.log(chalk.blue("Tasks:"));
    tasks.forEach((task, index) => {
      const status = task.completed
        ? chalk.green("[Done]")
        : chalk.red("[Pending]");
      console.log(`${index + 1}. ${task.task} ${status}`);
    });
  });

program
  .command("delete <index>")
  .description("Delete a task")
  .action(async (index) => {
    const tasks = loadTasks();
    if (index < 1 || index > tasks.length) {
      console.log(chalk.red("Invalid task number!"));
      return;
    }
    tasks.splice(index - 1, 1);
    saveTask(tasks);
    console.log(chalk.green("Task deleted successfully!"));
  });

program.parse(process.argv);
