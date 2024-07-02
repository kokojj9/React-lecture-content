import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  const handleSetCount = newCount => {
    setChosenCount(newCount);
    setChosenCount(prevChosenCount =>  prevChosenCount + 1);
    // state 업데이트를 두번했는데 app 컴포넌트를 한번만 실행한 이유?
    // 리액트에서 여러 state 업데이트가 있을 때 다 같이 배칭되어 한 번의 컴포넌트 함 수 실행을 유도함!!
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        {/* 외부 컴포넌트에서 삽입할 수 있는 키값이 있을경우 useEffect말고 keyㅅ속성을 부여하는 것이 좋음 
        키 값이 바뀔 때마다
          ChosenCount state(상태) 값도 바뀝니다
          그러면 리액트는
          이전 컴포넌트 인스턴스(instance)는 삭제합니다
          지우고 재생성합니다
          마치 이 counter 컴포넌트를 처음
          랜더링하는 것처럼 말입니다
          그러므로 이건 괜찮은 방법이자
          정확히는 패턴이라고 말할 수 있습니다
          이 패턴은 외부에서 보이는 컴포넌트 내에서
          변경될 수 있는 state(상태)가 있는 경우 사용해야 합니다*/}
        <Counter  key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
