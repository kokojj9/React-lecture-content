import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from '../util/validation.js';
import { useInput } from "../hooks/useInput.js";

export default function Login() {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [enteredPassword, setEnteredPassword] = useState('');
    // 객체 state 를 만들어 하나로 통합해도 상관 없음
    // const [enteredValues, setEnteredValues] = useState({
    //     email: '',
    //     password: ''
    // });

    // const [didEdit, setDidEdit] = useState({
    //     email: false,
    //     password: false
    // });
    // 커스텀 훅으로 옮김

    const {
        value: emailValue, 
        handleInputBlur: handleEmailBlur, 
        handleInputChange: handleEmailChange,
        hasError: emailHasError
    } = useInput('', value => isEmail(value) && isNotEmpty(value));

   const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordHasError
   } = useInput('', value => hasMinLength(value, 6))

    // const emailIsInvalid =
    //     didEdit.email &&
    //     !isEmail(enteredValues.email) &&
    //     !isNotEmpty;
    // 커스텀훅에서 작업하여 지워도됨

    // const passwordIsInvalid =
    //     didEdit.password &&
    //     !hasMinLength(enteredValues.password, 6);

    function handleSubmit(e) {
        e.preventDefault();

        if (emailHasError && passwordHasError) {
            return;
        }

        console.log(emailValue, passwordValue);
        // setEnteredValues({
        //     email: '',
        //     password: ''
        // }); // 폼 제출 후 초기화 방법
    }

    // function handleInputChange(identifier, value) {
    //     setEnteredValues(prevValues => ({
    //         ...prevValues,
    //         [identifier]: value
    //         // e.terget.value가 아니라 value 를 바로 넘겨주면 됨
    //         //여기서 [] 는 배열이 아니라 객체 속성값을 변수로 설정할 수 있는 내장 기능이다.
    //     }));
    //     setDidEdit(prevEdit => ({
    //         ...prevEdit,
    //         [identifier]: false
    //     }));
    // }

    // // onBlur 이벤트에 경우 포커스가 해제되면 작동함
    // function handleInputBlur(identifier) {
    //     setDidEdit(prevEdit => ({
    //         ...prevEdit,
    //         [identifier]: true
    //     }));
    // }
    // 커스텀훅으로 옮김



    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                    value={emailValue}
                    error={emailHasError && 'Please enter a valid email!'}
                />
                {/* <div className="control no-margin">
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
                */}

                <Input
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    onBlur={handlePasswordBlur}
                    onChange={handlePasswordChange}
                    value={passwordValue}
                    error={passwordHasError && 'Please enter a valid password!'}
                />
            </div>
            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button" onClick={handleSubmit}>Login</button>
            </p>
        </form>
    );
}
