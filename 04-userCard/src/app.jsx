import { useState } from 'react'
import CryptoJS from 'crypto-js'
import './app.css'

export default function App() {
    
    const UserCard = ({ nombre, email, description } ) => {
        return (
            <section className="userCard">
                <section className="userCard-picture">
                    <img src={`https://unavatar.io/instagram/${nombre}`} alt="" />
                </section>
                <section className="userCard-details">
                    <h4 className="userCard-details-nombre">{nombre}</h4>
                    <p className="userCard-details-email">{email}</p>
                    <p className="userCard-details-description">{description}</p>
                </section>
            </section>
        )
    }

    return (
        <main>
            <h1>User Card</h1>
            <UserCard
                nombre='Javier'
                email='jaaviieruber@gmail.com'
                description='Hola mundo, soy Javier jejeje'
            />
            <UserCard
                nombre='Alejandro'
                email='zapatajavier34@gmail.com'
                description='Que se dice, que se hace. Que hay pa dañar'
            />
            <UserCard
                nombre='Tatiana'
                email='tatianamendoza@gmail.com'
                description='Lorem Ipsum Lorem Ipsum Ipsum Ipsum'
            />
        </main>
    )
}