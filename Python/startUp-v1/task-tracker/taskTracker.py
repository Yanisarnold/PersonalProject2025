# Each task should have the following properties:

# id: A unique identifier for the task
# description: A short description of the task
# status: The status of the task (todo, in-progress, done)
# createdAt: The date and time when the task was created
# updatedAt: The date and time when the task was last updated

# # Adding a new task
# task-cli add "Buy groceries"
# # Output: Task added successfully (ID: 1)

# # Updating and deleting tasks
# task-cli update 1 "Buy groceries and cook dinner"
# task-cli delete 1

# # Marking a task as in progress or done
# task-cli mark-in-progress 1
# task-cli mark-done 1

# # Listing all tasks
# task-cli list

# # Listing tasks by status
# task-cli list done
# task-cli list todo
# task-cli list in-progress

# List all tasks that are done
# List all tasks that are not done
# List all tasks that are in progress

import datetime

tasks = []
task_id_counter = 1

def add_Task (title) :
  print("Adding a new task")
  date =  datetime.datetime.now()
  print(date)
  global task_id_counter
  task = {"id": task_id_counter, "title": title,"createdAt":  date.strftime("%Y-%m-%d %H:%M:%S"), "status": "TODO"}
  tasks.append(task)
  task_id_counter += 1
  print(f"Task added successfully (ID : {task['id']})")

def update_task(task_id, title ) :
  global tasks
  for task in tasks:
        if task['id'] == task_id:
            print(f"Current Title: {task['title']}")
            task['title'] = title  # Update the title
            print(f"Updated Title: {task['title']}")
            print(f"Task {task_id} updated successfully.")
            return
    # If no task is found with the given ID
  print(f"Error: Task with ID {task_id} not found.")
  
def mark_task(task_mark, task_id):
    """Updates the status of a task by its ID."""
    global tasks
    valid_statuses = {"in-progress", "done"}  # Valid statuses to set
    if task_mark not in valid_statuses:
        print(f"Error: '{task_mark}' is not a valid status. Use 'in-progress' or 'done'.")
        return
    for task in tasks:
        if task['id'] == task_id:
            task['status'] = task_mark  # Update the status
            print(f"Task {task_id} marked as '{task_mark}'.")
            return
    
    print(f"Error: Task with ID {task_id} not found.")  # Task not 
    
def listTaskByStatus(status):
   filtered_tasks = [task for task in tasks if task['status'] == status]
   if not filtered_tasks:
       print(f"No tasks with status '{status}' found.")
       return

   for task in filtered_tasks:
       print(f"ID: {task['id']}, Title: {task['title']}, Status: {task['status']}")
   
def list_Task () : 
    if not tasks :
     print("No tasks available")  
     return

    print(f"{'ID':<4} {'createdAt':<12} {'title':<15} {'status':>8}")  # Header with proper spacing
    print("-" * 40)  # Separator line
    for task in tasks:
      print(f" {task['id']:<4} {task['createdAt']:<12} {task['title']:<15} {task['status']:>8}")


def delete_task (task_id) : 
   global tasks 
   for task in tasks:
    if task['id'] == task_id: 
      tasks.remove(task)
      print(f"Task {task_id} deleted successfully.")
      return 
   print(f"Error: Task with ID {task_id} not found.") 

listOfTasks = ["hello", "Do Dishes", "Do library"]
for task in listOfTasks:
       add_Task(task)
list_Task()
listTaskByStatus("TODO")
def main ():
    print("Welcome to Task Tracker CLI!")
    print("Type 'add <task>' to add a task, 'list' to see all tasks, or 'exit' to quit.")
   
    while True: 
      command = input("task-cli ").strip()
      if command.startswith("add "): 
       title = command[4:].strip('" ')
       if title:
          add_Task(title)
       else:
          print("Error: Task title cannot be empty.")

      elif command == "list" :
       list_Task()
      
      elif command.startswith("update "):
         update_input = command[7:].strip()
         try: 
            task_id, title = update_input.split(" ", 1)
            if task_id.isdigit(): 
               update_task(int(task_id), title.strip()) 
            else:
             print("Error: Task ID must be a number.")
         except ValueError:
             print("Error: Invalid format. Use: update <task_id> <new_title>")

      elif command.startswith("mark "):
         update_input = command[5:].strip()
         try: 
            task_mark, task_id = update_input.split(" " , 1)
            if task_id.isdigit(): 
               mark_task(task_mark.strip(), int(task_id)) 
            else:
             print("Error: Task ID must be a number.")
         except ValueError:
             print("Error: Invalid format. Use: mark <task_id> <status>")

      elif command.startswith("delete "):
         number_to_delete = command[7:].strip()
         if number_to_delete.isdigit() :
          delete_task(int(number_to_delete))
         else : 
               print("Error: Invalid task ID. Please provide a valid numeric ID.")
          
      elif command == "exit":
       print("GoodBye!")
       break 
      else:
            print("Unknown command. Try 'add', 'list', or 'exit'.")
if __name__ == "__main__" :
   main() 
   
