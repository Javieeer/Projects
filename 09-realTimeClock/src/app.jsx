import React, { useEffect, useState } from "react"

export default function App() {

    const [realTime, setRealTime] = useState('')

    const formatTime12H = (time) => {
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const ampm = hours >= 12 ? 'PM' : 'AM'

        hours = hours % 12 || 12

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date()
            const formattedTime = formatTime12H(now)
            setRealTime(formattedTime)
        }, 1000)

        return () => clearInterval(intervalId)
    }, []);

    return (
        <main>
            <header>
                <h1>Real Time Clock</h1>
            </header>
            <section className="clock">
                <h3>{realTime}</h3>
            </section>
        </main>
    );
}
