import { useState } from "react"
import "./app.css"


function Form() {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        phoneNumber: ''
    })

    // Ejemplo dentro de un componente de React en `client/src/App.js`
    const handlesubmit = async (event) => {
        event.preventDefault()
        console.log(`Los datos del formulario: ${JSON.stringify(formData, null, 2)}`)
        try {
            const response = await fetch('http://localhost:3000/submit-form', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            console.log('Form data sent successfully');
            setFormData({
                username: '',
                password: '',
                email: '',
                phoneNumber: ''
            })
        } else {
            console.error('Failed to send form data');
        }
        } catch (error) {
        console.error('Failed to send form data', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,[name]: value,
        }))
    }

    return (
        <form onSubmit={handlesubmit}>
            <label>
                UserName
            </label>
            <input 
                type="text" 
                name="username"
                value={formData.username}
                onChange={handleChange}
            />

            <label>
                Password
            </label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />

            <label>
                Email
            </label>
            <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />

            <label>
                Phone Number
            </label>
            <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
            />
            
            <button className="confirm">Confirm</button>
        </form>
    )
}

function App() {
    return (
        <main>
            <header>
                <h1>
                    Sign Up Form
                </h1>
            </header>
            <section>
                <Form />
            </section>
        </main>
    )
}

export default App