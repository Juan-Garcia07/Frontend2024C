import { useState } from "react"

function App() {
  const [username, setUsername] = useState ("")
const handleUsernameChange = (event) =>{
  setUsername(event.target.value)
  //console.log(username)

}
const handleSubmit = (e) =>{
  e.preventDefault()
  console.log(username)
  setUsername("")
}

  return (
   
      <div>
      <h1>Inputs</h1>
      <hr />
      <form onSubmit={(e) => handleSubmit (e)}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username"
           type="text"
           value={username}
           onChange={(event) => handleUsernameChange (event)} />
        </div>
        <div>
        <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
      
  )
}

export default App
