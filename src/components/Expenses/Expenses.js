import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterExpensesHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = expenses.filter((element) => {
    return element.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterExpensesHandler}
          selected={selectedYear}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
