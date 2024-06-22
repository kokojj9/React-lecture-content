import { createContext, useReducer } from 'react';

import { DUMMY_PRODUCTS } from '../dummy-products';

export const CartContext = createContext({
    items: [],
    addItemToCart: () => { }, // 초기에 값들을 설정은 해줘야 새로 추가되어도 인식할 수 있음 강의에서는 이 함수를 나중에 추가했음
    updateItemQuantity: () => { }
}); //의도적으로 대문자로 상수변수를 사용했음 컴포넌트로 사용 할 것이기 때문에

function shoppingCartReducer(state, action) {
    if(action.type === 'ADD_ITEM'){
            const updatedItems = [...state.items];

            const existingCartItemIndex = updatedItems.findIndex(
                (cartItem) => cartItem.id === action.payload
            );
            const existingCartItem = updatedItems[existingCartItemIndex];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1,
                };
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
                updatedItems.push({
                    id: action.payload,
                    name: product.title,
                    price: product.price,
                    quantity: 1,
                });
            }

            return {
                ...state, // 복잡한 프로젝트일 경우 데이터를 잃지않도록 깊은 복사를 해주는게 좋다
                items: updatedItems,
            };
    }

    if(action.type === 'UPDATE_ITEM'){
        const updatedItems = [...state.items];
            const updatedItemIndex = updatedItems.findIndex(
                (item) => item.id === action.payload.productId
            );

            const updatedItem = {
                ...updatedItems[updatedItemIndex],
            };

            updatedItem.quantity += action.payload.amount;

            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }

            return {
                ...state,
                items: updatedItems,
            };
    }

    return state;
}

export default function CartContextProvider({ children }) {
    const [ shoppingCartState, shoppingCartDispatch ] =  useReducer(
        shoppingCartReducer, 
        {
            items: [],
        }
    );

    // const [shoppingCart, setShoppingCart] = useState({
    //     items: [],
    // }); useReducer로 관리되고있기 때문에 지워져도 된다

    function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type: 'ADD_ITEM',
            payload: id
        });
    }

    function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
            type: 'UPDATE_ITEM',
            payload: {
                // productId: productId,
                // amount: amount
                productId,
                amount // 순수 자바스크립트 기능으로 키값과 매개변수의 이름이 같다면 생략할 수 있다
            }
        })
    }

    const ctxValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity,
    };

    return (
        <CartContext.Provider value={ctxValue}>
            {children}
        </CartContext.Provider>
    );
}



