// add, remove, list, modify,savetoJson (task)
import * as fs from "fs";

type Task = [
   string, UrgencyOfTask
]
const storeTask: Task[] = [];


const addTask = (task : string,  taskUrgency: UrgencyOfTask ) => {
    if(typeof(task) !== "string"){
        throw new Error("Invalid type added " + typeof(task) )
    }
 storeTask.push([task, taskUrgency]);
 console.log(`task added:  ${storeTask.length}`)

for (const task of storeTask) {
  console.log(`current task added: ${task[0]}, Urgency: (${task[1]})`);
}
}

const removeTask = (task: string) => {
      const index = storeTask.findIndex(
    ([taskName]) => taskName === task
  );
    if (index !== -1) {
        storeTask.splice(index,1);
        return true; // Successfully removed
    }
    return false; // Task not found
}
function printAllTask() {
  console.log("Current tasks:");

  for (const [index, [task, urgency]] of storeTask.entries()) {
    console.log(`${index + 1}. ${task}, Urgency: ${urgency}`);
  }

  console.log(`Total tasks: ${storeTask.length}`);
}


// function modifyTask(currTask:string, NewTask:string ) {
//     // checking currTask index 
//  const index = storeTask.indexOf(currTask.toLowerCase())
// //  checking if it exist then changing to new value + returning true 
//  if (index !== -1){
//     storeTask[index] = NewTask.toLowerCase();
//     return true;
//  }
// return false
// }



function savetoJson() {

const outputFilePath: string = 'event_data.json';

fs.writeFile(outputFilePath, JSON.stringify(storeTask, null, 4), 'utf8', () => {
  console.log(`Data written to ${outputFilePath} as JSON.`);
});
}
export const  urgencyOfTask = {
    Low :"Low",
    Medium : "Medium",
    Urgent : "Urgent"
} as const;


export type UrgencyOfTask =
  typeof urgencyOfTask[keyof typeof urgencyOfTask];
// testing
addTask("food", urgencyOfTask.Medium)
addTask("ronaldo", urgencyOfTask.Medium)
printAllTask()
// modifyTask("Ronaldo", "r9")
removeTask("food")
printAllTask()
savetoJson()




