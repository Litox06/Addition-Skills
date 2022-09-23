## Planning

Firstly, I had to picture myself how I wanted the layout to look, focused on it being minimalistic and "straight to the point" since the target audience are 2nd graders, taking into consideration on balancing the minimalism design and attention-grabbing design since they're children.

After I had my design ready, I started coding the layout using JSX, Bootstrap and Bootstrap's grid system for responsiveness, once my layout was ready I focused on adding the logic and functionality on the app.

I had to display the math problem so the user can solve it, I created a function to generate random numbers between 1-999, these numbers would then be displayed in the UI as: `A + B =`, these numbers were stored in variables which are passed as props to the JSX.

Now with the random numbers being displayed for the user to solve, I had to receive the user's input via the textbox (which only accepts integers), once the user types their answer and clicks the `Submit answer` button, the app evaluates using an `if else` statement to check if the answer is an integer, if it is the random generated numbers get passed on as a prop to the API's URL then this new constructed URL gets passed to the `fetchExpression` function who calls the API, receives the API's data and evaluates if it's the same as the user's answer, if it is it'll alert a "right answer" message, if it's not, a "wrong answer" message is alerted, in both cases the `randomizeAfterSubmit` function is called, said function re-generates the random numbers to solve, displays them and clears the input box.

## Enhancements

 - Generating more complex math problems: I would use the postfix mathematical notation, here the operator appears after the operands the operator between operands is taken out and is attached after operands, ie: `A + B * C + D` would be `A B C * + D +` because this is much easier to translate to a format that is suitable for direct execution postfix can be directly translated to code if you use a stack-based processor or virtual machine.

 - Keeping a running total score: I would add the score to the JSX and create a useState variable with a start on (0), this score would be incremented everytime the "right answer" is alerted and would decrement everytime the "wrong answer" is alerted.