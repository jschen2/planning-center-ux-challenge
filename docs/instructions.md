# PiCO Fi (Frontend Design Challenge)

### Before you start...
- Need help getting up and running? Check out the [Getting Started](./getting-started.md) document for installation instructions
- ‼️ After each task, please add notes related to your change in the [submission](./submission.md) document

### Task 1️⃣: Improve the accessibility of `Wallet`
The "add card" form in the [`Wallet`](../src/components/Wallet/index.jsx) component is functional, but needs some updates to improve its accessibility.

- The primary requirement for this task is to make the form fully keyboard-accessible
- Don't forget to include an explanation of your changes in the [submission](./submission.md) document


> ✨**Bonus Points:** If time allows, feel free to show your knowledge of other accessibility concepts (aria, focus styles, valid/semantic markup, etc) and make other improvements.

### Task 2️⃣: Build markup for `Budget`
Using [this wireframe](./budget-mockup.png) as a guide, create the UI needed for the new "budget" feature.

- In this task, we're looking for your understanding of semantic HTML & CSS more than creating a fully-functioning React component. Because the mockup is presented in two separate states, please add a basic method to toggle the UI between them
- The style of the mockup is low-fidelity and indicative of the _type_ of UI that should be added vs a pixel-perfect design representation. Make sure the markup/styles you create match the established visual patterns and fit into the overall style of the existing app
- Take a look in the `globals` and `elements` folders to see what components/styles are available to use

> ✨**Bonus Points:** You can make the form functional if you want to, but its _not_ a requirement!



### Task 3️⃣: Style data/elements for `Transactions`
The incoming data in the [`Transactions`](../src/components/Transactions/index.jsx) component is raw/unstyled HTML. This task is a chance to show off your own design perspective and add some visual hierarchy to the list of charges/deposits. 

- The design is open to your best ideas but ultimately should fit into the established look/feel of the app
- The data structure can be found in the component and also in the [`transactions`](../src/data/transactions.js) file
- Need some design inspiration? Check out these pages on [Behance](https://www.behance.net/search/projects?search=banking+ui+finance+app&tracking_source=typeahead_search_suggestion), [Dribbble](https://dribbble.com/search/bank-transactions) or [scrnshts](https://scrnshts.club/category/finance/) for common design conventions around "finance/banking" UI.


### Submitting your work
- Create a .zip file of your files (please **don't include** the `node_modules` or `dist` folders)
- Email your submission by replying to email you received with the initial files
- You may also provide your final submission via Dropbox, Github, or a similar file-sharing system