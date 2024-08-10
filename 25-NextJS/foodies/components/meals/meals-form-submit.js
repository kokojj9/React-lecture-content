"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  //클라이언트 컴포넌트에서만 사용할 수 있고
  //기존 컴포넌트를 바꿀 계획이 없이 때문에 form제출 컴포넌트를 생성함

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
