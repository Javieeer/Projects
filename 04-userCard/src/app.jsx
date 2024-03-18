import './app.css'
import UserCard  from './components/usercard'

export default function App() {

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