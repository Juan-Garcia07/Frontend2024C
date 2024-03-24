import { useForm } from "./Hooks/useForm"

function App() {
  const [inputsForm, handleInputChange, formReset] = useForm ({
    username: "",
    password: "",
    checkbox: "",
    color: "",
    date: "",
    datetimelocal: "",
    email: "",
    file: "",
    hidden: "",
    image: "",
    month: "",
    number: "",
    radio: "",
    range: "",
    reset: "Restablecer",
    search: "",
    tel:"",
    time: "",
    url: "",
    week: "",
    button: "boton",
  })

const handleSubmit = (e) =>{
  e.preventDefault()
  console.log("Nombre de usuario:", inputsForm.username)
  console.log("Contraseña:", inputsForm.password)
  console.log("checkbox", inputsForm.checkbox)
  console.log("color", inputsForm.color)
  console.log("date", inputsForm.date)
  console.log("datetimelocal", inputsForm.datetimelocal)
  console.log("email", inputsForm.email)
  console.log("file", inputsForm.file)
  console.log("hidden", inputsForm.hidden)
  console.log("month", inputsForm.month)
  console.log("number", inputsForm.number)
  console.log("radio", inputsForm.radio)
  console.log("range", inputsForm.range)
  console.log("reset", inputsForm.reset)
  console.log("search", inputsForm.search)
  console.log("tel", inputsForm.tel)
  console.log("url", inputsForm.url)
  console.log("week", inputsForm.week)
  console.log("button", inputsForm.button)
  formReset()
}

  return (
   <div>
    <h1>21 Inputs // Juan Garcia // Grupo C</h1>
    <hr />
      <form onSubmit={(e) => handleSubmit (e)}>
        <div>
          <label htmlFor="username">1 Username</label>
          <input id="username"
           type="text"
           name="username"
           value={inputsForm.username}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
        <label htmlFor="password">2 Password</label>
          <input id="password" type="password" name="password" value={inputsForm.password} onChange={(event) => handleInputChange(event)}/>
        </div>
        <div>
          <label htmlFor="checkbox">3 Checkbox</label>
          <input id="checkbox"
           type="checkbox"
           name="checkbox"
           value={inputsForm.checkbox}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="color">4 Color</label>
          <input id="color"
           type="color"
           name="color"
           value={inputsForm.color}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="date">5 Date</label>
          <input id="date"
           type="date"
           name="date"
           value={inputsForm.date}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="datetime-local">6 Datetime-local</label>
          <input id="datetime-local"
           type="datetime-local"
           name="datetime-local"
           value={inputsForm.datetimelocal}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="email">7 Email</label>
          <input id="email"
           type="email"
           name="email"
           value={inputsForm.email}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="file">8 File</label>
          <input id="file"
           type="file"
           name="file"
           value={inputsForm.file}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="hidden">9 Hidden</label>
          <input id="hidden"
           type="hidden"
           name="hidden"
           value={inputsForm.hidden}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="image">10 Image</label>
          <input id="image"
           type="image"
           name="image"
           value={inputsForm.image}
           src="https://imgs.search.brave.com/ZMM1HAIuOEe-jRL4t0Ulzt3MIxMdrpLNLaAjgwUYwbc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waXBl/cmxhYi5lcy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wMi9j/b2RpZ28tZW4tcHJv/Z3JhbWFjaW9uLmpw/Zw"
           alt="Submit" width="400" height="300"
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="month">11 Month</label>
          <input id="month"
           type="month"
           name="month"
           value={inputsForm.month}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="number">12 Number</label>
          <input id="number"
           type="number"
           name="number"
           value={inputsForm.number}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="radio">13 Radio</label>
          <input id="radio"
           type="radio"
           name="radio"
           value={inputsForm.radio}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="range">14 Range</label>
          <input id="range"
           type="range"
           name="range"
           min="0" max="50"
           value={inputsForm.range}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="reset">15 Reset</label>
          <input id="reset"
           type="reset"
           name="reset"
           value={inputsForm.reset}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="search">16 Search</label>
          <input id="search"
           type="search"
           name="search"
           value={inputsForm.search}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="tel">17 Tel</label>
          <input id="tel"
           type="tel"
           name="tel"
           value={inputsForm.tel}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="time">18 Time</label>
          <input id="time"
           type="time"
           name="time"
           value={inputsForm.reset}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="url">19 Url</label>
          <input id="url"
           type="url"
           name="url"
           value={inputsForm.url}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="week">20 Week</label>
          <input id="week"
           type="week"
           name="week"
           value={inputsForm.week}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <div>
          <label htmlFor="button">21 Button</label>
          <input id="button"
           type="button"
           name="button"
           value={inputsForm.button}
           onChange={(event) => handleInputChange (event)} />
        </div>
        <button type="submit" >Submit</button>
      </form>
      </div>
  )
}

export default App
