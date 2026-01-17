export type Task = {
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
