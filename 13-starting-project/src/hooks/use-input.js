import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const reduce = (state, action) => {
  if (action.type === "INPUT") {
    return { ...state, value: action.value };
  }
  if (action.type === "BLUR") {
    return { ...state, isTouched: true };
  }
  return initialInputState;
};

const useInput = (validateValue) => {
  const [state, dispatch] = useReducer(reduce, initialInputState);

  const valueIsValid = validateValue(state.value);

  const hasError = !valueIsValid && state.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const valueBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const classes = !hasError ? "form-control" : "form-control invalid";

  return {
    value: state.value,
    valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
    classes,
  };
};
export default useInput;
