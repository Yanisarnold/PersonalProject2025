// add, remove, list, modify,savetoJson (task)
import fs from 'fs';
const storeTask: string[] = [];



const addTask = (task : string,  taskUrgency: urgencyOftask ) => {
    if(typeof(task) !== "string"){
        throw new Error("Invalid type added " + typeof(task) )
    }
 storeTask.push(task.toLowerCase(),taskUrgency);
 console.log(`task added:  ${storeTask.length}`)

 for (let i in storeTask) {
    console.log(`current task added: ${storeTask[i]}`)
 }
}

const removeTask = (task: string) => {
    const index = storeTask.indexOf(task.toLowerCase());
    if (index > -1) {
        storeTask.splice(index,1);
        return true; // Successfully removed
    }
    return false; // Task not found
}
function printAllTask() {
    console.log("Current tasks:");
    for (let i in storeTask){
        console.log(`${parseInt(i) + 1}. ${storeTask[i]}`);
    }
    console.log(`Total tasks: ${storeTask.length}`);
}


function modifyTask(currTask:string, NewTask:string ) {
    // checking currTask index 
 const index = storeTask.indexOf(currTask.toLowerCase())
//  checking if it exist then changing to new value + returning true 
 if (index !== -1){
    storeTask[index] = NewTask.toLowerCase();
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

enum urgencyOftask {
    Low = "Low",
    Medium = "Medium",
    Urgent = "Urgent"
}

// testing
addTask("food", urgencyOftask.Medium)
// addTask("Viande")
// addTask("Ronaldo")
// addTask("Messi")
// addTask("Mbappé")
printAllTask()
modifyTask("Ronaldo", "r9")
printAllTask()
savetoJson()



enum categoryOftask {

}

