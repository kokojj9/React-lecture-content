import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  // 객체 state 를 만들어 하나로 통합해도 상관 없음
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  const emailIsInvalid = 
    didEdit.email && !enteredValues.email.includes('@');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(enteredValues);
    setEnteredValues({
        email: '',
        password: ''
    }); // 폼 제출 후 초기화 방법
  }

  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
      // e.terget.value가 아니라 value 를 바로 넘겨주면 됨
      //여기서 [] 는 배열이 아니라 객체 속성값을 변수로 설정할 수 있는 내장 기능이다.
    }));
    setDidEdit(prevEdit => ({
        ...prevEdit,
        [identifier]: false
    }));
  }

  // onBlur 이벤트에 경우 포커스가 해제되면 작동함
  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
        ...prevEdit,
        [identifier]: true
    }));
  }



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
            onBlur={() => handleInputBlur('email')}
            onChange={e => handleInputChange('email', e.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            onChange={e => handleInputChange('password', e.target.value)}
            value={enteredValues.password}
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
