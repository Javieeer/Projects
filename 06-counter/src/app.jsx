import { useState } from 'react'
import './app.css'

function App() {

    const [counter, setCounter] = useState(0)

    const handleIncrease = () => {
        return (
            setCounter(counter+1)
        )
    }

    const handleDecrease = () => {
        return (
            setCounter(counter-1)
        )
    }
    return (
        <main>
            <header>
                <h1>Counter</h1>
            </header>
            <section className="body">
                <strong>{`This is the counter: ${counter}`}</strong>
                <div className="body-inputs">
                    <button onClick={handleIncrease}>Increase</button>
                    <button onClick={handleDecrease}>Decrease</button>
                </div>
            </section>
        </main>
    )
}

export default App