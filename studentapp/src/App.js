import './App.css';
import  {students} from './data/StudentsDb.js';
import StudentTable from './components/StudentTable';
//import { useState } from 'react';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <h1>Students Information Potal</h1>
      <hr />
      <table width="100%">
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
