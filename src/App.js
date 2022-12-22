import React, { useState } from "react";
import "./App.css";

const initialValues = {
  userName: "",
  userSurname: "",
  userSalary: "",
};
const App = () => {
  const [userData, setUserData] = useState(initialValues);

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
          <form action="">
            <input type="text" placeholder="Write your name..." />
            <input type="text" placeholder="Write your surname..." />
            <input type="text" placeholder="Write your salary ..." />
            <div>
              <button type="reset">Clean</button>
              <button type="submit">Add</button>
            </div>
          </form>
          <div>{count}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
