import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
    classes: nameClasses,
  } = useInput((name) => name.trim() !== "");

  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
    classes: emailClasses,
  } = useInput((email) => email.includes("@"));

  const formIsValid = nameIsValid && emailIsValid;

  const formSubmitionHandler = (event) => {
    event.preventDefault();
    console.log(name, email);
    if (!nameIsValid || !emailIsValid) return;
    nameReset();
    emailReset();
  };

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={name}
        />
        {nameHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailHasError && <p className="error-text">Email is not valid</p>}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
