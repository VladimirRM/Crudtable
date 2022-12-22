import React from 'react'
import './App.css'

const App = () => {
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


            <tbody>

            </tbody>
          </table>
        </div>
        <div>
          <form action="">
            <input type="text"
            placeholder='Write your name...' />
            <input type="text"
            placeholder='Write your surname...' />
            <input type="text"
            placeholder='Write your salary ...' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
