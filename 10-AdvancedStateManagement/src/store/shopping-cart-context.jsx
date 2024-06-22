import { createContext } from 'react';

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {}, // 초기에 값들을 설정은 해줘야 새로 추가되어도 인식할 수 있음 강의에서는 이 함수를 나중에 추가했음
    updateItemQuantity: () => {}
}); //의도적으로 대문자로 상수변수를 사용했음 컴포넌트로 사용 할 것이기 때문에





