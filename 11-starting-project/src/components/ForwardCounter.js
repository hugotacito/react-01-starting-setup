import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter((prevCounter) => prevCounter + 2);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
