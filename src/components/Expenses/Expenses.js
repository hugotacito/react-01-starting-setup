import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  const [selectedYear, setSelectedYear] = useState("2020");

  const filteredExpensesHandler = (year) => {
    console.log(year, "in Expenses");
    const filteredData = expenses.filter((element) => {
      return element.date.getFullYear().toString() === year;
    });
    setFilteredExpenses(filteredData);
    setSelectedYear(year);
    console.log(filteredData);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterExpenses={filteredExpensesHandler}
          selected={selectedYear}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem {...expense} key={expense.title} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
