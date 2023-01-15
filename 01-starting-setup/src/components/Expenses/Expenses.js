import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
