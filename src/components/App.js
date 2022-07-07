import SearchBar from "./SearchBar";
import EmployeesContainer from "./EmployeesContainer";
import logo from "../assets/logo.jpeg";
import { useEffect, useState } from "react";
function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  function fetchEmployees() {
    fetch("http://localhost:8003/employees")
      .then((res) => res.json())
      .then((employeesData) => setEmployees(employeesData));
  }

  useEffect(fetchEmployees, []);

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <img src={logo} alt="The Office" id="main-header" />
      <SearchBar setSearch={setSearch} search={search} />
      <EmployeesContainer employees={filteredEmployees} />
    </div>
  );
}

export default App;

// See a list of employees on the page, using the Employee Component. The Employee component should display the employee's image, name, job title, and bio.

// 1. fetch all the employees as an effect
// 2. store employees in state
// 3. pass employees array as prop to EmployeesContainer
// 4. map over employees and return Employee component for each one

// Click on the image of the employee in the Employee component and see the quote for that employee in place of the bio. If the user clicks on the image again the quote should be replaced with the bio. If a user clicks on another employee's image, it toggles that employee's bio indpendent of any other employee's.

// 1. set up state for each Employee containing boolean value - initialize as true to display bio
// 2. use state value in ternary to display bio vs quote
// 3. when user clicks image, toggle state value

// Type in the SearchBar component and see a list of employees whose name or job title match the text in the search bar. If there's no text in the search bar, all employees should be rendered.
// Where does it begin?
// In the search bar?

// 1. set up state to hold search value
// 2. update state value when user types in input field
// 3. use value to filter list of employees
