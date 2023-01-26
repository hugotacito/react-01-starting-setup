import { CART_URL } from "../constants";
import { uiActions } from "./ui";
import { cartActions } from "./cart";

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        status: "loading",
        title: "LoadingCart...",
        message: "Cart is been loaded!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(CART_URL);
      if (!response.ok) {
        throw new Error("Loading cart failed!");
      }
      return await response.json();
    };

    try {
      const data = await sendRequest();
      dispatch(cartActions.load(data));
      dispatch(uiActions.setNotification(null));
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(CART_URL, {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });
      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    }
  };
};
