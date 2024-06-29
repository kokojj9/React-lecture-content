import { useEffect, useState } from "react";


export default function QuestionTimer({timeout, onTimeout}) {
    
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('SETTING TIMEOUT');
        const timer = setTimeout(() => {
            onTimeout();
        }, timeout);    

        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);
    // timeout은 항상 1000 * 10으로 넘어오기때문에 재실행의 원인이 되지않지만 onTimeout은 함수가 넘어오는데 자바스크립트에서 함수는 객체이다
    // 화살표함수로 넘겨주었기 때문에 함수가 새로 생성되면 같은함수지만 다른 객체가 되어버려서 재평가가 되게된다.

    useEffect(() => {
        console.log('SETTING INTERVAL');
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100);
        // 무한루프롤 방지하기 위해서 useEffect사용 빈배열을 의존성으로 사용함

        return () => {
            clearInterval(interval);
        };
    }, []);
    
    

    return(
        <progress id="question-time" max={timeout} value={remainingTime}/>
    );
}