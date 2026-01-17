"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// add, remove, list, modify,savetoJson (task)
var fs = require("fs");
var storeTask = [];
var addTask = function (task, taskUrgency) {
    if (typeof (task) !== "string") {
        throw new Error("Invalid type added " + typeof (task));
    }
    storeTask.push(task.toLowerCase(), taskUrgency);
    console.log("task added:  ".concat(storeTask.length));
    for (var i in storeTask) {
        console.log("current task added: ".concat(storeTask[i]));
    }
};
var removeTask = function (task) {
    var index = storeTask.indexOf(task.toLowerCase());
    if (index > -1) {
        storeTask.splice(index, 1);
        return true; // Successfully removed
    }
    return false; // Task not found
};
function printAllTask() {
    console.log("Current tasks:");
    for (var i in storeTask) {
        console.log("".concat(parseInt(i) + 1, ". ").concat(storeTask[i]));
    }
    console.log("Total tasks: ".concat(storeTask.length));
}
function modifyTask(currTask, NewTask) {
    // checking currTask index 
    var index = storeTask.indexOf(currTask.toLowerCase());
    //  checking if it exist then changing to new value + returning true 
    if (index !== -1) {
        storeTask[index] = NewTask.toLowerCase();
        return true;
    }
    return false;
}
function savetoJson() {
    var outputFilePath = 'event_data.json';
    fs.writeFile(outputFilePath, JSON.stringify(storeTask, null, 4), 'utf8', function () {
        console.log("Data written to ".concat(outputFilePath, " as JSON."));
    });
}
var urgencyOftask;
(function (urgencyOftask) {
    urgencyOftask["Low"] = "Low";
    urgencyOftask["Medium"] = "Medium";
    urgencyOftask["Urgent"] = "Urgent";
})(urgencyOftask || (urgencyOftask = {}));
// testing
addTask("food", urgencyOftask.Medium);
printAllTask();
modifyTask("Ronaldo", "r9");
printAllTask();
savetoJson();
var categoryOftask;
(function (categoryOftask) {
})(categoryOftask || (categoryOftask = {}));
