import { useSelector, useDispatch, connect } from "react-redux";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);// 여러개 리덕스를만들면서 병합했기 때문에 식별자를 나눠줘야함
  // 그리고 여러분이 useSelector를 사용할 때
  // react-redux는 이 컴포넌트를 위해 리덕스 저장소에
  // 자동으로 구독을 설정한다는 게 중요합니다
  // 그래서 여러분의 컴포넌트는
  // 리덕스 저장소에서 데이터가 변경될 때마다
  // 자동으로 업데이트되고 최신 카운터를 받게 되죠
  // 그럼 자동으로 반응하게 되고
  // 리덕스 저장소가 변경되면
  // 이 컴포넌트 함수가 재실행될 것입니다

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); 
    // { type: SOME_UNIQUE_IDENTIFIER, payload: 10} toolkit이 자동으로 만들어서 사용
    // payload는 toolkit에서 정한 속성명으로 개발자가 지정하는게 아님
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   // 클래스 기반 컴포넌트 요즘에는 안쓰지만 알아두긴 해야함
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
