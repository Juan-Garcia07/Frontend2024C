import { useState } from "react"

function App() {
  const [inputsForm, setInputsForm] = useState ({
    username: "",
    password: "",
  })
const handleInputChange = (event) =>{
  setInputsForm({
    ...inputsForm,
    [event.target.name]: event.target.value,
    
  })

}
const handleSubmit = (e) =>{
  e.preventDefault()
  console.log("Nombre de usuario:", inputsForm.username)
  console.log("Contraseña:", inputsForm.password)
  setInputsForm({
    username: "",
    password: "",
 })
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
           name="username"
           value={inputsForm.username}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
        <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={inputsForm.password} onChange={(event) => handleInputChange(event)}/>
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
      
  )
}

export default App
