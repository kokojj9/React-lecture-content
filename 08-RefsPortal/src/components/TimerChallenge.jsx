import { useState, useRef } from "react";

// 바깥에서 선언했을 경우 모든 컴포넌트가 공유하게됨
// let timer;
// 참조를 사용하는게 해결방법
export default function TimerChallenge({title, targetTime}){
    const timer = useRef(); // 참조는 상태와 다르게 값을 잃지않음 그래서 컴포넌트가 재실행되지않음
    
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    // 상태가 바뀌면 컴포넌트가 재실행 -> 변수가 초기화되어서 Stop버튼이 작동안함
    // let timer;

    const handleStart = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
        
        setTimerStarted(true);
    }

    const handleStop = () => {
        clearTimeout(timer.current);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? "active" : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>

    );
}