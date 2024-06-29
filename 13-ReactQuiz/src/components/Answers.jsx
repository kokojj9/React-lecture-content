import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
    const shuffledAnswers = useRef();

    if(!shuffledAnswers.current){ //shuffledAnswers.current가 정의되어있는지 아닌지(undefind)
        // 답변을 섞어주는 오직은 위의 if조건문 뒤에 와야함 
        // if로 조건을 판단하기 전에 이미 섞어 주는 로직이 실행 되었기 때문에 
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5); // Math.random() 에 -0.5를 하게되면 100개중 50개는 양수 50개는 음수가 나옴
    }
   
    return (
        <ul id='answers'>
            {shuffledAnswers.current.map(answer => {
                const isSelected = selectedAnswer === answer;
                let cssClass = '';

                if(answerState === 'answered' && isSelected){
                    cssClass = 'selected';
                }
                if((answerState === 'correct' || answerState === 'wrong') && isSelected){
                    cssClass = answerState;
                }

                return (
                    <li key={answer} className='answer'>
                        <button 
                            onClick={() => onSelect(answer)} 
                            className={cssClass}
                            disabled={answerState !== ''}
                        >
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}