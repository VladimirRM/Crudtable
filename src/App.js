
import './App.css';


const initialValues = {
  userName:'',
  userSurname:'',
  userSalary
}

function App() {
  return (
    <div>
     <div>
      <div>
        <table>
          <th>#</th>
          <th>User Name</th>
          <th>User SurName</th>
          <th>User Salary</th>
          <th>Actions</th>
          <tbody></tbody>
        </table>
      </div>
      <div>
        <form>
          <input placeholder='Write your name' />
          <input placeholder='Write surname' />
          <input placeholder='Write your salary' />
          <div>
            <button type='reset'>Clean</button>
            <button type='submit'>Add</button>
          </div>
        </form>
      </div>
     </div>
     
    </div>
  );
}

export default App;
