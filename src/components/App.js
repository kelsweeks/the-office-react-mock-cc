import SearchBar from "./SearchBar";
import EmployeesContainer from "./EmployeesContainer";
import logo from "../assets/logo.jpeg";
function App() {
  return (
    <div className="App">
      <img src={logo} alt="The Office" id="main-header" />
      <SearchBar />
      <EmployeesContainer />
    </div>
  );
}

export default App;
