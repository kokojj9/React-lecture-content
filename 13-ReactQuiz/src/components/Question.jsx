import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";


export default function Question({ 
    questionText, 
    answers, 
    onSelectAnswer, 
    selectedAnswer, 
    answerState,
    onSkipAnswer
}) {
    return(
        <div id='question'>
            <QuestionTimer 
                /*key={activeQuestionIndex}  key속성을 부여하면서 질문이 바뀌게되면 타이머도 같이 바뀌도록함 기억해두면 유용한 방법 컴포넌트를 나누면서 삭제함*/
                timeout={1000 * 10} 
                onTimeout={onSkipAnswer}
            />
            <h2>{questionText}</h2>
            <Answers 
                /*key={activeQuestionIndex}*/
                answers={answers}
                selectedAnswer={selectedAnswer}
                answerState={answerState}
                onSelect={onSelectAnswer}
            />
        </div>
    );
}