## Design Challenge Rationale
For each task, please give a brief description of your process, your reasoning used to make the changes and how you feel the change benefits the overall app. We work collaboratively at Planning Center, so being able to communicate the intent, purpose or motivation of your change is often just as important as the code itself!

### Task 1: Update form accessibility

The card type buttons were changed to become two radio inputs to allow for default accessibility and for full usage
as a form due to all being form elements (e.g. using the form action instead of a fetch call). This could also allow
for refactoring the form use a React server function.

The card list was also made navigable and aria-labels added for the card type and card number for a screen reader.

### Task 2: Build UI based on wireframe
Create `Metric` component to use on the top portion of `Budget`.

Pulled out the card elements from `Wallet` to mostly reuse in `Budget`.

`AddCategory` added as separate component to encapsulate the state and only cause updates on the parent `Budget` when
the user clicks the `Add new category` button.

Reused similar radio input logic to the one in `Wallet` to allow easy selection of the icon for the new categories.

Colors used from `_root.scss`.

### Task 3: Refactor to add visual hierarchy
<!-- add task description here -->


### Notes:
<!-- space to ask questions or provide any additional details while going through this process -->
