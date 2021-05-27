import SortedSelectedEmployees from '../sorted-selected-employees';
import FetchedEmployees from '../../services/fetching-service';

function App() {
  return (
    <div className="App">
      <div className="employees">
        <h2>Employees</h2>
        <div className="mainContent selected">
          <FetchedEmployees />
        </div>
      </div>

      <div className="employees">
        <h2>Employees birthday</h2>
        <hr />
        <div className="mainContent">
          <SortedSelectedEmployees />
        </div>
      </div>
    </div>
  );
}

export default App;
