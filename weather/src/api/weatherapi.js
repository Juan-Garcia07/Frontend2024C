export const getCurrentWeather = async() =>{
    const url = import.meta.env.VITE_WEATHER_CURRENT_URL
    const key = import.meta.env.VITE_WEATHER_KEY
    const response = await fetch(`${url}?key=${key}&q=tuxtepec&aqi=no`)
    const weather = await response.json()

    return weather

}