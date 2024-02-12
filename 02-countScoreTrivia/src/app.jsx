import { useEffect, useState } from 'react';
import './app.css';
import confetti from 'canvas-confetti'
/* import { decodeHtml } from './logic/decode-html'; */
import { OptionsComponent } from './components/options-api';
import { ValidationWinner } from './components/validation-winner'
import { URL_RANDOM_QUESTION, valueOfGoodAnswer, valueOfBadAnswer } from './logic/constanst'
import { useGetRandomQuestion } from './logic/getRandomQuestion'

export function App() {

    /* USE STATES */
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null)
    const [winner, setWinner] = useState(null)

    /* CONSTANTES */
    const [randomQuestion, options, correctAnswer, fetchNewQuestion] = useGetRandomQuestion(URL_RANDOM_QUESTION)

    /* CONSTANTES DECLARATIVAS */
    const checkAnswer = () => {
        if (correctAnswer === selectedOption) {
            console.log('Perfecto, Tienes 5 puntos!')
                setScore(score+valueOfGoodAnswer)
                setWinner(true)
        } else {
            console.log('Maybe de next time, you loss 2 points')
            setScore(score-valueOfBadAnswer)
            setWinner(false)
        }
    }
    
    const handleOptionChange = ( event ) => {
        setSelectedOption(event.target.value)
    }

    const handleClickReset = () => {
        fetchNewQuestion()
        setWinner(null)
    }

    /* USE EFFECTS */
    useEffect(() => {
        setScore(0)
        setWinner(null)
    }, []);

    useEffect(() => {
        if (winner === true) {
            confetti()
        }
    }, [winner])

    return (
        <main>
            <section>
                <h1>Welcome to the trivia</h1>
                <form action="">
                    <p>{randomQuestion}</p>
                    <OptionsComponent
                        allOptions={options} 
                        onOptionChange={handleOptionChange}
                        selectedOption={selectedOption}
                    />
                </form>
                <div className="button">
                    <button onClick={handleClickReset}>Try other question</button>
                    <button onClick={checkAnswer}>Check Answer</button>
                </div>
                <div className="score">
                    <p>{`Your score is: ${score}`}</p>
                </div>
            </section>
            <ValidationWinner
                winner={winner}
                handleClickReset={handleClickReset}
            />
        </main>
    );
}
