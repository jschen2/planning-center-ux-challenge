## Design Challenge Rationale
For each task, please give a brief description of your process, your reasoning used to make the changes and how you feel the change benefits the overall app. We work collaboratively at Planning Center, so being able to communicate the intent, purpose or motivation of your change is often just as important as the code itself!

### Task 1: Update form accessibility

To make these changes, I looked at the overall structure of what was there and began determining what needed to change
to optimize the accessibility of the form. The first that stood out to me was the usage of buttons as selectors for the
card type. The second was the labels not being attached to the inputs.

The card type buttons were changed to become two radio inputs to allow for default accessibility and for full usage
as a form due to all now being form elements (e.g. using the form action instead of a fetch call). This could also
allow for refactoring the form use a React server function if desired at some point.

The card list was also made navigable and aria-labels added for the card type and card number for a screen reader. I would
imagine that these would somehow be interactive at some point so it would be worthwhile to do it. All inputs were also
given their `for` attributes to properly label them and allow for clicking on the labels to focus the inputs.

I changed the styling of the card type buttons to better match the styling of the rest of the form and reduce cognitive
load for the user to maintain expectations, i.e. label on the left and input the right.

### Task 2: Build UI based on wireframe
To build this view, I started by looking at what elements were being asked for and compared them to what currently
exists in the application that could be reused to save time. I determined that the `card` elements were very similar
to the categories, the `Input` component could be used for the form, and the `Button` could also be used here.

I then began creating the view and realized that I could create a component for future use in the `Transactions` view.
I created the `Metric` component to use on the top portion of `Budget` and could make this match for the `Balance` in
`Transactions`. The benefit here is that it would be something the user already expects to see as they move between
 views.

I pulled out the `card` elements from `Wallet` to create a `Card` component. This will allow for any future changes to
the card styling to propagate to the other views and minimize tech debt.

`AddCategory` was added as separate component to encapsulate the state and only cause updates on the parent `Budget` when
the user clicks the `Add new category` button. This will allow the form to be moved or reused somewhere else as the app
grows. It is also good to minimize the components that are forced to update will allow performance to stay optimal
should this form grow larger.

I reused similar radio input logic to the one in `Wallet` to allow easy selection of the icon for the new categories and
maintain the default accessibility.

I used the color variables from `_root.scss` to maintain a consistent theme.

### Task 3: Refactor to add visual hierarchy
Since this is could potentially be a fairly large list of non-interactive data, the card styling was adjusted a bit to
reflect that and remove a little of the business with the extra card styling. This should reduce cognitive load for the
user as they might scan for particular items or costs. The rest of the patterns were maintained: category icon on the
left, two lines of data with the second line being more subdued as they are extra information, and text on the left with
numbers on the right. This keeps the user expectations of how the app functions.

### Notes:
`eslint` changed to a flat format the config was adjusted to match the version that was being installed. The prettier
config was also added along with a11y recommended config to ensure accessibility rules are focused on at all times.

I would imagine for the `Budget` that the idea is that the limits would add up for the `Allocated` and then be subtracted
from the `Monthly Income` to make up the `Remaining`. If this was the case, I would hook this sequence up to make it
functional, but I wasn't entirely sure if this was the case or if the numbers would be grabbed from somewhere else so
they were left as static.

If the `Transactions` list would get reused somewhere else, I would create separate components to allow this to be reused
much in the same vein of the `Card` component. Since it isn't at the moment and can be considered specific to the
`Transactions` view, I have left them tied to that view.
