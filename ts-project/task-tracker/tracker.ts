import * as readline from 'readline';
import { Task, status, isCompleted, currentId } from '../global';

const trackTask: Task[] = [];
const binTask: Task[] = [];
const addTask = (task: string, taskStatus: status = status.IN_PROGRESS) => {
  if (typeof task !== 'string' || task == ' ') {
    throw new Error('Invalid type added ' + typeof task + task);
  }
  const taskCreatedAt = new Date().toISOString();
  // increments id each time a tas is added
  trackTask.push({ id: currentId, name: task, taskStatus: taskStatus, isCompleted, taskCreatedAt });
  console.log('Task Added: ', {
    id: currentId,
    name: task,
    taskStatus: taskStatus,
    isCompleted,
    taskCreatedAt,
  });
};



const removeTask = (taskId: number) => {
    const findIndex = trackTask.findIndex((task) => task.id = taskId);
    if (findIndex !== -1) {
        trackTask.slice(findIndex, currentId) 
        console.log(`Task removed out of list:  ${findIndex}`)
    }
    
}

const readl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function askForTask() {
    readl.question('Add your task ): ', (value: string) => {
     if (value.toLowerCase() === "done") {
      console.log("All tasks saved. Goodbye!");
      readl.close();
      return;
    }
         addTask(value);
    console.log(`${value} is added to your task tracker.`);

    askForTask(); 
    });
}


function askForRemove() {
    readl.question('which task do you want to remove?): ', (value: string) => {
     if (value.toLowerCase() === "done") {
      console.log("All tasks saved. Goodbye!");
      readl.close();
      return;
    }
         addTask(value);
    console.log(`${value} is added to your task tracker.`);

    askForTask(); 
    });
}

askForTask()


//         readl.question("Write the name of your task", (task: string) => {
     
// }) 


// npx ts-node ts-project/task-tracker/tracker.ts
