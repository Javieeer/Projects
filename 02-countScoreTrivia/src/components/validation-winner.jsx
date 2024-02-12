/* Valida si hay ganador y si lo hay cambia el mensaje y los estilos que se muestran */
export function ValidationWinner({ winner, handleClickReset }) {
    if (winner == null) return null
    const winTitle = winner ? 'You are a legend' : 'Maybe de next time'
    const wintText = winner ? 'You get 5 points' : 'You lose 2 points'

    return (
    <div className={`window ${winner != null ? 'window-win' : ''}`}>
        <div className={`frame ${winner === true ? 'frame-winner' : 'frame-losser'}`}>
            <h1>{winTitle}</h1>
            <strong>{wintText}</strong>
            <button onClick={handleClickReset}>
                <strong>Try again</strong>
            </button>
        </div>
    </div>
    )
}