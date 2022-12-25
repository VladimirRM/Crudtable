import React, { useState } from "react";
import Custominput from "../CustomInput/Custominput";
import "./App.css";

const initialValues = {
  userName: "",
  userSurname: "",
  userSalary: "",
};
const App = () => {
  const [userData, setUserData] = useState(initialValues);
  const [users, setUsers] = useState([]);
  const [editTableUserData, setEditTableUserData] = useState({
    isEdit: false,
    userIndex: null,
  });

  const isFilledFields =
    userData.userName && userData.userSurname && userData.userSalary;

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (isFilledFields) {
      if (editTableUserData.isEdit) {
        const editedData = users;
        editedData.splice(editTableUserData.userIndex, 1, userData);

        setUsers(editedData);

        setEditTableUserData({
          isEdit: false,
          userIndex: null,
        });
      } else {
        setUsers((prevState) => [...prevState, userData]);
      }
      setUserData(initialValues);
    }
  };

  const handleCleanClick = () => setUserData(initialValues);

  const handleRemoveClick = (index) => {
    setUsers(users.filter((user, userIndex) => userIndex !== index));
  };

  const handleEditClick = (data, index) => {
    setUserData(data);
    setEditTableUserData({
      isEdit: true,
      userIndex: index,
    });
  };

  const handleInputChange = (e, userName) => {
    setUserData((prevState) => ({
      ...prevState,
      [userName]: e.target.value,
    }));
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

            <tbody>
              {users.map((user, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.userName}</td>
                  <td>{user.userSurname}</td>
                  <td>{user.userSalary}</td>
                  <td>
                    <div>
                      <button
                        className="edit-action"
                        onClick={() => handleEditClick(user, index)}
                      >
                        Edit
                      </button>
                      <button
                        className="remove-action "
                        onClick={() => handleRemoveClick(index)}
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
          <form onSubmit={handleSubmitUser} onReset={handleCleanClick}>
            <Custominput
              placeholder="Write your name..."
              handleChange={handleInputChange}
              value={userData.userName}
              filedName="userName"
            />
            <Custominput
              placeholder="Write your surname..."
              handleChange={handleInputChange}
              value={userData.userSurname}
              filedName="userSurname"
            />
            <Custominput
              placeholder="Write your salary..."
              handleChange={handleInputChange}
              value={userData.userSalary}
              filedName="userSalary"
            />
            {/* <input
              type="text"
              placeholder="Write your name..."
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  userName: e.target.value,
                }))
              }
              value={userData.userName}
            /> */}
     
      
            <div className="buttons-wrapper">
              <button type="reset">Clean</button>
              <button disabled={!isFilledFields} type="submit">
                {editTableUserData.isEdit ? "Edit" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
