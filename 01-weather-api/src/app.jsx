import { useState } from "react"
import "./app.css"

export default function App() {

    const [name, setName] = useState('')
    const [weather, setWeather] = useState(0)
    const [humidity, setHumidity] = useState(0)
    const [windSpeed, setWindSpeed] = useState(0)
    const [place, setPlace] = useState('')
    const [weatherinfo, setWeatherInfo] = useState({})

    const getWeather = async () => {
        
        try {

            const where = encodeURIComponent(place)
            const APIKEY = '3LntW8yZBsURofIO'
            const URL_COORDENATES = `https://nominatim.openstreetmap.org/search?q=${where}&format=json`
            
            const response = await fetch(URL_COORDENATES)
            if (!response.ok) {
                throw new Error('The endpoint was not response properly')
            }
            const data = await response.json()
            if (data.length > 0) {
                const primerResultado = data[0]
                const latitude = primerResultado.lat
                const longitud = primerResultado.lon

                setName(primerResultado.display_name)
                const nameUrl = encodeURIComponent(name)
                const URL_WEATHER_COMPLETE = `https://my.meteoblue.com/packages/basic-day_webcolors?lat=${latitude}&lon=${longitud}&name=${nameUrl}&windspeed=kmh&apikey=${APIKEY}`
                const URL_WEATHER_SIMPLE = `https://my.meteoblue.com/packages/current?lat=${latitude}&lon=${longitud}&apikey=${APIKEY}`
                
                const weatherResponse = await fetch(URL_WEATHER_COMPLETE)
                if (!weatherResponse.ok) {
                    throw new Error('It could not reach the weather API')
                }
                const weatherData = await weatherResponse.json()
                setHumidity(weatherData.data_day.relativehumidity_mean[0])
                const simpleWeatherResponse = await fetch(URL_WEATHER_SIMPLE)
                if (!simpleWeatherResponse.ok) {
                    throw new Error('There was a problem with the conexion')
                }
                const simpleWeatherData = await simpleWeatherResponse.json()
                setWeather(simpleWeatherData.data_current.temperature)
                setWindSpeed(simpleWeatherData.data_current.windspeed)
            }
        }
        catch (error) {
            console.error('there has been a problem with your requirement: ', error)
            
        }
    }

    const handleClick = () => {
        getWeather()
        const text = document.getElementById('where')
        text.value = ''
    }

    return (
        <main>
            <header>
                <h1>Weather APP with API</h1>
                <h4>Type the location from where you want to know the weather</h4>
            </header>
            <section className="inputs">
                <input type="text" id="where" onChange={(e) => setPlace(e.target.value)} placeholder="City, Country, Adress"/>
                <button onClick={handleClick}>Consult weather</button>
            </section>
            <section className="answer">
                <strong>The city chosed was: {name}</strong>
                <p>The current weather there is: {weather}</p>
                <p>Humedad de: {humidity}%</p>
                <p>Velocidad del viento: {windSpeed}</p>
            </section>
        </main>       
    )
}