"use client";

import { useFormStatus } from "react-dom";

import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";

import { shareMeal } from "@/lib/action";
import MealsFormSubmit from "@/components/meals/meals-form-submit";

export default function ShareMealPage() {
  // async function shareMeal(formData) {
  //   "use server";
  //   // server action이라는 것을 생성 이 함수가 오직 서버에서만 실행되게 함
  //   // 함수에서는 꼭 명시해줘야함 async를 붙혀야함
  //   // 클라이언트 컴포넌트라고 선언했다면 사용 불가
  //   const meal = {
  //     title: formData.get("title"),
  //     summary: formData.get("summary"),
  //     instructions: formData.get("instructions"),
  //     image: formData.get("image"),
  //     creator: formData.get("name"),
  //     creator_email: formData.get("email"),
  //   };

  //   console.log(meal);
  // }
  // action.js로 분리
  // 클라이언트 측에서 서버 요청 로직을 확인 할 수 있기 때문에 분리하여 관리하는것이 좋음 / 보안이슈!
  // 분리 하면 use client를 사용할 수 있음

  // const {pending} = useFormStatus(); //클라이언트 컴포넌트에서만 사용할 수 있음

  const [state, formAction] = useFormStatus(
    shareMeal,
    /*초기값*/ { message: null }
  );
  // useFormStatus 이름은 같지만 다른 작동방식을 가지고 있음

  // npm run build 를 통해 서버 배포 환경을 빌드하게 되면 
  // 리액트의 공격적인 캐싱과정에서 사전에 컴포넌트를 렌더링 해놓기 때문에
  // 사실상 동적 컴포넌트가 아니게 됨
  // 사이트에 처음방문하더라도 사전에 렌더링된 것을 보여주기 때문에 사용성이 좋아짐
  // 하지만 새로 추가된 데이터를 가져오지는 않기 때문에 단점이 있음
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          {/*
            리액트와 넥스트js가 지원하는 기능으로 action에는 요청 url이 들어가야하지만
            함수를 호출하며 form태그를 제어할 수 있게 됨 단, 서버측에서
          */}
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          {state.message && <p>{state.mesage}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
