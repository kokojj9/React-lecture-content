import { useState } from 'react';
import QUESTIONS from '../questions.js';

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5); // Math.random() 에 -0.5를 하게되면 100개중 50개는 양수 50개는 음수가 나옴

    const handleSelectAnswer = selectedAnswer => {
        setUserAnswers(prevUserAnswers => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }

    return (
        <div id='quiz'>
            <div id='question'>
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {QUESTIONS[activeQuestionIndex].answers.map(answer => (
                        <li key={answer} className='answer'>
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}