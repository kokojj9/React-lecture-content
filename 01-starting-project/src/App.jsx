import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CorConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

/*
  1)삼항연산자 사용법

  { !selectedTopic ?  (
    <p>Please select a topic.</p>
  ) : (
    <div id='tab-content'>
      <h3>{ EXAMPLES[selectedTopic].title }</h3>
      <p>{ EXAMPLES[selectedTopic].description }</p>
      <pre>
        <code>{ EXAMPLES[selectedTopic].code }</code>
      </pre>
    </div>
  )}

  2) AND연산자 사용법

  { !selectedTopic && (
    <p>Please select a topic.</p>
  )}
  { selectedTopic && (
    <div id='tab-content'>
      <h3>{ EXAMPLES[selectedTopic].title }</h3>
      <p>{ EXAMPLES[selectedTopic].description }</p>
      <pre>
        <code>{ EXAMPLES[selectedTopic].code }</code>
      </pre>
    </div>
  )}
  AND 연산자를 사용해도 앞의 내용이 true라면 뒷내용일 출려되기 때문에 같은 기능으로 동작함
  개발자는 모든 대안 방법을 알아야함!!! 모두 실무에서 사용되는 코드들임

  3) 변수로 만드는 방법도 대안 방법임

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic){
    tabContent = (
      <div id='tab-content'>
        <h3>{ EXAMPLES[selectedTopic].title }</h3>
        <p>{ EXAMPLES[selectedTopic].description }</p>
        <pre>
          <code>{ EXAMPLES[selectedTopic].code }</code>
        </pre>
      </div>
    );
  }

*/

/*
  <ul>
    {CORE_CONCEPTS.map(
      conceptItem => <CoreConcept key={conceptItem.title} {...conceptItem} />
    )}
  </ul>

  key 값을 꼭 넣어야함! 실행에 문제는 없지만 브라우저 관리자 창에는 오류가 떠있음
  conceptItem의 키값으로 무엇을 사용할 건지 지정해 주는것임

*/

export default App;
