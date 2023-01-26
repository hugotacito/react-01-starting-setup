import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const ui = useSelector((state) => state.ui);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial || !cart || !cart.changed) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <>
      {ui.notification && (
        <Notification
          status={ui.notification.status}
          title={ui.notification.title}
          message={ui.notification.message}
        />
      )}
      <Layout>
        {ui.show && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
