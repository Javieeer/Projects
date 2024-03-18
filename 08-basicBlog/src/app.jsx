import { useEffect, useState } from 'react'
import './app.css'
import getUsers from './logic/users'
import { ShowUsers, UserDetails } from './components/users'

function App() {
    
    const [userData, setUserData] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)

    useEffect(() => {
        getUsers(setUserData)
    }, [])

    return (
        <main className='container'>
            <header>
                <h1>Basic Blog</h1>
            </header>
            <ShowUsers 
                userData={userData}
                setSelectedUser={setSelectedUser}
            />
            <UserDetails 
                selectedUser= {selectedUser}
                setSelectedUser= {setSelectedUser}
            />
        </main>
    )
}


export default App