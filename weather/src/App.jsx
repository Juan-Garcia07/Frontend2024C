const getWeather = async() =>{
  const response = await fetch('http://api.weatherapi.com/v1/current.json?key=d659998dc24746e1a02171850240905&q=tuxtepec&aqi=no')
  const weather = await response.json()
  console.log(weather)
}

getWeather()


function App() {
  

  return (
    <div className="container">
      <h1>Weather App</h1>
      <hr />
    </div>
  )
}

export default App
