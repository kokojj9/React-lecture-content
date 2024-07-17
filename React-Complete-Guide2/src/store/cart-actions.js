import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartDate = () => {
  return async (dispatch) => {
    const fetchDate = async () => {
      const response = await fetch(
        "https://react-http-6b4a6.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchDate();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          state: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        state: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-6b4a6.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          state: "success",
          title: "Success!",
          message: "sent cart data successfully!!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          state: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
