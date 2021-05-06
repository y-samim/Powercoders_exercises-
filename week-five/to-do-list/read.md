Create a to-do list in JavaScript
---------------------------------
--What does it need? Which data structure? Where would you use functions?

Some ideas:
----------

-user input of a new to-do.
-list all to-dos in an alphabetically order in the DOM.
-your to-do list should be only visible by you. Make it password protected.
-if you get stuck with the code, try to put in comments as pseudo-code first or instead.

1. Understand the problem
inputs: First the Password. Then the To-do.
process: After password check show to-dos and make it possible to add new ones.

outputs: Error message if password is incorrect. To-do list sorted alphabetically in the DOM if password is correct.
The word DOM indicates that this time we need HTML tags for our input as well as our output.

2. Plan your solution
What is the procedure?
Ask for password
Check if password is correct.
No: Show error message and ask again (go back to step 1).
Yes: Show sorted to-do list and go to the next step.
Show input to add new item.
Add new to-do item to list.
Sort alphabetically.
Show updated list.

3. Divide and conquer
Each step in the process is one small and solvable problem. Solve each small problem one by one.
Every step symbolizes one task. Use functions.

Start with minimal functionality. Don't think about features not asked for.



© 2021 Powercoders
