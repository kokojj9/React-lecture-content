import { useState } from "react";


export default function Signup() {

  const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target); 
    // 브라우저 내장 기능임! name속성이 꼭 있어야함
    // const enteredEmail = fd.get('email'); //name속성으로 접근 가능
    const acquisitionChannel = fd.getAll('acquisition'); //체크박스 가져오는 방법
    const data = Object.fromEntries(fd.entries()); // 이것도 브라우저 내장 기능
    data.acquistion = acquisitionChannel;
    console.log(data);

    // e.target.reset(); // reset버튼과 같은 작동 방식임
    // 참조값을 초기화 하는 방법 대신에 이쪽을 추천

    if(data.password !== data['confirm-password']){ 
      // confirm-password속성에 접근하기 위해서는 -가 있기 때문에 대괄호를 사용해야함
      setPasswordsAreNotEqual(true);

      return;
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
        {/* required 만으로 이메일 형식인지 까지 판단해줌 */}
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required minLength={6} />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
          />
          <div className="control-error">
            {passwordsAreNotEqual && <p>Passwords must match.</p>}
          </div>
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" required />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" required />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" required />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
