// add, remove, list, modify,savetoJson (task)

const storeTask: string[] = [];
const addTask = (task : string) => {
 storeTask.push(task.toLowerCase());
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


// testing
addTask("food")
addTask("Viande")
addTask("Ronaldo")
addTask("Messi")
addTask("Mbappé")
printAllTask()
removeTask("MESSI");
printAllTask()
savetoJson()



enum categoryOftask {

}

