// add, remove, list, modify,savetoJson (task)

import * as fs from "fs";

let nextId = 1; // Increment counter for unique IDs (no collisions)
const isCompleted = false;
// type of task the array can store
type Task = {
 id: number,
 name:string, 
 urgency: UrgencyOfTask,
 isCompleted: boolean,
 taskCreatedAt: string
}

export type UrgencyOfTask =
  typeof urgencyOfTask[keyof typeof urgencyOfTask];
export const  urgencyOfTask = {

    Low :"Low",
    Medium : "Medium",
    Urgent : "Urgent"
} as const;

const storeTask: Task[] = [];

const addTask = (task : string,  taskUrgency: UrgencyOfTask ) => {
    if(typeof(task) !== "string"){
        throw new Error("Invalid type added " + typeof(task) )
    }
 const taskCreatedAt = new Date().toISOString();
 const currentId = nextId++;
 storeTask.push({id: currentId, name: task, urgency: taskUrgency, isCompleted, taskCreatedAt});
 console.log(`task added:  ${storeTask.length}`)

for (const task of storeTask) {
  console.log(`current task added: ${task.id} ${task.name}, Urgency: (${task.urgency}), Completed?: ${task.isCompleted}, CreatedAt: ${task.taskCreatedAt}`);
}
}

const removeTask = (uuid: number) => {
      const index = storeTask.findIndex(
    (task) => task.id === uuid
  );
    if (index !== -1) {
        storeTask.splice(index,1);
        return true; // Successfully removed
    }
    return false; // Task not found
}
function printAllTask() {
  console.log("Current tasks:");

//   iterate over an array with multiple input
  for (const [index, task] of storeTask.entries()) {
    console.log(`${index + 1}. Id: ${task.id} , Name: ${task.name}, Urgency: ${task.urgency}, Completed?: ${task.isCompleted}, CreatedAt: ${task.taskCreatedAt}`);
  }

  console.log(`Total tasks: ${storeTask.length}`);
}

function modifyTask(currTask:string, NewTask:string, isCompleted?:boolean,) : boolean {
    // checking currTask index 
 const index = storeTask.findIndex(
    (taskName) => taskName.name === currTask)
//  checking if it exist then changing to new value + returning true
if(index === -1) return false;
storeTask[index].name = NewTask.toLowerCase();

 if (isCompleted !== undefined){
    storeTask[index].isCompleted = isCompleted;
    return true;
 }
return false
}

function savetoJson() {
const outputFilePath: string = 'event_data.json';
fs.writeFile(outputFilePath, JSON.stringify(storeTask, null, 4), 'utf8', () => {
  console.log(`Data written to ${outputFilePath} as JSON.`);
});
}

// testing
addTask("food", urgencyOfTask.Medium)
addTask("ronaldo", urgencyOfTask.Urgent)
addTask("aldo", urgencyOfTask.Urgent)
printAllTask()
modifyTask("ronaldo", "r9", true)
removeTask(1) // Use actual task ID instead of random uuid
printAllTask()
savetoJson()




