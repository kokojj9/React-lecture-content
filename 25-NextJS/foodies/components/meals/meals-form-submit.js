"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  //클라이언트 컴포넌트에서만 사용할 수 있고
  //기존 컴포넌트를 바꿀 계획이 없이 때문에 form제출 컴포넌트를 생성함
  // 배포환경에서는 public 폴더에 접근하지않고 .next폴더의 정보를 사용하기 때문에
  // 그림파일이 보이지 않게됨 nextJs 공식문서 참조!
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
