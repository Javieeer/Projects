async function getUsers(setUserData) {
    try {
        const Uri = 'https://randomuser.me/api/?results=40'
        const response = await fetch(Uri)
        const data = await response.json()
        setUserData(data.results)
    }
    catch (e) {
        console.error('Se producjo un problema haciendo el fetch, ' (e))
    }
}   

export default getUsers