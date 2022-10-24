import React, { useState} from 'react';
import './App.css';


const initialValues = {
  userName:'',
  userSurname:'',
  userSalary:''
}

function App() {
const [useData,setUserData]= useState(initialValues)



  return (
    <div className='wrapper'>
     <div  className="wrapper-content">
      <div className='table-data'>
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
          <div className='actions'>
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
