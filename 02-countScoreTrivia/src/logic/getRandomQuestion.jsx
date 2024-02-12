import { useState, useEffect } from "react";
import { decodeHtml } from "./decode-html";

/* -----Realizamos la solicitud a la api para generar la trivia */
export const useGetRandomQuestion = (url) => {
    const [reload, setReload] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const [options, setOptions] = useState([]);
    const [randomQuestion, setRandomQuestion] = useState();
    
    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`API call failed with status ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.results && data.results.length > 0) {
                    const { question, correct_answer, incorrect_answers } = data.results[0];
                    const allOptions = [...incorrect_answers, correct_answer].sort();
                    const decodeOptions = allOptions.map(option => decodeHtml(option));

                    setRandomQuestion(decodeHtml(question));
                    setOptions(decodeOptions);
                    setCorrectAnswer(correct_answer)                

                    console.log(correct_answer)
                } else {
                    console.error('No results found in the API response');
                }
            })
            .catch(error => {
                console.error('Error fetching question:', error);
            });
    },[url, reload])

    const fetchNewQuestion = () => setReload(!reload)

    return [randomQuestion, options, correctAnswer, fetchNewQuestion]
}