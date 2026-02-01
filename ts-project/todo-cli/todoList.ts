import * as fs from "fs";
import { Command } from "commander";
import { Task, UrgencyOfTask, urgencyOfTask } from "../global"

const isCompleted = false;
let nextId = 1; // Increment counter for unique IDs (no collisions)
const storeTask: Task[] = [];

// add task to the list 
const addTask = (task: string, taskUrgency: UrgencyOfTask) => {
  // check for types || empty string
  if (typeof (task) !== "string" || task === " ") {
      throw new Error("Invalid type added " + typeof (task) + task)
  }
  // adds dates created at in string
  const taskCreatedAt = new Date().toISOString();
  // increments id each time a tas is added 
  const currentId = nextId++;
  // pushes task to array
 storeTask.push({id: currentId, name: task, urgency: taskUrgency, isCompleted, taskCreatedAt});
 console.log(`task added:  ${storeTask.length}`)
 saveToJson(); // Auto-save after adding

for (const task of storeTask) {
  console.log(`current task added: ${task.id} ${task.name}, Urgency: (${task.urgency}), Completed?: ${task.isCompleted}, CreatedAt: ${task.taskCreatedAt}`);
}
  return true;
}

const removeTask = (id: number) => {
  // finds given task id index
      const index = storeTask.findIndex(
    (task) => task.id === id
  );
    if (index !== -1) {
        storeTask.splice(index,1);
        saveToJson(); // Auto-save after removing
        return true; // Successfully removed
    }
    return false; // Task not found
}
function displayTask() {
  console.log("Current tasks:");

//   iterate over an array with multiple input
  for (const [index, task] of storeTask.entries()) {
    console.log(`${index + 1}. Id: ${task.id} , Name: ${task.name}, Urgency: ${task.urgency}, Completed?: ${task.isCompleted}, CreatedAt: ${task.taskCreatedAt}`);
  }
  console.log(`Total tasks: ${storeTask.length}`);
}

// Update task by ID
function updateTaskById(id: number, newName: string): boolean {
  const index = storeTask.findIndex((task) => task.id === id);
  if (index === -1) return false;
  storeTask[index].name = newName.toLowerCase();
  saveToJson();
  return true;
}

// Mark task as done by ID
function markTaskDone(id: number): boolean {
  const index = storeTask.findIndex((task) => task.id === id);
  if (index === -1) return false;
  storeTask[index].isCompleted = true;
  saveToJson();
  return true;
}

const outputFilePath: string = 'event_data.json';

// LOAD tasks from file on startup
function loadFromJson() {
  try {
    if (fs.existsSync(outputFilePath)) {
      const data = fs.readFileSync(outputFilePath, 'utf8');
      const loadedTasks: Task[] = JSON.parse(data);
      storeTask.push(...loadedTasks);
      
      // Update nextId to avoid collisions
      if (loadedTasks.length > 0) {
        nextId = Math.max(...loadedTasks.map(t => t.id)) + 1;
      }
      
      console.log(`✓ Loaded ${loadedTasks.length} tasks from ${outputFilePath}`);
    }
  } catch (error) {
    console.error(`Error loading tasks: ${error}`);
  }
}

// SAVE tasks to file (called automatically after each change) - SYNCHRONOUS to ensure saves complete
function saveToJson() {
  try {
    fs.writeFileSync(outputFilePath, JSON.stringify(storeTask, null, 4), 'utf8');
    console.log(`✓ Data saved to ${outputFilePath}`);
  } catch (err) {
    console.error(`Error saving tasks: ${err}`);
  }
}

const program = new Command();

program
  .name('todo')
  .description('A simple CLI task manager')
  .version('1.0.0');

// Load tasks on startup
loadFromJson();

// ADD command
program
  .command('add <name> <urgency>')
  .description('Add a new task')
  .action((name: string, urgency: string) => {
    try {
      if (!Object.values(urgencyOfTask).includes(urgency as UrgencyOfTask)) {
        console.error(`❌ Invalid urgency. Use: Low, Medium, or Urgent`);
        return;
      }
      addTask(name, urgency as UrgencyOfTask);
      console.log(`✅ Task added successfully!`);
    } catch (error) {
      console.error(`❌ Error: ${error}`);
    }
  });

// LIST command
program
  .command('list')
  .description('Show all tasks')
  .action(() => {
    if (storeTask.length === 0) {
      console.log('📭 No tasks yet!');
      return;
    }
    console.log('\n📋 Your Tasks:');
    storeTask.forEach((task) => {
      const status = task.isCompleted ? '✓' : '○';
      console.log(`  ${status} [${task.id}] ${task.name} (${task.urgency})`);
    });
    console.log(`\nTotal: ${storeTask.length}\n`);
  });

// DONE command
program
  .command('done <id>')
  .description('Mark a task as done')
  .action((id: string) => {
    const taskId = parseInt(id);
    if (markTaskDone(taskId)) {
      console.log(`✅ Task ${taskId} marked as done!`);
    } else {
      console.error(`❌ Task ${taskId} not found`);
    }
  });

// REMOVE command
program
  .command('remove <id>')
  .description('Delete a task')
  .action((id: string) => {
    const taskId = parseInt(id);
    if (removeTask(taskId)) {
      console.log(`✅ Task ${taskId} removed!`);
    } else {
      console.error(`❌ Task ${taskId} not found`);
    }
  });

// UPDATE command
program
  .command('update <id> <name>')
  .description('Change task name')
  .action((id: string, name: string) => {
    const taskId = parseInt(id);
    if (updateTaskById(taskId, name)) {
      console.log(`✅ Task ${taskId} updated!`);
    } else {
      console.error(`❌ Task ${taskId} not found`);
    }
  });

// HELP command (built-in)
program.addHelpCommand('help', 'Show help');

program.parse(process.argv); // Use actual task ID instead of random uuid
displayTask()




