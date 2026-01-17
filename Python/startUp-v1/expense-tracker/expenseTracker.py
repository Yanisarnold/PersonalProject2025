# Requirements
# Application should run from the command line and should have the following features:

# Users can add an expense with a description and amount. - done 
# Users can update an expense. - done 
# Users can delete an expense. - done 
# Users can view all expenses. - done 

# Users can view a summary of all expenses. - done 

# Users can view a summary of expenses for a specific month (of current year). - done 


# Here are some additional features that you can add to the application:

# Add expense categories and allow users to filter expenses by category.
# Allow users to set a budget for each month and show a warning when the user exceeds the budget.
# Allow users to export expenses to a CSV file. - done 

import datetime
import calendar
import json
import os

FILE_NAME = "expenses.json"
expenseTrackers = [] 
expense_id = 1 


# f =  open("test.csv", "r")
# # print(f.read())
# print(f.readline())
# print(json.load(f))

def load_expenses():
    global expenseTrackers
    if os.path.exists(FILE_NAME):  # Check if file exists
        with open(FILE_NAME, "r") as file:  # Open the file in read mode
            try:
                expenseTrackers = json.load(file)  # Load JSON data into the list
                print("Expenses loaded successfully!")
            except json.JSONDecodeError:
                print("Error: File is corrupted. Starting with an empty list.")
                expenseTrackers = []
    else:
        print("No existing file found. Starting with an empty list.")
        expenseTrackers = []

# Function to save expenses to JSON file
def save_expenses():
    with open(FILE_NAME, "w") as file:  # Open the file in write mode
        json.dump(expenseTrackers, file, indent=4)  # Save the list as JSON
        print("Expenses saved successfully!")


def addExpense (description, amount) :
  date = datetime.datetime.now()
  print ("adding a new expense: ")
  global expense_id

  if not description.strip() : 
     print("Error : Description cannot be empty.")
     return 
  if not isinstance(amount, (int, float)) or amount <= 0 :
      print("Error: Amount must be a positive number.")
      return
  
  expense = {"id":expense_id, "description" : description, "amount": amount, "Date" : date.strftime("%Y-%m-%d")}
  expenseTrackers.append(expense)
  expense_id +=  1
  print(f"expense added successfully (ID : {expense['id']})")
  save_expenses()


def deleteExpense (expense_id) : 
  global expenseTrackers 

  if not expenseTrackers :
     print ("empty list can't delete anything ")
     return
  
  for expense in expenseTrackers : 
    if expense["id"] == expense_id : 
      expenseTrackers.remove(expense)
      print(f"Task {expense_id} deleted successfully.")
      return 
     
  print(f"Error: Task with ID {expense_id} not found.") 


def viewAll():
    if not expenseTrackers :
     print ("No expenses available")
     return

    print(f"{'ID':<4} {'Date':<12} {'Description':<15} {'Amount':>8}")  # Header with proper spacing
    print("-" * 40)  # Separator line
    for expense in expenseTrackers:
        print(f"{expense['id']:<4} {expense['Date']:<12} {expense['description']:<15} ${expense['amount']:>7.2f}")


# Users can update an expense.
def updateExpense(expense_id, description, amount) : 
  global expenseTrackers
  if not description.strip() : 
     print("Error : Description cannot be empty.")
     return 
  if not isinstance(amount, (int, float)) or amount <= 0 :
      print("Error: Amount must be a positive number.")
      return
  
  for expense in expenseTrackers :
    if expense['id'] == expense_id : 
      expense['description'] = description
      expense['amount'] = amount
  print(f"Expenses has successfully being updated.") 


def summary(month=None):
    global expenseTrackers  
    total = 0

    if not expenseTrackers :
     print ("No expenses available")
     return

    for expense in expenseTrackers:
        expense_date = datetime.datetime.strptime(expense['Date'], "%Y-%m-%d")
        if month is None or expense_date.month == month:
            total += expense['amount']
    if month:
        month_name = calendar.month_name[month]
        print(f"Total expenses for month {month_name}: ${total}")
    else:
        print(f"Total expenses : ${total}")


# add --description "breakfast" --amount 70  
def main () :
    print("Welcome to Task Tracker CLI!")
    print("Type 'add <task>' to add a task, 'list' to see all tasks, or 'exit' to quit.")

    while True : 

     command = input("$ expense-tracker ").strip()
   
    # Example: $ expense-tracker add --description "Dinner" --amount 10
     if command.startswith("add "):
        update_input = command[4:].strip()
        # Parse the input for --description and --amount
        try:
            # Extract description and amount from the input
            if "--description" in update_input and "--amount" in update_input:
                parts = update_input.split("--description")[1].split("--amount")
                description = parts[0].strip().strip('"')  # Remove surrounding quotes
                amount = parts[1].strip()
                # Validate description and amount
                if description and amount.replace(".", "", 1).isdigit():
                    addExpense(description, float(amount))  # Use float for amounts like 10.50
                else:
                    print("Error: Invalid description or amount format.")
            else:
                print("Error: Invalid format. Use: add --description \"<description>\" --amount <amount>")
        except (ValueError, IndexError):
            print("Error: Invalid input format. Use: add --description \"<description>\" --amount <amount>")

            # delete command 
            #  $ expense-tracker delete --id 2
     elif  command.startswith("delete "):
        # Extract part after 'delete '
        delete_input = command[7:].strip()
        # Check if --id exists in the input and if the ID is valid
        if "--id" in delete_input:
            # Extract the ID value after '--id'
            try:
                task_id = delete_input.split("--id")[1].strip()  # Get the value after '--id'
                if task_id.isdigit():
                    deleteExpense(int(task_id))  # Call the delete function with the task ID
                else:
                    print("Error: Invalid task ID. Please provide a valid numeric ID.")
            except IndexError:
                print("Error: Missing task ID. Please provide a valid task ID after '--id'.")
        else:
            print("Error: Invalid format. Use: delete --id <task_id>")
     elif command.startswith("update "):
        update_input = command[7:].strip()
        try:
            # Split the command into task_id, title, and amount
            parts = update_input.split("--amount")
            if len(parts) == 2:
                title = parts[0].strip()
                amount = parts[1].strip()
                # Validate task_id, title, and amount
                task_id, title = title.split(" ", 1)
                if task_id.isdigit() and amount.replace(".", "", 1).isdigit():
                    updateExpense(int(task_id), title.strip(), float(amount))  # update with float for amounts
                else:
                    print("Error: Invalid task ID or amount format. Ensure the ID is a number and the amount is valid.")
            else:
                print("Error: Invalid format. Use: update <task_id> <new_title> --amount <amount>")
        except ValueError:
            print("Error: Invalid format. Use: update <task_id> <new_title> --amount <amount>")

     elif command  == "list" : 
        viewAll()

     elif command == "summary" : 
        summary()

#         expense-tracker summary --month 8
# # Total expenses for August: $20
     elif command.startswith("summary") : 
        summary_input = command[7:].strip()
        if "--month" in summary_input : 
                # Extract the ID value after '--id'
            try:
                month = summary_input.split("--month")[1].strip()  
                if month.isdigit():
                    summary(int(month))  # Call the delete function with the task ID
                else:
                    print("Error: Invalid task ID. Please provide a valid numeric ID.")
            except IndexError:
                print("Error: Missing task ID. Please provide a valid task ID after '--id'.")

     elif command == "exit" :
        print("GoodBye!!")
        break
     else:
      print("Unknown command. Try 'add', 'list', or 'exit'.")
              
if __name__ == "__main__" :
   main() 


def delete_task(id):
   print(id)

delete_task(1)
viewAll()