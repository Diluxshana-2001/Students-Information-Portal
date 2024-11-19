import './App.css';
import  {students} from './data/StudentsDb.js';
import StudentTable from './components/StudentTable';

function App() {
  return (
    <div className="App">
      <h1>Students Information Potal</h1>
      <hr />
      <table>
        <tbody>
          <tr>
            <td>
              <StudentTable students={students} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
