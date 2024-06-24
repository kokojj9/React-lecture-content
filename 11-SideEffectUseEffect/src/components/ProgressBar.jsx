import { useState, useEffect } from "react";

export default function ProgressBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    
    const interval = setInterval(() => {
      console.log('interval');
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    }
  }, []);// state관리를 위해 프로그래스를 관리하는 컴포넌트로 옮김

      
    return <progress value={remainingTime} max={TIMER} />;

}