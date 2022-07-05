# The Office

Michael Scott needs our help! Jo Bennett tasked Michael with putting together a website to feature all of Dunder Mifflin's employees, but when Michael made a joke about the IT guy's mother, he decided he wasn't going to finish the project. Michael would do it himself, but he ate a whole pot pie and passed out. It is up to you to finish building the React application!

## Setup

1. Run `npm install` in your temrinal
2. Run `npm run server`. This will run your backend on port `8003`.
3. In a new terminal, run `npm start`. This will run your React app on port `8000`.

In our React app, the data about the office employees is in the `db.json` file. This file will mimic and API that follows RESTful conventions.

Make sure to open [http://localhost:8003/employees](http://localhost:8003/employees) in the browser to verify your backend is working before you proceed!

## What You Already Have

The `App` component holds two children: `SearchBar` and `EmployeesContainer`. The `EmployeesContainer` will render all `Employee` components.
All of the code to style the page has been written for you, meaning that you should be adding to the code rather than editing it; however, if your finished product has some styling issues, don't worry too much about it.

## Core Deliverables

As a user, I should be able to:

- See a list of employees on the page, using the `Employee` Component. The `Employee` component should display the employee's image, name, job title, and bio.
- Click on the image of the employee in the `Employee` component and see the quote for that employee in place of the bio. If the user clicks on the image again the quote should be replaced with the bio. If a user clicks on another employee's image, it toggles that employee's bio indpendent of any other employee's.
- Type in the `SearchBar` component and see a list of employees whose name or job title match the text in the search bar. If there's no text in the search bar, all employees should be rendered.

### Endpoints for Core Deliverables

#### GET /employees

Example Response:

```json
[
  {
    "id": 1,
    "name": "Michael Scott",
    "title": "Regional Manager",
    "bio": "Michael is the regional manager of Dunder Mifflin Paper Company in Scranton, Pennsylvania. Michael thinks of himself as an extremely capable boss who can handle any problem efficiently. In reality, Scott is ill-equipped to handle most of the problems that arise at Dunder Mifflin. Michael loves to host conference room meetings where typically very little is accomplished but he gets to be the center of attention.",
    "image": "https://static.wikia.nocookie.net/theoffice/images/b/be/Character_-_MichaelScott.PNG/revision/latest?cb=20200413224550",
    "quote": "That's what she said!"
  },
  {
    "id": 2,
    "name": "Dwight Schrute",
    "title": "Assistant to the Regional Manager",
    "bio": "Dwight is one of the highest ranked and most successful salesmen at Dunder Mifflin, despite lacking in social skills and common sense. He has a rivalry with fellow salesman Jim Halpert. He frequently serves a second in command position as Assistant (to the) Regional Manager, but is offered the role as manager in the final season.",
    "image": "https://static.wikia.nocookie.net/characters/images/c/cd/Dwight_Schrute.jpg/revision/latest/scale-to-width-down/350?cb=20151122222930",
    "quote": "Today, smoking is going to save lives."
  }
]
```
