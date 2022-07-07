import Employee from "./Employee";

function EmployeesContainer({ employees }) {
  const renderEmployees = employees.map((employee) => (
    <Employee employee={employee} />
  ));
  return <ul className="cards">{renderEmployees}</ul>;
}

export default EmployeesContainer;
