import { useRef, useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  // 객체 state 를 만들어 하나로 통합해도 상관 없음
  // const [enteredValues, setEnteredValues] = useState({
  //   email: '',
  //   password: ''
  // });
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(enteredValues);
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    // console.log(enteredEmail + enteredPassword);
    // email.current.value = ''; 
    // 참조방법일 경우 초기화 방법 추천 방법은 아니다 dom을 직접 조작하는 것이기 때문에

    const emailIsValid = !enteredEmail.includes('@');    
  
    if(!emailIsValid){
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);
    console.log('Sending HTTP request...');
  }

  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
      // e.terget.value가 아니라 value 를 바로 넘겨주면 됨
      //여기서 [] 는 배열이 아니라 객체 속성값을 변수로 설정할 수 있는 내장 기능이다.
    }));
  }

  // function handlePasswordChange(e){
  //   setEnteredValues(e.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={email}
            // onChange={e => handleInputChange('email', e.target.value)}
            // value={enteredValues.email}
          />
          <div className="control-error">
            {!emailIsInvalid && <p>Plaease enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            ref={password}
            // onChange={e => handleInputChange('password', e.target.value)}
            // value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
