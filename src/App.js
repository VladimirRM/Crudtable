import React, { useState } from "react";
import "./App.css";

const initialValues = {
  userName: "",
  userSurname: "",
  userSalary: "",
};
const App = () => {
  const [userData, setUserData] = useState(initialValues);
  const [users, setUsers] = useState([]);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    setUsers((prevState) => [...prevState, userData]);
  };

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <div className="table-data">
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
          <form onSubmit={handleSubmitUser}>
            <input
              type="text"
              placeholder="Write your name..."
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  userName: e.target.value,
                }))
              }
              value={userData.userName}
            />
            <input
              type="text"
              placeholder="Write your surname..."
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  userSurName: e.target.value,
                }))
              }
              value={userData.userSurname}
            />
            <input
              type="text"
              placeholder="Write your salary ..."
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  userSalary: e.target.value,
                }))
              }
              value={userData.userSalary}
            />
            <div className="buttons-wrapper">
              <button type="reset">Clean</button>
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
