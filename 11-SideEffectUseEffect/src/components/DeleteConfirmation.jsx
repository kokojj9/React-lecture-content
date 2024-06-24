import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  // const [remainingTime, setRemainingTime] = useState(TIMER);

  // useEffect(() => {
    
  //   const interval = setInterval(() => {
  //     console.log('interval');
  //     setRemainingTime(prevTime => prevTime - 10);
  //   }, 10);

  //   return () => {
  //     clearInterval(interval);
  //   }
  // }, []);// setInterval이 끝날때 clear시키면서 빈배열로 다시 실행되지않게됨
  
  // 이렇게 Progress만 생성하는 컴포넌트를 생성해서 옮기게되면 모달 전체가 setInterval에 따라 재렌더링되는것이 아니라 
  // ProgressBar만 렌더링됨

  useEffect(() => {
    console.log('Timer Set');

    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    return () => {
      console.log('cleaning up timer');
      clearTimeout(timer);
    }
  }, [onConfirm]); // 함수를 종속성으로 추가할때에는 무한루프가 발생할 위험이 있음
  // 이 컴포넌트가 렌더링될때 마다 종속성에 넣은 함수내에 변화된 부분이 있다면 실행될 것임
  // 자바스크립트에서 함수는 객체이기 때문에 렌더링될때 새로운 함수로 인식하게됨
  // 현재 코드는 모달이 닫힐때 false로 set해주면서 chilren을 null로 바꿔주기 때문에 무한루프는 발생하지않지만 주의해야함!
  // 다른 Hook으로 이 현상을 방지할 수 있음(useCallback)

  
  
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
