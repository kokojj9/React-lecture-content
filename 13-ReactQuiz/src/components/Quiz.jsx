import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import QuestionTimer from './QuestionTimer.jsx';
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(selectedAnswer => {
        setUserAnswers(prevUserAnswers => {
            return [...prevUserAnswers, selectedAnswer];
        }, );
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete){
        return(
            <div id='summary'>
                <img src={quizCompleteImg} alt='Trophy icon'/>
                <h2>Quiz Completed!</h2>
            </div>
        );
    }

    // 답변을 섞어주는 오직은 위의 if조건문 뒤에 와야함 
    // if로 조건을 판단하기 전에 이미 섞어 주는 로직이 실행 되었기 때문에 
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5); // Math.random() 에 -0.5를 하게되면 100개중 50개는 양수 50개는 음수가 나옴

    return (
        <div id='quiz'>
            <div id='question'>
                <QuestionTimer 
                    timeout={1000 * 10} 
                    onTimeout={handleSkipAnswer}
                />
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