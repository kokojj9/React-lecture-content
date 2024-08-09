import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";

import { shareMeal } from "@/lib/action";

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

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
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
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
