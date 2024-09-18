import Instagram from './componentes/instagram'

function App(){
    
    const userId = 'YOUR_USER_ID';
    const accessToken = 'YOUR_ACCESS_TOKEN';

    return(
        <>
            <h1>Previsualizador de Instagram</h1>
            <Instagram userId={userId} accessToken={accessToken} />
        </>
    )
}

export default App