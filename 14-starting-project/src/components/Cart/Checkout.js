import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";
import useHttp from "../../hooks/use-http";
import { ORDER_URL } from "../../constants";
import { useCallback, useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";

const isNotEmpty = (value) => value.trim() !== "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const cartCtx = useContext(CartContext);

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(isNotEmpty);

  const {
    value: street,
    isValid: streetIsValid,
    hasError: streetHasError,
    changeHandler: streetChangeHandler,
    blurHandler: streetBlurHandler,
    reset: streetReset,
  } = useInput(isNotEmpty);

  const {
    value: postal,
    isValid: postalIsValid,
    hasError: postalHasError,
    changeHandler: postalChangeHandler,
    blurHandler: postalBlurHandler,
    reset: postalReset,
  } = useInput(isFiveChars);

  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityHasError,
    changeHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
    reset: cityReset,
  } = useInput(isNotEmpty);

  const { error, data, isLoading, sendRequest } = useHttp();

  const formIsValid =
    nameIsValid && streetIsValid && postalIsValid && cityIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    sendRequest({
      url: ORDER_URL,
      method: "POST",
      body: {
        user: {
          name: name,
          street: street,
          postal: postal,
          city: city,
        },
        totalAmount: cartCtx.totalAmount,
        cartItems: cartCtx.items,
      },
    });
  };

  const { onConfirm } = props;

  const clearForm = useCallback(
    (message, confirmed) => {
      onConfirm(message, confirmed);
      cartCtx.reset();
      nameReset();
      streetReset();
      postalReset();
      cityReset();
    },
    [cartCtx, nameReset, streetReset, postalReset, cityReset, onConfirm]
  );

  useEffect(() => {
    if (error) clearForm(error, false);
    if (data) clearForm("Order filled.", true);
  }, [error, data, clearForm]);

  const nameClasses = !nameHasError
    ? classes.control
    : `${classes.control} ${classes.invalid}`;

  const streetClasses = !streetHasError
    ? classes.control
    : `${classes.control} ${classes.invalid}`;

  const postalClasses = !postalHasError
    ? classes.control
    : `${classes.control} ${classes.invalid}`;

  const cityClasses = !cityHasError
    ? classes.control
    : `${classes.control} ${classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p>Name should not be empty.</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetHasError && <p>Street should not be empty.</p>}
      </div>
      <div className={postalClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={postal}
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
        />
        {postalHasError && <p>Postal code should have exactly 5 characters.</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasError && <p>City should not be empty.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid || isLoading}>
          {isLoading && "Please Wait"}
          {!isLoading && "Confirm"}
        </button>
      </div>
    </form>
  );
};

export default Checkout;
