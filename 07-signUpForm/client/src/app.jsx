import { useState } from "react"
import "./app.css"


function Form() {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        phoneNumber: ''
    })

    function ValidateUserName(username) {
        
        const ValidateSpecialCharacter = (character) => {
            const regex = /[^a-zA-Z0-9]/
            if (regex.test(character)) {
                return true
            }
            return false
        }

        for (const character of username) {
            if (ValidateSpecialCharacter(character)) {
                alert('Digite un nombre de usuario valido sin caracteres especiales')
                break
            }
        }
    }

    function ValidatePassword(password) {

        if (password.length > 8) {
            const hasNumber = /\d/.test(password);
            const hasLetter = /[a-zA-Z]/.test(password);
            const hasUpperCase = /[A-Z]/.test(password);
            const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        
            if (hasNumber && hasLetter && hasSpecialCharacter && hasUpperCase) {
                return
            } else {
                const left = []
                if (!hasNumber) {
                    left.push('1 digito numerico')
                }
                if (!hasLetter) {
                    left.push('1 letra')
                }
                if (!hasUpperCase) {
                    left.push('1 mayuscula')
                }
                if (!hasSpecialCharacter) {
                    left.push('1 caracter especial')
                }
                if (left) {
                    const message = `Tienes que agregar minimo: ${left.join(', ')} a tu contraseña`
                    alert(message)
                }
                else {
                    return
                }
            }
        } else {
            alert('La constraseña debe tener mas de 8 caracteres')
        }
    }

    function ValidateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            return
        } else {
            alert('Ingrese un correo valido')
        }
    }
    

    const ValidateForm = () => {
        if (formData.username.replace(' ', '') == '' || formData.password == '' || formData.email == '') {
            alert('Ingrese datos validos o reales dentro del formulario')
        } else {
            ValidateUserName(formData.username)
            ValidatePassword(formData.password)
            ValidateEmail(formData.email)
        }
    }

    // Ejemplo dentro de un componente de React en `client/src/App.js`
    const handlesubmit = async (event) => {
        event.preventDefault()
        console.log(`Los datos del formulario: ${JSON.stringify(formData, null, 2)}`)
        ValidateForm()
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