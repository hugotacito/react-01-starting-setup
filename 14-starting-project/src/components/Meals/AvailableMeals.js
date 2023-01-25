import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import useHttp from "../../hooks/use-http";
import { MEALS_URL } from "../../constants";
import { useCallback, useEffect, useMemo } from "react";

const AvailableMeals = () => {
  // const brokenURL =
  //   "https://react-complete-guide-9215c-default-rtdb.firebaseio.com/meals";
  const requestConfig = useMemo(() => {
    return {
      url: MEALS_URL,
    };
  }, []);
  const { data, error, isLoading, sendRequest } = useHttp();

  const loadData = useCallback(async () => {
    await sendRequest(requestConfig);
  }, [requestConfig, sendRequest]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Meals are loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.mealsError}>
        <p>{error}</p>
      </section>
    );
  }

  const mealsList =
    data &&
    Object.entries(data).map(([key, meal]) => (
      <MealItem
        key={key}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
