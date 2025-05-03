python3 before running the script in the terminal

Deleting a variable in py : del var_A,  var_B 

<!-- Creating a function -->
def sum (x,y) : 
  sum = x + y 
  return sum 

  <!-- conditional Statement -->

  if <expr>:
    <statement>

if 'aul' in 'grault':              
   print('yes')# PersonalProject2025

List Method .remove()
The .remove() method in Python is used to remove an element from a list by passing in the value of the element to be removed as an argument. In the case where two or more elements in the list have the same value, the first occurrence of the element is removed.

# Create a list
shopping_line = ["Cole", "Kip", "Chris", "Sylvana", "Chris"]
 
# Removes the first occurance of "Chris"
shopping_line.remove("Chris")
print(shopping_line)

# Output
# ["Cole", "Kip", "Sylvana", "Chris"]


Tuples
Tuples are one of the built-in data structures in Python. Tuples are immutable, meaning we can’t modify a tuple’s elements after creating one, and they do not require an extra memory block like lists. Because of this, tuples are great to work with if you are working with data that won’t need to be changed in your code.

Some of the built-in methods and functions to be used with tuples are: len(), max(), min(), .index() and .count().

my_tuple = ('abc', 123, 'def', 456, 789, 'ghi')

len(my_tuple) # returns length of tuple
max(my_tuple) # returns maximum value of tuple
min(my_tuple) # returns minimum value of tuple
my_tuple.index(123) # returns the position of the value 123
my_tuple.count('abc') # returns the number of occurrences of the value 'abc'


List Method .insert()
The Python list method .insert() allows us to add an element to a specific index in a list.

It takes in two inputs:

The index that you want to insert into.
The element that you want to insert at the specified index.
# Here is a list representing a line of people at a store
store_line = ["Karla", "Maxium", "Martim", "Isabella"]

# Here is how to insert "Vikor" after "Maxium" and before "Martim"
store_line.insert(2, "Vikor")

print(store_line) 
# Output: ['Karla', 'Maxium', 'Vikor', 'Martim', 'Isabella']

break Keyword
In a loop, the break keyword exits the loop immediately, regardless of the iteration number. Once break executes, the program will continue executing from the first line after the loop.

In this example, the output would be:

0
254
2
Negative number detected!
numbers = [0, 254, 2, -1, 3]

for num in numbers:
  if (num < 0):
    print("Negative number detected!")
    break
  print(num)
  
# 0
# 254
# 2
# Negative number detected!

The Python continue Keyword
In Python, the continue keyword is used inside a loop to skip the remaining code inside the loop code block and begin the next loop iteration.

big_number_list = [1, 2, -1, 4, -5, 5, 2, -9]

# Print only positive numbers:
for i in big_number_list:
  if i < 0:
    continue
  print(i)

Python while Loops
In Python, a while loop will repeatedly execute a code block as long as a condition evaluates to True.

The condition of a while loop is always checked first before the block of code runs. If the condition is not met initially, then the code block will never run.

# This loop will only run 1 time
hungry = True
while hungry:
  print("Time to eat!")
  hungry = False

# This loop will run 5 times
i = 1
while i < 6:
  print(i)
  i = i + 1