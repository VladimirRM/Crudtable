import React, { useState } from "react";
import "./App.css";

const initialValues = {
  userName: "",
  userSurname: "",
  userSalary: "",
};

function App() {
  const [userData, setUserData] = useState(initialValues);
  const [users, setUsers] = useState([]);

  const isFilledFields =
    userData.userName && userData.userSurname && userData.userSalary;

  const handlerSubmitUser = (e) => {
    e.preventDefault();

    const isFilledFields =
      userData.userName && userData.userSurname && userData.userSalary;
    if (isFilledFields) {
      setUsers((prevState) => [...prevState, userData]);
      setUserData(initialValues);
    }
  };

  const handleCleanClick = ()=> setUserData(initialValues)

  console.log("users", users);

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
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{users.userName}</td>
                  <td>{users.userSurname}</td>
                  <td>{users.userSalary}</td>
                  <td>
                    <div>
                      <button className="edit-action">Edit</button>
                      <button
                        disabled={!isFilledFields}
                        className="remove-action"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <form onSubmit={handlerSubmitUser} onReset={handleCleanClick}>
            <input
              placeholder="Write your name"
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  userName: e.target.value,
                }))
              }
              value={userData.userName}
            />
            <input
              placeholder="Write surname"
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  userSurname: e.target.value,
                }))
              }
              value={userData.userSurname}
            />
            <input
              placeholder="Write your salary"
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
}

export default App;
