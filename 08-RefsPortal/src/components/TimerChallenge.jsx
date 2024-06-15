import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// 바깥에서 선언했을 경우 모든 컴포넌트가 공유하게됨
// let timer;
// 참조를 사용하는게 해결방법
export default function TimerChallenge({title, targetTime}){
    const timer = useRef(); // 참조는 상태와 다르게 값을 잃지않음 그래서 컴포넌트가 재실행되지않음
    const dialog = useRef();

    // const [timerStarted, setTimerStarted] = useState(false);
    // const [timerExpired, setTimerExpired] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    // 상태가 바뀌면 컴포넌트가 재실행 -> 변수가 초기화되어서 Stop버튼이 작동안함
    // let timer;
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            // setTimerExpired(true);
            // dialog.current.open();
            // showModal은 dialog태그에서만 작동하는 메서드임 다른 태그로 바꾸면 작동안함 // 배경을 흐릿하게하고 모달만 강조하는 메서드임
            setTimeRemaining(prevTimeRemaing => prevTimeRemaing - 10);
        }, 10);
        
        // setTimerStarted(true);
    }

    const handleStop = () => {
        dialog.current.open();
        clearInterval(timer.current);
    }

    const handleReset = () => {
        setTimeRemaining(targetTime * 1000);
    }

    return (
        <>
        <ResultModal ref={dialog} targetTime={targetTime} result="lost" remainingTime={timeRemaining} onReset={handleReset} />
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? "active" : undefined}>
                {timerIsActive ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
        </>

    );
}