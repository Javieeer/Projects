import './app.css'

export default function App() {

    const dia = 'Domingo'

    const disponibilidad = {
        Lunes: true,
        Martes: false,
        Miercoles: true,
        Jueves: true,
        Viernes: false,
        Sabado: false,
        Domingo: true
    }

    function verificarDisponibilidad(dia) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (disponibilidad[dia]) {
                    resolve(true)
                } else {
                    reject(`Vuelo no disponible`)
                }
            }, 1000)
        })
    }

    function reservarVuelo(arg) {
        return new Promise((resolve, reject) => {
            if (arg) {
                resolve("Vuelo reservado exitosamente")
            } else {
                reject("Error al reservar vuelo")
            }
        })
    }

    function enviarCorreoConfirmacion() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Correo de confirmacion enviado`)
            }, 1000)
        })
    }

/*     const handleVerificarDisponibilidad = () => {
        verificarDisponibilidad(dia)
        .then(messaje => {
            console.log(messaje)
            reservarVuelo(messaje)
            .then(confirmation => {
                console.log(confirmation)
                enviarCorreoConfirmacion()
                .then(sendEmail => {
                    console.log(sendEmail)
                })
            })
        })
        .catch(error => {
            console.log(error)
        })
    } */

    const VerificarDisponibilidadBooks = async (dia) => {
        try {
            const messaje = await verificarDisponibilidad(dia)
            console.log(messaje)

            const confirmation = await reservarVuelo(messaje)
            console.log(confirmation)

            const sendEmail = await enviarCorreoConfirmacion()
            console.log(sendEmail)
        } catch(error) {
            console.log(error)
        }
    }

    const handleClick = () => {
        return VerificarDisponibilidadBooks(dia)
    }

    return (
        <main>
            <header>
                <h1>Book flights system</h1>
            </header>
            <section>
                <button onClick={handleClick}>Verificar disponibilidad de vuelos</button>
            </section>
        </main>
    )
}