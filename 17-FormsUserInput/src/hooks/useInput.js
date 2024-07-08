import { useState } from "react";

export function useInput(defaultValue, validationFn) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredValue);


    function handleInputChange(e) {
        setEnteredValue(e.target.value);
        setDidEdit(false);
    }

    // onBlur 이벤트에 경우 포커스가 해제되면 작동함
    function handleInputBlur() {
        setDidEdit(true);
    }

    return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
    };
}