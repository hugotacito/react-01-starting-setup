import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  const showCart = () => {
    props.onShowCart();
  };
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={showCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table full of delicious food" />
      </div>
    </>
  );
};
export default Header;
