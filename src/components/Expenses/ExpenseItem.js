import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = ({ title, amount, date }) => {
  const [titleState, setTitle] = useState(title);
  const clickHandler = () => {
    setTitle("Updated!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} key={date.toISOString()} />
      <div className="expense-item__description">
        <h2>{titleState}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
