import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  let formContent = (
    <button onClick={startEditingHandler}>Add New Expense</button>
  );

  if (isEditing) {
    formContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onStopEditing={stopEditingHandler}
      />
    );
  }

  return <div className="new-expense">{formContent}</div>;
};

export default NewExpense;
