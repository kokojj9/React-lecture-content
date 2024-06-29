import { useState } from "react";

import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from '../questions.js';


export default function Question({
    questionIndex, // key는 리액트에서 사용하는 고유 이름으로 다른이름으로 지정해줘야한다
    onSelectAnswer,
    onSkipAnswer
}) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    const handleSelectAnswer = answer => {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[questionIndex].answers[0] === answer ? true : false
            });


            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    }

    let answerState = '';

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return (
        <div id='question'>
            <QuestionTimer
                /*key={activeQuestionIndex}  key속성을 부여하면서 질문이 바뀌게되면 타이머도 같이 바뀌도록함 기억해두면 유용한 방법 컴포넌트를 나누면서 삭제함*/
                timeout={1000 * 10}
                onTimeout={onSkipAnswer}
            />
            <h2>{QUESTIONS[questionIndex].text}</h2>
            <Answers
                /*key={activeQuestionIndex}*/
                answers={QUESTIONS[questionIndex].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}