import { useState } from 'react'
import './selector.css'

function SelectorIOS() {

    const [mode, setMode] = useState('light')
    
    const handleChange = (event) => {
        const body = document.body.style
        const app = document.getElementById('app')
        if (event.target.checked) {
            body.backgroundColor = 'lightblue' /* Modify the color that you prefer for background in light mode */
            app.style.color = 'black' /* Modify the color that you prefer for the text in light mode */
            setMode('dark')
        } else {
            body.backgroundColor = '#100c18' /* Modify the color that you prefer for background in dark mode */
            app.style.color = 'white' /* Modify the color that you prefer for text in dark mode */
            setMode('light')
        }
    }

    return (
        <>
            <p>{`Change Background for ${mode} mode`}</p> {/* Modify this text according with your require */}
            <div className="switch-container">
                <input type="checkbox" id="miSwitch" onChange={handleChange}/>
                <label htmlFor="miSwitch" className="switch-label" />
            </div>
        </>
    )
}

export default SelectorIOS