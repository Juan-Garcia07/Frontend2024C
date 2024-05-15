import { useEffect, useState } from "react"
import { getCurrentWeather } from "../api/weatherapi"


const WeatherCard = () => {
    const [weather, setWeather] = useState(null)

    useEffect(() =>{
     const getWeather = async () =>{
       const weather = await getCurrentWeather()
   
       setWeather(weather)
     }
      
     getWeather()
    },[])

    return (
        <div classname="card" style={{width: "18rem"}}>
            <img src={`http:${weather?.current.condition.icon}`} classname="card-img-top" alt="..." />
            <div classname="card-body">
                <h5 classname="card-title">Card title</h5>
                <p classname="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
            </div>
        </div>
    )
}

export default WeatherCard