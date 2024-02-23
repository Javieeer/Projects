import { useState } from "react"
import "./app.css"

export default function App() {

    const APIKEY = '3LntW8yZBsURofIO'

    const [place, setPlace] = useState('')
    const [name, setName] = useState('')
    const [weather, setWeather] = useState(0)
    const [humidity, setHumidity] = useState(0)
    const [windSpeed, setWindSpeed] = useState(0)

    const getWeather = () => {
        
        const where = encodeURIComponent(place)
        const URL_COORDENATES = `https://nominatim.openstreetmap.org/search?q=${where}&format=json`
        fetch(URL_COORDENATES)
        .then(response => {
            if (!response.ok) {
                throw new Error('The endpoint was not response properly')
            }
            return response.json()
        })
        .then(data => {
            if (data.length > 0) {
                const primerResultado = data[0]
                const latitude = primerResultado.lat
                const longitud = primerResultado.lon

                setName(primerResultado.display_name)
                const nameUrl = encodeURIComponent(name)
                const URL_WEATHER_COMPLETE = `https://my.meteoblue.com/packages/basic-day_webcolors?lat=${latitude}&lon=${longitud}&name=${nameUrl}&windspeed=kmh&apikey=${APIKEY}`
                const URL_WEATHER_SIMPLE = `https://my.meteoblue.com/packages/current?lat=${latitude}&lon=${longitud}&apikey=${APIKEY}`
                
                fetch(URL_WEATHER_COMPLETE)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('It could not reach the weather API')
                    }
                    return response.json()
                })
                .then(data => {
                    setHumidity(data.data_day.relativehumidity_mean[0])
                    fetch(URL_WEATHER_SIMPLE)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('There was a problem with the conexion')
                        }
                        return response.json()
                    })
                    .then(data => {
                        setWeather(data.data_current.temperature)
                        setWindSpeed(data.data_current.windspeed)
                    })
                })
            }
        })
        .catch(error => {
            console.error('there has been a problem with your requirement: ', error)
        })
    }

    const handleClick = () => {
        getWeather()
    }

    return (
        <main>
            <header>
                <h1>Weather APP with API</h1>
                <h4>Type the location from where you want to know the weather</h4>
            </header>
            <section className="inputs">
                <input type="text" onChange={(e) => setPlace(e.target.value)} placeholder="City, Country, Adress"/>
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