## **Task Manager CLI App**

A simple **command-line application** to manage tasks, written in **Node.js**. This tool allows you to **add, update, list, complete, and delete tasks** easily.

---

### **Features**
- Add new tasks.
- Update existing tasks.
- Mark tasks as completed.
- List all tasks with their statuses.
- Delete tasks by index.

---

### **Installation**
1. Clone the repository:
   ```bash
   git clone git@github.com:Maniteja0126/node-todo-cli.git
   cd node-todo-cli
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

---

### **Usage**
Use the following commands to interact with the task manager:

#### **1. Add a New Task**
```bash
node src/index.mjs add
```
- **Description**: Adds a new task to your to-do list.
- **Example**:
  ```
  Enter a new task: Go to the gym
  Task added successfully!
  ```

#### **2. Update an Existing Task**
```bash
node src/index.mjs update <index>
```
- **Description**: Updates the description of an existing task.
- **Example**:
  ```bash
  node src/index.mjs update 1
  Enter the updated task description: Go for a run
  Task updated successfully!
  ```

#### **3. Mark a Task as Completed**
```bash
node src/index.mjs complete <index>
```
- **Description**: Marks the task at the given index as completed.
- **Example**:
  ```bash
  node src/index.mjs complete 2
  Task marked as completed!
  ```

#### **4. List All Tasks**
```bash
node src/index.mjs list
```
- **Description**: Lists all tasks with their status (Pending/Done).
- **Example Output**:
  ```
  Tasks:
  1. Go to the gym [Pending]
  2. Read a book [Done]
  ```

#### **5. Delete a Task**
```bash
node src/index.mjs delete <index>
```
- **Description**: Deletes the task at the given index.
- **Example**:
  ```bash
  node src/index.mjs delete 1
  Task deleted successfully!
  ```

---

### **Project Structure**
```
.
├── src/
│   └── index.mjs      # Main CLI application
├── tasks.json         # JSON file to store tasks
├── package.json       # Project dependencies and scripts
└── README.md          # Documentation
```

---

### **Summary**
This CLI application makes it easy to manage your tasks directly from the command line. You can add tasks, update them, mark them as completed, view the task list, and delete tasks—all with simple commands. Happy coding! 🎉